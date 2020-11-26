import { createDate } from '../components/createDate';
import { createPhrase } from '../components/createPhrase';
import { createWindInfo } from '../components/createWindInfo';
import { createWeatherInformation } from '../components/createWeatherInformation';
import { addPhoneInfo } from '../components/addPhoneInfo';
import { addPicture } from '../components/addPicture';
import { getReload } from '../components/getReload';

export async function getWeather() {
    let url =
        'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';
    let response = await fetch(url);
    let content = await response.json();
    createDate(content.dt);
    createWeatherInformation(content.main);
    createPhrase(content.weather[0].description);
    createWindInfo(content.wind.speed);
    addPicture('http://openweathermap.org/img/w/10d.png');
    addPhoneInfo();
    getReload();
}
