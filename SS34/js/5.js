let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

let ul = document.createElement("ul");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(names[i]));
    ul.appendChild(li);
}

document.body.appendChild(ul);