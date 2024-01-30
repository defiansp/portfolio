const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
let currentTheme = localStorage.getItem('theme');

// Periksa apakah tema saat ini adalah gelap, jika tidak atur menjadi tema gelap secara default
if (!currentTheme) {
    currentTheme = 'dark'; // Atur tema default ke 'dark'
    localStorage.setItem('theme', currentTheme); // Simpan tema default ke localStorage
}

// Atur tema sesuai dengan nilai yang tersimpan di localStorage saat memuat halaman
document.documentElement.setAttribute('data-theme', currentTheme);

// Atur tombol toggle sesuai dengan tema yang sedang digunakan
if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
}

// Fungsi untuk mengubah tema
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Tambahkan event listener ke tombol toggle
toggleSwitch.addEventListener('change', switchTheme, false);
