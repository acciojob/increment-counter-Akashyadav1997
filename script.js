//your JS code here. If required.
var count = 0; 
let btn = document.querySelector("#incrementBtn");
let preview = document.querySelector("#counter");
const incrementFxn = () =>{
	alert(count);
	count++;
	preview.textContent = count;
}
btn.addEventListener("click", incrementFxn);