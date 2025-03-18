const infiList = document.getElementById("infi-list");
function addListItems(num){
	for(let i=0;i<num;i++){
		const li = document.createElement("li");
		 li.textContent = `List Item ${infiList.children.length + 1}`;
    infiList.appendChild(li);
  }
}
addListItems(10);

// Detect when the user scrolls to the end of the list
infiList.addEventListener("scroll", () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    // Add 2 more list items when the user reaches the end
    addListItems(2);
  }
});