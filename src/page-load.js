import pancakeImage from './assets/pancakes.jpg';

function loadHomePage() {
        const content = document.querySelector("#content");
    
        const restaurantImage = document.createElement('img');
        restaurantImage.src = pancakeImage;
        restaurantImage.alt = "Jacob's Pancakes";
        content.appendChild(restaurantImage);

        const div1 = document.createElement("div");
        div1.id = 'content-text';
        content.appendChild(div1);    
    
        const div2 = document.createElement('h1');
        div2.textContent = "Welcome to Jacob's Diner";
        div1.appendChild(div2);
    
        const div3 = document.createElement('div');
        div3.textContent = "Home of the famous Jacob's Pancakes";
        div1.appendChild(div3);
}

export default loadHomePage;