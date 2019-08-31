var tgl = document.querySelector("button");
// var purp = false;

// tgl.addEventListener("click", function(){
//     purp = !purp;
//     if (purp) {
//         document.body.style.backgroundColor = "purple";
//     } else {
//         document.body.style.backgroundColor = "white";
//     }
// });

tgl.addEventListener("click", function(){
    document.body.classList.toggle("purple");
})