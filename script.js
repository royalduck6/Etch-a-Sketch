const container = document.querySelector("#container")
for (let i = 1; i <= 16; i++) {
  let div = document.createElement("div");
  div.setAttribute("id", `div${i}`)
  container.appendChild(div)
}
