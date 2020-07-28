alert("The last three(3) inputs must be filled before it can display");
const btnClick = document.querySelector(".set");
const cssProVal = document.getElementsByName("cssdetails");
const modify = document.querySelector(".result");

set = () => {
    let cssLen, i;
    cssLen = cssProVal.length;
    for(i = 0; i < cssLen; i++){
        const element = cssProVal[i];
        let cssPro = element.getAttribute("id");
        let cssValue = element.value;
        modify.style[cssPro] = cssValue;
    }
}

btnClick.addEventListener('click', set);