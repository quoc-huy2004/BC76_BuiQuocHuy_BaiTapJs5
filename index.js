// Bài 1: Quản lí tuyển sinh
function tinhTong(diemToan, diemVan, diemAnh, khuVuc, doiTuong) {
  let tinhTong = diemToan + diemVan + diemAnh + khuVuc + doiTuong;
  return tinhTong;
}

function kiemTra(diemToan, diemVan, diemAnh) {
  if (diemToan <= 0 || diemVan <= 0 || diemAnh <= 0) {
    document.querySelector(".ketQua").innerHTML =
      "Bạn đã rớt vì có 1 trong 3 môn 0 điểm";
    return false;
  }
  return true;
}

function soSanh(tong, diemChuan) {
  if (tong >= diemChuan) {
    document.querySelector(
      ".ketQua"
    ).innerHTML = `Số điểm của bạn là ${tong}. Bạn đã đậu.`;
  } else {
    document.querySelector(
      ".ketQua"
    ).innerHTML = `Số điểm của bạn là ${tong}. Bạn đã rớt.`;
  }
}

document.querySelector(".btn-dark").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemToan = document.getElementById("diemToan").value * 1;
  let diemVan = document.getElementById("diemVan").value * 1;
  let diemAnh = document.getElementById("diemAnh").value * 1;
  let khuVuc = document.getElementById("khuVuc").value * 1;
  let doiTuong = document.getElementById("doiTuong").value * 1;

  if (kiemTra(diemToan, diemVan, diemAnh)) {
    let tong = tinhTong(diemToan, diemVan, diemAnh, khuVuc, doiTuong);
    soSanh(tong, diemChuan);
  }
};

// Bài 2: Tính tiền điện
function giaTien50KwDautien() {
  return 500;
}

function giaTien50KwKe() {
  return 650;
}

function giaTien100KwKe() {
  return 850;
}

function giaTien150KwKe() {
  return 1100;
}

function giaTienConLai() {
  return 1300;
}

document.querySelector(".btn-primary").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soKw").value * 1;

  if (isNaN(soKw) || soKw <= 0) {
    alert("Vui lòng nhập số Kw");
    return;
  }

  let gia50KwDautien = giaTien50KwDautien(hoTen, soKw);
  let gia50KwKe = giaTien50KwKe(hoTen, soKw);
  let gia100KwKe = giaTien100KwKe(hoTen, soKw);
  let gia150KwKe = giaTien150KwKe(hoTen, soKw);
  let giaKwConLai = giaTienConLai(hoTen, soKw);
  let tongTien = 0;

  // Tính tổng tiền điện qua các quãng
  if (soKw <= 50) {
    tongTien = soKw * gia50KwDautien;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * gia50KwDautien + (soKw - 50) * gia50KwKe;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * gia50KwDautien + 50 * gia50KwKe + (soKw - 100) * gia100KwKe;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien =
      50 * gia50KwDautien +
      50 * gia50KwKe +
      100 * gia100KwKe +
      (soKw - 200) * gia150KwKe;
  } else {
    tongTien =
      50 * gia50KwDautien +
      50 * gia50KwKe +
      100 * gia100KwKe +
      150 * gia150KwKe +
      (soKw - 350) * giaKwConLai;
  }

  document.querySelector(
    ".ketQua2"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tongTien}`;
};

// Bài 3: Tính thuế thu nhập cá nhân
document.querySelector(".btn-danger").onclick = function () {
  let hoTen = document.getElementById("hoTen1").value;
  let tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  if (isNaN(tongThuNhapNam) || tongThuNhapNam <= 0) {
    alert("Tổng thu nhập năm không hợp lệ");
    return;
  }

  // Tính thu nhập chịu thuế
  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

  // Tính thuế
  let thue = 0;
  if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    thue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    thue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    thue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    thue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    thue = thuNhapChiuThue * 0.3;
  } else {
    thue = thuNhapChiuThue * 0.35;
  }

  document.querySelector(
    ".ketQua3"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${thue.toLocaleString()} VND`;
};

// Bài 4: Tính tiền cáp
function tinhHoaDon(chonKhachHang, soKenhCaoCap, soKetNoi) {
  let phiXuLyHoaDon, phiDichVuCoBan, phiKenhCaoCap, tongHoaDon;
  if (chonKhachHang === "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiKenhCaoCap = 7.5;
    tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + soKenhCaoCap * phiKenhCaoCap;
  } else if (chonKhachHang === "doanhNghiep") {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75;
    if (soKetNoi > 10) {
      phiDichVuCoBan += (soKetNoi - 10) * 5;
    }
    phiKenhCaoCap = 50;
    tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + soKenhCaoCap * phiKenhCaoCap;
  }
  return tongHoaDon;
}

document.querySelector(".btn-success").onclick = function () {
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let maKhachHang = document.getElementById("maKhachHang").value * 1;
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  let chonKhachHang = document.getElementById("chonKhachHang").value;

  if (chonKhachHang === "") {
    alert("Vui lòng chọn Loại khách hàng");
    return;
  }

  let tienDien = tinhHoaDon(chonKhachHang, soKenhCaoCap, soKetNoi);

  document.querySelector(
    ".ketQua4"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${tienDien.toLocaleString()}$`;
};

document
  .getElementById("chonKhachHang")
  .addEventListener("change", function () {
    let soKetNoiInput = document.getElementById("soKetNoi");
    let loaiKhachHang = this.value;

    if (loaiKhachHang === "doanhNghiep") {
      soKetNoiContainer.style.display = "block";
    } else {
      soKetNoiContainer.style.display = "none";
    }
  });
