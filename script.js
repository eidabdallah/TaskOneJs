function incFont(){
    document.querySelector(".Font").classList.remove("SmallFont");
    document.querySelector(".Font").classList.add("LargeFont");
}
function decFont(){
    document.querySelector(".Font").classList.remove("LargeFont");
    document.querySelector(".Font").classList.add("SmallFont");
}

document.querySelector(".inc").onclick = incFont;
document.querySelector(".dec").onclick = decFont;
