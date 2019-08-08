/**
 * Adds the class "scroll" to elements when the webpage is not scrolled to the top.
 */
function modify_scrolling_elts() {
    //All of the elements I want to add class "scroll" to
    let head_all = document.querySelectorAll("#header *");
    let elts = [head_all];
    //Just in case something goes wrong
    let message = { failure: "R.I.P headerScroll() has errors:\n\t" }

    //checks if each element actually exits
    if (elts.includes(undefined)) fatal("Your javascript code needs to be updated.");

    //Controlls when to add or remove the class "scroll"
    if (this.scrollY > 0) {
        modifyScrollClass(elts, "add");
    }
    else {
        modifyScrollClass(elts, "remove");
    }

    //Used for adding or removing the class "scroll"
    function modifyScrollClass(elts, modifier) {
        //A function that adds or removes class "scroll" depending on the modifier
        let modify = (elt) => {
            modifier === "add" ? elt.classList.add("scroll") :
                modifier === "remove" ? elt.classList.remove("scroll") :
                    fatal("Cannot modify elements with modifier: classList {" + modifier + "}");
        }
        if ([Array, HTMLCollection, NodeList].includes(elts.constructor)) {
            elts.forEach(function (elt) {
                if ([Array, HTMLCollection, NodeList].includes(elt.constructor)) {
                    elt.forEach(function (item) {
                        modify(item);
                    });
                }
                else modify(elt);
            });
        }
        else modify(elts);
    }
    function fatal(msg) {
        console.log(message.failure + msg);
        return -1;
    }
}

//This just changes the header background when scrolling
window.addEventListener("scroll", modify_scrolling_elts, false);