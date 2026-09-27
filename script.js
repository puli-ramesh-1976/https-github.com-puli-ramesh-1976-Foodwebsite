/* =========================
   MOBILE MENU
========================= */

const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.querySelector(".navbar");

mobileMenu.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = mobileMenu.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});


/* =========================
   MENU FILTER
========================= */

const menuTabs =
    document.querySelectorAll(".menu-tab");

const menuItems =
    document.querySelectorAll(".menu-item");

menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const category =
            tab.dataset.category;

        menuItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================
   MENU SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const search =
        searchInput.value.toLowerCase();

    menuItems.forEach(item => {

        const name =
            item.dataset.name.toLowerCase();

        const description =
            item
                .querySelector("p")
                .textContent
                .toLowerCase();

        if (
            name.includes(search) ||
            description.includes(search)
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});


/* =========================
   FAVORITES
========================= */

function toggleFavorite(button) {

    button.classList.toggle("active");

    const icon =
        button.querySelector("i");

    if (button.classList.contains("active")) {

        icon.classList.remove(
            "fa-regular"
        );

        icon.classList.add(
            "fa-solid"
        );

    } else {

        icon.classList.remove(
            "fa-solid"
        );

        icon.classList.add(
            "fa-regular"
        );

    }

}


/* =========================
   CART
========================= */

let cart = [];

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const overlay =
    document.getElementById("overlay");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");


function addToCart(name, price) {

    const existing =
        cart.find(item => item.name === name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    openCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty.</p>
            </div>
        `;

    } else {

        cart.forEach((item, index) => {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;

            count += item.quantity;

            const cartElement =
                document.createElement("div");

            cartElement.className =
                "cart-item";

            cartElement.innerHTML = `

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <span>
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </span>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            `;

            cartItems.appendChild(cartElement);

        });

    }

    cartCount.textContent = count;

    cartTotal.textContent =
        `₹${total}`;

}


function openCart() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

}


function closeCart() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

}


cartButton.addEventListener(
    "click",
    openCart
);

overlay.addEventListener(
    "click",
    closeCart
);


/* =========================
   CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Add something delicious first!"
        );

        return;

    }

    alert(
        "Thank you! Your order has been placed successfully."
    );

    cart = [];

    updateCart();

    closeCart();

}


/* =========================
   RESERVATION MODAL
========================= */

const reservationModal =
    document.getElementById(
        "reservationModal"
    );


function openReservation() {

    reservationModal.classList.add(
        "active"
    );

}


function closeReservation() {

    reservationModal.classList.remove(
        "active"
    );

}


/* Close modal when clicking outside */

reservationModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            reservationModal
        ) {

            closeReservation();

        }

    }
);


/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.getElementById(
        "reservationForm"
    );

reservationForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        alert(
            "Your table has been reserved! We look forward to seeing you."
        );

        reservationForm.reset();

        closeReservation();

    }
);


/* =========================
   SCROLL TO MENU
========================= */

function scrollToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CUISINE CARDS
========================= */

const cuisineCards =
    document.querySelectorAll(
        ".cuisine-card"
    );

cuisineCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            cuisineCards.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            card.classList.add(
                "active"
            );

        }
    );

});


/* =========================
   NAVBAR CLOSE ON CLICK
========================= */

document
    .querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navbar.classList.remove(
                    "active"
                );

                const icon =
                    mobileMenu.querySelector("i");

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }
        );

    });


/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".menu-item, .review-card, .cuisine-card"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });


/* =========================
   INITIAL CART
========================= */

updateCart();