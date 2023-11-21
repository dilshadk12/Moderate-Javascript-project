


const leftbtn = document.querySelector(".l_btn");
const rightbtn = document.querySelector(".r_btn");

rightbtn.addEventListener('click', function (event) {

    const conect = document.querySelector('.product_slide');
    conect.scrollLeft += 1100;
    event.preventDefault();
}
);
leftbtn.addEventListener('click', function (event) {
    const conect = document.querySelector('.product_slide');
    conect.scrollLeft -= 1100;
    event.preventDefault();
}
);


const leftbtn1 = document.querySelector(".btn_1b");
const rightbtn1 = document.querySelector(".btn_1a");

rightbtn1.addEventListener('click', function (event) {

    const conect = document.querySelector('.product_slide_1');
    conect.scrollLeft += 1100;
    event.preventDefault();
}
);
leftbtn1.addEventListener('click', function (event) {
    const conect = document.querySelector('.product_slide_1');
    conect.scrollLeft -= 1100;
    event.preventDefault();
}
);


const leftbtn2 = document.querySelector(".btn_2b");
const rightbtn2 = document.querySelector(".btn_2a");

rightbtn2.addEventListener('click', function (event) {

    const conect = document.querySelector('.product_slide_3');
    conect.scrollLeft += 1100;
    event.preventDefault();
}
);
leftbtn2.addEventListener('click', function (event) {
    const conect = document.querySelector('.product_slide_3');
    conect.scrollLeft -= 1100;
    event.preventDefault();
}
);


const leftbtn3 = document.querySelector(".btn_3b");
const rightbtn3 = document.querySelector(".btn_3a");

rightbtn3.addEventListener('click', function (event) {

    const conect = document.querySelector('.product_slide_4');
    conect.scrollLeft += 1100;
    event.preventDefault();
}
);
leftbtn3.addEventListener('click', function (event) {
    const conect = document.querySelector('.product_slide_4');
    conect.scrollLeft -= 1100;
    event.preventDefault();
}
);

// Back To Top Button

let backtop = document.querySelector('.backtop');
backtop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
)


// SideBar

let sidebar=document.querySelector('.sidebar');
let crossbtn=document.querySelector('.fa-xmark');
let black=document.querySelector('.black');
let sidebtn=document.querySelector('.second_1');

// Opening
sidebtn.addEventListener('click',()=>{
    sidebar.classList.add('active');
    crossbtn.classList.add('active');
    black.classList.add('active');
    document.body.classList.add('stop_scroll');
    
})

// Closing
crossbtn.addEventListener('click',()=>{
    sidebar.classList.remove('active');
    crossbtn.classList.remove('active');
    black.classList.remove('active');
    
})


let sign=document.querySelector('.ac');
let tri=document.querySelector('.triangle');
let signin=document.querySelector('.hdn_sign');

sign.addEventListener('click',()=>{
    black.classList.toggle('active_1');
    signin.classList.toggle('active');
    tri.classList.toggle('active');
})