document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const button = document.querySelector("button");

    form.addEventListener("submit", function () {

        button.innerHTML = "Please Wait...";
        button.disabled = true;

    });


    // File selection message

    const files = document.querySelectorAll("input[type='file']");

    files.forEach(function(file){

        file.addEventListener("change", function(){

            if(this.files.length > 0){

                alert("📁 File Selected: " + this.files[0].name);

            }

        });

    });

});
