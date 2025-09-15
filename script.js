//your JS code here. If required.
var count = 0; 
let btn = document.querySelector("#btn");
let preview = document.querySelector("#preview");
const incrementFxn = () =>{
	alert(count);
	count++;
	preview.textContent = count;
}
btn.addEventListener("click", incrementFxn);