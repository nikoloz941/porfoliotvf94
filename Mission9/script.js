
const correctAnswers = {
    q1: "B",
    q2: "C",
    q3: "A",
    q4: "A",
    q5: "C",
    q6: "C",
    q7: "B",
    q8: "A",
    q9: "B",
    q10: "C"
};


function calculateScore() {
    let score = 0;

    // Vérifier les réponses
    for (let question in correctAnswers) {
        let answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer && answer.value === correctAnswers[question]) {
            score++;
        }
    }

    
    alert(`Vous avez ${score} bonnes réponses.`);
}


function showAnswers() {
    let answersText = "Réponses correctes :\n";
    for (let question in correctAnswers) {
        answersText += `${question}: ${correctAnswers[question]}\n`;
    }
    alert(answersText);
}


document.getElementById("check-btn").onclick = calculateScore;
document.getElementById("answers-btn").onclick = showAnswers;
