/*jshint esversion: 6 */
//同步城市数据交互
document.getElementById('user_login_in').addEventListener('click', function() {
    //打开登录面板
    document.getElementById('synchro_part').style.display = 'flex';
});

//关闭登录面板
function closeSynchro() {
    document.getElementById('synchro_part').style.display = 'none';
}

//上传城市
function uploadcity() {
    //判断是否已添加城市
    let city_json = JSON.parse(sessionStorage.getItem('wea_json'));
    if (city_json === null) {
        showToast('请先添加城市');
    } else {
        let cityData = city_json.map((item) => {
            return item.cityid;
        });

        //console.log(cityData);
        uploadcityServer(cityData);
    }
}

function uploadcityServer(_data) {
    showLoading();
    //取得登录后用户名
    //let _account = sessionStorage.getItem('user_account');
    let _account=getCookie('login_cookie');
    let uploadcity_api = 'https://www.blitheanon.com:3000/api/upload?';
    uploadcity_api += "account=" + _account + "&cityData=" + _data;
    fetch(uploadcity_api, {
        method: 'POST'
    }).then((response) => {
        return response.json();
    }).then((result) => {
        //取得响应结果
        //console.log(result);
        hideLoading();
        if (result.result == 'success') {
            showToast('上传成功');
        } else {
            showToast('上传失败');
        }
    });
}

//下载城市列表
function downloadcity() {
    showLoading();
    // let _account = sessionStorage.getItem('user_account');
    let _account = getCookie('login_cookie');
    let downloadcity_api = "https://www.blitheanon.com:3000/api/download?";
    downloadcity_api += "account=" + _account;
    fetch(downloadcity_api, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((result) => {
        //console.log(result);
        //判断同步是否成功
        hideLoading();
        if (result.result==='fail') {
            showToast('同步失败，请稍后重试');
            return;
        }
        //取得城市数组
        let cityArr = result.result.citylist.split(',');
        let city_json = JSON.parse(sessionStorage.getItem('wea_json'));
        //判断本地城市是否存在
        if (!city_json) {
            //本地为空，直接同步服务器城市
            cityArr.forEach((_id)=>{
                loadWeatherByID(_id);
            });
            //showToast('同步完成');
            return;
        }
        //生成数组
        let local_city_arr=city_json.map((item)=>{
            return item.cityid;
        });

        //双数组对比去重
        cityArr = cityArr.filter(function(val) {
            return local_city_arr.indexOf(val) == -1;
        });
        // console.log('处理后');
        // console.log(cityArr);
        //遍历城市id，请求天气数据，载入进dom
        if (cityArr.length===0) {
            showToast('已存在所有数据');
        }else{
            cityArr.forEach((_id)=>{
                loadWeatherByID(_id);
            });
            //showToast('同步完成');
        }
    });
}
