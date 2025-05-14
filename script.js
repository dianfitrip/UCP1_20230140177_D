window.onload = function () {
    const path = window.location.pathname;
  
    // Alert otomatis saat halaman dimuat
    if (path.includes("contact.html")) {
      alert("Promo: Daftar sekarang dan dapatkan diskon 30% untuk bulan pertama!");
    } else if (path.includes("features.html")) {
      alert("Lihat fitur unggulan dari MatematikaMU.");
    }
  
    // Event listener navigasi
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        const destination = link.getAttribute("href");
  
        if (destination.includes("index.html")) {
          alert("Anda berada di halaman HomePage.");
        } else if (destination.includes("about.html") && !window.location.pathname.includes("about.html")) {
          alert("Anda akan menuju halaman About.");
        } else if (destination.includes("features.html") && !window.location.pathname.includes("features.html")) {
          alert("Lihat fitur unggulan dari MatematikaMU.");
        } else if (destination.includes("contact.html") && !window.location.pathname.includes("contact.html")) {
          alert("Ayo daftar sekarang melalui halaman contact.");
        }
      });
    });
  };
  
  // Fungsi saat form dikirim dari contact.html
  function sendMessage() {
    alert("Anda berhasil mengirimkan form pendaftaran!");
    return false;
  }
  