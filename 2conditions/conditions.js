// coditions are the what makes progeraming useful based of data you can do difffrent things
// https://www.w3schools.com/js/js_if_else.asp
x = 5;
y = 2;
// "if" statments do the code block only if the condition is met
if(x>y){
    console.log("X is indeed greater than Y")
}
//  if the condition is met the code is skipped
if(x<y){
    console.log("this line will never be seen")
}


// else blocks can be attached to if blocks. and only run when the if condition is not met
if(x==y){
    console.log("this line will never be seen")
} else { 
    console.log("Seems like X is not Equal to Y")
}

// you can chain together multiple questions with the "else if" statment
if(x<y){
    console.log("this line will never be seen")
} else if(x==y){
    console.log("this line will never be seen ether")
} else {
    console.log("Seems like X is not Equal to Y and not less than Y")
}

// You can have multaple conditions required to pass by using "&&"  this means AND
// as in condition A "and" condition B must be true inorder to do this code.
// https://www.w3schools.com/js/js_comparisons.asp
if(x>y && x>0){
    console.log("X is more than Y AND more than 0")
}

// You can have alturnative conditions to pass by using "||"  this means OR
// as in condition A "or" condition B must be true inorder to do this code.
// https://www.w3schools.com/js/js_comparisons.asp
if(x>y || x>1000){
    console.log("X is more than Y OR more than 1000")
}

if((x>y && x>0) || x>1000){ // you can use () if you want to encapsulate a conditon
    console.log("X is more than Y AND more than 0 OR greater than 1000")
}

// Switch statments can be somewhat simalar to if else statment
// https://www.w3schools.com/js/js_switch.asp
// you perform the code based on the result of the expression.
switch (x){
    case 1000: // if value from the matches the value in this case it will exicute this code
        console.log("this line will never be seen");
        break; // this tells the switch we are done 
    case y:
        console.log("this line will never be seen X != Y");
        break; // this tells the switch we are done 
    case 5:
        console.log("5 is the number and the number is 5!");
        break;
}

// you can also assign a defualt if none of the conditions are met it will always run.
switch (y){
    case 1000: // if value from the matches the value in this case it will exicute this code
        console.log("this line will never be seen");
        break; // this tells the switch we are done 
    case x:
        console.log("this line will never be seen X != Y");
        break; // this tells the switch we are done 
    case 5:
        console.log("5 is the number and the number is 5!");
        break;
    default:
        console.log("We had to fallback to the defualt");
}

// If deside you dont need a break? it will exicute all of the condtions after the matching one.
var tip = 500;
console.log("You tip:", tip);
switch (tip){
    case 1000: // if value from the matches the value in this case it will exicute this code
        console.log("Waitress laughs histarically.");
    case 500:
        console.log("Waitress crys.");
    case 100:
        console.log("Waitress says omg!");
    case 15:
        console.log("Waitress smiles.");
    default:
        console.log("Waitress cleans up your table.");
}