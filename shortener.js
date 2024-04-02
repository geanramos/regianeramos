function shortenUrl() {
  var longUrl = document.getElementById("longUrl").value;

  // Gerar um identificador único (neste exemplo, usaremos a data atual)
  var uniqueId = Date.now().toString();

  // Armazenar a URL original e a URL encurtada no banco de dados
  var database = JSON.parse(localStorage.getItem("urlDatabase")) || {};
  database[uniqueId] = longUrl;
  localStorage.setItem("urlDatabase", JSON.stringify(database));

  // Construir a URL encurtada
  var shortenedUrl = window.location.href + "#" + uniqueId;

  // Exibir a URL encurtada na página
  document.getElementById("shortenedUrl").textContent = shortenedUrl;
}

// Verificar se há uma URL encurtada no hash da página e redirecionar, se houver
window.onload = function() {
  var hash = window.location.hash.substring(1);
  var database = JSON.parse(localStorage.getItem("urlDatabase")) || {};
  var longUrl = database[hash];
  if (longUrl) {
    window.location.href = longUrl;
  }
};
