import {describe, it, expect} from 'vitest';
import {checkEmail, checkPassword} from '../../src/loginStore';

describe('kiểm thử từng hàng nhỏ của chức năng đăng nhập', () => {
    // test case 1
    it('Hàm checEmail trả về false khi email bị trống', () => {
        const result = checkEmail("");

        expect(result).toBe(false);
    });
    // test case 2
    it('Hàm checkEmail trả về false khi email < 3 ký tự', () => {
        const result = checkEmail("ab");
        expect(result).toBe(false);
    });
    // test case 3
    it('Hàm checkEmail trả về false khi email > 50 ký tự', () => {
        const longEmail = "a".repeat(51) + "@example.com";
        const result = checkEmail(longEmail);
        expect(result).toBe(false);
    });
    // test case 4
    it('Hàm checkEmail trả về true khi email hợp lệ', () => {
        const result = checkEmail("bpnguyen@gmail.com");
        expect(result).toBe(true);
    });
    // test case 5
    it('Hàm checkPassword trả về false khi mật khẩu bị trống', () => {
        const result = checkPassword("");
        expect(result).toBe(false);
    });
    // test case 6
    it('Hàm checkPassword trả về true khi mật khẩu hợp lệ', () => {
        const result = checkPassword("admin123");
        expect(result).toBe(true);
    });
    // test case 7
    it('Hàm checkPassword trả về false khi mật khẩu < 6 ký tự', () => {
        const result = checkPassword("abc");
        expect(result).toBe(false);
    });
    // test case 8
    it('Hàm checkPassword trả về false khi mật khẩu > 20 ký tự', () => {
        const longPassword = "a".repeat(21);
        const result = checkPassword(longPassword);
        expect(result).toBe(false);
    
    });
    });