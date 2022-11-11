fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((data) => data.json())
  .then((item) => {
    const btcUSD = "$ " + item.bpi.USD.rate;
    const targetElement = document.getElementById("btcText");
    targetElement.innerHTML = btcUSD;
  });
