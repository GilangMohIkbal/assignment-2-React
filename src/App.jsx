import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [money, setMoney] = useState([])
  const [fit, setFit] = useState([
    {
      id: 1,
      name: "tes",
    },
    {
      id:2,
      name: 't'
    }
  ])

  useEffect(()=>{
    fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${import.meta.env.VITE_API_KEY}`)
    .then(res=>res.json())
    .then(data=> {
      const filtered = Object.keys(data.rates).filter(currency => currency === 'CAD' || currency === 'IDR' || currency === 'JPY' || currency === 'CHF' || currency === 'EUR' || currency === 'GBP')
      return filtered
      // reduce((obj,key)=> {
      //   obj[key] = data.rates[key]
      //   return obj
      // }, {})
      // return {
      //   filtered
      // }
    })
    .then(result=> setMoney(result))
     
  }, [])

  return (
  
    <>
    <h1>Display Rate Currency</h1>
    {
      console.log('P',money)
    }
    {
      console.log('t', fit[0])
    }
    <table>
      <thead>
        <tr>
        <th> Currency</th>
        <th>We Buy</th>
        <th>Exchange Rate</th>
        <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
       {/* {
        money.map(data=> <tr><td>{data}</td></tr>)
       } */}
      </tbody>
    </table>
    </>
  )
}

export default App
