console.log("%cconnented", "color: red");

let btn = document.querySelector("#btn");
let message = document.querySelector("#message");
message.style.display = "none";

btn.addEventListener("click", (e) => {
    console.log(e);
    if(message.style.display === "none" && btn.innerText === "Click Me!"){
        message.style.display = "block"
        btn.innerText = "I Mean It!"
    }else{
        message.style.display = "none";
        btn.innerText = "Click Me!"
    }
})

// function hideButton() {
//     if(message.style.display === "block"){
//         message.style.display = "none"
//     }
// }