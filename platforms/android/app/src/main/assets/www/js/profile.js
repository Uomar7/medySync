const button = document.getElementById('button');
const div = document.getElementById('sidenav');

button.addEventListener('click', (e) => {
     e.preventDefault();
     if (div.style.display === "block") {
          div.style.display = "none";
     } else {
          div.style.display = "block";
     }
});