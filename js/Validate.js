function Validation () {
    //Kiểm tra inout có rỗng không
    this.CheckEmty = (value) => {
        if(value === '') {
            return true;
        }
        else {
            return false;
        }
    }
    //Kiểm tra id có từ 4 đến 6 ký tự
    this.CheckID = (id) => {
        let length = id.length;
        if(length >=4 && length <= 6) {
            return true;
        }
        else {
            return false;
        }
    }
    //Kiểm tra tên chỉ có chữ không có số
    this.CheckName = (name) => {
        let format = /^[a-zA-Z]+$/;
        let result = name.match(format);
        if(result) {
            return true;
        }
        else {
            return false;
        }
    }
    //kiểm tra định dạng email
    this.CheckEmail = (email) => {
        let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let result = format.test(email);
        if(result) {
            return true;
        }
        else {
            return false;
        }
    }
    //Kiểm tra mật khẩu có 6 - 10 ký tự có 1 hoa 1 đặc biệt 1 số
    this.CheckPassword = (password) => {
        let format = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)/;
        let result = format.test(password);
        if(result && (password.length >= 6 && password.length <=10)) {
            return true;
        }
        else {
            return false;
        }
    }
    //Kiểm tra lương cơ bản
    this.CheckSalary = (salary) => {
        if(salary === '') {
            return false;
        }
        if(Number(salary) >= 1000000 && Number(salary) <= 20000000){
            return true;
        }
        else{
            return false;
        }
    }
    this.CheckPostion = (position) => {
        if(position === '') {
            return false;
        }
        else {
            return true;
        }
    }
    //Kiểm tra thời gia làm
    this.CheckWorkTime = (time) => {
        if(time >= 80 && time <=200) {
            return true;
        }
        else{
            return false;
        }
    }
    //Check định dạng mm//dd/yyyy
    this.CheckValidateDay = (date) => {
        let format =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
        if(format.test(date)) {
            return true;
        }
        else {
            return false;
        }
    }
}