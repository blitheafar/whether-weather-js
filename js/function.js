//清除输入
function removeIput() {
    document.getElementsByTagName('input')[0].value = '';
}

//jsonp方式通过客户端ip取得本地天气
function loadWeatherByIP(_ip) {
    let script = document.createElement("script");
    script.src = 'https://www.tianqiapi.com/api?' + 'version=v6&ip=' + _ip + '&callback=initNowWeather';
    document.body.insertBefore(script, document.body.firstChild);
}

function searchCity(_input) {
    //按输入匹配json内城市
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
        if (checkCityExit(resultCity[0].id)) {
            alert('城市已添加');
        } else {
            //alert(resultCity[0].id + resultCity[0].cityEn);
            loadWeatherByID(resultCity[0].id);
        }
    }
}

function checkCityExit(_id) {
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

//jsonp方式通过地区id取得天气
function loadWeatherByID(_id) {
    let script = document.createElement("script");
    script.src = 'https://www.tianqiapi.com/api?' + 'version=v6&cityid=' + _id + '&callback=addNewCity';
    document.body.insertBefore(script, document.body.firstChild);
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

//刷新页面后载入sessionStorage保存数据
function pageReload() {
    let _data = JSON.parse(sessionStorage.getItem('wea_json'));
    if (_data) {
        for (let i = 0; i < _data.length; i++) {
            let footer = document.getElementsByTagName('footer')[0];
            let node=createCityNode(_data[i]);
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
    node.innerHTML = '<i class="wi ' + wea_logo + '"></i><div><span>' + _singleCity.city + '</span><span>/</span><span>' + _singleCity.wea + '</span></div><div>' + _singleCity.tem + '°C</div>';
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
