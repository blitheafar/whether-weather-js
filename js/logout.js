//退出登录
function logout() {
    //清除登录信息
    //sessionStorage.removeItem('user_account');
    //删除cookie
    clearCookie('login_cookie');
    // 隐藏登录图标，界面
    document.getElementById('synchro_part').style.display='none';
    //切换图标
    document.getElementById('user_not_login').style.display='inline';
    document.getElementById('user_login_in').style.display='none';
}
