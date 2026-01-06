const MSG = "✅ Xgui4 Addon Extension Fully Activated"
const EXIT_BUTTON = "❌"

let banner = document.createElement("div")
banner.textContent = MSG

let close_button = document.createElement("button")
close_button.textContent = EXIT_BUTTON

close_button.onclick = function() {
    banner.remove()
}

Object.assign(banner.className = "banner")
Object.assign(close_button.className = "close-button")

banner.appendChild(close_button)
document.body.prepend(banner)