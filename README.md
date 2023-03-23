# QRarman.
<!DOCTYPE html>
<html>
<head>
	<title>LOREN QR Code Generator</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
</head>
  
  <style>
    
  </style>
<body>
	<div class="header">
		<h1>Arman QR_Code Generator</h1>
	</div>
  <div class="widthlimit" style="width: 70%; margin-left: 15%;">
    <div class="form-group">
      <label for="textColor">Dark color:</label>
      <input type="color" id="textColor" name="textColor" value="#000000">
      <label for="backgroundColor">Light color:</label>
      <input type="color" id="backgroundColor" name="backgroundColor" value="#ffffff">
    </div>
    <div>
      <label for="textInput">Enter your text:</label><br>
      <textarea id="textInput" name="textInput" rows="4" cols="50" maxlength="1024" oninput="updateRemainingChars()" resize=none placeholder="Emojis not allowed"></textarea><br>
      <span id="remainingChars">1024</span> characters remaining
    </div>
    <button id="generateBtn" onclick="generateQR()">Generate</button><br><br>
        
    <div id="qrCanvas"></div>
    
    <button id="download" onclick="downloadQR()">Download QR Code</button>
    <button id="copy" onclick="copyQR()">Copy QR Code</button>
  </div>

<div class="footer">
		<p>Made with ❤️ by LOREN</p>
    <div style="display: flex; margin-top: 20px; justify-content: center;">
      <a href="https://www.linkedin.com/in/arman-panda-615133235/"><p>My_linkedin_Page</p></a>
      <p style="font-size: 18px; font-weight: bold">  ·  </p>
      <a href="https://github.com/Armanpanda0"><p>My gitHub</p></a>
    </div>
</div>

<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="sty.js"></script>
</body>
</html>
