const searchBox = document.getElementById("text-area");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(searchBox.value === "") {
        alert("Please enter your task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = searchBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchBox.value = "";
    saveDate();
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
})
function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();