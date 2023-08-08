export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1)); // 
    // swap elements array[i] and array[j] using destructuring assignment
    [array[i], array[j]] = [array[j], array[i]];
    // https://javascript.info/task/shuffle
    // Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it.
  }
  return array
}

export function columnWidthsToCssGrid(array) {
  let startingAt = 1
  return array.map((columnWidth) => {
    let previousColumnIndex = startingAt
    let nextColumnIndex = previousColumnIndex + columnWidth
    startingAt = nextColumnIndex
  
    return [ 
      previousColumnIndex, 
      nextColumnIndex 
    ]
  })

}