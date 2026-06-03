export async function fetchUsers(apiUrl) {
    // 1. Gởi request đến API URL
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Không kết nối được API URL");
    }
    const data = await response.json();
    return data;
}

// Hàm UNIT: kiểm tra cục dữ liệu data
export function validateUsers(data) {
    // Có phải là array không?
    if (!Array.isArray(data)) {
        return "Dữ liệu phải là mảng.";
    }
    // Mảng có phần tử không?
    if (data.length <= 0) {
        return "Không có phần tử nào.";
    }
    // Các phần tử bên trong (element/item) có đúng cấu trúc quy định không? id, name, email, phone
    const firstUser = data[0];
    var isValid = Boolean(firstUser
        && "id" in firstUser
        && "name" in firstUser
        && "email" in firstUser
        && "phone" in firstUser
    );
    if (!isValid) {
        return "Cấu trúc quy định phải có các key id, name, email, phone.";
    }
}

// Hàm BUSINESS: lấy dữ liệu user và trình diễn
export async function loadUsers(apiUrl) {
    // 1. Gọi hàm lấy dữ liệu xử lý API
    const data = await fetchUsers(apiUrl);
    // 2. Kiểm tra dữ liệu có hợp lệ không?
    const error = validateUsers(data);
    if(error != undefined && error != ""){
        return error;
    }
   // 3. Xử lý trình diễn dạng LIST
    var html = "<ul>";
    data.forEach(user => {
        html += '<li>';
        html += `Họ tên: ${user.name} - `;
        html += `Email: ${user.email} - `;
        html += `Thành phố: ${user.address.city}`;
        html += '</li>';
    });
    html += '</ul>';
    return html;
}

if (typeof window !== "undefined") {
    window.loadUsers = loadUsers;
}