import https from "https";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertCurrency = (rate, amount) => {
  return rate * amount;
};

const url =
  " https://v6.exchangerate-api.com/v6/5a741600eba5cb8daa82ef2f/latest/USD";

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
//     console.log(rates);

    rl.question("Enter the amount in USD", (amount) => {
      rl.question(
        "Enter the target currency (eg., INR, EUR, NPR): ",
        (currency) => {
          const rate = rates[currency.toUpperCase()];

          if (rate) {
            console.log(
              `${amount} USD is approximatately ${convertCurrency(
                amount,
                rate
              )} ${currency}`
            );
          } else {
            console.log("Invalid Currecncy");
          }
        }
      );
    });
  });
});
