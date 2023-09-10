function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const adviceInEnglish = data.slip.advice;
        displayAdvice(adviceInEnglish);
    })
    .catch(error => console.error(error));
}

function displayAdvice(advice) {
    const adviceElement = document.getElementById('advice');
    adviceElement.textContent = `Mejora tu inglés, y pon en práctia: ${advice}`;
}

window.onload = getAdvice;