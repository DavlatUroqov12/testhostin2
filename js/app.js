var quotes = [
    "Real Madrid",
    "PSG",
    "Juventus",
    "Barcelona",
    "AC Milan",
    "Inater Milan",
    "Bayern Munich",
    "Dortmund Borussiya",
    "Al Nassr",
    "Al Hilal",
    "Atletico",
    "Chelsi",
    "Manchester United",
    "Manchester City",
    "Napoli",
    "Liverpool",
    "Roma",
    "Totenhem",
    "Arsenal",
    "Porto",
    "Manchester United",
    "Liverpool",
    "Real Madrid",
    "Real Madrid",
    "PSG",
    "Bayern",
    "Chelsea",
    "Man City",
    "Sevilia",
    "Benfica",
  ];
  
  let quoteText = document.querySelector(".quote_text");
  
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex]
    quoteText.innerHTML = '"' + quote + '"'
  }