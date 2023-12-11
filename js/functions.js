"use strict"
// //t1  water
// function WaterCalculation() {
//     let min_water = 10; 
//     let func1 =  parseInt(prompt("Enter litres water"));  

//     let waterCalculator2 = () => {
//         let days = 0;

//         let calculateDays = () => {
//             func1 -= (10 / 100) * func1;
//             days++;
//         };

//         while (func1 >= min_water) {
//             calculateDays();
//         }

//         return days;
//     };

//     let check = waterCalculator2();

//     if (check > 0) {
//         alert(`Water will be ${check} days.`);
//     } else {
//         alert("To low water");
//     }
// }


// // t2
// function SayError()
// {
//     let Message = () => alert("Some error occured!");
//     Message();  
// }

// // t3
// function ShowError(x) {
//     let func = () => alert("Error " + x + " occurred!");
//     func();
// }

// let x = prompt("Write: ");

// t4
// function CreateHeaders(N)
// {
//     let header = () =>{
//         for(let i = 1; i <= N; i++){
//             document.write("Header" + i);   
//             document.write("<br>");   
//         }
//     }
//     header();   
// }

// let n = prompt("N = ");

// t5
// function checkPassword(x)
// {
//     let passw = Array("Step", "Web", "JavaScript"); 

//     let func = () => passw.indexOf(x);    

//     if(func() != -1){
//         alert("Correct passwd");
//     }
//     else {
//         alert("Not correct passwd");
//     }

// }

// let x = prompt("Enter passWd:");  

// //6
// function sign(x)
// {
//     let func = () => {
//         if(x < 0){
//             return "negative";
//         }
//         else if(x > 0){
//             return "positive";
//         }
//         else{
//             return "Zero";  
//         }
//     }
//     alert(func());  
// }

// let x = prompt("Enter num: ");     

//7
// function Days(x)
// {
//     let DaysArray = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

//     let func = () => alert(DaysArray[x]); 
//     func();       
// }

// let x = prompt("Enter n day: ");  