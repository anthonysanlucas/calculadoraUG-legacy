document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();

  const firstTerm = document.getElementById('firstTerm').valueAsNumber,
    secondTerm = document.getElementById('secondTerm').valueAsNumber,
    exam = document.getElementById('exam').valueAsNumber,
    result = document.getElementById('output');

  const AVERAGE = average(firstTerm, secondTerm);

  result.value = basicConditions(AVERAGE, exam);

  if (AVERAGE >= 3 && exam)
    return (result.value = newGrade(AVERAGE, firstTerm, secondTerm, exam));

  if (AVERAGE >= 3 && AVERAGE < 7 && !exam)
    return (result.value = necesaryExam(AVERAGE));
});

function necesaryExam(AVERAGE) {
  let necesaryGrade = (7 - AVERAGE * 0.4) / 0.6;
  return `Promedio: ${AVERAGE}\nRecuperación: ${roundNumber(necesaryGrade)}`;
}

function newGrade(AVERAGE, firstTerm, secondTerm, exam) {
  if (AVERAGE >= 7)
    return `Calificación Final: ${mejorationExam(firstTerm, secondTerm, exam)}`;

  return `Calificación Final: ${recuperationExam(AVERAGE, exam)}`;
}

function recuperationExam(AVERAGE, exam) {
  let newGrade = 0.6 * exam + 0.4 * AVERAGE;
  return roundNumber(newGrade);
}

function mejorationExam(firstTerm, secondTerm, exam) {
  if (exam < firstTerm && exam < secondTerm)
    return average(firstTerm, secondTerm);

  let maxGrade = Math.max(firstTerm, secondTerm);
  return average(exam, maxGrade);
}

function basicConditions(AVERAGE, exam) {
  if (AVERAGE >= 9.5) return 'Excelente Calificación';

  if (AVERAGE >= 7 && !exam)
    return `Promedio: ${AVERAGE}\nVálido para mejoramiento`;

  if (AVERAGE < 3) return 'No válido para recuperación';
}

function average(firstNumber, secondNumber) {
  let grade = (firstNumber + secondNumber) / 2;
  return roundNumber(grade);
}

function roundNumber(number) {
  return +(Math.round(number + 'e+2') + 'e-2');
}

document.getElementById('finalGradePage').classList.add('active-page');
