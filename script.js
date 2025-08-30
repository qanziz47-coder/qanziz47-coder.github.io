    // Buat overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.6)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";

    // Buat box popup
    const popup = document.createElement("div");
    popup.style.background = "url(https://wallpaperaccess.com/full/3161760.jpg)";
    popup.style.backgroundSize ="cover";
    popup.style.backgroundPosition ="center";
    popup.style.filter ="brightness(60%)";
    popup.style.padding = "20px";
    popup.style.borderRadius = "12px";
    popup.style.width = "350px";
    popup.style.maxWidth = "90%";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    popup.style.img ="src:OIP-removebg-preview.png"
    // Tambahkan gambar
    const img = document.createElement("img");
    img.src = "OIP-removebg-preview.png"; // ganti dengan URL gambarmu
    img.alt = "Banner Langganan";
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    img.style.marginBottom = "15px";
    img.style.filter ="(100%);"

    // Judul
    const title = document.createElement("h2");
    title.innerText = "AYO JADI RAJA👑";
    title.style.fontFamily ="sans-serif";
    title.style.color ="blue";
    title.style.textShadow ="2px 3px rgba(255, 255, 255, 0.712)";

    // Paragraf
    const desc = document.createElement("p");
    desc.innerText = "Ayo berlangganan,klik disini jika ingin perlangganan";
    desc.style.color ="aqua";
    desc.style.textShadow ="2px 3px rgba(10, 104, 133)";
    desc.style.fontSize ="20px";
    desc.style.fontFamily ="sans-serif"

    // Tombol Langganan
    const btnSub = document.createElement("button");
    btnSub.innerText = "Langganan";
    btnSub.style.background = "#007BFF";
    btnSub.style.color = "white";
    btnSub.style.border = "none";
    btnSub.style.padding = "10px 15px";
    btnSub.style.borderRadius = "8px";
    btnSub.style.cursor = "pointer";
    btnSub.style.marginRight = "10px";
    btnSub.style.filter ="brightness(200%)";
    btnSub.onclick = () => {
      if (location.href) {
        alert("Ayo perlangganan,sekarang juga!!,");
        window.location.href ="g.html";
      } 
    };

    // Tombol Tutup
    const btnClose = document.createElement("button");
    btnClose.innerText = "Tutup";
    btnClose.style.background = "red";
    btnClose.style.color = "white";
    btnClose.style.border = "none";
    btnClose.style.padding = "10px 15px";
    btnClose.style.borderRadius = "8px";
    btnClose.style.cursor = "pointer";
    btnSub.style.filter ="brightness(200%)";
    btnClose.onclick = () => {
      document.body.removeChild(overlay);
    };

    // Susun popup
    popup.appendChild(img);
    popup.appendChild(title);
    popup.appendChild(desc);
    popup.appendChild(btnSub);
    popup.appendChild(btnClose);

    // Masukkan popup ke overlay
    overlay.appendChild(popup);

    // Munculkan popup saat web dibuka
    window.onload = () => {
      document.body.appendChild(overlay);
    };