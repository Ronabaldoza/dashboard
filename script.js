document.addEventListener("DOMContentLoaded", function () {

    
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggleBtn = document.createElement('button');
    sidebarToggleBtn.innerText = '☰';
    sidebarToggleBtn.style.position = 'absolute';
    sidebarToggleBtn.style.top = '20px';
    sidebarToggleBtn.style.left = '20px';
    sidebarToggleBtn.style.padding = '10px';
    sidebarToggleBtn.style.cursor = 'pointer';
    sidebarToggleBtn.style.fontSize = '20px'; 
    document.body.appendChild(sidebarToggleBtn);

    const userCountElement = document.querySelector('.account-info p:nth-child(1)');
    const tempUserCountElement = document.querySelector('.account-info p:nth-child(2)');
    const totalUserCountElement = document.querySelector('.account-info p:nth-child(3)');

   
    let userCount = 150;
    let tempUserCount = 50;
    let totalUserCount = userCount + tempUserCount;

    
    function updateUserCounts() {
        userCountElement.innerHTML = `<strong>Users:</strong> ${userCount}`;
        tempUserCountElement.innerHTML = `<strong>Temp Users:</strong> ${tempUserCount}`;
        totalUserCountElement.innerHTML = `<strong>Total No of Users:</strong> ${totalUserCount}`;
    }

    
    updateUserCounts();

    
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
    }

    
    sidebarToggleBtn.addEventListener('click', toggleSidebar);

   
    setTimeout(function () {
        userCount = 170;
        tempUserCount = 60;
        totalUserCount = userCount + tempUserCount;
        updateUserCounts();
    }, 3000); 

});

