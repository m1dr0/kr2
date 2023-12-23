import { SelectComponent } from "./components/selectComponent.js";
import { WeatherComponent } from "./components/weatherComponent.js";
import { render, RenderPosition } from "./render.js";
import { WeatherService } from "./WeatherService.js";

const weatherBody = document.querySelector('.weather-widget');
const weatherService = new WeatherService();

render(new SelectComponent(), weatherBody, RenderPosition.BEFOREEND);

const weathers = weatherService.getWeather();
const select = document.querySelector('select');

select.addEventListener('change', () => {
    removeWeatherElement();
    weathers.forEach(weather => {
        if (select.value == weather.city) {
            const weatherComponent = new WeatherComponent({ id: weather.id, title: weather.title, city: weather.cityRus });
            render(weatherComponent, weatherBody);
        }
    });
});

function removeWeatherElement() {
    const weatherElement = document.getElementById('weather-result');

    if (weatherElement) {
        weatherElement.remove();
    }
}