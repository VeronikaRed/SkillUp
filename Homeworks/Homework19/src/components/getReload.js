import { getWeather } from './getWeather';
import { prependToElement } from '../components/prependToElement';

export function getReload() {
    let text = "Jun 13 11:02 PM <i class='fas fa-sync-alt event'></i>";
    let node = document.querySelector('.phrase');
    prependToElement(text, 'phoneInfo', node);

    document.querySelector('.event').addEventListener('click', () => {
        firstSection.innerHTML = '';
        secondSection.innerHTML = '';
        getWeather();
    });
}
