window.onload = function () {
    // \d 是 0-9
    var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号
    var regqq = /^[1-9]\d{4,9}$/; //qq号
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //昵称
    var regmsg = /^\d{6}$/; //短信验证码
    var regpsw = /\d{6,16}/; //密码
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#QQ');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var psw = document.querySelector('#psw');
    var surepsw = document.querySelector('#surepsw')
    regexp(tel, regtel); //手机号码
    regexp(qq, regqq); //QQ号
    regexp(nc, regnc); //昵称
    regexp(msg, regmsg); //短信验证码
    regexp(psw, regpsw); //密码
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 格式输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请重新输入';
            }
        }
    };
    // 确认密码
    surepsw.onblur = function () {
        if (this.value == psw.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码不一致，请重新输入';
        }
    }
}