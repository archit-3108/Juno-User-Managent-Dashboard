document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display user data
    displayTabContent('Monitoring');

    fetchData();

    // Handle tab clicks
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const selectedTab = this.dataset.tab;
            // Implement logic to switch between tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked tab
            this.classList.add('active');
            // Display content for the selected tab
            displayTabContent(selectedTab);
        });
    });

    // Handle search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();
        filterUsers(searchQuery);
    });
});

function fetchData() {
    // Use Fetch API to get data from local JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayUsers(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayUsers(users) {
    const userTableBody = document.getElementById('user-table-body');
    // Clear existing rows
    userTableBody.innerHTML = '';

    // Iterate through users and create table rows
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.user}</td>
            <td>${user.email}</td>
            <td>${user.risk_level}</td>
            <td>${user.trigger_reason}</td>
            <td>${user.in_queue_for}</td>
            <td>${user.date_added}</td>
            <td>${user.previously_reviewed}</td>
        `;
        userTableBody.appendChild(row);
    });
}

function filterUsers(searchQuery) {
    const userRows = document.querySelectorAll('#user-table-body tr');
    userRows.forEach(row => {
        const username = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (username.includes(searchQuery)) {
            row.style.display = ''; // Show the row
        } else {
            row.style.display = 'none'; // Hide the row
        }
    });
}

function displayTabContent(tab) {
    // Implement logic to display content for the selected tab
    const tabContent = document.getElementById('tab-content');
    tabContent.innerHTML = `<h2>${tab} Tab Content</h2>`;
    // Add more logic based on your requirements
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerButton').addEventListener('click', function () {
        openPopup('registerPopup');
    });

    document.getElementById('closeButton').addEventListener('click', function () {
        openPopup('closePopup');
    });
});

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}