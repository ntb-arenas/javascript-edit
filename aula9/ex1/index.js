const h1 = document.querySelector("h1");
const maxCount = 21;

for (let i = 0; i < maxCount; i++) {
  setTimeout(() => {
    h1.innerHTML = i;
  }, i * 1000);
}
