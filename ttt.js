document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "interactive") {
        initTicTacToe();
    }
});

function initTicTacToe() {
    getElements();
    clearBoard();
}

function clearBoard() {
    a1.innerText = "";
    a2.innerText = "";
    a3.innerText = "";
    b1.innerText = "";
    b2.innerText = "";
    b3.innerText = "";
    c1.innerText = "";
    c2.innerText = "";
    c3.innerText = "";
}

function getElements() {
    a1 = document.getElementById("a1");
    a2 = document.getElementById("a2");
    a3 = document.getElementById("a3");
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    c1 = document.getElementById("c1");
    c2 = document.getElementById("c2");
    c3 = document.getElementById("c3");
}