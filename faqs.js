const accordian = document.querySelectorAll(".content-container");
accordian.forEach(item => {
    item.addEventListener("click", function(){
        accordian.forEach(el =>{
            if(el!==item){
                el.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    });
});
