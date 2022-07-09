function add(){
    const inputValue = document.getElementById("enter-value").value;
    const breaking = document.createElement("br");
    const adding = document.createElement("li");
    adding.innerHTML = `<h4>${inputValue}</h4>
    <button onclick="del(this)" id="dlt" display: flex;>Done</button>`;
    list.prepend(adding);
    // list.prepend(breaking);
}
function del(currElement){
    currElement.parentElement.remove();
}