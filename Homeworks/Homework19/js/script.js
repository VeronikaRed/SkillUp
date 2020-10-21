// async function getGitPhoto(userName) {
//     let url = `https://api.github.com/users/${userName}`;
//     let response = await fetch(url);
//     let content = await response.json();
//     let img = document.createElement("img");
//     img.setAttribute("src", content.avatar_url);
//     document.body.prepend(img);
// }
// getGitPhoto("VeronikaRed");


// async function getFakeJson(target) {
//     let url = `https://jsonplaceholder.typicode.com/${target}`;
//     let response = await fetch(url);
//     let content = await response.json();
//     content.filter(el => el.id < 10)
//         .forEach(element => console.log(element));
// }
// getFakeJson("posts");


async function getMeteo() {
    
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';
    let response = await fetch(url);
    let content = await response.json();
    console.log(content)
    createDate(content.dt);
    createMeteoInformation(content.main);
    createPhrase(content.weather[0].description);
    createWindInfo(content.wind);

    function addToHtml(content, htmlClass, parent){
        let div = document.createElement("div");
        div.innerHTML = `${content}`;
        div.classList.add(`${htmlClass}`);
        parent.append(div);
    }
    function addPicture(url){
        let picture = document.createElement("img");
        picture.setAttribute("src", url);
        second_section.prepend(picture);
    }
    addPicture("http://openweathermap.org/img/w/10d.png")

    function createDate(data){
        // let dateFormat = require('dateformat');

        // let options = {month: 'short', day: 'numeric', year: 'numeric', weekday: 'short'};
        // // let opt = {hour: "numeric", minute: "numeric"}


        // let today  = new Date(data);
        // let fullTime = dateFormat(today, "mmm, d, yyyy, ddd");
        // addToHtml(fullTime, "clock", first_section);  
        // \\

        
        // let h = today.getHours();
        // let m = today.getMinutes();
        // let time = h + ":" + m;

        // addToHtml(time, "time", first_section);


        // let fullTime = today.toLocaleDateString("en-US", options); 
        // addToHtml(fullTime, "clock", first_section);  
    }




    function createMeteoInformation(meteoData){
        createHumidity(meteoData.humidity);
        createPressure(meteoData.pressure);
        createTemp(meteoData.temp);
        createFeelsLike(meteoData.feels_like);

    }
    function createHumidity(data){
        addToHtml(`Humidity: ${data} %`, "casual", first_section);
    }
    function createPressure(data){
        addToHtml(`Pressure: ${data} hPa`, "casual", first_section);
    }
    function createTemp(data){
        addToHtml(`${Math.round(data)} &#8451`, "temperature", second_section);
    }
    function createFeelsLike(data){
        let feels = `Feels Like: ${Math.round(data)} &#8451`;
        addToHtml(feels, "casual", second_section);
    }


    function createWindInfo(data){
        addToHtml(`Wind: ${data.speed} km/h SSE`, "wind", first_section);
    }




    function createPhrase (data){
        addToHtml(data, "phrase", second_section)
    }
}
getMeteo();

