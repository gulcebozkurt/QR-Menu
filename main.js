import { buttonsData, menu } from "./db.js";
import { elements } from "./helpers.js";
// sayfa yüklendiğinde fonksiyonu çalıştır.
document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons();
});
elements.buttonsArea.addEventListener("click", searchCategory);

function renderMenuItems(menuItems) {
  let menuHTML = menuItems.map((item) => {
    return `
    <a
        href="productDetail.html?id=${item.id}"
        id="card"
        class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2"
      >
        <img src="${item.img}"" class="rounded shadow" />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">${item.price}₺</p>
          </div>
          <p class="lead">
            ${item.desc}
          </p>
        </div>
      </a>
    `;
  });
  //diziyi stringe çevirme
  menuHTML = menuHTML.join(" ");
  elements.mainArea.innerHTML = menuHTML;
}

function searchCategory(e) {
  const category = e.target.dataset.category;

  const filtredMenu = menu.filter((item) => item.category === category);
  //hepsi seçilirsen tüm menüyü ekrana basar
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    //filtrelenmiş elemanları ekrana basma
    renderMenuItems(filtredMenu);
  }
  //butonları güncelle
  renderButtons(category);
}

//ekrana butonları basma
function renderButtons(active) {
  //eski butonları kaldırma
  elements.buttonsArea.innerHTML = "";
  buttonsData.forEach((btn) => {
    //html buton oluşturma
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn btn-outline-dark filter-btn";
    buttonEle.textContent = btn.text;
    buttonEle.dataset.category = btn.value;

    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }
    //html e gönderme
    elements.buttonsArea.appendChild(buttonEle);
  });
}