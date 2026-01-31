fetch("/templates/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").outerHTML = data;
    });

fetch("/templates/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").outerHTML = data;
    });