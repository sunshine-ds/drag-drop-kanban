<!-- Generated 2025-10-16T17:04:51.162083+00:00 for demo@example.com | task kanban-board-app-demo round 1 -->
const summary = 'A student-friendly Kanban board web app with three columns (To Do, In Progress, Done), supporting task creation, drag-and-drop movement, deletion, and visual feedback. Built with vanilla JS, HTML5, and CSS3, styled using Flexbox/Grid, responsive for mobile and desktop, and deployable via GitHub Pages.';
            const brief = "Create a Kanban board application with drag-and-drop functionality. The app should have three columns: 'To Do', 'In Progress', and 'Done'. Users should be able to add new tasks, move tasks between columns by dragging, and delete tasks. Include visual feedback during drag operations. Use vanilla JavaScript, HTML5, and CSS3. Style it with a clean, modern interface using flexbox or grid layout.";
            document.getElementById('app').innerHTML = `
                <h1>${summary}</h1>
                <p>${brief}</p>
                <p class="meta">Generated at ${new Date().toISOString()}</p>
            `;
