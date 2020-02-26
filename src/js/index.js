// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const container = document.querySelector(".container");

// left.addEventListener("mouseenter", () => {
//   container.classList.add("hover-left");
// });

// left.addEventListener("mouseleave", () => {
//   container.classList.remove("hover-left");
// });

// right.addEventListener("mouseenter", () => {
//   container.classList.add("hover-right");
// });
// right.addEventListener("mouseleave", () => {
//   container.classList.remove("hover-right");
// });
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item

  console.log(this);
  this.classList.add("active");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(tabContentItem);
  // Add show class
  tabContentItem.classList.add("show");
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("active");
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
