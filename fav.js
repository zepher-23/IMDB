
//get content from local storage
const container = document.querySelector('#fav-container');

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const item = document.createElement('div');
  item.innerHTML = `<strong>${key}:</strong> ${value}`;
  container.appendChild(item);
}