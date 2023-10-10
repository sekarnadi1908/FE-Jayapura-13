// Fetch data untuk gambar
function fetchGambarData() {
    fetch('https://be-jayapura-13-production.up.railway.app/gambar')
        .then(response => response.json())
        .then(data => {
            const gambarElement = document.getElementById('games-list');
            gambarElement.innerHTML = '';
            data?.forEach((gambar) => {
                gambarElement.innerHTML += `
                   <div class="flex-3">
                        <a href=${gambar.linkGames}  id="games">
                            <img src=${gambar.linkPictures} />
                            <h1>Games</h1>
                        </a>
                   </div>
                `;
            });
           
        })
        .catch(error => console.error('Error fetching gambar data:', error));
}


// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchGambarData);