function pilihGame(nama) {
    document.getElementById("formTopUp").classList.remove("hide");
    document.getElementById("judulGame").textContent = "Top Up " + nama;
}

function checkout() {
    const id = document.getElementById("playerId").value;
    const nominal = document.getElementById("nominal").value;

    if (id === "") {
        alert("ID tidak boleh kosong!");
        return;
    }

    document.getElementById("hasil").textContent = 
        "Pesanan berhasil! ID: " + id + " | Nominal: " + nominal;
}
