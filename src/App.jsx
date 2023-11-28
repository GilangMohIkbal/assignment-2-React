import { useEffect, useState } from "react";
import "./App.css";
import MenuCard from "./components/MenuCard";

function App() {
  const [money, setMoney] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = Object.keys(data.rates)
          .filter(
            (currency) =>
              currency === "CAD" ||
              currency === "IDR" ||
              currency === "JPY" ||
              currency === "CHF" ||
              currency === "EUR" ||
              currency === "GBP"
          )
          .reduce((obj, key) => {
            obj[key] = data.rates[key];
            return obj;
          }, {});

        return {
          filtered,
        };
      })
      .then((result) => {
        // setMoney(result.filtered);
        const data = Object.entries(result.filtered).map(([name, value]) => ({
          name,
          value: parseFloat(value),
        }));
        setMoney(data);
      });
  }, []);

  return (
    <>
      <h1 className="fw-bold text-success mb-5">Display Rate Currency</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th> Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {money.map((data) => (
            <MenuCard key={data.value} menu={data}></MenuCard>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
