import { createHumidity } from '../components/createHumidity';
import { createPressure } from '../components/createPressure';
import { createTemp } from '../components/createTemp';
import { createFeelsLike } from '../components/createFeelsLike';

export function createWeatherInformation(weatherData) {
    createHumidity(weatherData.humidity);
    createPressure(weatherData.pressure);
    createTemp(weatherData.temp);
    createFeelsLike(weatherData.feels_like);
}
