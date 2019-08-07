function changeHeaderBG() {
    let elt = document.getElementById("head");

    if(this.scrollY > 1) {
        if(elt.classList.contains("show_head_bg")) elt.classList.remove("show_head_bg");
        elt.classList.remove("animate_head_bg");
        elt.classList.add("animate_head_no_bg");
    }
    else {
        elt.classList.remove("animate_head_no_bg");
        elt.classList.add("animate_head_bg");
    }
}

//This just changes the header background when scrolling
window.addEventListener("scroll", changeHeaderBG, false);