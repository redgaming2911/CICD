function login(emailInput, passwordInput) {
    // Kiểm tra email
    if(!emailInput) {
        return "Email không được để trống";
    }
    // Kiểm tra mật khẩu
    if(!passwordInput) {
        return "Mật khẩu không được để trống";
    }  
    // Kiểm tra logic/nghiệp vụ
    //Gỉa sử email và mật khẩu đúng là admin@gmail.com và admin123
    if(emailInput == "admin@gmail.com" && passwordInput == "admin123") {
        return "Đăng nhập thành công";
    } else {
        return "Email hoặc mật khẩu không đúng";
    }
}