function headerScroll() {
    let head = document.getElementById("header");
    let logo = document.querySelector("#header .logo");
    let name = document.getElementById("header_name");
    let message = {failure: "headerScroll() has errors:\n\t"}
    if (!head || !logo || !name) fatal("Your javascript code needs to be updated.");

    if(this.scrollY > 1) {
        logo.classList.add("scroll");
    }
    else {
        logo.classList.remove("scroll");
    }
    function fatal(msg) {
        console.log(message.failure + msg);
        return -1;
    }
}

//This just changes the header background when scrolling
window.addEventListener("scroll", headerScroll, false);