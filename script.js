const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = document.querySelector("#sBtn-text");
       div_click = document.querySelector(".translate")
let btnLang = document.querySelector(".btn-lang")
let btnSrcLang = document.querySelectorAll(".btn-source-lang")


btnSrcLang.forEach(btn =>{
    // console.log(btn)
    btn.addEventListener("click", (e)=>{
        // console.log(btn)
        btnSrcLang.forEach(f =>{
            f.classList.remove('border-b-2')
            f.classList.remove('border-blue-500')
        });
        btn.classList.toggle("border-b-2")
        btn.classList.toggle("border-blue-500")
    })

})

//switch languages
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        // console.log(selectedOption)
        sBtn_text.innerHTML = selectedOption;
        
        if(selectedOption == "Japanese"){
            sBtn_text.setAttribute("value","ja")
        }
         if(selectedOption == "Thailand"){
            
            sBtn_text.setAttribute("value","tha")
        }
        if(selectedOption == "India")
        {
            selectBtn.setAttribute("value","ind")
        }
         if(selectedOption == "Chinese")
        {
            selectBtn.setAttribute("value","chn")
        }
        if(selectedOption == "Brazil"){
            selectBtn.setAttribute("value","bra")
        }

        optionMenu.classList.remove("active");
    });
});

// console.log(btnLang)
