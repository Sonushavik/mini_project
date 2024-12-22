import { error } from 'console';
import { stdin } from 'process';
import readline from 'readline/promises';
import chalk from 'chalk';


// const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f8bc2575714d61ef6f5fb41e9ae6c09`;

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

const getWeather = async (city) => {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f8bc2575714d61ef6f5fb41e9ae6c09&units=metric`;
        
        try {
                const response = await fetch(weatherUrl);
                if(!response.ok){
                        throw new error ("CIty not found. Please check the city name");
                }
                const weatherData = await response.json();
                // console.log(weatherData);

                console.log(chalk.green.bgRed('\n Weather information: '));

                console.log(`City: ${weatherData.name}`);
                console.log(`Temprature: ${weatherData.main.temp}`);
                console.log(`Description: ${weatherData.weather[0].description}`);
                console.log(`Humidity: ${weatherData.main.humidity}%`);
                console.log(`Wind Speed: ${weatherData.wind.speed}`);

        } catch (error) {
                console.error(error)
        }
}




const city = await rl.question(chalk.green('Enter a city name to get its weather:'));
await getWeather(city);
rl.close();