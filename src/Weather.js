import React from "react";
import moment from "moment";
import "./Weather.css";

function Weather(props) {
  let bgImage = null;
  const weatherName = props.weatherDetails.weather[0].main;
  if (weatherName === "Clouds") {
    bgImage = "https://i.pinimg.com/originals/64/8f/0f/648f0f2dad03c3a0adbbda57c7df7e60.gif";
  } else if (weatherName === "Clear") {
    bgImage =
      "https://images.all-free-download.com/images/graphiclarge/dark_blue_sky_199085.jpg";
  } else if (weatherName === "Drizzle") {
    bgImage =
      "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/rain-drops-on-window-1827098_1920.jpg";
  } else if (weatherName === "Rain") {
    bgImage =
      "https://images.unsplash.com/photo-1546864909-fb2cb357c00a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
  } else if (weatherName === "Sunny") {
    bgImage = "https://i.ebayimg.com/images/g/vaoAAOSwa9Fa-Jcj/s-l500.jpg";
  } else if (weatherName === "Thunderstorm") {
    bgImage =
      "https://www.animatedimages.org/data/media/42/animated-thunderstorm-image-0033.gif";
  }

  return (
    <div className="flex-container ">
      <div className="flex-container-visualization bg-img1" style={{ backgroundImage: `url(${bgImage})`}}>
        <div className="temp">
          {props.weatherDetails.main.temp}&deg;C
        </div>
        <div className="other">
          <div className="place">
            {props.weatherDetails.name}
          </div>
          <div className="time-day-date">
            <div className="time">
              {moment().format("h:mm a")}
            </div>
            <div className="day">{moment().format("dddd")}</div>
            <div className="date">
              {moment().format("MMM D, YYYY")}
            </div>
          </div>
        </div>
        <div className="icon-name">
          <div className="icon">icon</div>
          <div className="name">
            {props.weatherDetails.weather[0].main}
          </div>
        </div>
      </div>

      <div className="flex-container-weatherdetails">
        <div className="heading">Weather details</div>
        <div className="details">
          <div className="detailvalue">
            <div>Weather: </div>
            <div>{props.weatherDetails.weather[0].description}</div>
          </div>
          <div className="detailvalue">
            <div>Humidity: </div> 
            <div>{props.weatherDetails.main.humidity} %</div>
          </div>
          <div className="detailvalue">
            <div>Pressure: </div>
            <div>{props.weatherDetails.main.pressure}</div>
          </div>
          <div className="detailvalue">
            <div>Speed: </div>
            <div>{props.weatherDetails.wind.speed}</div>
          </div>
          <div className="detailvalue">
            <div>Min temp: </div>
            <div>{props.weatherDetails.main.temp_min} &deg;</div>
          </div>
          <div className="detailvalue">
            <div>Max temp: </div>
            <div>{props.weatherDetails.main.temp_max} &deg;</div>
          </div>
          <div className="detailvalue">
            <div>Sunrise: </div>
            <div>{" "}
            {new Date(
              props.weatherDetails.sys.sunrise * 1000
            ).toLocaleTimeString("en-IN")}</div>
          </div>
          <div className="detailvalue">
            <div>Sunset: </div>
            <div>{" "}
            {new Date(
              props.weatherDetails.sys.sunset * 1000
            ).toLocaleTimeString("en-IN")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
