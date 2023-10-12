document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.querySelector(".todo-list");
  
    // Function to add a new todo
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = "";
      }
    }
  
    // Function to create a new todo item
    function createTodoItem(text) {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo");
      todoItem.innerHTML = `<li class="todo-item">${text}</li>
                                <button class="check-btn"><i class="fas fa-check"></i></button>
                                <button class="trash-btn"><i class="fas fa-trash"></i></button>`;
  
      // Event listener for the delete button
      const deleteButton = todoItem.querySelector(".trash-btn");
      deleteButton.addEventListener("click", function () {
        todoItem.remove(); // Remove the todo item when the delete button is clicked
      });
  
      return todoItem;
    }
  
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      addTodo();
    });
  });