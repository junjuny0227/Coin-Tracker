import { useEffect, useState } from "react";
import "./tailwind.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://api.coinpaprika.com/v1/tickers").then((response) => {
        setCoins(response.data);
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen font-mono bg-cover "
      style={{
        backgroundImage:
          "url('https://www.gi-de.com/corporate/_processed_/3/1/csm_Header_fuer_Coin_Produktseite_879ba68ace.jpg')",
      }}
    >
      <h1 className="text-7xl font-black mb-5 bg-white border-4 border-black rounded-lg pl-1.5 pb-2.5">
        Coin Tracker {loading ? "" : `(${coins.length})`}
      </h1>
      {loading ? (
        <p className="text-2xl font-block">Loading...</p>
      ) : (
        <select className="text-2xl font-block w-1/3 border-2 border-black rounded-lg outline-none">
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
