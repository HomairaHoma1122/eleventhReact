import { useEffect, useState } from "react";
import Testing from "./My";
import { Cloud, Sun } from "lucide-react";

function App() {
  const [weatherDt, getdt] = useState(null);


  const [hour, setHours]= useState("");
  const [minute, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");


const [sunHour, setSunRHours]= useState("");
  const [sunMinute, setSunRMinutes] = useState("");
  const [sunriseSeconds, setSunRSeconds] = useState("");

  useEffect(()=>{
    async function getWeather(){
      const weather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ghazni&unit=metric&appid=982b6b9545eeff845233ab0fb88f85dc");
       const natija = await weather.json();
       getdt(natija);
       const sunRiseDate = new Date(natija.sys.sunrise * 1000);
       const sunRHour = sunRiseDate.setHours();
       const sunRMinut = sunRiseDate.setMinutes();
       const sunRSecond = sunRiseDate.setSeconds();
       setHours(sunRHour);
       setMinutes(sunRMinut);
       setSeconds(sunRSecond);

       sunSetDate = new Date(natija.sys.sunset*1000);
       const sunHour = sunSetDate.setSunRHours();
       const sunMinute = sunSetDate.setSunRMinutes();
       const sunriseSeconds = sunSetDate.setSunRSeconds();
       setSunRHours(sunHour);
       setSunRMinutes(sunMinute);
       setSunRSeconds(sunRMinute)
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
        height: "40vh",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "12px",
        justifyContent: "center",
        TextItems: "center",
        margin: "32px auto"
      }}>
        
      <h1 
      style={{
                fontSize: "20px",
                textAlign: "center",
                color: "green"
            }}
      >Information of Weather</h1>

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          
            color: "gray"
          }}>
        {weatherDt.weather[0].main ==="Clear" ? (<Sun />) 
        : weatherDt.weather[0].main === "Clouds" ? (<Cloud />)
        : weatherDt.weather[0].main === "rain" ? (<Rain />) :
        weatherDt.weather[0].main
      }
      </div>
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        
        <p style={{
          display: "flex",
          gap: "5px"
        }}>
          <span>Temprature</span>
          <span>{weatherDt.main.temp}</span>
        </p>
        <p style={{
          display: "flex",
          gap: "5px"
        }}>
          <span>Humidity</span>
          <span>{weatherDt.main.humidity} %</span>
        </p>
      </div>


      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        
        <p style={{
          display: "flex",
          gap: "12px"
        }}>
          <span>Sunset</span>
          <span>{hour}:{minute}:{seconds}</span>
        </p>

        <p>
          <span>Sunrise</span>
          <span>{sunHour}:{sunMinute}:{sunriseSeconds}</span>
        </p>
      </div>
      </div>
    </div>
  )
}
export default App;