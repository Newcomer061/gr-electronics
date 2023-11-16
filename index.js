document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-btn');
    var list = document.querySelector('.list');

    menuButton.addEventListener('click', function () {
        // Toggle the visibility of the list when the button is clicked
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.display = 'flex';
            list.style.marginTop = '25px';
            list.style.alignItems = 'center';
            list.style.justifyContent = 'center';
            menuButton.innerHTML = '&#10006;'; // Change to a cross when list is visible
        } else {
            list.style.display = 'none';
            list.style.alignItems = ''; // Reset to default
            list.style.justifyContent = ''; // Reset to default
            menuButton.innerHTML = '&#9776;'; // Change back to three dots when list is hidden
            menuButton.style.marginTop = '0';
        }
    });
});
