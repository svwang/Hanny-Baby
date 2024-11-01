// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-KoYR9MpOTnnWsaP3rjnvbzsFEWsuZ2Y",
  authDomain: "toko-baju-d06b8.firebaseapp.com",
  projectId: "toko-baju-d06b8",
  storageBucket: "toko-baju-d06b8.appspot.com",
  messagingSenderId: "1075045058309",
  appId: "1:1075045058309:web:e178b52dbd0374cf17996c",
  measurementId: "G-1K6SBT6LRJ",
};
firebase.initializeApp(firebaseConfig);

// Cek apakah pengguna sudah login
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // Jika tidak ada pengguna yang terautentikasi, alihkan ke halaman login
    window.location.href = "login.html"; // Ganti dengan nama file login Anda
  }
});

// Ambil referensi ke tombol logout
const logoutBtn = document.getElementById("logoutBtn");
// Tambahkan event listener untuk tombol logout
logoutBtn.onclick = () => {
  // Panggil metode signOut dari Firebase
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Berhasil logout, tampilkan SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Anda telah logout dari akun Anda!",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // Alihkan pengguna ke halaman login hanya setelah menekan OK
          window.location.href = "login.html"; // Ganti dengan nama file login Anda
        }
      });
    })
    .catch((error) => {
      console.error("Error saat logout:", error);
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Terjadi kesalahan saat logout.",
        confirmButtonText: "OK",
      });
    });
};
