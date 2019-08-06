//同步城市数据交互
document.getElementById('user_login_in').addEventListener('click', function() {
    //打开登录面板
    document.getElementById('synchro_part').style.display='flex';
});

//关闭登录面板
function closeSynchro() {
    document.getElementById('synchro_part').style.display='none';
}
