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
    
		/* Set default font-family */
    html, body {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    /* Header */
    .header {
      background-color: #1E90FF;
      color: #fff;
      padding: 30px;
      text-align: center;
      margin-bottom: 7em;
      border-radius: 10px;
    }
    
    .header h1 {
      font-size: 48px;
      margin: 0;
    }
    
    /* Form */
    .form-group {
      margin-bottom: 20px;
      display: flex;
    }
    
    label {
      margin-left: 10px;
      display: block;
      margin-bottom: 5px;
      margin-right: 10px;
    }
    
    /* Colors */
    #textInput {
      background-color: #F5F5F5;
      border: none;
      border-radius: 20px;
      color: #333;
      font-size: 16px;
      height: 200px;
      margin-bottom: 10px;
      padding: 10px;
      resize: none;
      width: 100%;
    }
    
    #textColor, #backgroundColor {
      width: 50px;
      height: 50px;
    }
    
    .remaining-chars {
      color: #999;
      font-size: 14px;
      margin-top: 5px;
    }
    
    /* Generate Button */
    #generateBtn {
      margin-top: 15px;
      display: inline-block;
      background-color: #1E90FF;
      border: none;
      border-radius: 50px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      padding: 16px 32px;
      transition-duration: 0.4s;
    }
    
    #generateBtn:hover {
      background-color: #00BFFF;
    }
    
    /* QR Code Canvas */
    #qrCanvas {
      background-color: #fff;
      border-radius: 20px;
      display: none;
      height: 400px;
      margin-bottom: 20px;
      overflow: hidden;
      width: 100%;
    }
    
    
    /* Footer */
    .footer {
      margin-top: 50px;
      height: 125px;
      background-color: #F5F5F5;
      padding: 20px;
      text-align: center;
    }
    
    .footer p {
      color: #333;
      font-size: 16px;
      margin: 0;
    }
    
    /* Rounded buttons */
    button {
      display: none;
      background-color: #fff;
      border: 1px solid #1E90FF;
      border-radius: 50px;
      color: #1E90FF;
      cursor: pointer;
      font-size: 16px;
      margin: 4px;
      padding: 12px 24px;
      transition-duration: 0.4s;
    }
    
    button:hover {
      background-color: #1E90FF;
      color: #fff;
    }
	
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
