lucide.createIcons();

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setActive(item);
  });
});

function setActive(selected) {
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  selected.classList.add("active");

  const label = selected.getAttribute("data-label");
  const span = selected.querySelector("span");
  if (span && label) {
    span.textContent = label;
  }
}

document.addEventListener("keydown", (e) => {
  const currentIndex = Array.from(navItems).findIndex((item) =>
    item.classList.contains("active")
  );

  let nextIndex = currentIndex;

  if (e.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % navItems.length;
  } else if (e.key === "ArrowLeft") {
    nextIndex = (currentIndex - 1 + navItems.length) % navItems.length;
  } else {
    return;
  }

  setActive(navItems[nextIndex]);
});