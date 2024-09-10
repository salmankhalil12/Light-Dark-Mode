const inptEle = document.querySelector(".input");
const bodyEle = document.querySelector("body")

inptEle.checked =JSON. parse(localStorage.getItem("mode"));
updateToggle()
// updateToggle();

function updateToggle() {
    if (inptEle.checked) {
        bodyEle.style.background = "black"
    }else{
        bodyEle.style.background ="white"
    }
}

inptEle.addEventListener("input",()=>{
    updateToggle()
    updateLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem("mode",JSON.stringify(inptEle.checked))

}