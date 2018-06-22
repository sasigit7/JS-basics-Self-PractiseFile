//:::::::::::::::::::::::WELCOME TO JAVASCRIPT::::::::::::::::::::::::::://

                     console.log("Hello World!!!");

//:::::::::::::::::::::::VARIABLES AND DATA TYPES:::::::::::::::::::::::://

    var firstName = "Shashi"; // String
    console.log(firstName);

    var lastName = "Mandalozu"; // String
    var age = 35; // Number

    var fullAge = true; // Boolean
    console.log(fullAge);

    var job; // Value not assigned or undefined
    console.log(job);

    job = "Manager"; // No need to use keyword VAR again when assigning value later
    console.log(job);


//:::::::::::::::::::::::::::VARIABLE NAMING RULES:::::::::::::::::::::::::://

    //All variable names must start with a LETTER, an UNDERSCORE and a ($)DOLLAR symbol. 
    var name;
    var _work;
    var $location;

    // Variable names must not start with a NUMBER or any other SPECIAL CHARACTERS like &, * etc. 
    var 7 name;
    var & work;


    // Don't use Javascript Reserved Keywords as variable names such as function, delete, if, for etc.
    var
    function;
    var
    if;

    
//::::::::::::::::::::::::VARIABLE MUTATION AND TYPE COERCION:::::::::::::::::://
    
    // Type Coercion-> Example-1:
    var firstName = "Shashi";
    var age = 35;
    console.log(firstName + " " + age);


    // Type Coercion-> Example-2:
    var workAs, isMarried;
    workAs = "Customer Service Manager";
    isMarried = true;
    console.log(firstName + " is a " + age + " years old " + workAs + " . Is he married? " + isMarried);


    // Variable Mutation: 
    age = "thirty five";
    job = "Web developer";
    isHeWorking = false;

    alert(firstName + " is a " + age + " years old " + job + " . Is he working? " + isHeWorking);

    var fullName = prompt("What is his full name?");
    console.log(firstName + " " + lastName);

//:::::::::::::::::::::::::::::BASIC OPERATORS:::::::::::::::::::::::::::::::://

     var currentYear, yearShashi, yearShisha;
     currentYear = 2018;
     ageShashi = 35;
     ageShisha = 33;

    // Math Operators: 
     yearShashi = currentYear - ageShashi;
     yearShisha = currentYear - ageShisha;

     console.log(yearShashi);
     console.log(yearShisha);

     console.log(currentYear + 2);
     console.log(currentYear * 2);
     console.log(currentYear / 2);
     console.log(currentYear % 2);

    //Logical Operators: 
      var shashiOlder = ageShashi > ageShisha;
      console.log(shashiOlder);


    //typeof Operator:
    console.log(typeof shashiOlder); // boolean
    console.log(typeof ageShashi); // number
    console.log(typeof "Shashi is older than Shisha");// string

    var x;
    console.log(typeof x); // undefined

//:::::::::::::::::::::::::::OPERATOR PRECEDENCE::::::::::::::::::::::::::://

   var currentYear = 2018;
   var yearShashi = 1983;
   var fullAge = 18;

   // Multiple Operators: 
   var isFullAge = currentYear - yearShashi >= fullAge;
   console.log(isFullAge);

   // Grouping:
   var ageShashi = currentYear - yearShashi;
   var ageShisha = 31;
   var average = (ageShashi + ageShisha) / 2;
   console.log(average);

   // Multiple Assignments: 
   var x, y;
   x = y = (4 + 6) * 5 - 7; // 10 * 5 - 7 // 50 - 7 // 43 
   console.log(x, y);

   // More Operators:
   x *= 2; //x = x * 2;
   console.log(x);

   x += 10; // x = x + 10;
   console.log(x);

   x++; // x = x + 1; 
   console.log(x);

   x--; // x = x - 1;
   console.log(x);


//************************************CODING CHALLENGE - 1***********************************//


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

 var markMass, johnMass, markHeight, johnHeight;
 markMass = 84; //kg
 markHeight = 1.75; // meters

 johnMass = 73; //kg
 johnHeight = 1.65; // meters

 var calculateMarkBmi = markMass / (markHeight * markHeight);
 console.log(calculateMarkBmi);
 var calculateJohnBmi = johnMass / (johnHeight * johnHeight);
 console.log(calculateJohnBmi);

 var boolinVar = calculateMarkBmi > calculateJohnBmi;
 console.log("Is Mark's BMI higher than John's?" + boolinVar);

//::::::::::::::::::::::::::IF/ELSE STATEMENTS:::::::::::::::::::::::::::::::://

    var firstName = "Shashi";
    var civilStatus = "single";

    if (civilStatus === "married") {
        console.log(firstName + " is married!");
    } else {
        console.log(firstName + " will hopefully marry soon :)");
    }

    var isMarried = true;
    if (isMarried) {
        console.log(firstName + " is married!");
    } else {
        console.log(firstName + " will hopefully marry soon :)");
    }

    // CHALLENGE-1 USING IF/ELSE STATEMENT: 
    var markMass, johnMass, markHeight, johnHeight;
        markMass = 84; //kg
        markHeight = 1.75; // meters

        johnMass = 73; //kg
        johnHeight = 1.65; // meters

    var calculateMarkBmi = markMass / (markHeight * markHeight);
        console.log(calculateMarkBmi);
    var calculateJohnBmi = johnMass / (johnHeight * johnHeight);
        console.log(calculateJohnBmi);

      if (calculateMarkBmi > calculateJohnBmi) {
          console.log("Mark's BMI is higher than John's.");
      } else {
          console.log("John's BMI is higher than Mark's.");
      }


//::::::::::::::::::::::::::::::::BOOLEAN LOGIC:::::::::::::::::::::::::::::// 

     var firstName = "Shashi";
     var age = 21;

     if (age < 13) {
         console.log(firstName + " is a boy.");
     } else if (age >= 13 && age < 20) { //Between 13 and 20
         console.log(firstName + " is a teenager.");
     } else if (age > 20 && age < 30) { // greater than 20 and less than 30
         console.log(firstName + " is a young man.");
     } else {
         console.log(firstName + " is a man.");
     }

//:::::::::::::::::::::::::::::THE TERNARY OPERATOR::::::::::::::::::::::::::::://

     var firstName = "Shashi";
     var age = 19;

     //Ternary Operator-> Example-1:
     age >= 18 ? console.log(firstName + " drinks beer.") :
         console.log(firstName + " drinks juice.");

     //Ternary Operator-> Example-2:
     var drink = age >= 18 ? "beer" : "juice";
     console.log(drink);

     // Example-2 Using if/else statements: 
     if (age >= 18) {
         var drink = "beer";
     } else {
         var drink = "juice";
     }

//:::::::::::::::::::::::::::::::::SWITCH STATEMENT:::::::::::::::::::::::::://

// Example-1:
     var job = "developer";
     switch (job) {
         case "manager":
             console.log(firstName + " works as a Customer Service Manager.");
             break;
         case "developer":
             console.log(firstName + " aspiring to be a front end developer.");
             break;
         case "designer":
             console.log(firstName + " loves designing websites.");
             break;
         default:
             console.log(firstName + " does something else.");
     }

// Example-2: 
         var firstName = "Shashi";
         var age = 31;

         switch (true) {
             case age < 13:
                 console.log(firstName + " is a boy.");
                 break;
             case age >= 13 && age < 20:
                 console.log(firstName + " is a teenager.");
                 break;
             case age > 20 && age < 30:
                 console.log(firstName + " is a young man.");
                 break;
             default:
                 console.log(firstName + " is a man.");
         }
  
//:::::::::::::::::::::::::::TRUTHY AND FALSY VALUES:::::::::::::::::::::::::://

// Truthy Values: Not Falsy Values
// Falsy Values: undefined, null, 0, " ", NaN

 // Example-1:
      var height; // Value of height is undefined. So, it will be a falsy value.  
      if (height) {
          console.log("variable is defined.");
      } else {
          console.log("variable has NOT been defined.");
      }

// Example-2:
       var height = 0; // Value of height is 0 but still its a falsy value.   
       if (height || height === 0) { // (height || height === 0) To make it a true condition. 
           console.log("variable is defined.");
       } else {
           console.log("variable has NOT been defined.");
       }


// Example-3:
       var height = " ";
       if (height) {
           console.log("variable is defined.");
       } else {
           console.log("variable has NOT been defined.");
       }

//::::::::::::::::::::::::::::: EQUALITY OPERATORS:::::::::::::::::::::::::::::://
//      35 == "35" => true // == does type coercion
//      35 === "35" => false // === is a Strict operator

// Example: 
      var height = 35;
      if (height == "35") {
          console.log("The == operator does type coercion!");
      } else {
          console.log("The === operator does a strict equality");
      }

//******************************** CODING CHALLENGE - 2 ****************************************//


/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

     var johnGame1 = 89;
     var johnGame2 = 120;
     var johnGame3 = 103;

     var markGame1 = 116;
     var markGame2 = 94;
     var markGame3 = 123;

     var maryGame1 = 97;
     var maryGame2 = 134;
     var maryGame3 = 105;

     var johnTeamAverage = (johnGame1 + johnGame2 + johnGame3) / 3;
     console.log(johnTeamAverage);

     var markTeamAverage = (markGame1 + markGame2 + markGame3) / 3;
     console.log(markTeamAverage);

     var maryTeamAverage = (maryGame1 + maryGame2 + maryGame3) / 3;
     console.log(maryTeamAverage);


     if (johnTeamAverage > markTeamAverage && johnTeamAverage > maryTeamAverage) {
         console.log("Jhon's team won with the highest average.");
     } else if (markTeamAverage > johnTeamAverage && markTeamAverage > maryTeamAverage) {
         console.log("Mark's team won with the highest average.");
     } else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > markTeamAverage) {
         console.log("Mary's team won with the highest average.");
     } else {
         console.log("The game will be a draw.");
     }

//:::::::::::::::::::::::::::::::FUNCTIONS::::::::::::::::::::::::::::://

// Example-1:
     function calculateAge(birthYear) {
         return 2018 - birthYear;
     }

     var ageShashi = calculateAge(1982);
     var ageShisha = calculateAge(1988);
     console.log(ageShashi, ageShisha);

// Example-2:
     function yearsUntilRetirement(birthYear, firstName) {
         var age = calculateAge(birthYear);
         var retirement = 65 - age;

         if (retirement > 0) {
             console.log(firstName + " retires in " + retirement + " years.");
         } else {
             console.log(firstName + " already retired.");
         }

     }

     yearsUntilRetirement(1982, "shashi");
     yearsUntilRetirement(1988, "Shisha");
     yearsUntilRetirement(1947, "Bahubali");

//:::::::::::::::::::::: FUNCTION STATEMENTS AND EXPRESSIONS::::::::::::::::::::://

 // Function Declaration: 
      function whatDoYouDo(job, firstName) {}

// Function Expression:
      var whatDoYouDo = function (job, firstName) {
          switch (job) {
              case "teacher":
                  return firstName + " teaches himself how to code.";
              case "developer":
                  return firstName + " like to code day in and day out.";
              case "designer":
                  return firstName + " loves designing the websites.";
              default:
                  return firstName + " does something else."
          }
      }

      console.log(whatDoYouDo("developer", "Shashi"));
      console.log(whatDoYouDo("designer", "Shashi"));
      console.log(whatDoYouDo("teacher", "Shashi"));
      console.log(whatDoYouDo(" ", "Shashi"));

//::::::::::::::::::::::::::::::::::::::: ARRAYS::::::::::::::::::::::::::::::://

    var years = new Array(1982, 1988, 1947); // Another way of declaring an array. 

    var names = ["Shashi", "Shisha", "Tom"];

    console.log(names);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names.length);

    names[1] = "Jerry"; // Mutate array data
    console.log(names);

    names[3] = "Donald"; // Add an item at the end of the array
    console.log(names);

    names[5] = "Harry"; // Add an empty array item  
    console.log(names);

    // Different Data Types:
    var shashi = ["Shashi", "Manda", 1983, "developer", true];

    shashi.push("london"); // adds an item at the end of the array
    console.log(shashi);

    shashi.unshift("Mister"); // adds an item at the start of the array
    console.log(shashi);

    shashi.pop(); // removes the last item of the array. 
    console.log(shashi);

    shashi.shift(); // removes the first item of the array.
    console.log(shashi);

    console.log(shashi.indexOf(1983)); // Item index number = 2.  
    console.log(shashi.indexOf(true)); // Item index number = 4. 
    console.log(shashi.indexOf(1)); // Item not present in the array returns -1. 

    var isDesigner = shashi.indexOf("designer") === -1 ? "Shashi is a designer" : "Shashi is not a designer";
    console.log(isDesigner);


//*********************************CODING CHALLENGE - 3****************************************//

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

     var tipCalculator = function (bill) {
         var percentage;

         if (bill < 50) {
             percentage = 0.2;
         } else if (bill >= 50 && bill < 200) {
             percentage = 0.15;
         } else { // (bill > 200)
             percentage = 0.1;
         }
         return percentage * bill;
     }

     console.log(tipCalculator(45)); // bill < 50
     console.log(tipCalculator(100)); // bill > 50 and bill < 200
     console.log(tipCalculator(250)); // bill > 200

     var bills = [124, 48, 268];

     Array One:
         var tips = [tipCalculator(bills[0]),
                tipCalculator(bills[1]),
                tipCalculator(bills[2])];
     console.log(tips);

     Array Two:
         var finalAmounts = [bills[0] + tips[0],
                        bills[1] + tips[1],
                        bills[2] + tips[2]];

     console.log(finalAmounts);

//:::::::::::::::::::::::::::::::OBJECTS AND PROPERTIES ::::::::::::::::::::::::::://

//Object Literal: 
    var shashi = {
        firstName: "Shashi", //string
        lastName: "Manda", // string
        birthYear: 1983, // number
        family: ["rosy", "romy", "chakki", "chukki"], // array
        job: "developer", // string
        isMarried: false // boolean 
    };

    console.log(shashi.firstName); // dot notation
    console.log(shashi["lastName"]); // square or brackets notation

    var x = "birthYear"; // declaring property of an object as a variable for some cases. 
    console.log(shashi[x]);

    shashi.job = "designer"; // mutation (change the data)
    shashi.isMarried = true; // mutation (change the data)
    console.log(shashi);


    New Object Syntax:
        var shisha = new Object(); // another way of creating and declaring a new object. 

    shisha.firstName = "Jhan";
    shisha["lastName"] = "Ammu";
    shisha.birthYear = 1985;

    console.log(shisha);


//:::::::::::::::::::::::::::::::OBJECTS AND METHODS:::::::::::::::::::::::::::::://

    var shashi = {
        firstName: "Shashi", //string
        lastName: "Manda", // string
        birthYear: 1983, // number
        family: ["rosy", "romy", "chakki", "chukki"], // array
        job: "developer", // string
        isMarried: false, // boolean 
        calcAge: function () { // Originally, this is a function but we call it as METHOD in the objects. 
            this.age = 2018 - this.birthYear;
        }
    };

    shashi.calcAge();

    console.log(shashi);

//******************************** CODING CHALLENGE - 4 ************************************//


/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

    var mark = {
        fullName: "Mark Mad",
        mass: 84,
        height: 1.75,
        calcBMI: function () {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    }

    mark.calcBMI();
    console.log(mark);

    var john = {
        fullName: "John Jiddu",
        mass: 73,
        height: 1.65,
        calcBMI: function () {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    }

    john.calcBMI();
    console.log(john);


    if (mark.bmi > john.bmi) {
        console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
    } else if (john.bmi > mark.bmi) {
        console.log(john.fullName + " has a higher BMI of " + john.bmi);
    } else {
        console.log("They have the same BMI");
    }

//::::::::::::::::::::::::::LOOPS AND ITERATION::::::::::::::::::::::::::::::::::://

// For Loop: Example-1: 

    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

// Explanation: 
//    i = 0, 0 < 10 TRUE, log i to the console, i++
//        i = 1, 1 < 10 TRUE, log i to the console, i++
//        ....
//    i = 9, 9 < 10 TRUE, log i to the console, i++
//        i = 10, 10 < 10 FALSE, Exit the loop.

//  For Loop: Example-2:

        for (var i = 1; i <= 20; i++) {
            console.log(i);
        }

//  For Loop: Example - 3:
        var shashi = ["Shashi", "Manda", 1983, "developer", true];

        for (var i = 0; i < shashi.length; i++) {
            console.log(shashi[i]);
        }

// While Loop: Example
        var shashi = ["Shashi", "Manda", 1983, "developer", true];
        var i = 0;
        while (i < shashi.length) {
            console.log(shashi[i]);
            i++;
        }

//Continue and Break Statements: Example:

    var shashi = ["Shashi", "Manda", 1983, "developer", true, "red"];

    for (var i = 0; i < shashi.length; i++) {
        if (typeof shashi[i] !== "string") continue;
        console.log(shashi[i]);
    }


    for (var i = 0; i < shashi.length; i++) {
        if (typeof shashi[i] !== "string") break;
        console.log(shashi[i]);
    }

// Looping backwards:
   for (var i = shashi.length - 1; i >= 0; i--) {
       console.log(shashi[i]);
   }

//*****************************CODING CHALLENGE 5*************************************//


/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, Shashi and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Shisha's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Shisha likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using shisha's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// First Challenge: 
var shashi = {
    fullName: "Shashi Manda",
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalAmounts = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules.
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            // Add results to the corresponding arrays.
            this.tips[i] = bill * percentage;
            this.finalAmounts[i] = bill + bill * percentage;
        }
    }
}


// Second Challenge: 
var shisha = {
    fullName: "Shisha Challa",
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalAmounts = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules.
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            // Add results to the corresponding arrays.
            this.tips[i] = bill * percentage;
            this.finalAmounts[i] = bill + bill * percentage;
        }
    }
}


//Third Challenge:

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// [2, 6, 4] -> 0 / 2 / 8 / 12

// Do the calculations
shashi.calcTips();
shisha.calcTips();
console.log(shashi, shisha);

shashi.average = calcAverage(shashi.tips);
shisha.average = calcAverage(shisha.tips);
console.log(shashi, shisha);


if (shashi.average > shisha.average) {
    console.log(shashi.fullName + " family pays higher tips, with an average of $" + shashi.average);
} else if (shisha.average > shashi.average) {
    console.log(shisha.fullName + " family pays higher tips, with an average of $" + shisha.average);
}


















































     


































