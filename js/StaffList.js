function StaffList() {
    this.LIST = [];
    //Thêm 1 nhân viên
    this.AddNewStaff = (staff) => {
        this.LIST.push(staff);
    }
    this.DeleteStaff = (index) => {
        this.LIST.splice(index, 1)
        return this.LIST;
    }
    this.FindStaff = (keyword) => {
        let finding_list = new StaffList ();
        let key = keyword.toLowerCase().trim();
        this.LIST.forEach((staff) => {
            if(staff.staff_type.toLowerCase().search(key) != -1 && key != '') {
                finding_list.AddNewStaff(staff);
                console.log(staff.staff_type)
                console.log(key)
            }
        })
        return finding_list;
    }
    this.GetStaff = (index) => {
        return this.LIST[index];
    }
    this.FindStaffID = function (id)  {
        let result = null;
        this.LIST.forEach(staff => {
            if(parseFloat(staff.staff_id) === parseFloat(id)) {
                result = staff;
            }
        });
        return result;
    }
    this.UpdateStaff = function (update_staff) {
        this.LIST.forEach((staff) => {
            if(Number(update_staff.staff_id) === Number(staff.staff_id)) {
                staff.staff_name = update_staff.staff_name;
                staff.staff_email = update_staff.staff_email;
                staff.staff_password = update_staff.staff_password;
                staff.start_date = update_staff.start_date;
                staff.basic_salary = update_staff.basic_salary;
                staff.postition = update_staff.postition;
                staff.work_time = update_staff.work_time;
                staff.staff_type = update_staff.staff_type;
                staff.staff_total = update_staff.staff_total;
            }
        })
        return this.LIST;
    }
}