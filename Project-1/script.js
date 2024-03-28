const panels = document.querySelectorAll(".panel")
// querySelectorAll will put all the panels in a node list (just like an array)
console.log(panels)

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass()
    panel.classList.add("active")
  })
})
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
