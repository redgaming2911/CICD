// Hàm UNIT: kiểm tra giá trị ô nhập liệu số KWH
export function validateSoKwh(soKwh) {
    if(soKwh == "" || soKwh == null || soKwh == undefined){
        return "Vui lòng nhập số KWH";
    }
    // Rule 2: phải là số
    const parsedNumber = Number(soKwh);
    if(!Number.isFinite(parsedNumber)){
        return "Số KWH phải là một số hợp lệ";
    }
    //rule 3: phải > 0
    if(parsedNumber <= 0){
        return "Số Kwh phải > 0"
    }
    return ""; // nếu không phạm lỗi => Đúng
}
/*
0 - 50:1800 VNĐ/kWh
51 - 100: 2000 VNĐ/kWh
Trên 100: 2500 VNĐ/kWh
*/
// Hàm UNIT: tính ra số tiền 
export function tinhtoan(soKwh) {
    var tongTien = 0;
    // Truờng hợp 1: số KWH từ 0-50
    if(soKwh <= 50){
        tongTien = soKwh * 1800;
        return soKwh * 1800;
    }
    // Trường hợp 2: số KWH từ 51-100
    tongTien += 50 * 1800; // tiền của 50 KWH đầu tiên
    if(soKwh <= 100){
        tongTien += (soKwh - 50) * 2000; // tiền của phần KWH từ 51 đến số KWH hiện tại
        return tongTien;
    }
    // Trường hợp 3: số KWH trên 100
    tongTien += 50 * 2000; // tiền của phần KWH từ 51 đến 100
    tongTien += (soKwh - 100) * 2500; // tiền của phần KWH trên 100
    return tongTien;

}
// Hàm business: Dịch vụ tính tiền điện
export function tinhTienDien(soKwh) {
    const soKwhError = validateSoKwh(soKwh);
    if(soKwhError){
        return soKwhError;
    }

    var soTien = tinhtoan(soKwh);
    if(soTien < 20000) {
        return `<span> Số tiền phải trả là ${soTien}</span>`;
    } else if(soTien <= 50000) {
        return `<span style="color: blue;"> Số tiền phải trả là ${soTien}</span>`;
    } else {
        return `<span style="color: red;"> Số tiền phải trả là ${soTien}</span>`;
    }
}
if (typeof window !== "undefined"){
    window.tinhTienDien = tinhTienDien;
}