class Modulus7 extends SuperLoop {
  calculate (newSum, count) {
    let sum = newSum
    if (count % 7 === 0) {
      sum = newSum + count
    }
    return sum
  }
}
