const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   let sum = 0;

    
      function getNumber () {
        readline.question('Enter a number, or "stop" to exit: ', num => {
            if (num == 'stop') {
                readline.close();
                console.log("The sum is : "+ sum);
            } else {
                sum += parseInt(num);
                getNumber();
            }
        });
    }

    getNumber();