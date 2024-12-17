document.addEventListener("DOMContentLoaded",() => {
    const content = document.querySelector("#content");

    const div1 = document.createElement("div");

    div1.classList.add("Header");
    div1.textContent = 'Header';

    content.appendChild(div1);
})