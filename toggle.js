function changeText() {
    let id = document.getElementsByName("button")[0].id;
    if (id == 1) {
        document.getElementById("text").innerHTML = "日本語を 知っていますか?";
        document.getElementById("text").style.backgroundColor = "red";
        document.getElementsByName("button")[0].id = 0;
    }
    else {
        document.getElementById("text").innerHTML = "oxwamadi bleeet!";
        document.getElementById("text").style.backgroundColor = "green";
        document.getElementsByName("button")[0].id = 1;
    }
}