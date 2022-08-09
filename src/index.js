
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce((accumulator, currentValue, index) => {
    currentValue.sort((a, b) => !(index & 1) ? a - b : b - a).map(value => accumulator.push(value))
    return accumulator
  }, [])
}
