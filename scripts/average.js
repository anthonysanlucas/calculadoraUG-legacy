document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();

  const formative = document.getElementById('formative').valueAsNumber,
    practice = document.getElementById('practice').valueAsNumber,
    exam = document.getElementById('exam').valueAsNumber,
    result = document.getElementById('output');

  result.value = partialAverage(formative, practice, exam);
  cleanInput();
});

function partialAverage(formative, practice, exam) {
  let grade = formative * 0.33 + practice * 0.33 + exam * 0.34;
  return `Promedio Parcial: ${roundNumber(grade)}`;
}

function roundNumber(number) {
  return +(Math.round(number + 'e+2') + 'e-2');
}

function cleanInput() {
  document.getElementById('formative').value = '';
  document.getElementById('practice').value = '';
  document.getElementById('exam').value = '';
}
