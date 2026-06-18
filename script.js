// ===========================
// Variables
// ===========================

let inp = document.querySelector(".taskInput");
let addBtn = document.querySelector(".add");
let container = document.querySelector(".container");
let category = document.querySelector(".category");
let themeBtn = document.querySelector(".themeBtn");
let searchInp = document.querySelector(".searchInput");
let clearBtn = document.querySelector(".clearAll");

let completedCount = document.querySelector(".completedCount");
let pendingCount = document.querySelector(".pendingCount");

// ===========================
// Tab Navigation Switcher
// ===========================

const navButtons = document.querySelectorAll(".nav-btn");
const tabContents = document.querySelectorAll(".tab-content");
const activeTabTitle = document.getElementById("active-tab-title");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    // Remove active state from all buttons (both sidebar and bottom-nav)
    navButtons.forEach(b => b.classList.remove("active"));
    
    // Add active state to all buttons targeting this tab
    document.querySelectorAll(`.nav-btn[data-tab="${targetTab}"]`).forEach(b => {
      b.classList.add("active");
    });
    
    // Switch tabs
    tabContents.forEach(content => {
      content.classList.remove("active-tab");
      if (content.id === `tab-${targetTab}`) {
        content.classList.add("active-tab");
      }
    });
    
    // Update Header Title
    activeTabTitle.innerText = btn.querySelector("span").innerText;
  });
});

// ===========================
// Theme Toggle
// ===========================

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.dataset.theme = "dark";

    // setAttribute() demonstration
    document.body.setAttribute("data-theme", "dark");

    themeBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <span>Light Mode</span>
    `;
  } else {
    document.body.dataset.theme = "light";

    document.body.setAttribute("data-theme", "light");

    themeBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <span>Dark Mode</span>
    `;
  }
});

// ===========================
// Attributes vs Properties
// ===========================

let demoInput = document.querySelector(".demoInput");
let showDifferenceBtn = document.querySelector(".showDifference");
let propertyOutput = document.querySelector(".propertyOutput");
let attributeOutput = document.querySelector(".attributeOutput");

showDifferenceBtn.addEventListener("click", function () {
  // Property changes dynamically with user input
  propertyOutput.innerText = demoInput.value;

  // Attribute remains the original HTML value
  attributeOutput.innerText = demoInput.getAttribute("value");
});

// setAttribute()
demoInput.setAttribute("placeholder", "Type Something");

// hasAttribute()
console.log(demoInput.hasAttribute("value"));

// getAttribute()
console.log(demoInput.getAttribute("value"));

// removeAttribute()
demoInput.removeAttribute("placeholder");

// ===========================
// Event Propagation Demo
// ===========================

let grand = document.querySelector(".grand");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let logBox = document.querySelector(".propagation-log");
let clearLogBtn = document.querySelector(".clear-log-btn");

function addPropagationLog(text, phase, element) {
  if (!logBox) return;
  
  // Clean initial message if present
  if (logBox.children.length === 1 && logBox.children[0].style.color === "var(--text-muted)") {
    logBox.innerHTML = "";
  }
  
  let logEntry = document.createElement("div");
  logEntry.className = `log-entry ${phase}`;
  logEntry.innerHTML = `<span class="log-phase">[${phase.toUpperCase()}]</span> <span class="log-element">${element}</span>: ${text}`;
  logBox.appendChild(logEntry);
  logBox.scrollTop = logBox.scrollHeight;
  
  // Visual Flash Glow effect on corresponding concentric card
  let domEl = document.querySelector("." + element.toLowerCase());
  if (domEl) {
    domEl.classList.add(`glow-${phase}`);
    setTimeout(() => {
      domEl.classList.remove(`glow-${phase}`);
    }, 600);
  }
}

if (clearLogBtn) {
  clearLogBtn.addEventListener("click", function() {
    logBox.innerHTML = `<div style="color: var(--text-muted);">Click the child button inside grandparent nests to observe the DOM capturing (top -> down) and bubbling (bottom -> up) flow.</div>`;
  });
}

// Capturing Phase
grand.addEventListener(
  "click",
  function () {
    console.log("Grand Capture");
    addPropagationLog("Capturing event entering Grandparent node", "capture", "grand");
  },
  true,
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent Capture");
    addPropagationLog("Capturing event traversing Parent node", "capture", "parent");
  },
  true,
);

// Bubbling Phase
grand.addEventListener("click", function () {
  console.log("Grand Bubble");
  addPropagationLog("Event bubbling back up to Grandparent node", "bubble", "grand");
});

parent.addEventListener("click", function () {
  console.log("Parent Bubble");
  addPropagationLog("Event bubbling back up to Parent node", "bubble", "parent");
});

child.addEventListener("click", function () {
  console.log("Child");
  addPropagationLog("Target event reached Child button", "target", "child");
});

// ===========================
// Counter Function
// ===========================

function updateCounter()
{
    let completedTasks =
    document.querySelectorAll(
        '[data-status="completed"]'
    );

    let pendingTasks =
    document.querySelectorAll(
        '[data-status="pending"]'
    );

    completedCount.innerText =
    completedTasks.length;

    pendingCount.innerText =
    pendingTasks.length;
}

// ===========================
// Task Creation
// ===========================

addBtn.addEventListener("click", function(){

    if(!inp.value.trim())
    {
        return;
    }

    // createElement()
    let taskDiv =
    document.createElement("div");
    taskDiv.classList.add("task");

    // dataset
    taskDiv.dataset.id = Date.now();
    taskDiv.dataset.status = "pending";
    taskDiv.dataset.category = category.value;

    // setAttribute()
    taskDiv.setAttribute(
        "title",
        "Task Card"
    );

    // hasAttribute()
    console.log(
        taskDiv.hasAttribute(
            "title"
        )
    );

    // getAttribute()
    console.log(
        taskDiv.getAttribute(
            "data-category"
        )
    );

    // removeAttribute()
    taskDiv.removeAttribute(
        "title"
    );

    // Create custom task-content structure for card layout
    let taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    let chk = document.createElement("div");
    chk.classList.add("custom-checkbox");

    // createElement()
    let text =
    document.createElement("span");
    text.classList.add(
        "task-text"
    );

    // createTextNode()
    let textNode =
    document.createTextNode(
        inp.value
    );

    // append()
    text.append(
        textNode
    );

    let catBadge = document.createElement("span");
    catBadge.className = `category-pill cat-${category.value.toLowerCase()}`;
    catBadge.innerText = category.value;

    taskContent.append(chk, text, catBadge);

    // Button Container
    let btnBox =
    document.createElement("div");
    btnBox.classList.add(
        "btns"
    );

    // Complete Button
    let completeBtn =
    document.createElement("button");
    completeBtn.classList.add(
        "complete"
    );
    completeBtn.innerText =
    "Complete";

    // Edit Button
    let editBtn =
    document.createElement("button");
    editBtn.classList.add(
        "edit"
    );
    editBtn.innerText =
    "Edit";

    // Delete Button
    let delBtn =
    document.createElement("button");
    delBtn.classList.add(
        "delete"
    );
    delBtn.innerText =
    "Delete";

    // append()
    btnBox.append(
        completeBtn,
        editBtn,
        delBtn
    );

    taskDiv.append(
        taskContent,
        btnBox
    );

    // prepend()
    // Newest task appears at top
    container.prepend(
        taskDiv
    );

    // before()
    if(container.previousElementSibling == null)
    {
        let hr =
        document.createElement("hr");
        container.before(
            hr
        );
    }

    // after()
    if(container.nextElementSibling == null)
    {
        let br =
        document.createElement("br");
        container.after(
            br
        );
    }

    inp.value = "";
    updateCounter();
});

// ===========================
// Event Delegation
// ===========================

container.addEventListener("click", function(e){

    let task =
    e.target.closest(".task");

    if(!task)
    {
        return;
    }

    // ===========================
    // Custom Checkbox Click Support
    // ===========================
    if (e.target.classList.contains("custom-checkbox") || e.target.closest(".custom-checkbox")) {
        let completeBtn = task.querySelector(".complete");
        if (completeBtn) {
            completeBtn.click();
            return;
        }
    }

    // ===========================
    // Delete
    // ===========================

    if(
        e.target.classList.contains(
            "delete"
        )
    )
    {
        // remove()
        task.remove();
        updateCounter();
    }

    // ===========================
    // Complete
    // ===========================

    if(
        e.target.classList.contains(
            "complete"
        )
    )
    {
        task.classList.toggle(
            "completed"
        );

        if(
            task.dataset.status
            == "pending"
        )
        {
            task.dataset.status =
            "completed";

            e.target.innerText =
            "Undo";
        }
        else
        {
            task.dataset.status =
            "pending";

            e.target.innerText =
            "Complete";
        }

        updateCounter();
    }

    // ===========================
    // Edit
    // ===========================

    if(
        e.target.classList.contains(
            "edit"
        )
    )
    {
        let btn =
        e.target;

        // First click → Edit mode
        if(
            task.dataset.editing
            != "true"
        )
        {
            task.dataset.editing =
            "true";

            let text =
            task.querySelector(
                ".task-text"
            );

            let editInput =
            document.createElement(
                "input"
            );
            editInput.classList.add(
                "editInput"
            );
            editInput.value =
            text.innerText;

            // replaceWith()
            text.replaceWith(
                editInput
            );

            btn.innerText =
            "Save";
        }
        // Second click → Save mode
        else
        {
            let editInput =
            task.querySelector(
                ".editInput"
            );

            if(
                !editInput.value.trim()
            )
            {
                return;
            }

            let span =
            document.createElement(
                "span"
            );
            span.classList.add(
                "task-text"
            );

            // createTextNode()
            let node =
            document.createTextNode(
                editInput.value
            );

            span.append(
                node
            );

            // replaceWith()
            editInput.replaceWith(
                span
            );

            btn.innerText =
            "Edit";

            task.dataset.editing =
            "false";
        }
    }
});

// ===========================
// Search Functionality
// ===========================

searchInp.addEventListener("input", function(){

    let searchValue =
    searchInp.value.toLowerCase();

    let allTasks =
    document.querySelectorAll(".task");

    allTasks.forEach(function(task){

        let text =
        task.querySelector(".task-text");

        // Skip if currently editing
        if(!text)
        {
            return;
        }

        if(
            text.innerText
            .toLowerCase()
            .includes(searchValue)
        )
        {
            task.style.display =
            "flex";
        }
        else
        {
            task.style.display =
            "none";
        }
    });
});

// ===========================
// Clear All Tasks
// ===========================

clearBtn.addEventListener("click", function(){
    container.innerHTML = "";
    updateCounter();
    saveTasks();
});

// ===========================
// Local Storage
// ===========================

function saveTasks()
{
    let allTasks =
    document.querySelectorAll(".task");

    let taskArray = [];

    allTasks.forEach(function(task){

        let text =
        task.querySelector(".task-text");

        // Ignore editing tasks
        if(!text)
        {
            return;
        }

        let obj = {
            text :
            text.innerText,

            status :
            task.dataset.status,

            category :
            task.dataset.category
        };

        taskArray.push(obj);
    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(taskArray)
    );
}

// ===========================
// Load Tasks
// ===========================

function loadTasks()
{
    let tasks =
    JSON.parse(
        localStorage.getItem(
            "tasks"
        )
    );

    if(tasks == null)
    {
        return;
    }

    tasks.forEach(function(item){

        let taskDiv =
        document.createElement(
            "div"
        );
        taskDiv.classList.add(
            "task"
        );

        taskDiv.dataset.id =
        Date.now() +
        Math.random();

        taskDiv.dataset.status =
        item.status;

        taskDiv.dataset.category =
        item.category;

        // Custom structure for card layout
        let taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        let chk = document.createElement("div");
        chk.classList.add("custom-checkbox");

        let text =
        document.createElement(
            "span"
        );
        text.classList.add(
            "task-text"
        );

        let node =
        document.createTextNode(
            item.text
        );
        text.append(node);

        let catBadge = document.createElement("span");
        catBadge.className = `category-pill cat-${item.category.toLowerCase()}`;
        catBadge.innerText = item.category;

        taskContent.append(chk, text, catBadge);

        let btnBox =
        document.createElement(
            "div"
        );
        btnBox.classList.add(
            "btns"
        );

        let completeBtn =
        document.createElement(
            "button"
        );
        completeBtn.classList.add(
            "complete"
        );

        if(item.status ==
            "completed")
        {
            completeBtn.innerText =
            "Undo";

            taskDiv.classList.add(
                "completed"
            );
        }
        else
        {
            completeBtn.innerText =
            "Complete";
        }

        let editBtn =
        document.createElement(
            "button"
        );
        editBtn.classList.add(
            "edit"
        );
        editBtn.innerText =
        "Edit";

        let delBtn =
        document.createElement(
            "button"
        );
        delBtn.classList.add(
            "delete"
        );
        delBtn.innerText =
        "Delete";

        btnBox.append(
            completeBtn,
            editBtn,
            delBtn
        );

        taskDiv.append(
            taskContent,
            btnBox
        );

        container.append(
            taskDiv
        );
    });

    updateCounter();
}

// ===========================
// Auto Save Handlers
// ===========================

container.addEventListener(
    "click",
    function(){
        setTimeout(function(){
            saveTasks();
        },50);
    }
);

addBtn.addEventListener(
    "click",
    function(){
        setTimeout(function(){
            saveTasks();
        },50);
    }
);

// ===========================
// Render Pipeline Simulation
// ===========================

let simulateBtn = document.querySelector(".simulate-pipeline");
if (simulateBtn) {
    simulateBtn.addEventListener("click", function() {
        let stages = document.querySelectorAll(".pipeline .box");
        let delay = 0;
        
        simulateBtn.disabled = true;
        simulateBtn.style.opacity = "0.6";
        
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.classList.add("active-stage");
                
                // Scroll pipeline list into view for active elements
                stage.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

                setTimeout(() => {
                    stage.classList.remove("active-stage");
                    if (index === stages.length - 1) {
                        simulateBtn.disabled = false;
                        simulateBtn.style.opacity = "1";
                    }
                }, 500);
            }, delay);
            delay += 350;
        });
    });
}

// ===========================
// Load Saved Tasks
// ===========================

loadTasks();

// ===========================
// Bonus Console Demonstrations
// ===========================

console.log("DOM Methods Demonstrated Successfully");
console.log("Event Delegation Implemented");
console.log("Local Storage Enabled");
console.log("Task Manager Loaded Successfully");
