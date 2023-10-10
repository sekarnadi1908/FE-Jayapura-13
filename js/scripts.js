function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskInputPicture = document.getElementById("newPicture");
  const taskValue = taskInput.value.trim();
  const pictureValue = taskInputPicture.value.trim();

  // Buat objek data
  const data = {
    linkGames: taskValue,
    linkPictures: pictureValue
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
        taskInput.value = "";
        taskInputPicture.value = "";
        closeForm()
        window.location.reload();
    } else {
        alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
    }
})
.catch(error => console.error('Error sending contact data:', error));
}
