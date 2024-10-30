/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Lương ngày: x
 *  + Số ngày làm: y
 *
 * - Xử lý
 *  + Tính lương = lương ngày * số ngày làm
 *
 * - Đầu ra
 *  + Xuất lương
 */

let tinhLuong = document.getElementById("btnTinhLuong");
tinhLuong.onclick = function () {
  // Lấy giá trị từ 2 ô input
  let luong1Ngay = document.getElementById("luong1Ngay").value * 1;
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tongLuong = 0;
  //   Xử lý
  tongLuong = (luong1Ngay * soNgayLam).toLocaleString();
  //   Hiển thị kết quả
  let result = "Lương của nhân viên là: " + tongLuong;
  let pResult = document.getElementById("pResult");
  pResult.innerHTML = result;
};
