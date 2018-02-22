var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value) {
  add = Object.assign({}, object, {[key]: value})
  return add
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  delete add
}