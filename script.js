const ageInput = document.getElementById('age')
const dayInput = document.getElementById('day')
const checkButton = document.getElementById('check')

function normalPricing () {
  alert('You are only eligible for standard pricing.')
}

function studentPricing () {
  alert('You are eligible for student pricing.')
}

function onclick () {
  const age = parseInt(ageInput.value)
  const weekday = parseInt(dayInput.value)
  // 2 = Tuesday, 4 = Thursday
  if (weekday !== 2 && weekday !== 4) {
    normalPricing()
    return
  }
  if (age > 12 && age < 21) {
    studentPricing()
    return
  }
  normalPricing()
}

checkButton.addEventListener('click', onclick)