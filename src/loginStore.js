// Hàm unit: kiểm tra email hợp lệ
export function checkEmail(email) {
    if(email == "") {
        return false;
    }
    else if (email.length < 3 || email.length > 50) {
        return false;
    }
    return true;
}
// Hàm unit: kiểm tra mật khẩu 
export function checkPassword(password) {    
    if(password == "") {
        return false;
    }
    else if (password.length < 6 || password.length > 20) {
        return false;
    }
    return true;
}       
export function login(emailInput, passwordInput) {
    // Kiểm tra email
    var isValidEmail = checkEmail(emailInput);
    if(!isValidEmail) {
        return "Email không hợp lệ.";
    }
    // Kiểm tra mật khẩu
    var isValidPassword = checkPassword(passwordInput);
    if(!isValidPassword) {
        return "Mật khẩu không hợp lệ.";
    } 
    // Kiểm tra logic/nghiệp vụ
    //Gỉa sử email và mật khẩu đúng là admin@gmail.com và admin123
    if(emailInput == "admin@gmail.com" && passwordInput == "admin123") {
        return "Đăng nhập thành công";
    } else {
        return "Email hoặc mật khẩu không đúng";
    }

}