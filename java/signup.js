console.log("lorem.............;");

const form = document.querySelector(".signup form");
const BtnContinious = form.querySelector(".button input");

form.onsubmit = (e)=>[
    e.preventDefault(), //
]

BtnContinious.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php.signup.php", true);
    xhr.onload = () =>{

    }
    xhr.send(); 
}