document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi: Muat status Tracker saat aplikasi dimuat
    loadDailyTracker();
});

// =======================================================
// A. Logika Navigasi Antar Modul
// =======================================================

function showModul(modulId) {
    // 1. Sembunyikan semua modul
    document.querySelectorAll('.modul').forEach(modul => {
        modul.classList.add('hidden');
        modul.classList.remove('active');
    });

    // 2. Tampilkan modul yang dipilih
    const selectedModul = document.getElementById(modulId);
    if (selectedModul) {
        selectedModul.classList.remove('hidden');
        selectedModul.classList.add('active');
    }

    // 3. Update status aktif di Navigasi Bawah
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-modul') === modulId) {
            item.classList.add('active');
        }
    });
}

// =======================================================
// B. Logika Modul 3: Daily Tracker
// =======================================================

const DAILY_TASKS = [
    { id: 'task-utama', name: 'Tugas Utama Selesai' },
    { id: 'task-air', name: 'Minum Air Cukup' }
];
const STORAGE_KEY = 'efficiency_hub_daily_tracker';

// Fungsi untuk memuat status dari LocalStorage
function loadDailyTracker() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const today = new Date().toDateString();

    // Reset jika tanggal sudah berbeda
    if (data.date !== today) {
        resetDailyTracker(false); // Reset ke status awal
        return;
    }

    // Terapkan status yang tersimpan
    DAILY_TASKS.forEach(task => {
        const item = document.getElementById(task.id);
        if (item) {
            if (data.tasks && data.tasks[task.id]) {
                item.classList.add('completed');
                item.querySelector('i').className = 'fas fa-check-circle';
            } else {
                item.classList.remove('completed');
                item.querySelector('i').className = 'far fa-circle';
            }
        }
    });
}

// Fungsi untuk menyimpan status ke LocalStorage
function saveDailyTracker() {
    const today = new Date().toDateString();
    const tasks = {};
    
    DAILY_TASKS.forEach(task => {
        const item = document.getElementById(task.id);
        tasks[task.id] = item ? item.classList.contains('completed') : false;
    });

    const dataToSave = {
        date: today,
        tasks: tasks
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
}

// Fungsi untuk toggle (mengubah) status tugas
function toggleTask(taskId) {
    const item = document.getElementById(taskId);
    if (item) {
        // Toggle class 'completed'
        item.classList.toggle('completed');
        
        // Toggle ikon
        const icon = item.querySelector('i');
        if (item.classList.contains('completed')) {
            icon.className = 'fas fa-check-circle'; // Ikon terisi
        } else {
            icon.className = 'far fa-circle'; // Ikon kosong
        }
        
        saveDailyTracker(); // Simpan perubahan
    }
}

// Fungsi reset manual atau otomatis
function resetDailyTracker(showAlert = true) {
    // Set semua status tugas menjadi belum selesai
    DAILY_TASKS.forEach(task => {
        const item = document.getElementById(task.id);
        if (item) {
            item.classList.remove('completed');
            item.querySelector('i').className = 'far fa-circle';
        }
    });

    // Simpan status baru dengan tanggal hari ini
    saveDailyTracker(); 

    if (showAlert) {
        alert('Tracker harian berhasil di-reset!');
    }
}


// =======================================================
// C. Logika Modul 2: Contoh Konversi (JS)
// =======================================================

// Konversi HEX ke RGB Sederhana
function convertColor() {
    const hex = document.getElementById('hex-input').value.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const output = document.getElementById('rgb-output');
    if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        output.textContent = `RGB: ${r}, ${g}, ${b}`;
    } else {
        output.textContent = 'RGB: Input HEX tidak valid';
    }
}

// =======================================================
// D. Logika Modul 1: Mind Map (Placeholder Sederhana)
// =======================================================

// Placeholder sederhana, logika Mind Map akan lebih kompleks!
function addNode() {
    const input = document.getElementById('mindmap-input');
    if (input.value.trim() !== "") {
        const container = document.getElementById('mindmap-container');
        const newNode = document.createElement('p');
        newNode.textContent = `• ${input.value}`;
        newNode.classList.add('mindmap-node');
        container.appendChild(newNode);
        input.value = '';
    }
}
