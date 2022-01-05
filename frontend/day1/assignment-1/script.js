const circles = {
  grandParent: document.querySelector('[data-label="C1"]'),
  parent: document.querySelector('[data-label="C2"]'),
  child: document.querySelector('[data-label="C3"]')
};

const handleClickCircle = (e) => {
  e.stopPropagation();
  alert(e.target.dataset.label);
};

circles.grandParent.addEventListener('click', handleClickCircle);
