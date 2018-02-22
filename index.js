var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]: value})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
}