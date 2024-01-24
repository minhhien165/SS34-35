// Cả ba thuộc tính innerText, textContent, và innerHTML đều liên quan đến việc thao tác và truy cập nội dung của các phần tử HTML bằng JavaScript, nhưng chúng có sự khác biệt trong cách họ xử lý các thẻ HTML và các nút văn bản.

// innerText:

// Khác biệt chính: innerText trả về và thiết lập nội dung văn bản của một phần tử, không bao gồm thẻ HTML.
// Ưu điểm: Nếu bạn chỉ quan tâm đến nội dung văn bản và muốn tránh xử lý các thẻ HTML bên trong, innerText có thể là lựa chọn tốt.
// Lưu ý: innerText không trả về văn bản ẩn (display: none) và có thể bị ảnh hưởng bởi CSS.
// textContent:

// Khác biệt chính: textContent cũng trả về và thiết lập nội dung văn bản của một phần tử, nhưng bao gồm tất cả các thẻ văn bản, kể cả khi chúng ẩn.
// Ưu điểm: Cho phép truy cập đầy đủ nội dung văn bản của một phần tử mà không bị ảnh hưởng bởi CSS.
// Lưu ý: textContent không xử lý thẻ HTML, chỉ trả về văn bản nguyên thủy.
// innerHTML:

// Khác biệt chính: innerHTML trả về và thiết lập nội dung HTML của một phần tử, bao gồm cả thẻ HTML.
// Ưu điểm: Cho phép truy cập và thay đổi cả văn bản và các phần tử HTML bên trong một phần tử.
// Lưu ý: Sử dụng innerHTML cẩn thận để tránh tình huống XSS (Cross-Site Scripting) khi thao tác với dữ liệu người dùng.
// Ví dụ:

let exampleElement = document.getElementById('exampleElement');

// innerText
console.log('innerText:', exampleElement.innerText); // Output: This is an example (without <strong> tag)

// textContent
console.log('textContent:', exampleElement.textContent); // Output: This is an example (with <strong> tag)

// innerHTML
console.log('innerHTML:', exampleElement.innerHTML); // Output: <p>This is <strong>an example</strong>.</p>

// Trong ví dụ này, innerText trả về nội dung văn bản không bao gồm thẻ <strong>, textContent trả về nội dung văn bản đầy đủ, bao gồm thẻ <strong>, và innerHTML trả về toàn bộ nội dung HTML bên trong phần tử.