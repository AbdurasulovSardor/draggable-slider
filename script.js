const tabsBox = document.querySelector(".tabs-box")
const allTabs = document.querySelectorAll(".tab")
const arrowIcons = document.querySelectorAll(".icon i")

let isDragging = false

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft)
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none"
  arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none"
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log('ok');
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350
    setTimeout(() => { handleIcons() }, 50);
  })
})

allTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active")
    tab.classList.add("active")
  })
})

const dragging = (e) => {
  if (!isDragging) return
  tabsBox.classList.add("dragging")
  tabsBox.scrollLeft -= e.movementX
}

const dragStop = () => {
  isDragging = false
}

tabsBox.addEventListener("mousedown", () => isDragging = true)
tabsBox.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)