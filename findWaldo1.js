function findWaldo(arr, found) {
  arr.forEach(function (person, index) {
    if (person === 'Waldo') {
      found(index);   // execute callback
    }

  })
}
function actionWhenFound(index) {
  console.log("Found him!" + " " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


