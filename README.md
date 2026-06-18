# 🌌 Aether Workspace — Premium DOM & JS Interactive Lab

A sleek, dark-themed, glassmorphic educational dashboard designed to explore advanced DOM manipulation APIs, event lifecycle mechanics, and browser rendering pipeline behaviors.

---

## 🎨 Visual Aesthetics & Design System

Aether Workspace uses premium web design conventions:
*   **Dual Themes:** Fully optimized Dark Mode (Default) and Light Mode.
*   **Glassmorphism & Micro-animations:** Transparent backdrop card blurs, interactive hover-state scaling, slide-in keyframe entry, and real-time concentric glowing highlights.
*   **Curated Color Palettes:** Harmonious HSL colors mapped to custom categories and dynamic telemetry logs.

---

## ⚡ Core Interactive Tabs

### 1. 📋 Task Workspace
A high-fidelity task dashboard showcasing full-scale CRUD capabilities:
*   **State & Counters:** Real-time counters calculating `Pending` and `Completed` tasks.
*   **Category Tags:** Dedicated visual pills for `Study`, `Work`, and `Personal` categorization.
*   **Dynamic Actions:** Task creation, in-place edit/save toggle, checkbox complete/undo, and delete execution.
*   **Search Engine:** Live, character-by-character task search filtering.
*   **Data Persistence:** Automatic local storage synchronization via JSON state mapping.

### 2. 🎛️ Attributes vs. Properties Sandbox
An interactive playground demonstrating a fundamental web development concept:
*   **Interactive Input:** Type inside the input sandbox to test value tracking.
*   **State Telemetry:** Click **Show Difference** to inspect the static HTML Attribute (represents initial markup state) vs. the dynamic JS DOM Property (represents live memory state).

### 3. 🌀 Event Propagation Visualizer
A telemetry logger illustrating nested element event dispatching:
*   **Concentric Nodes:** A nested layout structure consisting of `Grandparent` ➔ `Parent` ➔ `Child` elements.
*   **Real-time Event Flow:** Triggering the propagation button streams logs capturing event travel:
    1.  **Capture Phase:** Event descends from the top down (`useCapture: true`).
    2.  **Target Phase:** Event triggers at the target element.
    3.  **Bubbling Phase:** Event ascends from bottom up (default listener).
*   **Visual Glow Effects:** Active nodes glow dynamically as the event traverses them in real-time.

### 4. ⚙️ Browser Rendering Pipeline
An automated stage simulator representing the browser's graphical conversion sequence:
*   **Animated Simulation:** Step-by-step visual animation demonstrating:
    `HTML` ➔ `Parsing` ➔ `Tokenization` ➔ `DOM Tree` ➔ `CSS` ➔ `CSSOM Tree` ➔ `Render Tree` ➔ `Layout` ➔ `Paint` ➔ `Composite`
*   **Educational Legends:** Contextual cards explaining DOM Construction, CSSOM styling compilation, and the GPU screen composite sequence.

---

## 🛠️ DOM Methods & APIs Demonstrated

This codebase serves as a reference implementation of native DOM API methods:

### 🔍 DOM Selection
*   `document.querySelector(selector)`: Locates the first element matching selectors.
*   `document.querySelectorAll(selector)`: Selects static `NodeList` matches.
*   `document.getElementById(id)`: Highly efficient query by ID.

### 🏗️ DOM Construction & Mutation
*   `document.createElement(tagName)`: Instantiates new DOM elements.
*   `document.createTextNode(text)`: Creates raw text nodes.
*   `element.append(...nodes)` & `element.prepend(...nodes)`: Inserts elements at the end or start of parent containers.
*   `element.before(...nodes)` & `element.after(...nodes)`: Inserts elements directly before or after target elements.
*   `element.replaceWith(newNode)`: Replaces a target node.
*   `element.remove()`: Safely drops element node allocations from the DOM tree.

### 🏷️ Attributes & Datasets
*   `element.setAttribute(name, value)`: Modifies or creates HTML element attributes.
*   `element.getAttribute(name)`: Retrieves specified attribute values.
*   `element.hasAttribute(name)`: Boolean check verifying attribute presence.
*   `element.removeAttribute(name)`: Discards specified attributes.
*   `element.dataset`: Accesses custom `data-*` data attributes (e.g., `data-status`, `data-category`, `data-id`).

### ⚡ Event Handling & Delegation
*   `element.addEventListener(event, listener, useCapture)`: Registers listeners with capture phase configuration.
*   `event.target.closest(selector)`: Crawls up the DOM tree starting from `event.target` to match the selector—enabling robust **Event Delegation** pattern across dynamically spawned task items.

### 📦 Web & Browser APIs
*   `localStorage.setItem()` & `localStorage.getItem()`: Syncs project state.
*   `element.scrollIntoView(options)`: Smoothly offsets container scrolls during the pipeline simulation.
*   `setTimeout()`: Controls UI queue scheduling, event flashes, and simulation sequences.

---

## 🚀 How to Run Locally

1.  **Clone / Download** this project directory.
2.  Open [index.html](index.html) directly in any modern browser, or run a local development server:
    ```bash
    # Using VS Code: Right-click index.html -> Open with Live Server
    # OR using python:
    python -m http.server 8000
    ```
3.  Navigate to `http://localhost:8000` (or the provided port) in your web browser.

---

## 📁 File Structure

*   [index.html](index.html) — Structured dashboard layout, tabs, SVG icons, and HTML markup.
*   [style.css](style.css) — Custom design tokens, dark/light themes, layout structures, and visual graphics.
*   [script.js](script.js) — Interactive state flow logic, DOM event registers, simulation engines, and browser storage integration.
