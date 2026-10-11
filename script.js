document.addEventListener("DOMContentLoaded", function() {
  
  // 1. TAMPILKAN SAPAAN OTOMATIS SESUAI JAM
  const jam = new Date().getHours();
  const sapaanElement = document.getElementById("sapaan");
  
  let teksSapaan = "";
  if (jam >= 5 && jam < 12) {
    teksSapaan = "Selamat Pagi! Terima kasih sudah mengunjungi portofolio saya.";
  } else if (jam >= 12 && jam < 15) {
    teksSapaan = "Selamat Siang! Terima kasih sudah mengunjungi portofolio saya.";
  } else if (jam >= 15 && jam < 18) {
    teksSapaan = "Selamat Sore! Terima kasih sudah mengunjungi portofolio saya.";
  } else {
    teksSapaan = "Selamat Malam! Terima kasih sudah mengunjungi portofolio saya.";
  }
  sapaanElement.textContent = teksSapaan;

  // 2. HITUNG UMUR OTOMATIS BERDASARKAN TANGGAL LAHIR (12 Desember 2007)
  const tanggalLahir = new Date(2007, 11, 12); 
  const hariIni = new Date();
  
  let umur = hariIni.getFullYear() - tanggalLahir.getFullYear();
  const bulanDiff = hariIni.getMonth() - tanggalLahir.getMonth();
  
  if (bulanDiff < 0 || (bulanDiff === 0 && hariIni.getDate() < tanggalLahir.getDate())) {
    umur--;
  }
  
  document.getElementById("umurUser").textContent = umur;

  // 3. TAHUN FOOTER OTOMATIS
  document.getElementById("tahun").textContent = new Date().getFullYear();

  // 4. PESAN CONSOLE
  console.log("Website Portofolio IT berhasil dimuat dengan sempurna!");
});