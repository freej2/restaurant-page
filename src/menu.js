function loadMenu() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Food";
    title.classList.add('menu-title');
    content.appendChild(title);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-container');
    content.appendChild(menuItems);

    const pancakes = document.createElement('div');
    pancakes.textContent = "Warm fluffy pancakes whipped up via a special recipe";
    pancakes.classList.add('menu-item');
    menuItems.appendChild(pancakes);

    const bacon = document.createElement('div');
    bacon.textContent = "Crispy thick bacon that goes perfectly with pancakes";
    bacon.classList.add('menu-item');
    menuItems.appendChild(bacon);
}

export default loadMenu;