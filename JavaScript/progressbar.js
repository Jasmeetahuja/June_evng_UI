let a=0;
let b=0;

function loadPage(){
    let i=0;
    let timerunner = setInterval(val,1000)
    function val(){
        if(b>80){
            clearInterval(timerunner)
        } else {
            a = a+20
            b = parseInt(i)+parseInt(a);
            if(b == 0 || b == "undefined"){
                document.getElementsByClassName('progress-bar')[1].style.width = "0%";
            } else if (b == 20){
                document.getElementsByClassName('progress-bar')[1].style.width = "20%";
            } else if (b == 40){
                document.getElementsByClassName('progress-bar')[1].style.width = "40%";
            } else if (b == 60){
                document.getElementsByClassName('progress-bar')[1].style.width = "60%";
            } else if (b == 80){
                document.getElementsByClassName('progress-bar')[1].style.width = "80%";
            } else if (b == 100){
                document.getElementsByClassName('progress-bar')[1].style.width = "100%";
                document.getElementById('mainpage').innerHTML="Page Successfully loaded"
            }
        }
    }
}

window.onload = loadPage(); 