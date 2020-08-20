//document.write('yo bro');
console.log('yo bro');

const block1 = document.querySelector(".e");
const block2 = document.querySelector(".s");


console.log(block1);
console.log(block2);

window.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset);
    if(window.pageYOffset >= 300 && window.pageYOffset <= 800){
        block1.style.top = -(window.pageYOffset-300)/5+"px";
        block2.style.top = -(window.pageYOffset-300)/5+"px";
        console.log("yo");
    }
});



