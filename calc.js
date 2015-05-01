
     var calc = function(input){

        var numArray = input.split(',');

        var operator = numArray.pop();

        var result = numArray.reduce(function(a, b){
          if (operator === '+'){
            return a*1 + b*1;
           } else if (operator === '-'){
           return  a*1 - b*1;
           } else if (operator === '*'){
           return a*1 * b*1;
           } else if (operator === '/'){
           return a*1 / b*1;
           }
       });
       return result;
     };
     module.exports = calc;
     //turns the above function into a module/library
