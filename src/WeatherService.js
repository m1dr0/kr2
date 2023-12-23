import { weather } from "./mock/weather.js";

export class WeatherService {
    #boardWeather = weather;

    getWeather() {
        return this.#boardWeather;
    }
}