const obj = {
  name: "제원",
  age: 20,
};

obj.name;
obj.age;

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "name"));

function addKey(주소, key, value) {
  주소[key] = value;
}

addKey(obj, "job", "engineer");
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, "job");
console.log(obj);
