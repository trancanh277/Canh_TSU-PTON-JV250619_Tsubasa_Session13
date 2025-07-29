const list = [
    1, 8, 6, 14, 85, 83, 27, 69, 33,
];
let a = +prompt("Mời nhập vào 1 số bất kì");
let timthay = false;
while (!timthay) {
    for (i = 0; i <= list.length - 1; i++) {
        if (list[i] === a) {
            timthay = true;
            break;
        }
    }
    if (timthay) {
        alert("Bingo");
    }
    else { alert("Chúc bạn may mắn lần sau"); 
        break;
    }
}

