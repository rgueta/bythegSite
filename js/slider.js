const slide = document.querySelectorAll('.slide'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 8000);

function autoslide(){
    counter += 1;
    slidefun(counter);
}

function plusSlide(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n){
    let i;
    for(i=0; i < slide.length; i++){
        slide[i].style.display = "none";

    }
    for(i=0; i < dot.length; i++){
        dot[i].classList.remove('active');
    }
    if(n > slide.length){
        counter = 1;
    }
    if(n < 1){
        counter = slide.length;
    }
    slide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');

}