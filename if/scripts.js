/*let amzius = 18;
let pilietis = true;
let trukme = 30;

if (amzius <=18 && pilietis === true && trukme <= 30)
   {console.log ("pilietybe gaus"); }
else {console.log ("pilietybes negaus");}*/

let age = 51;
let bmi = 26;
let smoke = true;


if (age <= 30 && bmi <= 25 && smoke===false)
{console.log ("maza rizika");}
else if ((age>30 && age<=50) && (bmi>25 && bmi<30) && smoke===false)
{console.log ("vidutine rizika");}
else if (age>50 && (bmi>=30 || smoke===true))
{console.log ("didele rizika");}
else if (age>50 && bmi>=30 && smoke===true)
{console.log ("labai didele rizika");}
else {console.log ("neapibrezta rizika");}
