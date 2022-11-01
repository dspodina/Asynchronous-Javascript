// Task 1
const button = document.querySelector(".button");
button.onclick = function () {
  fetch("becode.json")
    .then((j) => j.json())
    .then((data) => renderList(data));
};
function renderList(list) {
  const ul = document.createElement("ul");
  document.body.append(ul);
  list.forEach((rule) => {
    const li = document.createElement("li");
    li.innerText = rule;
    ul.append(li);
  });
}

// Task 2
const button = document.querySelector(".button");
const input = document.querySelector('input')
button.onclick = function () {
    let name = input.value;
    getAge (name)
}
const ul = document.createElement("ul");
  document.body.append(ul);
function getAge (name){
    fetch(`https://api.agify.io?name=${name}`)
    .then((j) => j.json())
    .then((data) => {
        const li = renderAge(data.age)
        ul.append(li);
    });
}
function renderAge(age) {
    const li = document.createElement("li");
    li.innerText = age;
    return li;
}
