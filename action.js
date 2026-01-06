let nav = document.getElementsByTagName('nav')[0];
if (nav) {
    let nav_div = nav.getElementsByTagName("div")[0];
    if (nav_div) {
        let nav_link = document.createElement('a');

        Object.assign(nav_link, {
            className: "nav_link",
            href: "#",
            textContent: "Addon Page"
        });

        // Fix: Correct event listener syntax
        nav_link.addEventListener("click", function(event) {
            event.preventDefault();
            go_to_link("");
        });

        nav_div.append(nav_link);
    }
}

function go_to_link(link) {
    alert("Not implemented yet");
}   