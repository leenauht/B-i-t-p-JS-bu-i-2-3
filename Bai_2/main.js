/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Số  thứ nhất: num1
 *  + Số  thứ hai: num2
 *  + Số  thứ ba: num3
 *  + Số  thứ tư: num4
 *  + Số  thứ năm: num5
 *
 * - Xử lý
 *  + Giá trị trung bình = (num1 + num2 + num3 + num4 +num5)/5
 *
 * - Đầu ra
 *  + Xuất ra giá trị trung bình của 5 số
 */

let giaTriTB = document.getElementById("giaTriTB");
giaTriTB.onclick = function () {
  // Lấy giá trị từ ô input
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let num3 = document.getElementById("num3").value * 1;
  let num4 = document.getElementById("num4").value * 1;
  let num5 = document.getElementById("num5").value * 1;
  let trungBinh = 0;
  // Xử lý
  trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
  // Hiển thị kết quả
  let result = "Giá trị trung bình của 5 số là: " + trungBinh;
  let pTrungBinh = document.getElementById("pTrungBinh");
  pTrungBinh.innerHTML = result;
};
