import { menu } from "./db.js";

//html de arayüzü göndereceğimiz yer
const outlet = document.getElementById("outlet");
console.log(window.location.search);

/*
 * URL'deki parametreleri yönetebilmek için URLSearchParams class'ından örnek oluşturduk.
 * Örneği oluştururken kendi URL'mizde ki parametreleri gönderdik.
 */
const searchParams = new URLSearchParams(window.location.search);
const paramId = searchParams.get("id");
console.log(paramId);

const product = menu.find((item) => item.id === Number(paramId));
console.log(product);
outlet.innerHTML = `
<div class="d-flex justify-content-between align-items-center">
        <a href="/" class="fs-1"><i class="bi bi-house-fill"></i></a>
        <div>anasayfa / ${product.category} / ${product.title.toLowerCase()}</div>
      </div>
      <h1 class="text-danger-emphasis text-center shadow rounded p-2 my-2">
        ${product.title}
      </h1>
      <div class="d-flex align-items-center justify-content-center">
        <img
          src="${product.img}"
          alt=""
          style="max-width: 500px"
          class="img-fluid rounded shadow mt-3"
        />
      </div>
      <div>
        <h3 class="my-3">
          Ürünün Kategorisi: <span class="text-success">${product.category}</span>
        </h3>
        <h3 class="my-3">
          Ürünün Fiyatı: <span class="text-success">${product.price} ₺</span>
        </h3>
      </div>
      <p class="lead fs-3">
        ${product.desc}
      </p>
    </div>
`;