function iterativeLog(array){
  array.forEach(function(item, i){
    console.log(`${i}: ${item}`)
  })
}

function iterate(callback){
  let array = [1, 2]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
