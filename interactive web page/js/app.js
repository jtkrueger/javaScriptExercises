//Problem: User interaction doesn't provide desired results
//Solution: Add interactivy

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul.incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //ul.completed-tasks


//New Task List Item
var createNewTaskElement = function(taskString) {
  //create list item
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  
  //each element needs to be modified
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  
  label.innerText = taskString;

  //each element needs to be appended
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

//Add new task
var addTask = function() {
  console.log("Add task...");
  //Create a task (list item with text from new-task)
  var listItem = createNewTaskElement(taskInput.value);
  
  //Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, markCompleted);
  taskInput.value = "";

}


//Edit existing task
var editTask = function() {
  console.log("Edit task...");
  //When Edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text become the input's value
    //else
      //switch to .editmode
      //input value becomes the label's text
  //toggle .editMode on the parent
}


//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //Remove parent list item from the ul
  ul.removeChild(listItem);
}


//Mark a task as complete
var markCompleted = function() {
  console.log("Complete task...");
  //Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, markIncomplete);
}


//Mark a task as incomplete
var markIncomplete = function() {
  console.log("Task incomplete...");
  //Append the task to ul#incomplete-tasks
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, markCompleted);
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind markCompleted to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log("Ajax request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTaskHolder.children.length; i++) {
  //bind events to list item's children (markCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], markCompleted);
}

//cycle over completeTaskHolder ul list items
for(var i = 0; i < completedTaskHolder.children.length; i++) {
  //bind events to list item's children (markIncompleted)
  bindTaskEvents(completedTaskHolder.children[i], markIncomplete);
}

    


