//lap1 Functions
const youRock = function(name){

    return 'You rock '+name;
    };
    
    const square = function (num1){
     return num1 * num1 ;
    };
     const cube = function (numberA){
    return Math.pow(numberA,3) ;
     };
    
     const toTheFourth = function(numberB){
    return Math.pow(numberB,4);
     };
     // Lab: RainDrop Function
     const rainDrop = function (numberD){
        
      let result ;       
           result += numberD % 3 === 0 ? 'Pling':'';
           result += numberD % 5 === 0 ? 'Plang':'';
           result += numberD % 7 === 0 ? 'Plong':'';
      return result ? result : numberD;
      };
    //Lab: FizzBuzz Function
    
    const fizzBuzz = function(numberC){
      if (numberC % 3 === 0 && numberC % 5=== 0){
          return 'fizzBuzz';}
    else if (numberC % 3 === 0){
       return 'Fizz';
    
    }else if(numberC % 5 === 0){
    return 'Buzz';
    }else {
    return numberC;
    }
    };