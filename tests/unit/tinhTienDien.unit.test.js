import {describe, it, expect} from 'vitest';
import {validateSoKwh, tinhtoan} from "../../src/tinhtiendien";

describe("Unit test Tính tiền điện", () => {
    it("TC-UNIT-01: báo lỗi khi bỏ trống", () => {
        const result = validateSoKwh("");
        expect(result).toBe("Vui lòng nhập số KWH");
    });
    it("TC-UNIT-02: tính đúng khi số kwh ở khung bậc 1", () => {
        const result = tinhtoan(0);
        expect(result).toBe(0);
    });
    it("TC-UNIT-03: tính đúng khi số kwh ở khung bậc 1", () => {
        const result = tinhtoan(5);
        expect(result).toBe(9000);
    });
    it("TC-UNIT-04: tính đúng khi số kwh ở khung bậc 1", () => {
        const result = tinhtoan(27);
        expect(result).toBe(48600);
    });
    it("TC-UNIT-05: tính đúng khi số kwh ở khung bậc 1", () => {
        const result = tinhtoan(50);
        expect(result).toBe(90000);
    });
    it("TC-UNIT-06: tính đúng khi số kwh ở khung bậc 2", () => {
        const result = tinhtoan(60);
        expect(result).toBe(110000);
    });
    it("TC-UNIT-07: tính đúng khi số kwh ở khung bậc 2", () => {
        const result = tinhtoan(80);
        expect(result).toBe(150000);
    });
    it("TC-UNIT-08: tính đúng khi số kwh ở khung bậc 2", () => {
        const result = tinhtoan(100);
        expect(result).toBe(190000);
    });
    it("TC-UNIT-09: tính đúng khi số kwh ở khung bậc 3", () => {
        const result = tinhtoan(101);
        expect(result).toBe(192500);
    });
    it("TC-UNIT-10: tính đúng khi số kwh ở khung bậc 3", () => {
        const result = tinhtoan(120);
        expect(result).toBe(240000);
    });
    it("TC-UNIT-11: tính đúng khi số kwh ở khung bậc 3", () => {
        const result = tinhtoan(199);
        expect(result).toBe(437500);
    });
});
