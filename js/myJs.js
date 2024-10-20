document.getElementById("scanButton").addEventListener("click", function () {
  // Menampilkan video untuk scan
  document.getElementById("scanner-container").style.display = "block";

  // Memulai QuaggaJS
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#scanner"), // Elemen video di mana kamera ditampilkan
      },
      decoder: {
        readers: ["code_128_reader"], // Tipe barcode yang akan discan
      },
    },
    function (err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start(); // Mulai scanning
    }
  );

  // Event listener ketika barcode terdeteksi
  Quagga.onDetected(function (result) {
    alert("Barcode detected: " + result.codeResult.code); // Tampilkan kode barcode
    Quagga.stop(); // Hentikan setelah scan selesai
    document.getElementById("scanner-container").style.display = "none"; // Sembunyikan video
  });
});
