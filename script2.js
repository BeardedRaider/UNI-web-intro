  // ---------Event listener for submitting the quiz

  document.getElementById('submitQuizButton').addEventListener('click', function(event) {
    event.preventDefault();//this is the prevent default for the event
    const question1 = document.querySelector('input[name="question1"]:checked').value;
    const question2 = document.querySelector('input[name="question2"]:checked').value;
    const question3 = document.querySelector('input[name="question3"]:checked').value;

    let score = 0;
    const totalQuestions = 3;

    if (question1 == 'paris') score++;
    if (question2 == '4') score++;
    if (question3 == 'blue') score++;

    const quizResult = document.getElementById('quizResult');
    quizResult.innerText = `Excellent! You scored ${score}/${totalQuestions}.`;
  });