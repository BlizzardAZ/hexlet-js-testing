const set = (obj, key, value) => {
  obj[key] = value;
  return obj
}

console.log(set({}, 'name', 'lily'))
export default set
