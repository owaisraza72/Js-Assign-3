let age;
age="I am 15 year old";

alert(age)


let visitCount = localStorage.getItem("visitCount");


if (visitCount) {
    visitCount = parseInt(visitCount) + 1; // Agar aaya hai, toh number ko increment karte hain
}

 else {
    visitCount = 1; // Agar pehli baar aa rahe hain, toh 1 set karte hain
}

localStorage.setItem("visitCount", visitCount);

alert("Aap is site pe " + visitCount + " baar aaye hain.");




let birthyear="My birth year is 2007"
alert(birthyear)

let visitorname="John Doe"
let productTitle="T-shirt"
quantity="5"

document.write(visitorname + " ne " + quantity + " " + productTitle + "(s) XYZ Clothing store se order kiya.");
