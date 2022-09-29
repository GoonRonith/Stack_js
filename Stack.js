let Stack = document.getElementById("Instack");
let element = document.getElementById("Sitem");
let pushbtn = document.getElementById("Push");
let popbtn = document.getElementById("Pop");
const items = [];
let index = 0;
let total=10;
Push.addEventListener('click', () => {
    Enable();
    if(index==9){
        Stack.value = "OverrFlow";
        Disable1();
    }
    else{
    items[index] = element.value;
    index += 1;
    Stack.value = items;
    }
})
Pop.addEventListener('click', () => {
    if (items.length == 0) {
        Stack.value = "UnderFlow";
        Disable();
    }
    else {
        Enable();
        Stack.value = " ";
        let x = items.pop();
        index -= 1;
        Stack.value = items;
    }
})
function Disable() {
    popbtn.disabled = true;
    element.value="";
}
function Disable1() {
    pushbtn.disabled = true;
    element.value="";
}
function Enable() {
    popbtn.disabled = false;
     pushbtn.disabled = false;
}