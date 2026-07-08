// 1. Mengambil elemen tombol dan elemen angka berdasarkan ID
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

// 2. Membuat variabel state 'count' yang dimulai dari angka 0
let count = 0;

// 3. Menambahkan Event Listener (fungsi klik) pada tombol
likeBtn.addEventListener('click', () => {
    // Menambah nilai variabel count sebanyak 1
    count++;
    
    // Memperbarui teks di dalam #like-count secara otomatis
    likeCount.textContent = `${count} Likes`;
});