// var todoList = document.getElementById("todo-list");
// var newTodo = document.getElementById("new-todo");

var list = [];

// var list = ["Eat", "Sleep", "Code"];

//Add new item 
var addBtn = document.getElementById("add-btn");
// addBtn.onclick = addItem;
addBtn.addEventListener("click", addItem);

function addItem() {
    //Get value of the input
    var input = document.getElementById("new-item");
    var newItem = input.value;

    //add new item to array
    list.push(newItem);
    render();
    //clear input
    input.value = "";
}

function deleteItem(item) {
    //Lay content trong the p
    var content = item.textContent;
    for (var i = 0; i < list.length; i++) {
        if (content == list[i]) {
            list.splice(i, 1);
        }
    }

    render();
}

function render() {
    var htmlList = document.getElementById("todo-list");
    var content = list.map(function(item) {
        return (
            "<li class='list-group-item d-flex justify-content-between'><div><p id='" +
            item +
            "'>" +
            item +
            '</p></div><div class="d-lg-flex justify-content-evenly"><button id="delete-item-' +
            item +
            '" class="btn button-done"><img src="./media/check-square.svg" alt="done" onclick=deleteItem(' +
            item +
            ")></button></div></li>"
        );
    });
    htmlList.innerHTML = content.join("");
}

render();