//Hàm gọi id
function getEle (id) {
    return document.getElementById(id)
}
//Bổ sung thuộc tính
Staff.prototype.start_date = '';
Staff.prototype.basic_salary = '';
Staff.prototype.postition = '';
Staff.prototype.work_time = '';
Staff.prototype.staff_type = '';
Staff.prototype.staff_total = 0;
let warnings = document.querySelectorAll('.sp-thongbao')
//bo sung phuong thuc
Staff.prototype.CalcSalary = function () {
    switch(this.postition) {
        case '':
            return (this.basic_salary)
        case 'Sếp':
            return (this.basic_salary *3)
        case 'Trưởng phòng':
            return (this.basic_salary *2)
        case 'Nhân viên':
            return (this.basic_salary *1)
    }
}
Staff.prototype.Ranking = function () {
   let time = this.work_time;
   if(time >= 192) {
        return 'NV xuất sắc';
    }
    else if(time < 192 && time >= 176) {
        return 'NV Giỏi';
    }
    else if(time < 176 && time >= 160) {
        return 'NV Khá';
    }
    else {
        return 'NV trung bình';
    }
}
getEle('btnThem').onclick = () => {
    getEle('tknv').disabled = false;
};
//khai bao validate
let validate = new Validation ();
//mảng staff
let staff_list = new StaffList ();
//Mảng staff all
let all_staff = new StaffList ();
getData ();
//Click thêm nhân viên
getEle('btnThemNV').onclick = function () {
    let user_id = getEle('tknv').value;
    let user_name = getEle('name').value;
    let user_email = getEle('email').value;
    let user_password = getEle('password').value;
    let user_date = getEle('datepicker').value;
    let user_salary = getEle('luongCB').value;
    let user_position = getEle('chucvu').value;
    let user_work_time = getEle('gioLam').value;
    let staff = new Staff(user_id,user_name,user_email,user_password);
    staff.start_date = user_date;
    staff.basic_salary = user_salary;
    staff.postition = user_position;
    staff.work_time = user_work_time;
    let error = 0;
    //check validate id
    if(validate.CheckID(user_id) && CheckAvailibleID(user_id) === true) {
        document.getElementById('tbTKNV').innerHTML = 'Correct';
        document.getElementById('tbTKNV').style.color = 'green';
        document.getElementById('tbTKNV').style.display = 'block';
        error = 0;
    }
    else if(validate.CheckID(user_id) && CheckAvailibleID(user_id) === false) {
        document.getElementById('tbTKNV').innerHTML = 'ID đã tồn tại';
        document.getElementById('tbTKNV').style.color = 'red';
        document.getElementById('tbTKNV').style.display = 'block';
        error++;
    }
    else {
        document.getElementById('tbTKNV').innerHTML = 'ID phải dài từ 4 đến 6 ký tự';
        document.getElementById('tbTKNV').style.color = 'red';
        document.getElementById('tbTKNV').style.display = 'block';
        error++;
    }
    //Validate name
    if(validate.CheckName(user_name)) {
        document.getElementById('tbTen').innerHTML = 'Correct';
        document.getElementById('tbTen').style.color = 'green';
        document.getElementById('tbTen').style.display = 'block';
    }
    else {
        document.getElementById('tbTen').innerHTML = 'Tên phải là chữ';
        document.getElementById('tbTen').style.color = 'red';
        document.getElementById('tbTen').style.display = 'block';
        error++;
    }
    //Validate name
    if(validate.CheckEmail(user_email)) {
        document.getElementById('tbEmail').innerHTML = 'Correct';
        document.getElementById('tbEmail').style.color = 'green';
        document.getElementById('tbEmail').style.display = 'block';
    }
    else {
        document.getElementById('tbEmail').innerHTML = 'Email chưa đúng định dạng';
        document.getElementById('tbEmail').style.color = 'red';
        document.getElementById('tbEmail').style.display = 'block';
        error++;
    }
    //Validate pass
    if(validate.CheckPassword(user_password)) {
        document.getElementById('tbMatKhau').innerHTML = 'Correct';
        document.getElementById('tbMatKhau').style.color = 'green';
        document.getElementById('tbMatKhau').style.display = 'block';
    }
    else {
        document.getElementById('tbMatKhau').innerHTML = 'Mật khẩu phải từ 6-10 ký tự bao gồm 1 ký tự số,1 ký tự in hoa và 1 ký tự đặc biệt';
        document.getElementById('tbMatKhau').style.color = 'red';
        document.getElementById('tbMatKhau').style.display = 'block';
        error++;
    }
    //Check thời gian làm
    if(validate.CheckValidateDay(user_date)) {
        document.getElementById('tbNgay').innerHTML = 'Correct';
        document.getElementById('tbNgay').style.color = 'green';
        document.getElementById('tbNgay').style.display = 'block';
    }
    else {
        document.getElementById('tbNgay').innerHTML = 'Ngày làm việc phải theo định dạng mm/dd/yyyy';
        document.getElementById('tbNgay').style.color = 'red';
        document.getElementById('tbNgay').style.display = 'block';
        error++;
    }
    //Check lương
    if(validate.CheckSalary(user_salary)) {
        document.getElementById('tbLuongCB').innerHTML = 'Correct';
        document.getElementById('tbLuongCB').style.color = 'green';
        document.getElementById('tbLuongCB').style.display = 'block';
    }
    else {
        document.getElementById('tbLuongCB').innerHTML = 'Mức lương tối thiểu 1.000.000 đến 20.000.000 VNĐ';
        document.getElementById('tbLuongCB').style.color = 'red';
        document.getElementById('tbLuongCB').style.display = 'block';
        error++;
    }
    //Check chức vụ
    if(validate.CheckPostion(user_position)) {
        document.getElementById('tbChucVu').innerHTML = 'Correct';
        document.getElementById('tbChucVu').style.color = 'green';
        document.getElementById('tbChucVu').style.display = 'block';
    }
    else {
        document.getElementById('tbChucVu').innerHTML = 'Chọn chức vụ phù hợp';
        document.getElementById('tbChucVu').style.color = 'red';
        document.getElementById('tbChucVu').style.display = 'block';
        error++;
    }
    //Check thời gian làm
    if(validate.CheckWorkTime(user_work_time)) {
        document.getElementById('tbGiolam').innerHTML = 'Correct';
        document.getElementById('tbGiolam').style.color = 'green';
        document.getElementById('tbGiolam').style.display = 'block';
    }
    else {
        document.getElementById('tbGiolam').innerHTML = 'Giờ làm tối thiểu là 80h và tối đa là 200h 1 tháng';
        document.getElementById('tbGiolam').style.color = 'red';
        document.getElementById('tbGiolam').style.display = 'block';
        error++;
    }
    if(error != 0) {
        return;
    }
    staff.staff_total = staff.CalcSalary();
    staff.staff_type = staff.Ranking();
    staff_list.AddNewStaff(staff);
    all_staff.AddNewStaff(staff)
    saveData () 
    renderStaffList ((staff_list.LIST))
    reset ()
}
//Reset input 
function reset () {
    getEle('tknv').value = '';
    getEle('name').value = '';
    getEle('email').value = '';
    getEle('password').value = '';
    getEle('datepicker').value = '';
    getEle('luongCB').value = '';
    getEle('chucvu').value = '';
    getEle('gioLam').value = '';
    warnings.forEach((warning) => {
        warning.style.display = 'none';
    })
}
//Render ra nhân viên vừa nhập
function renderStaffList (list) {
    let table = getEle('tableDanhSach');
    table.innerHTML = '';
    list.forEach((staff,index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${staff.staff_id}</td>
        <td>${staff.staff_name}</td>
        <td>${staff.staff_email}</td>
        <td>${staff.start_date}</td>
        <td>${staff.postition}</td>
        <td>${staff.staff_total}</td>
        <td>${staff.staff_type}</td>
        <td>
            <button class="btn edit_btn" onclick ="getEditStaff(${index})">Edit</button>
            <button class="btn deleted_btn" onclick ="deletedStaff(${index})">Xóa</button>
        </td>
        `
        table.appendChild(tr);
    });
}
//Xóa nhân viên
function deletedStaff (index)  {
    if(confirm('Bạn chắc chắn muốn xóa nhân viên này chứ ?')) {
        let new_list = staff_list.DeleteStaff(index);
        let new_all_list = all_staff.DeleteStaff(index);
        saveData();
        renderStaffList(new_list)
    }
    return;
}

//Tìm kiếm nhân viên 
getEle('searchName').oninput = (e) => {
    let keyword = e.target.value;
    let finding_list =  all_staff.FindStaff(keyword);
    renderStaffList((finding_list.LIST));
}

//Lấy thông tin nhân viên cần cập nhật
function getEditStaff (index) {
    let staff = all_staff.GetStaff(index)
    getEle('tknv').value = staff.staff_id;
    getEle('name').value = staff.staff_name;
    getEle('email').value = staff.staff_email;
    getEle('password').value = staff.staff_password;
    getEle('datepicker').value = staff.start_date;
    getEle('luongCB').value = staff.basic_salary;
    getEle('chucvu').value = staff.postition;
    getEle('gioLam').value = staff.work_time;
    getEle('btnThem').click();
    getEle('tknv').disabled = true;
}
//Cap nhat danh sach sau khi sua va render
function updateStaff () {
    let user_id = getEle('tknv').value;
    let user_name = getEle('name').value;
    let user_email = getEle('email').value;
    let user_password = getEle('password').value;
    let user_date = getEle('datepicker').value;
    let user_salary = getEle('luongCB').value;
    let user_position = getEle('chucvu').value;
    let user_work_time = getEle('gioLam').value;
    let staff = new Staff(user_id,user_name,user_email,user_password);
    staff.start_date = user_date;
    staff.basic_salary = user_salary;
    staff.postition = user_position;
    staff.work_time = user_work_time;
    staff.staff_total = staff.CalcSalary();
    staff.staff_type = staff.Ranking();
    let error = 0;
    // //check validate id
    // if(validate.CheckID(user_id) && CheckAvailibleID(user_id) === true) {
    //     document.getElementById('tbTKNV').innerHTML = 'Correct';
    //     document.getElementById('tbTKNV').style.color = 'green';
    //     document.getElementById('tbTKNV').style.display = 'block';
    //     error = 0;
    // }
    // else if(validate.CheckID(user_id) && CheckAvailibleID(user_id) === false) {
    //     document.getElementById('tbTKNV').innerHTML = 'ID đã tồn tại';
    //     document.getElementById('tbTKNV').style.color = 'red';
    //     document.getElementById('tbTKNV').style.display = 'block';
    //     error++;
    // }
    // else {
    //     document.getElementById('tbTKNV').innerHTML = 'ID phải dài từ 4 đến 6 ký tự';
    //     document.getElementById('tbTKNV').style.color = 'red';
    //     document.getElementById('tbTKNV').style.display = 'block';
    //     error++;
    // }
    //Validate name
    if(validate.CheckName(user_name)) {
        document.getElementById('tbTen').innerHTML = 'Correct';
        document.getElementById('tbTen').style.color = 'green';
        document.getElementById('tbTen').style.display = 'block';
    }
    else {
        document.getElementById('tbTen').innerHTML = 'Tên phải là chữ';
        document.getElementById('tbTen').style.color = 'red';
        document.getElementById('tbTen').style.display = 'block';
        error++;
    }
    //Validate name
    if(validate.CheckEmail(user_email)) {
        document.getElementById('tbEmail').innerHTML = 'Correct';
        document.getElementById('tbEmail').style.color = 'green';
        document.getElementById('tbEmail').style.display = 'block';
    }
    else {
        document.getElementById('tbEmail').innerHTML = 'Email chưa đúng định dạng';
        document.getElementById('tbEmail').style.color = 'red';
        document.getElementById('tbEmail').style.display = 'block';
        error++;
    }
    //Validate pass
    if(validate.CheckPassword(user_password)) {
        document.getElementById('tbMatKhau').innerHTML = 'Correct';
        document.getElementById('tbMatKhau').style.color = 'green';
        document.getElementById('tbMatKhau').style.display = 'block';
    }
    else {
        document.getElementById('tbMatKhau').innerHTML = 'Mật khẩu phải từ 6-10 ký tự bao gồm 1 ký tự số,1 ký tự in hoa và 1 ký tự đặc biệt';
        document.getElementById('tbMatKhau').style.color = 'red';
        document.getElementById('tbMatKhau').style.display = 'block';
        error++;
    }
    //Check thời gian làm
    if(validate.CheckValidateDay(user_date)) {
        document.getElementById('tbNgay').innerHTML = 'Correct';
        document.getElementById('tbNgay').style.color = 'green';
        document.getElementById('tbNgay').style.display = 'block';
    }
    else {
        document.getElementById('tbNgay').innerHTML = 'Ngày làm việc phải theo định dạng mm/dd/yyyy';
        document.getElementById('tbNgay').style.color = 'red';
        document.getElementById('tbNgay').style.display = 'block';
        error++;
    }
    //Check lương
    if(validate.CheckSalary(user_salary)) {
        document.getElementById('tbLuongCB').innerHTML = 'Correct';
        document.getElementById('tbLuongCB').style.color = 'green';
        document.getElementById('tbLuongCB').style.display = 'block';
    }
    else {
        document.getElementById('tbLuongCB').innerHTML = 'Mức lương tối thiểu 1.000.000 đến 20.000.000 VNĐ';
        document.getElementById('tbLuongCB').style.color = 'red';
        document.getElementById('tbLuongCB').style.display = 'block';
        error++;
    }
    //Check chức vụ
    if(validate.CheckPostion(user_position)) {
        document.getElementById('tbChucVu').innerHTML = 'Correct';
        document.getElementById('tbChucVu').style.color = 'green';
        document.getElementById('tbChucVu').style.display = 'block';
    }
    else {
        document.getElementById('tbChucVu').innerHTML = 'Chọn chức vụ phù hợp';
        document.getElementById('tbChucVu').style.color = 'red';
        document.getElementById('tbChucVu').style.display = 'block';
        error++;
    }
    //Check thời gian làm
    if(validate.CheckWorkTime(user_work_time)) {
        document.getElementById('tbGiolam').innerHTML = 'Correct';
        document.getElementById('tbGiolam').style.color = 'green';
        document.getElementById('tbGiolam').style.display = 'block';
    }
    else {
        document.getElementById('tbGiolam').innerHTML = 'Giờ làm tối thiểu là 80h và tối đa là 200h 1 tháng';
        document.getElementById('tbGiolam').style.color = 'red';
        document.getElementById('tbGiolam').style.display = 'block';
        error++;
    }
    if(error != 0) {
        return;
    }
    let staff_list_after_update = all_staff.UpdateStaff(staff)
    saveData ();
    renderStaffList (staff_list_after_update)
}
//ham kiem tra du lieu nhap vao co rong k
function checkEmtyValue (value) {
    return validate.CheckEmty(value);
}
//luu du lieu vao localstorage
function saveData () {
    let json = JSON.stringify(all_staff.LIST);
    localStorage.setItem('staff_list',json);
}
// lay du lieu tu localstorage
function getData () {
    let json = localStorage.getItem('staff_list');
    let data = JSON.parse(json)
    if(data === null || data.length === 0) {
        return false;
    }
    else{
        all_staff.LIST = data;
        return true;
    }
}
//
function getAllStaff () {
    if(getData()) {
        renderStaffList(all_staff.LIST)
    }
    else {
        alert('Chưa có thông tin trên hệ thống');
    }
}

//
function CheckAvailibleID (id) {
    let result = false;
    if(all_staff.LIST.length === 0) {
        result = true;
    }
    else {
        all_staff.LIST.forEach((staff) => {
            if(Number(staff.staff_id) != Number(id)) {
                result =  true;
            }
            else {
                result =  false;
            }
        })
    }
    return result;
}


