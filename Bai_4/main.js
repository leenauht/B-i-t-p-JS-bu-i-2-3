/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Chiều dài hình chữ nhật: x
 *  + Chiều rộng hình chữ nhật: y
 *
 * - Xử lý
 *  + Diện tích S = x * y
 *  + Chu vi P = (x + y) * 2
 *
 * - Đầu ra
 *  + Xuất ra diện tích và chu vi hình chữ nhật
 */

let tinh = document.getElementById("tinh");
tinh.onclick = function () {
  // Lấy giá trị từ ô input
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let S = 0;
  let P = 0;
  // Xử lý
  S = chieuDai * chieuRong;
  P = (chieuDai + chieuRong) * 2;
  // Hiển thị kết quả
  let result = "Diện tích: " + S + ", Chu vi: " + P;
  let pResult = document.getElementById("pResult");
  pResult.innerHTML = result;
};
