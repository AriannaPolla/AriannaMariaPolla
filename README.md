# TestWebDesign

prove web design creAZIONE SITO 

SCOPO DEL REPOSITY

facciamo _repository__ e tante prove


https://glowing-travesseiro-1f6606.netlify.app


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Responsive</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    /* Style della chat */
    .chat {
      width: 100%;
      height: 400px;
      max-width: 500px;
      border: 1px solid #ccc;
      overflow-y: scroll;
      padding: 10px;
      margin: auto;
    }
    
    /* Style delle conversazioni */
    .chat-message {
      margin: 10px 0;
    }
    
    .chat-message p {
      background-color: #f1f1f1;
      padding: 10px;
      border-radius: 10px;
      display: inline-block;
      max-width: 60%;
    }
    
    .chat-message.me p {
      background-color: #0084ff;
      color: #fff;
      align-self: flex-end;
    }
    
    /* Style dell'input per la chat */
    .chat-input {
      display: flex;
      margin-top: 10px;
    }
    
    .chat-input input {
      flex-grow: 1;
      padding: 10px;
      border: none;
      border-radius: 10px 0 0 10px;
      font-size: 16px;
    }
    
    .chat-input button {
      background-color: #0084ff;
      color: #fff;
      border: none;
      border-radius: 0 10px 10px 0;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    
    /* Media query per dispositivi con larghezza <= 768px */
    @media (max-width: 768px) {
      .chat {
        height: 300px;
      }
    }
  </style>
</head>
<body>
  <div class="chat">
    <div class="chat-message me">
      <p>Ciao, come stai?</p>
    </div>
    <div class="chat-message">
      <p>Ciao, sto bene grazie. E tu?</p>
    </div>
    <div class="chat-message me">
      <p>Bene anche io, grazie!</p>
    </div>
  </div>
  
  <div class="chat-input">
    <input type="text" placeholder="Scrivi un messaggio...">
    <button>Invia</button>
  </div>
</body>
</html>
