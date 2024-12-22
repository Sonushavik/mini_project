import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1:Add a Task");
  console.log("\n2:View Task");
  console.log("\n3:Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
 option = parseInt(option, 10);
  if(option === 1) {
    rl.question("Enter the Task: ", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showMenu();
    });
  } else if(option === 2) {
    console.log("\nYour Todo Lists");
    todos.forEach((task, index) => {
      console.log(`${index + 1}.${task}`);
    });
    showMenu();
  } else if(option === 3) {
    console.log("Good Byee");
    rl.close();
  } else {
    console.log("Invelid option please try again");
    showMenu();
  }
};

showMenu();
