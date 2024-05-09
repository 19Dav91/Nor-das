let inp = document.createElement('input');
document.body.appendChild(inp);
inp.addEventListener('click', addTask)
let btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent = 'OK'
btn.addEventListener('click', addTask);
let ul = document.createElement('ul');
document.body.appendChild(ul);
function addTask() {
    if ((inp.value).trim() !== '') {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = inp.value;
        inp.value = '';
        addItem;
    }
};
function addItem() {
    let arr = [];

}
console.log(arr);

{/* <script>
        // Get references to HTML elements
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Function to add a task to the list 
    function addTask() { 
            const taskText = taskInput.value;
    if (taskText.trim() !== "") { 
                const li = document.createElement("li");
    li.innerText = taskText;
    taskList.appendChild(li);
    taskInput.value = "";

    saveTasksToLocalStorage(); 
            } 
        }

    // Save tasks to local storage 
    function saveTasksToLocalStorage() { 
            const tasks = Array.from(taskList.getElementsByTagName("li")).map(li => li.innerText);
    localStorage.setItem("todoListTasks", JSON.stringify(tasks)); 
        }

    // Load tasks from local storage 
    function loadTasksFromLocalStorage() { 
            const tasks = JSON.parse(localStorage.getItem("todoListTasks")) || []; 
            tasks.forEach(task => { 
                const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li); 
            }); 
        }

    // Add event listener to input for pressing Enter key 
    taskInput.addEventListener("keyup", function (event) { 
            if (event.key === "Enter") {
        addTask(); 
            } 
        });

    // Load tasks from local storage when the page loads 
    window.addEventListener("load", function () {
        loadTasksFromLocalStorage(); 
        });

</script> */}