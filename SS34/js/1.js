let danhSach = ["List item number 1", "List item number 2", "List item number 3"];

function hienThiDanhSach() {
    let ul = document.createElement("ul");

    for (let i = 0; i < danhSach.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(danhSach[i]));
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

window.onload = hienThiDanhSach;