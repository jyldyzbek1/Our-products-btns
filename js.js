function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        }).then((product) => {
            product.forEach(element => {
                const productsInner = document.querySelector(".products__inner");
                const container = document.createElement("div");
                const divImg = document.createElement("div");
                const photo = document.createElement("img");
                const div1 = document.createElement("div");
                const h2 = document.createElement("h2");
                const h3 = document.createElement("h3");
                const text = document.createElement("div");
                const p = document.createElement("p");
                const btnAll = document.querySelector(".btn-all");
                const btnLaptop = document.querySelector(".btn-laptops");
                const btnPhone = document.querySelector(".btn-phones");
                const btnTv = document.querySelector(".btn-tv");

                container.className = ("container");
                photo.style.width = "200px";
                photo.style.height = "250px";
                photo.style.objectFit = "contain";
                div1.className = ("div-1");
                h2.style.fontSize = "15px";
                h2.style.textAlign = "left"
                h3.style.fontSize = "15px";
                text.style.textAlign = "left"

                productsInner.appendChild(container);
                container.appendChild(divImg);
                divImg.appendChild(photo);
                divImg.appendChild(div1);
                div1.appendChild(h2);
                div1.appendChild(h3);
                container.appendChild(text);
                text.appendChild(p);

                photo.src = element.img;
                h2.textContent = element.title;
                h3.textContent = element.price;
                p.textContent = element.desc;
        
                btnAll.addEventListener("click", () => {
                  if (element.category === "") {
                    container.style.display = "none";
                  } else {
                    container.style.display = "flex";
                  }
                });
        
                btnLaptop.addEventListener("click", () => {
                  if (element.category === "laptops") {
                    container.style.display = "flex";
                  } else {
                    container.style.display = "none";
                  }
                });
        
                btnPhone.addEventListener("click", () => {
                  if (element.category === "phones") {
                    container.style.display = "flex";
                  } else {
                    container.style.display = "none";
                  }
                });
        
                btnTv.addEventListener("click", () => {
                  if (element.category === "tv") {
                    container.style.display = "flex";
                  } else {
                    container.style.display = "none";
                  }
                });
              });
            })
}
products()