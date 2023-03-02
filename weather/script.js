let weather = {
  apiKey: "1bf7a4a3f75503d6678cdb40a7d25053",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    if (name == "Gaighata")
    document.querySelector(".city").innerText = "Weather in " + "Gutri, Gaighata";
    else
    document.querySelector(".city").innerText = "Weather in " + name;

    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

   
    document.querySelector(".description").innerText = description;



    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");

    if(description=="clear sky")
    document.body.style.backgroundImage = "url('clear.jpg')"
     else if (description=="haze")
       document.body.style.backgroundImage = "url('haze.jpg')";
        else if (description=="broken clouds")
          document.body.style.backgroundImage = "url('broken.jpg')";
          else  if (description=="overcast clouds")
             document.body.style.backgroundImage = "url('overcast.jpg')";
             else if (description=="mist")
                document.body.style.backgroundImage = "url('mist.png')";
                else if (description=="scattered clouds")
                   document.body.style.backgroundImage =
                     "url('scattered.jpg')";
                     else if (description == "scattered clouds")
                       document.body.style.backgroundImage =
                         "url('scattered.jpg')";
                     else if (description == "moderate rain")
                       document.body.style.backgroundImage = "url('mrain.jpg')";
                     else if (description == "few clouds")
                       document.body.style.backgroundImage = "url('few.jpg')";
                     else
                       document.body.style.backgroundImage =
                         "url('background.jpg')";
    // document.body.style.backgroundImage =
      // "url('https://source.unsplash.com/1600x900/?  " + name + " ')";
      // "url('  " + name + " ')";
      
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Gaighata");

