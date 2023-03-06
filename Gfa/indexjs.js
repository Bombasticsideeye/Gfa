var nickname = "Nica";
var height = Math.round(155/30.48)
var weight = Math.round(45*2.205)

alert("Name: "+nickname+"\n"+"Height: "+height+""+"feet"+"\n"+"Weight: "+weight+"lbs");

var firstname = prompt("Please enter firstname: ")
var lastname = prompt("Please enter last name: ")
var birthyr = prompt("please enter birth year: ")
var age = 2023-birthyr;

document.getElementById('fname').innerHTML=firstname;
document.getElementById('lname').innerHTML=lastname;
document.getElementById('agetoday').innerHTML=age;

var text = "Do you agree to share your personal information to this site? ";
if (confirm(text) == true) {
document.write("Name: "+nickname)
document.write("<br>")
document.write("Height: "+height+"feet")
document.write("<br>")
document.write("Weight: "+weight+"lbs")
} else {
document.write("User does not want to share their personal information")
}