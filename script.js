let name = "Ella";
let age = 15;
let likesSushi = true;

function greeting(name) {
    console.log("hello", name);
    }

greeting("Ella");

function saveName() {
    let newName = document.getElementById("greeter").value; // text field value from the user
    document.getElementById("username").textContent = newName;
    document.getElementById("greeter").value = "";
}

document.querySelectorAll(".accordion-header").forEach(button=>{
    button.addEventListener("click", function(){
        let content=this.nextElementSibling;
        content.style.display=(content.style.display==="block")?"none":"block";
    })
})


