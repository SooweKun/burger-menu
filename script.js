let select = document.querySelector(".select");
let select_text = document.getElementById("select-text");
let select_arrow = document.getElementById("select-arrow");
let option_list = document.querySelector(".option-list");
let option = document.querySelectorAll(".option");

select.addEventListener("click", () => {
    option_list.classList.toggle("active");
    select_arrow.classList.toggle("rotate");
})

option.forEach(option =>{
    option.addEventListener("click", () => {
        select_text.innerHTML = option.innerHTML
        option_list.classList.toggle("active");
        select_arrow.classList.toggle("rotate");
    })
})