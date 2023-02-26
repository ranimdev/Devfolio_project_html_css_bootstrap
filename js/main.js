let section = document.querySelector(".about");
let progress = document.querySelectorAll(".progress .progress-bar");

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop ) {
        console.log('reached section three');
        progress.forEach((progress) => {
            progress.style.width = progress.dataset.width;
        })
    }
}