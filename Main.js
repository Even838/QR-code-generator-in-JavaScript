    function generateQRCode() {
      var link = document.getElementById('qr').value;
      var qrel = document.getElementById('qrc');
      var qr = new QRCode(qrel, link);

      // Criar um link de download
      var qrPngDataUrl = qrel.querySelector('img').src;
      var downloadLink = document.createElement('a');
      downloadLink.href = qrPngDataUrl;
      downloadLink.download = 'qrcode.png';
      downloadLink.textContent = 'Baixar QR Code';
      document.body.appendChild(downloadLink);
                                }
