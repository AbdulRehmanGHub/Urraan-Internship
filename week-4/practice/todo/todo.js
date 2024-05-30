function addTask() {
    document.getElementById("error").innerHTML = "";

    let task = document.getElementById("addnewtask").value;

    if (task === "") {
        document.getElementById("error").innerHTML = "**Please enter a task name to add";
    } else {
        let taskLists = document.getElementById('taskLists');

        let taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        let listItem = document.createElement('li');
        listItem.textContent = task;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = function() {
            taskLists.removeChild(taskItem);
        };

        taskItem.appendChild(listItem);
        taskItem.appendChild(removeButton);
        taskLists.appendChild(taskItem);
        
        document.getElementById("addnewtask").value = "";
    }
}