document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            sport: 'Basketball',
            description: 'is a sport that has seen many legendary players over the years.',
            image: 'img/famous.jpg', // Path to the image file
            url: 'https://en.wikipedia.org/wiki/Michael_Jordan', // Link to player's profile
            player: 'Michael Jordan',
            inStock: true, // Adjust to false to see different text
        }
    }
});

app.mount('#app');
