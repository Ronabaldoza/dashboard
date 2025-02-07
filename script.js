document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggleBtn = document.querySelector('.sidebar-toggle-btn');
    const navLinks = document.querySelectorAll('.nav li a');
    const sections = document.querySelectorAll('.section');

    
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
    }

    
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });

        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });


    showSection("reports");

    
    sidebarToggleBtn.addEventListener('click', toggleSidebar);
});
