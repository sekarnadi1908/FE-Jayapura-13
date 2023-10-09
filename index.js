// Fetch data untuk gambar
function fetchGambarData() {
    fetch('https://be-jayapura-13-production.up.railway.app/gambar')
        .then(response => response.json())
        .then(data => {
            const gambarElement = document.querySelector('gambar .gambar-text');
            gambarElement.querySelector('h1').textContent = data.title;
            gambarElement.querySelector('p').textContent = data.description;
        })
        .catch(error => console.error('Error fetching gambar data:', error));
}

// Post data games
function postGames(event) {
    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    const id_game  = form.querySelector('[name="id_game "]').value;
    const nama_game = form.querySelector('[name="nama_game"]').value;
    const deskripsi_game = form.querySelector('[name="deskripsi_game"]').value;
    const jenis_game = form.querySelector('[name="jenis_game"]').value;
    const id_materi = form.querySelector('[name="id_materi"]').value;

    // Buat objek data
    const data = {
        id_game: id_game,
        nama_game: nama_game,
        deskripsi_game: deskripsi_game,
        jenis_game: jenis_game,
        id_materi: id_materi
    };

    // Kirim data sebagai JSON
    fetch('https://be-jayapura-13-production.up.railway.app/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Terima kasih! Data telah ditambahkan.');
            form.reset();
        } else {
            alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        }
    })
    .catch(error => console.error('Error sending contact data:', error));
}


// Event listener untuk form submission
document.querySelector('.contact-form form').addEventListener('submit', postGames);

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchGambarData);