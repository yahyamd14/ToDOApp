window.addEventListener("load", () => {
    const form = document.querySelector("#newTaskForm");
    const input = document.querySelector("#newTaskInput");
    const listEl = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please type in new task");
            return;
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);

        const taskActionEl = document.createElement("div");
        taskActionEl.classList.add("actions");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Edit";

        const taskDeleteEL = document.createElement("button");
        taskDeleteEL.classList.add("delete");
        taskDeleteEL.innerHTML = "Delete";

        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDeleteEL);

        taskEl.appendChild(taskActionEl);

        listEl.appendChild(taskEl);

        input.value = "";

        taskEditEl.addEventListener("click", () => {
            if (taskEditEl.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEditEl.innerText = "Save";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                taskEditEl.innerText = "Edit";
            }
        });

        taskDeleteEL.addEventListener("click", () => {
            listEl.removeChild(taskEl);
        });
    });
});