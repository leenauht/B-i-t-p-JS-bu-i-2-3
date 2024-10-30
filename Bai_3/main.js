/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Số tiền USD: x
 *  + Giá USD: 1 USD = 23500
 *
 * - Xử lý
 *  + Tiền quy đổi = x * 23500
 *
 * - Đầu ra
 *  + Xuất ra số tiền quy đổi
 */

let btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
  // Lấy giá trị từ ô input
  let soTienUSD = document.getElementById("soTienUSD").value * 1;
  let tienQuyDoi = 0;
  // Xử lý
  tienQuyDoi = (soTienUSD * 23500).toLocaleString();
  // Hiển thị kết quả
  let result = soTienUSD + " USD = " + tienQuyDoi;
  let pResult = document.getElementById("pResult");
  pResult.innerHTML = result;
};
