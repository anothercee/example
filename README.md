# 🚀 The Efficiency Hub: Toolkit Produktivitas Hibrida

Sebuah aplikasi *toolkit* multifungsi yang dirancang untuk pelajar, mahasiswa, dan profesional. Dibangun menggunakan teknologi web dasar (HTML, CSS, JavaScript) untuk memberikan solusi cepat dalam manajemen waktu, konversi data, dan pelacakan kebiasaan harian, dengan tampilan yang responsif dan cepat.

## 🎯 Fitur Utama

Aplikasi ini memiliki tiga modul utama yang diakses melalui navigasi bawah:

### 1. 🧠 Mind Map Cepat (Visual Study Aid)
* Memungkinkan input hierarkis (poin utama dan sub-poin).
* Memvisualisasikan data teks menjadi diagram alir sederhana untuk mempermudah pemahaman struktur materi belajar.
* **Status:** *Logika inti untuk rendering dan manajemen node masih dalam pengembangan.*

### 2. 🧮 Custom Converter Hub
* Menyediakan konverter spesifik, saat ini termasuk konversi **HEX ke RGB** (untuk desainer/developer).
* Dapat diperluas dengan konverter niche lainnya (Zona Waktu, Volume Dapur, dll.).
* **Status:** *Fungsi konversi HEX ke RGB dasar sudah diimplementasikan.*

### 3. ✅ Daily Check-In Tracker
* Sistem ringan untuk melacak 2-3 kebiasaan harian penting (misalnya: Tugas Utama, Hidrasi).
* Menggunakan `localStorage` untuk menyimpan status dan secara otomatis me-reset setiap hari.
* Menyediakan *feedback* visual yang memuaskan saat tugas ditandai selesai.
* **Status:** *Logika check-in harian menggunakan localStorage, toggle status, dan reset otomatis sudah berfungsi.*

---

## 🛠️ Teknologi yang Digunakan

Proyek ini adalah contoh aplikasi hibrida yang dibangun murni di lapisan *frontend* web:

* **HTML5:** Untuk struktur dasar aplikasi.
* **CSS3:** Untuk styling, tata letak mobile-first (responsive), dan animasi *feedback* ringan.
* **JavaScript (Vanilla JS):** Untuk logika aplikasi, navigasi antar-modul, manipulasi DOM, dan penyimpanan data lokal melalui `localStorage`.
* **Font Awesome:** Digunakan untuk ikon-ikon navigasi.

---

## ⚙️ Cara Menjalankan Proyek

### 1. Melalui Web Browser (Pengembangan Cepat)
1.  *Clone* atau unduh *repository* ini.
2.  Buka file `index.html` di browser Anda (Google Chrome disarankan).
3.  Ubah ukuran browser Anda untuk mensimulasikan tampilan ponsel.

### 2. Sebagai Aplikasi Android Hibrida (Tujuan Akhir)

Untuk mengkonversi kode web ini menjadi aplikasi Android (APK) yang sesungguhnya, langkah-langkah berikut diperlukan (menggunakan **Capacitor** atau **Cordova**):

1.  Pastikan Anda telah menginstal **Node.js** dan **Android SDK**.
2.  Instal Capacitor CLI: `npm install -g @capacitor/cli`
3.  Inisialisasi proyek di folder ini: `npx cap init`
4.  Tambahkan platform Android: `npx cap add android`
5.  Salin aset web: `npx cap copy android`
6.  Buka proyek di Android Studio: `npx cap open android`

---

## 👥 Kontribusi

Proyek ini terbuka untuk pengembangan lebih lanjut! Jika Anda memiliki ide untuk konverter baru atau ingin menyempurnakan logika Mind Map, silakan:

1.  *Fork* *repository* ini.
2.  Buat *branch* baru: `git checkout -b fitur/nama-fitur`
3.  *Commit* perubahan Anda: `git commit -m 'feat: menambahkan fitur konversi waktu'`
4.  *Push* ke *branch*: `git push origin fitur/nama-fitur`
5.  Buat **Pull Request** (PR).

---

**Dibuat oleh:** [Nama atau Username GitHub Anda]
