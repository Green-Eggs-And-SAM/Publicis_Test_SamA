const iframe = document.getElementById("iframe--ad");

function hoverEvent() {
    iframe.contentWindow.startArrowJiggle();
}

function endHoverEvent() {
    iframe.contentWindow.endArrowJiggle();
}
