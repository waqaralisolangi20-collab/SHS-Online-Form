document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {

e.preventDefault();

const btn = document.querySelector("button");

btn.innerHTML = "Please Wait...";
btn.disabled = true;

setTimeout(function () {

alert("✅ Registration Submitted Successfully!\n\nThank you for applying.");

form.reset();

btn.innerHTML = "Submit Registration";
btn.disabled = false;

},2000);

});

// File Upload Preview
const files = document.querySelectorAll("input[type='file']");

files.forEach(function(file){

file.addEventListener("change",function(){

if(this.files.length>0){

alert("📁 File Selected: " + this.files[0].name);

}

});

});

// Smooth Scroll
document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({

behavior:"smooth"

});

}

});

});

});
