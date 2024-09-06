import { useEffect, useState } from "react";
import "./tailwind.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinpaprika.com/v1/tickers").then((response) => {
      setCoins(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Coin Tracker ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
