async function getGitPhoto(userName) {
    let url = `https://api.github.com/users/${userName}`;
    let response = await fetch(url);
    let content = await response.json();
    let img = document.createElement("img");
    img.setAttribute("src", content.avatar_url);
    document.body.prepend(img);
}
getGitPhoto("VeronikaRed");

async function getFakeJson(target) {
    let url = `https://jsonplaceholder.typicode.com/${target}`;
    let response = await fetch(url);
    let content = await response.json();
    content.filter(el => el.id < 10)
        .forEach(element => console.log(element));
}
getFakeJson("posts");


function createDiv(content, htmlClass){
    let div = document.createElement("div");
    div.innerHTML = `${content}`;
    div.classList.add(`${htmlClass}`);
    return div;
}

function appendToElement(content, htmlClass, parent){
    parent.append(createDiv(content, htmlClass));
}

function prependToElement(content, htmlClass, node){
    node.after(createDiv(content, htmlClass));
}

function addPicture(url){
    let picture = document.createElement("img");
    picture.setAttribute("src", url);
    second_section.prepend(picture);
}

function createDate(data){
    let dateFormat = require('dateformat');
    let today = new Date(data);
    let fullTime = dateFormat(today, "mmm d, yyyy - ddd");
    appendToElement(fullTime, "clock", first_section);  
    let time = dateFormat(today, "h:MM TT");
    appendToElement(time, "time", first_section);
}

function createMeteoInformation(meteoData){
    createHumidity(meteoData.humidity);
    createPressure(meteoData.pressure);
    createTemp(meteoData.temp);
    createFeelsLike(meteoData.feels_like);
}

function createHumidity(data){
    let humidity = `Humidity: ${data} %`;
    appendToElement(humidity, "casual", first_section);
}

function createPressure(data){
    let pressure = `Pressure: ${data} hPa`;
    appendToElement(pressure, "casual", first_section);
}

function createTemp(data){
    let temp = `${Math.round(data)} &#8451`;
    appendToElement(temp, "temperature", second_section);
}

function createFeelsLike(data){
    let feels = `Feels Like: ${Math.round(data)} &#8451`;
    appendToElement(feels, "casual", second_section);
}

function createWindInfo(data){
    let wind = `Wind: ${data} km/h SSE`;
    degToCard(data);
    appendToElement(wind, "wind", first_section);
}

function createPhrase (data){
    appendToElement(data, "phrase", second_section)
}

function degToCard(deg){
    if (deg>11.25 && deg<33.75){
      return "NNE";
    }else if (deg>33.75 && deg<56.25){
      return "ENE";
    }else if (deg>56.25 && deg<78.75){
      return "E";
    }else if (deg>78.75 && deg<101.25){
      return "ESE";
    }else if (deg>101.25 && deg<123.75){
      return "ESE";
    }else if (deg>123.75 && deg<146.25){
      return "SE";
    }else if (deg>146.25 && deg<168.75){
      return "SSE";
    }else if (deg>168.75 && deg<191.25){
      return "S";
    }else if (deg>191.25 && deg<213.75){
      return "SSW";
    }else if (deg>213.75 && deg<236.25){
      return "SW";
    }else if (deg>236.25 && deg<258.75){
      return "WSW";
    }else if (deg>258.75 && deg<281.25){
      return "W";
    }else if (deg>281.25 && deg<303.75){
      return "WNW";
    }else if (deg>303.75 && deg<326.25){
      return "NW";
    }else if (deg>326.25 && deg<348.75){
      return "NNW";
    }else{
      return "N"; 
    }
  }

  function addPhoneInfo(){
    let text = "<i class='far fa-clock'></i> SUN 8:30 AM &nbsp;&nbsp;&nbsp; <i class='fas fa-battery-quarter'></i> 27%";
    let node = document.getElementsByClassName("clock")[0];
    prependToElement(text, "phoneInfo", node);
  }

  function getReload(){
    let text = "Jun 13 11:02 PM <i class='fas fa-sync-alt event'></i>";
    let node = document.querySelector(".phrase");
    prependToElement(text, "phoneInfo", node);

    document.querySelector(".event").addEventListener('click', ()=>{
      first_section.innerHTML = "";
      second_section.innerHTML = "";
      getMeteo()
    });
  }

async function getMeteo() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';
    let response = await fetch(url);
    let content = await response.json();
    createDate(content.dt);
    createMeteoInformation(content.main);
    createPhrase(content.weather[0].description);
    createWindInfo(content.wind.speed);
    addPicture("http://openweathermap.org/img/w/10d.png");
    addPhoneInfo();
    getReload();
}

getMeteo();

