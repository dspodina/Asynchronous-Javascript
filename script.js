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
const input = document.querySelector("input");
const select = document.querySelector("select");
button.onclick = function () {
  let name = input.value;
  let country = select.value;
  input.value = "";
  select.value = "";
  if (name) {
    getAge(name, country);
  }
};
const ul = document.createElement("ul");
document.body.append(ul);
async function getAge(name, country = "") {
  let j = await fetch(
    `https://api.agify.io?name=${name}${
      country ? `&country_id=${country}` : ""
    }`
  )
    // .then((j) => j.json())
    let data = await j.json()
    // .then((data) => {
      let text = `${data.name} has ${data.age}`;
      setStorage("ages", text);
      const li = renderAge(text);
      ul.append(li);
    // });
}
function renderAge(text) {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
}
function setStorage(key, data) {
  let previousValue = localStorage.getItem(key);
  let value = [];
  if (previousValue) {
    value = JSON.parse(previousValue);
  }
  value.push(data);
  localStorage.setItem(key, JSON.stringify(value));
};
(()=>{
    let previousValue = localStorage.getItem('ages');
    if (previousValue){
        JSON.parse(previousValue).forEach(element => {
            const li = renderAge(element);
            ul.append(li);  
        });
    }
})();