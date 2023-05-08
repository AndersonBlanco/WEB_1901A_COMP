function loadDOc(path, target){
    fetch(path)
    .then(res => res.text())
    .then(html => target.innerHTML += html)
}

const header = document.getElementById('header');
loadDOc('./docs/header.html', header);

const footer = document.getElementById('footer');
loadDOc('./docs/footer.html', footer); 