document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            sport: 'Basketball',
            description: 'Basketball rules govern the way the game is played, from how points are scored to the behavior expected of players.',
            image: 'img/court.jpg', // Ensure this image is in the correct path
            url: 'https://official.nba.com/rulebook/', // Link to official rules
        }
    }
});

app.mount('#app');
