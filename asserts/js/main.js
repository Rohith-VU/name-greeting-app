const userNameEl = document.querySelector("#userName");
const buttonEl = document.querySelector("#ProButton");
const greetMsgEl = document.querySelector("#greetMsg");
const bodyEl = document.body;
const bgColorChangeEl = document.querySelector("#bgColorChange");


/* Validation function */ 
function validateName(){
    const userName = userNameEl.value.trim();
    if (!(userName.length > 3 && userName.length < 20))
    {
        alert("Enter valid name")
        return
    }
    greetMsgEl.textContent =`welcome ${begCharCaps(userName)} 👋` ;

}

    /* first word capitalize function */
function begCharCaps(userName){
    const nameArr = userName.split(" ");
     const finalName = nameArr.map((text1)=>{
         return text1.charAt(0).toUpperCase() + text1.slice(1)
     })
     return finalName.join(" ")
     }
 
    /*Keyboard Event*/
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter"){
        validateName();
    }
});


    /* Mouse click event */
 buttonEl.addEventListener("click",()=>{
    greetMsgEl.style.display="block";
    validateName();
});

/*DOM content loaded Event*/
document.addEventListener("DOMContentLoaded",()=>{
    greetMsgEl.style.display="none";
});


/*Background colour change */
bgColorChangeEl.addEventListener("click",()=>
{
   bodyEl.style.backgroundColor = `#${((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, "0")}`;
})



