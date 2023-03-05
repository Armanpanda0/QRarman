
    function updateRemainingChars() {
        var remainingChars = document.getElementById("remainingChars");
        var textInput = document.getElementById("textInput");
        remainingChars.textContent = textInput.maxLength - textInput.value.length;
    }
    
    function generateQR() {
        const downloadBtn = document.getElementById("download");
        const copyBtn = document.getElementById("copy");
        var qrCanvas = document.getElementById("qrCanvas");
        qrCanvas.style.display = "block";
        copyBtn.style.display = "inline-block";
        downloadBtn.style.display = "inline-block";
        qrCanvas.innerHTML = "";
        var qrCode = new QRCode(qrCanvas, {
            text: document.getElementById("textInput").value,
            width: 350,
            height: 350,
            colorDark : document.getElementById("textColor").value,
            colorLight : document.getElementById("backgroundColor").value,
            correctLevel : QRCode.CorrectLevel.H
        });
    }


    function downloadQR() {
        var qrCanvas = document.getElementById("qrCanvas");
        html2canvas(qrCanvas).then(function(canvas) {
            var link = document.createElement("a");
            link.download = "qrcode.png";
            link.href = canvas.toDataURL("image/png");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    function copyQR() {
      try {
        var qrCanvas = document.getElementById("qrCanvas");
        html2canvas(qrCanvas).then(function(canvas) {
            canvas.toBlob(function(blob) {
                navigator.clipboard.write([
                    new ClipboardItem({ "image/png": blob })
                ]).then(function() {
                    console.log("Image copied to clipboard with status: ok");
                    alert("QR Code copied to clipboard!");
                }, function(error) {
                    console.error("Unable to copy QR Code to clipboard: ", error);
                    alert("Something went wrong while copying. Instead, you can right-click the image and copy it manually");
                });
            }, "image/png");
        });
      } catch(error) {
        alert("Error when generating a QR Code, please enter appropriate symbols.")
      }
    }

