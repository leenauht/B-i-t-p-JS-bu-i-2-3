/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Số có hai chữ số: VD: 24
 *
 * - Xử lý
 *  + Lấy số hàng đơn vị = 24 % 10
 *  + Lấy số hàng chục = 24 / 10 => dùng Math.floor() để làm tròn xuống số nguyên gần nhất
 *  + Tổng ký số = số hàng đơn vị + số hàng chục
 *
 * - Đầu ra
 *  + Xuất ra tổng ký số
 */

let btnTong2KySo = document.getElementById("btnTong2KySo");
btnTong2KySo.onclick = function () {
  // Lấy giá trị từ ô input
  let so2ChuSo = document.getElementById("so2ChuSo").value * 1;
  let hangDonVi = 0;
  let hangChuc = 0;
  let tinhTong = 0;

  // Xử lý
  hangDonVi = so2ChuSo % 10;
  hangChuc = Math.floor(so2ChuSo / 10);
  tinhTong = hangChuc + hangDonVi;
  // Hiển thị kết quả
  let result = "Tổng 2 ký số là: " + tinhTong;
  let pResult = document.getElementById("pResult");
  pResult.innerHTML = result;
};
