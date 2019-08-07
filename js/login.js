/*jshint esversion: 6 */
let user_not_login = document.getElementById('user_not_login');
user_not_login.addEventListener('click', function() {
    //打开登录面板
    document.getElementById('login_part').style.display = 'flex';
});

//关闭登录面板
function closeLogin() {
    document.getElementById('login_part').style.display = 'none';
}

// 点击跳转到注册状态
document.getElementById('to_register').addEventListener('click', function() {
    //隐藏登录按钮
    document.getElementById('login').style.display = 'none';
    //显示注册按钮
    document.getElementById('register').style.display = 'inline';
    //显示确认密码输入框
    document.getElementById('pw2Container').style.display = 'inline';
    this.style.display = 'none';

    document.getElementById('to_login').style.display = 'inline';
});

// 点击跳转到登录状态
document.getElementById('to_login').addEventListener('click', function() {
    //显示登录按钮
    document.getElementById('login').style.display = 'inline';
    //隐藏注册按钮
    document.getElementById('register').style.display = 'none';
    //隐藏确认密码输入框
    document.getElementById('pw2Container').style.display = 'none';
    this.style.display = 'none';

    document.getElementById('to_register').style.display = 'inline';
});

let register = document.getElementById('register');
register.addEventListener('click', function() {
    //注册
    //取得账号密码
    let id = document.getElementById('id').value;
    let pw1 = document.getElementById('pw1').value;
    let pw2 = document.getElementById('pw2').value;
    if (checkPW(pw1, pw2)) {
        //保存用户到服务器
        let api = "https://www.blitheanon.com:3000/api/register?";
        api += "account=" + id + "&" + "password=" + pw2;
        fetch(api, {
            method: 'POST'
        }).then((response) => {
            return response.json();
        }).then((myjson) => {
            //判断是否注册成功
            if (myjson.result === 'already_exist') {
                alert('当前用户名已被使用');
            } else if (myjson.result === 'success') {
                alert('注册成功');
            } else {
                alert('未知错误');
            }

        });

    } else {
        alert('两次密码输入不一致');
    }
});

let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    //点击登录
    //取得账号密码
    let id = document.getElementById('id').value;
    let pw = document.getElementById('pw1').value;

    //保存用户到服务器
    let api = "https://www.blitheanon.com:3000/api/login?";
    api += "account=" + id + "&password=" + pw;
    fetch(api, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((myjson) => {
        // console.log(myjson);
        if (myjson.result === 'success') {
            //存储用户信息
            //sessionStorage.setItem('user_account', id);
            //设置cookie保存登录信息,7天失效
            alert("登录成功");
            setCookie('login_cookie',id,7);

            //登陆成功关闭界面
            document.getElementById('login_part').style.display = 'none';
            //切换图标
            document.getElementById('user_not_login').style.display = 'none';
            document.getElementById('user_login_in').style.display = 'inline';
        } else {
            alert('用户名或密码出错');
        }
        //alert(myjson.user.accout+myjson.user.password);
    });
});

//验证两次密码输入是否一致
function checkPW(_pw1, _pw2) {
    if (_pw1 === _pw2) {
        return true;
    } else {
        return false;
    }
}
