let parent=document.getElementById("parent");
// let rating=document.getElementById("Rating");
let ratingValue=document.getElementById("value");
let submitBtn=document.getElementById("Submit-btn");
let stars=document.getElementsByClassName("star");
console.log(stars);


parent.addEventListener("click",e=>{
    ratingValue.textContent=null;
    for(let i=0;i<5;i++){
        stars[i].setAttribute("style","background-color:")
    }
    let element=e.target;
    let value=element.id;
    ratingValue.append(value);
    for(let i=0;i<value;i++){
        stars[i].setAttribute("style","background-color:red")
    }
})

submitBtn.addEventListener("click",e=>{
    const rating={
        value:ratingValue.textContent
    }
    alert("rating:"+ rating.value)
    console.log(rating);
})

