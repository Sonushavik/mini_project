import https from 'https';
import chalk from 'chalk';

const getJoke = () =>{
        const url = 'https://icanhazdadjoke.com/slack'
        
        https.get(url, (response) => {
                let data = "";
                response.on('data', (chunk) => {
                        data += chunk
                });

                response.on('end', () => {
                        const joke = JSON.parse(data);
                        console.log(joke.attachments[0].text)
                })
        }).on('error', (err) => {
                console.log(chalk.green('Error fetching joke', err.message))
        })
}

getJoke();