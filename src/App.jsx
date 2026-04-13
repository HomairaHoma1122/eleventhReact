import { useEffect, useState } from "react";
import Testing from "./My";

function App() {
  const [weatherDt, getdt] = useState(null);
  useEffect(()=>{
    async function getWeather(){
      const weather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ghazni&appid=684418efa9274f3a6491868b0271123");
       const natija = await weather.json();
       getdt(natija);
    }
    getWeather();
  }, []);


  if(!weatherDt){
    return (
      <h1
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          color: "red",
          textAlign: "center"
                }}
      >plaese wait a min...</h1>
    )
  }
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Testing />
      <div style={{


        width: "50%",
        height: "60vh",
        padding: "20px",
        border: "2px dotted blue",
        borderRadius: "12px",
        justifyContent: "center",
        TextItems: "center",
        margin: "32px auto"
      }}>
        {weatherDt.weather[0].main ==="Clear" ? <Sun />  : weatherDt.weater[0].main === ""}
      <h1 
      style={{
                fontSize: "40px",
                textAlign: "center",
                color: "green"
            }}
      >In the name of Allah</h1>


      </div>
    </div>
  )
}
export default App;