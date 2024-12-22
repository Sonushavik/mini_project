import readline from'readline';
import  fs from 'fs'
import { error } from 'console';

const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
})

const fileCreation = () => {
        rl.question('Enter your filename: ', (fileName) => {
                rl.question("Enter the Content for your File: ", (content) => {
                        fs.writeFile(`${fileName}.txt`, content, (error) => {
                                if(error){
                                        console.error(`Error writing the file: , ${err.message}`)
                                }else{
                                        console.log(`file "${fileName}.txt" created successfully!`);
                                }
                                rl.close();
                        })

                } )
        })
}

fileCreation()