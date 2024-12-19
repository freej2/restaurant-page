function loadAbout() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "About Jacob's Diner";
    content.appendChild(title);

    const info = document.createElement('div');
    info.textContent = "Jacob's Diner was created when the owner got sick and tired of this engineering job and decided running a diner was much more enjoyable. \
    He now spends his days making pancakes and bacon and loves life.";
    content.appendChild(info);
}

export default loadAbout;