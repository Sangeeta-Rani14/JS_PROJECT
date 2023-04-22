const getColor=()=>{
    
    const randomNumber=Math.floor(Math.random()*16777215);
    // 16777215 is no that helps to convert any no into hexa code

    const randomCode="#"+randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.getElementById("hex-code").innerText=randomCode;
    document.body.style.backgroundColor=randomCode;
    // it helps copy the color code in clipboard
    navigator.clipboard.writeText(randomCode);
}


// event listener
// event call execute when event is called
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// initial call execute when page is loaded
// getColor();
