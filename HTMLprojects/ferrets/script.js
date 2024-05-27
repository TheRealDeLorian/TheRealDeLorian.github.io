let ferrets = [];

getRiddle();

document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('next').addEventListener('click', getRiddle);

document.getElementById('ferrets').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        for (let i = 0; i < ferrets.length; i++) {
            if (ferrets[i].image === event.target) {
                ferrets[i].lastClickTime = Date.now();
                ferrets[i].timerElement.textContent = 'Time left: 30 seconds'; // Update timer text instantly
                break;
            }
        }
    }
});

function getRiddle() {
    fetch('https://riddles-api.vercel.app/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('riddle').textContent = data.riddle;
            document.getElementById('answer').value = '';
            document.getElementById('result').textContent = '';
            currentAnswer = data.answer;
            document.getElementById('next').style.display = 'none';
            console.log(data.answer);

        })
        .catch(error => console.error('Error:', error));
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = currentAnswer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Correct!';
        addFerret(); // Add ferret instantly
    } else {
        document.getElementById('result').textContent = `Sorry, the correct answer was "${currentAnswer}".`;
    }

    document.getElementById('next').style.display = 'block';
}

function addFerret() {
    const ferretContainer = document.createElement('div');
    ferretContainer.className = 'ferret-container';

    const ferretImage = document.createElement('img');
    ferretImage.src = '../ferret.png';
    ferretImage.className = 'ferret';
    ferretContainer.appendChild(ferretImage);

    const timerElement = document.createElement('div');
    timerElement.className = 'timer';
    timerElement.textContent = 'Time left: 30 seconds'; // Add initial timer text
    ferretContainer.appendChild(timerElement);

    document.getElementById('ferrets').appendChild(ferretContainer);

    ferrets.push({
        image: ferretImage,
        timerElement: timerElement,
        lastClickTime: Date.now()
    });

    setInterval(updateTimers, 1000);
}

function updateTimers() {
    for (let i = 0; i < ferrets.length; i++) {
        const timeLeft = 30 - Math.floor((Date.now() - ferrets[i].lastClickTime) / 1000);
        ferrets[i].timerElement.textContent = `Time left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            ferrets[i].image.parentNode.removeChild(ferrets[i].image);
            ferrets[i].timerElement.parentNode.removeChild(ferrets[i].timerElement);
            ferrets.splice(i, 1);
        }
    }
}

document.getElementById('ferrets').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        for (let i = 0; i < ferrets.length; i++) {
            if (ferrets[i].image === event.target) {
                ferrets[i].lastClickTime = Date.now();
                break;
            }
        }
    }
});