const API_URL = "http://localhost:3030/jsonstore/grocery";

let products = {};

const loadProductsButton = document.querySelector("#load-product");
loadProductsButton.setAttribute("type", "button");
const addProductButton = document.querySelector("#add-product");
const updateProductButton = document.querySelector("#update-product");

const inputSelectors = {
    product: document.querySelector("#product"),
    count: document.querySelector("#count"),
    price: document.querySelector("#price"),
};

const selectors = {
    tableBodyContainer: document.querySelector("#tbody"),
};

function attachEvents() {

    loadProductsButton.addEventListener("click", loadProducts);
    addProductButton.addEventListener("click", addProduct);

}

async function loadProducts(e) {

    products = await (await fetch(API_URL)).json();
    console.log(JSON.stringify(products, 0, 2));

    selectors.tableBodyContainer.innerHTML = "";

    Object.values(products).forEach(p => {

        const tableRowContainer = createElement("tr");
        createElement("td", p.product, ["name"], null, tableRowContainer);
        createElement("td", p.count, ["count-product"], null, tableRowContainer);
        createElement("td", p.price, ["product-price"], null, tableRowContainer);

        const buttonContainer = createElement("td", null, ["btn"], null, tableRowContainer);
        const updateButton = createElement("button", "Update", ["update"], p._id, buttonContainer);
        updateButton.addEventListener("click", async (e) => {

            Object.keys(inputSelectors).forEach(key => {
                const selector = inputSelectors[key];
                selector.value = products[p._id][key];
            });

            addProductButton.disabled = true;
            updateProductButton.disabled = false;
            updateProductButton.addEventListener("click", async (e) => {

                const productToEdit = {
                    product: inputSelectors.product.value,
                    count: inputSelectors.count.value,
                    price: inputSelectors.price.value,
                }

                await fetch(`${API_URL}/${p._id}`, {
                    method: "PATCH",
                    body: JSON.stringify(productToEdit),
                });

                Object.values(inputSelectors).forEach(selector => selector.value = "");
                loadProducts(e);

            });


        });

        const deleteButton = createElement("button", "Delete", ["delete"], p._id, buttonContainer);
        deleteButton.addEventListener("click", async (e) => {
            await fetch(`${API_URL}/${p._id}`, {
                method: "DELETE",
            });

            await loadProducts();
        });

        selectors.tableBodyContainer.appendChild(tableRowContainer);

    });

}

async function addProduct(e) {

    if (e) {
        e.preventDefault();
    }

    if (Object.values(inputSelectors).some(inputSelectors => inputSelectors.value === "")) {
        return;
    }

    const product = {
        product: inputSelectors.product.value,
        count: inputSelectors.count.value,
        price: inputSelectors.price.value,
    }

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(product),
    });

    await loadProducts(e);
    // console.log(JSON.stringify(products, 0, 2));

    Object.values(inputSelectors).forEach(selector => selector.value = "");

}

//  NE MINAVA V JUDGE !!!

// async function deleteProduct(e) {

//     const productId = e.currentTarget.getAttribute("id");
//     const searchedProduct = products[productId];
//     // console.log(JSON.stringify(searchedProduct, 0, 2));

//     await fetch(`${API_URL}/${searchedProduct._id}`, {
//         method: "DELETE"
//     });

//     await loadProducts(e);
// }


function createElement(type, textContent, classes, id, parent, useInnerHTML) {
    const element = document.createElement(type);

    if (useInnerHTML && textContent) {
        element.innerHTML = textContent;
    } else if (textContent) {
        element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute("id", id);
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}

attachEvents();