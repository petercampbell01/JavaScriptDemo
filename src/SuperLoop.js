class SuperLoop {
  constructor (newStart = 1, newStop = 100) {
    this.start = newStart
    this.end = newStop
    this.myCountingArr = []
  }
  // Question 1
  doForLoop () {
  // performs the loop and makes calculation. the calculate method is overriden in subclasses.
  // output is a Result object which contains two integers.
    let sum = 0
    let average = 0
    for (let loopCount = this.start; loopCount <= this.end; loopCount++) {
      sum = this.calculate(sum, loopCount)
    }
    let output = new Result(sum, (sum / (this.end - this.start + 1)), this.end - this.start + 1)
    return output
  }

  // Question 2
  doWhile () {
    let count = this.start
    let sum = 0
    while (count <= this.end) {
      sum = this.calculate(sum, count)
      count++
    }
    let output = new Result(sum, (sum / (this.end - this.start + 1)), (count - this.start))
    return output
  }
  // Question 3
  doDoWhile () {
    let count = this.start
    let sum = 0
    do {
      sum = this.calculate(sum, count)
      count++
    } while (count <= this.end)
    let output = new Result(sum, (sum / (this.end - this.start + 1)), (count - this.start))
    return output
  }

  setArr (min = this.start, max = this.end) {
    for (let i = min; i <= max; i++) {
      this.myCountingArr.push(i)
    }
  }
  // Question 4
  forInLoop () {
    this.setArr()
    let sum = 0
    let count = 0
    for (let index in this.myCountingArr) {
      sum = this.calculate(sum, this.myCountingArr[index])
      count = index
    }
    let output = new Result(sum, (sum / (this.end - this.start + 1)), count)
    return output
  }
  // Question 5
  forOfLoop () {
    this.setArr()
    let sum = 0
    let count = 0
    for (let num of this.myCountingArr) {
      sum = this.calculate(sum, num)
      count++
    }
    let output = new Result(sum, (sum / (this.end - this.start + 1)), count)
    return output
  }

  // Question 7
  oddLoop () {
    let sum = 0
    let average = 0
    let count = 0
    for (let loopCount = this.start; loopCount <= this.end; loopCount++) {
      if (loopCount % 2 === 1) {
        sum = this.calculate(sum, loopCount)
        count++
      }
    }
    let output = new Result(sum, (sum / count), count) // +1 because the count is
    return output
  }

  // this method is to be overriden for different tasks but is set up to calculate sum of iteration
  calculate (sum, count) {
    return sum + count
  }
}
