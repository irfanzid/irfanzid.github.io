function hitungLamaPengalaman() {
  // 1. Tentukan tanggal mulai
  // Catatan: Bulan di JavaScript dimulai dari 0 (Januari=0, Februari=1, dst.)
  // Juni = 5
  const tanggalMulai = new Date(2024, 5, 3); // 3 Juni 2024

  // 2. Tentukan tanggal saat ini
  const tanggalSekarang = new Date();

  // 3. Hitung selisih waktu dalam milidetik
  const selisihWaktuMs = tanggalSekarang.getTime() - tanggalMulai.getTime();

  // 4. Konversi milidetik ke tahun dan bulan

  // Jumlah hari rata-rata per tahun (untuk akurasi: 365.25 hari)
  const msPerTahun = 1000 * 60 * 60 * 24 * 365.25;

  // Total tahun penuh (termasuk pecahan)
  const totalTahun = selisihWaktuMs / msPerTahun;

  // Tahun penuh
  const tahunPenuh = Math.floor(totalTahun);

  // Sisa hari yang dikonversi menjadi bulan
  // Menggunakan Date object untuk perhitungan bulan yang lebih akurat
  let bulan = (tanggalSekarang.getFullYear() - tanggalMulai.getFullYear()) * 12;
  bulan -= tanggalMulai.getMonth();
  bulan += tanggalSekarang.getMonth();

  // Tambahkan 1 jika hari saat ini lebih besar atau sama dengan hari mulai (opsional: untuk akurasi bulan)
  if (tanggalSekarang.getDate() < tanggalMulai.getDate()) {
    bulan--;
  }

  const tahun = Math.floor(bulan / 12);
  const bulanSisa = bulan % 12;

  // 5. Format hasil
  let hasil = "";
  if (tahun > 0) {
    hasil += `${tahun} year`;
  }
  if (bulanSisa > 0) {
    // Tambahkan koma atau spasi jika sudah ada tahun
    if (hasil.length > 0) {
      hasil += " and ";
    }
    hasil += `${bulanSisa} month`;
  }

  // Jika hasilnya 0 tahun 0 bulan (misalnya, baru mulai hari ini)
  if (hasil === "") {
    hasil = "kurang dari 1 bulan";
  }

  // 6. Tampilkan hasil di HTML
  document.getElementById("pengalaman").textContent = hasil;
}

// Panggil fungsi saat dokumen selesai dimuat
hitungLamaPengalaman();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
