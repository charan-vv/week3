document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        return 0;
    }
    
    var newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(newTask);
    });
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
});
