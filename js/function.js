//清除输入
function removeIput() {
    document.getElementsByTagName('input')[0].value = '';
}

//jsonp方式通过客户端ip取得实况天气
function loadTodayWeatherByIP(_ip) {
    removeScript();
    let script = document.createElement("script");
    script.src = 'https://www.tianqiapi.com/api?' + 'version=v6&ip=' + _ip + '&callback=initNowWeather';
    document.getElementById('jsonp-area').appendChild(script);
}

//jsonp方式通过客户端ip取得七天天气
function loadWeekWeatherByIP(_ip) {
    removeScript();
    let script = document.createElement("script");
    script.src = 'https://www.tianqiapi.com/api?' + 'version=v1&ip=' + _ip + '&callback=initWeekWeather';
    document.getElementById('jsonp-area').appendChild(script);
}

//按输入匹配json内城市
function searchCity(_input) {
    var citydata = JSON.parse(city);
    let resultCity = citydata.filter((item) => {
        if (item.cityZh == _input) {
            return item;
        }
    })
    if (resultCity.length == 0) {
        alert("查找城市不存在");
    } else {
        //检查城市是否已添加
        if (checkCityExist(resultCity[0].id)) {
            alert('城市已添加');
        } else {
            //alert(resultCity[0].id + resultCity[0].cityEn);
            loadWeatherByID(resultCity[0].id);
        }
    }
}

//检查城市是否存在
function checkCityExist(_id) {
    let city_json = JSON.parse(sessionStorage.getItem('wea_json'));
    if (city_json) {
        let checkResult = city_json.filter((item) => {
            return item.cityid == _id;
        })
        return checkResult.length == 1;
    } else {
        return false;
    }
}

//移除冗余jsonp动态添加的script标签
function removeScript() {
    document.getElementById('jsonp-area').innerHTML='';
}

//jsonp方式通过地区id取得天气
function loadWeatherByID(_id) {
    removeScript();
    let script = document.createElement("script");
    script.src = 'https://www.tianqiapi.com/api?' + 'version=v6&cityid=' + _id + '&callback=addNewCity';
    document.getElementById('jsonp-area').appendChild(script);
}

//jsonp方式通过地区id取得一周天气
function loadWeekWeatherByID(_id) {
    removeScript();
    let script = document.createElement("script");
    script.src = 'https://www.tianqiapi.com/api?' + 'version=v1&cityid=' + _id + '&callback=initWeekWeather';
    document.getElementById('jsonp-area').appendChild(script);
}

//生成当前天气
function initNowWeather(response) {
    //console.log(response);
    //填充数据
    //1.now_city，当前地区
    //2.update_time，更新时间
    //3.now_tem，当前温度
    //4.now_wea，当前天气情况
    //5.now_win，当前风级
    //6.now_air，当前空气指数
    //7.now_air_level，当前空气描述
    //8.now_today_wea，今日天气
    //9.now_low_tem，今日最低气温
    //10.now_high_tem，今日最高气温
    //console.log(response.city);
    document.getElementById('now_city').innerText = response.city;
    document.getElementById('update_time').innerText = response.update_time;
    document.getElementById('now_tem').innerText = response.tem;
    document.getElementById('now_wea').innerText = response.wea;
    document.getElementById('now_win').innerText = response.win + response.win_speed;
    let className = airMatch(response.air_level);
    //设置空气质量背景色
    document.getElementById('now_air_container').className = className;
    document.getElementById('now_air').innerText = response.air;
    document.getElementById('now_air_level').innerText = response.air_level;
    document.getElementById('now_today_wea').innerText = response.wea;
    document.getElementById('now_low_tem').innerText = response.tem2;
    document.getElementById('now_high_tem').innerText = response.tem1;
}

//生成一周天气数据
function initWeekWeather(response) {
    //console.log(response);
    //生成wea_img数组，
    let logo_arr = response.data.map((item) => {
        return item.wea_img;
    })

    //生成温度数组，
    let high_tem_arr = response.data.map((item) => {
        return parseInt(item.tem1.slice(0, -1));
    })
    let low_tem_arr = response.data.map((item) => {
        return parseInt(item.tem2.slice(0, -1));
    })

    //生成风况数组
    let win_arr = response.data.map((item) => {
        let wind = item.win_speed;
        if (wind.indexOf('转') != -1) {
            wind = wind.split('转')[1];
        }
        //console.log(wind);
        return '风' + wind;
    })

    //生成空气质量数组
    let air_arr = response.data.map((item) => {
        return item.air_level;
    })

    //计算yAxis中min,max
    let lowest_tem = Math.min.apply(null, low_tem_arr);
    let highest_tem = Math.max.apply(null, high_tem_arr);
    let gap = highest_tem - lowest_tem;
    let _min = lowest_tem - (gap * 2);
    let _max = highest_tem + (gap * 3);

    createWeekEchart(logo_arr, high_tem_arr, low_tem_arr, win_arr, air_arr, _min, _max);
}

//刷新页面后载入sessionStorage保存数据
function pageReload() {
    let _data = JSON.parse(sessionStorage.getItem('wea_json'));
    if (_data) {
        for (let i = 0; i < _data.length; i++) {
            let footer = document.getElementsByTagName('footer')[0];
            let node = createCityNode(_data[i]);
            footer.appendChild(node);
        }
    }
}

function createCityNode(_singleCity) {
    //取得数据
    //1.new_city，新增地区
    //2.city_tem，地区温度
    let node = document.createElement('div');
    node.setAttribute('class', 'square');
    //自定义属性传入cityid
    node.setAttribute("cityid", _singleCity.cityid);
    //匹配天气图标
    let wea_logo = logoMatch(_singleCity.wea_img);
    node.innerHTML = '<img class="' + wea_logo + '" alt="' + wea_logo + '"><div><span>' + _singleCity.city + '</span><span>/</span><span>' + _singleCity.wea + '</span></div><div>' + _singleCity.tem + '°C</div>';
    //给底部城市列表添加点击事件
    node.addEventListener('click', function(event) {
        //清除其他城市选中效果
        clearClick();
        //设置选中效果
        this.classList.add('cityLight');
        //取得cityid
        let cityid = this.getAttribute('cityid');
        //取得已保存的匹配天气数据
        let wea_json = sessionStorage.getItem('wea_json');
        //匹配当前城市
        let now_city = JSON.parse(wea_json).filter((item) => {
            return item.cityid == cityid;
        })
        initNowWeather(now_city[0]);
        //载入一周天气
        loadWeekWeatherByID(cityid);
    });
    return node;
}

//清除其他城市选中效果方法
function clearClick() {
    let cityList = document.getElementsByClassName('square');
    for (item of cityList) {
        item.classList.remove('cityLight');
    }
}

//输入后，新增天气
function addNewCity(response) {
    //保存response
    let wea_json = sessionStorage.getItem('wea_json');
    if (!wea_json) {
        //console.log('null');
        let new_wea_json = JSON.stringify([response]);
        sessionStorage.setItem('wea_json', new_wea_json);
    } else {
        //console.log('new json');
        //判断城市是否已存在
        let wea_json_object = JSON.parse(wea_json);
        wea_json_object.push(response);
        sessionStorage.setItem('wea_json', JSON.stringify(wea_json_object));
    }
    var footer = document.getElementsByTagName('footer')[0];
    //取得数据
    let node = createCityNode(response);
    footer.appendChild(node);
}

//取得当前星期
function getWeekArray() {
    let result = [];
    let weeks = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    let now = new Date();
    let index = now.getDay();
    //判断index值
    //index为0,
    if (index == 0) {
        result = ['今天', '明天(周一)', '周二', '周三', '周四', '周五', '周六'];
    } else {
        for (let i = index; i < weeks.length; i++) {
            result.push(weeks[i]);
        }

        for (let j = 0; j < index; j++) {
            result.push(weeks[j]);
        }
        //替换数组前两个值
        result[0] = '今天';
        let temp = '明天(' + result[1] + ')';
        result[1] = temp;
    }
    return result;
}

//取得一周日期
function get7Day() {
    let result = [];
    for (let i = 0; i < 7; i++) {
        let today = new Date();
        let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * i;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        let tMonth = today.getMonth() + 1;
        let tDate = today.getDate();
        if (tMonth < 10) {
            tMonth = '0' + tMonth;
        }

        if (tDate < 10) {
            tDate = '0' + tDate;
        }
        result.push(tMonth + "/" + tDate);
    }
    return result;
}
