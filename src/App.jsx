import { useEffect } from "react";
import CardComponent from "./components/Card";
import Search from "./components/Search";

function App() {
  //const [data, setData] = useState(null);

  //useEffect(() => {
  // const fetchData = async () => {
  // const response = await fetch(
  //   "https://api.openweathermap.org/geo/1.0/direct?q=London&appid=6830669f052c009271d976fceb83af24"
  // );
  //const data = response.json();
  //setData({ ...data });
  //};

  //fetchData();
  //}, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-yellow-300 to to-blue-400">
      <div className="w-full h-full flex-col justify-center flex gap-5 flex-wrap">
        <div className="flex-col items-center flex gap-5">
          <Search />
        </div>
        <div className="flex-col items-center flex gap-5">
          <div className="flex gap-5 flex-wrap">
            <CardComponent title="Location:" description={"New York,NY"} />
            <CardComponent title="Temperature:" description={"65°F"} />
          </div>
          <div className="flex gap-5 flex-wrap">
            <CardComponent title="Today's Forecast:" isButtonEnabled={true} />
            <CardComponent title="Cloudy:" description="High: 77° | Low: 65°" />
            <CardComponent
              title="Humidity 84%"
              description="The dew point is 69% right now."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
