// 1. Create the banner element
let banner = document.createElement("div");
banner.textContent = "✅ Xgui4 Addon Extension Fully Installed and Activated";

// 2. Create the close button
let close_button = document.createElement("button");
close_button.textContent = "❌";

// FIX: Wrap the remove logic in a function so it only runs when clicked
close_button.onclick = function() {
    banner.remove(); // Removes the entire banner from the page
};

// 3. Apply styles for the banner
Object.assign(banner.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Pushes text and button to opposite ends
    backgroundColor: "#e0f7fa", 
    color: "#000000",           
    width: "100%",
    padding: "10px 20px",        // Horizontal padding for the button
    fontWeight: "bold",
    fontFamily: "sans-serif",
    zIndex: "9999",
    position: "relative",
    boxSizing: "border-box"      // Ensures padding doesn't break width
});

// 4. Style the button for a cleaner look
Object.assign(close_button.style, {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "20px"
});

// 5. Assemble and inject
banner.appendChild(close_button);
document.body.prepend(banner);