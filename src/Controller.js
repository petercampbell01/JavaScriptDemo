function changeVisApp1 () {
  if (app1.isSeen) {
    app1.isSeen = false
  } else {
    app1.isSeen = true
  }
}

function changeVisApp2 () {
  if (app2.isSeen) {
    app2.isSeen = false
  } else {
    app2.isSeen = true
  }
}

function changeVisApp3 () {
  if (app3.isSeen) {
    app3.isSeen = false
  } else {
    app3.isSeen = true
  }
}

function changeVisApp4 () {
  if (app4.isSeen) {
    app4.isSeen = false
  } else {
    app4.isSeen = true
  }
}

function changeVisApp5 () {
  if (app5.isSeen) {
    app5.isSeen = false
  } else {
    app5.isSeen = true
  }
}

function changeVisApp6 () {
  if (app6.isSeen) {
    app6.isSeen = false
  } else {
    app6.isSeen = true
  }
}

function changeVisApp7 () {
  if (app7.isSeen) {
    app7.isSeen = false
  } else {
    app7.isSeen = true
  }
}

function changeVisApp8 () {
  if (app8.isSeen) {
    app8.isSeen = false
  } else {
    app8.isSeen = true
  }
}

function changeVisApp9 () {
  if (app9.isSeen) {
    app9.isSeen = false
  } else {
    app9.isSeen = true
  }
}

function changeVisApp10 () {
  if (app10.isSeen) {
    app10.isSeen = false
  } else {
    app10.isSeen = true
  }
}

function q1 () {
  let vueExercise = new SuperLoop()
  let result = vueExercise.doForLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q2 () {
  let vueExercise = new SuperLoop()
  result = vueExercise.doWhile()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q3 () {
  let vueExercise = new SuperLoop()
  result = vueExercise.doDoWhile()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q4 () {
  let vueExercise = new SuperLoop()
  result = vueExercise.forInLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q5 () {
  let vueExercise = new SuperLoop()
  result = vueExercise.forOfLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q6 () {
  let vueExercise = new SuperLoop(111, 8989)
  result = vueExercise.doForLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average + ', count: ' + result.count
  return answer
}

function q7 () {
  let vueExercise = new SuperLoop()
  result = vueExercise.oddLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average + ', count: ' + result.count
  return answer
}

function q8 () {
  let vueExercise = new Modulus7()
  let result = vueExercise.doForLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q9 () {
  let vueExercise = new Square()
  result = vueExercise.doWhile()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}

function q10 () {
  let vueExercise = new Square(111, 8989)
  let result = vueExercise.doForLoop()
  let answer = 'Sum: ' + result.sum + ', average: ' + result.average
  return answer
}
