/*jshint esversion: 6 */
//同步城市数据交互
document.getElementById('user_login_in').addEventListener('click', function() {
    //打开登录面板
    document.getElementById('synchro_part').style.display='flex';
});

//关闭登录面板
function closeSynchro() {
    document.getElementById('synchro_part').style.display='none';
}

//上传城市
function uploadcity() {
    //判断是否已添加城市
    let city_json = JSON.parse(sessionStorage.getItem('wea_json'));
    if (city_json===null) {
        alert('请先添加城市');
    }else{
        let cityData=city_json.map((item)=>{
            return item.cityid;
        });

        //console.log(cityData);
        uploadcityServer(cityData);
    }
}

function uploadcityServer(_data) {
    //取得登录后用户名
    let _account=sessionStorage.getItem('user_account');
    let uploadcity_api='http://www.blitheanon.com:3000/api/upload?';
    uploadcity_api+="account="+_account+"&cityData="+_data;
    fetch(uploadcity_api,{
        method: 'POST'
    }).then((response)=>{
        return response.json();
    }).then((result)=>{
        //取得响应结果
        console.log(result);
        if (result.result=='success') {
            alert('上传成功');
        }else{
            alert('上传失败');
        }
    });
}
