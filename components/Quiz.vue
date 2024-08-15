<template>
    <div class="quiz-container">
      <h2>Test Your Basketball Knowledge!</h2>
      <div v-if="currentQuestion < questions.length">
        <p>{{ questions[currentQuestion].question }}</p>
        <ul>
          <li v-for="(option, index) in questions[currentQuestion].options" :key="index">
            <button @click="checkAnswer(index)">{{ option }}</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <h3>Quiz Completed!</h3>
        <p>Your Score: {{ score }} / {{ questions.length }}</p>
        <button @click="resetQuiz">Try Again</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestion: 0,
        score: 0,
        questions: [
          {
            question: "How many players are on a basketball team?",
            options: ["5", "6", "7", "8"],
            correctAnswer: 0
          },
          {
            question: "What is the height of a basketball hoop?",
            options: ["8 feet", "9 feet", "10 feet", "11 feet"],
            correctAnswer: 2
          },
          {
            question: "Which player is known as 'Air Jordan'?",
            options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"],
            correctAnswer: 2
          }
        ]
      };
    },
    methods: {
      checkAnswer(index) {
        if (index === this.questions[this.currentQuestion].correctAnswer) {
          this.score++;
        }
        this.currentQuestion++;
      },
      resetQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
      }
    }
  };
  </script>
  
  <style scoped>
.quiz-container {
    margin: 50px auto;
    padding: 30px;
    background-color: #e3f2fd;
    border-radius: 10px;
    max-width: 600px;
    text-align: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.quiz-container h2 {
    font-size: 2.5em;
    margin-bottom: 30px;
    color: #1e88e5;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-bottom: 3px solid #1976d2;
    display: inline-block;
    padding-bottom: 10px;
}

.quiz-container p {
    font-size: 1.3em;
    margin-bottom: 25px;
    color: #444;
}

.quiz-container ul {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
}

.quiz-container li {
    margin-bottom: 15px;
}

.quiz-container button {
    width: 80%;
    padding: 15px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-weight: bold;
    text-transform: uppercase;
}

.quiz-container button:hover {
    background-color: #1565c0;
    transform: translateY(-3px);
}

.quiz-container button:focus {
    outline: none;
    box-shadow: 0 0 10px #1976d2;
}

.quiz-container button:active {
    background-color: #0d47a1;
    transform: translateY(0px);
}

.quiz-container .quiz-completed h3 {
    font-size: 2em;
    margin-bottom: 25px;
    color: #2e7d32;
}

.quiz-container .quiz-completed p {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #1b5e20;
}

.quiz-container .quiz-completed button {
    width: auto;
    padding: 12px 30px;
    background-color: #2e7d32;
}

.quiz-container .quiz-completed button:hover {
    background-color: #1b5e20;
}

.quiz-container .quiz-completed button:active {
    background-color: #1b5e20;
}
</style>
