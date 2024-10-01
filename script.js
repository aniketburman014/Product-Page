// Get references to the HTML elements
const cartIcon = document.getElementById('cartIcon');
const cartDropdown = document.querySelector('.cart-dropdown');
const cartStatus = document.getElementById('cart-status');
const cartSummary = document.getElementById('cart-summary'); // Ensure this exists in your cart HTML
const checkoutBtn = document.getElementById('checkout-btn');
const addToCartBtn = document.getElementById('addToCartBtn');
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const deleteBtn = document.getElementById('delete-btn');
const deleteIcon = document.getElementById('deleteIcon');
const cartImage =document.getElementById('cart-image');
const countItem=document.getElementById('item-count');

let quantity = 0; // Track the number of items in the cart
const ITEM_PRICE = 125.00; // Price per item

// Function to update cart status and summary
function updateCart() {
    if (quantity > 0) {
        const totalPrice = quantity * ITEM_PRICE;
        cartStatus.textContent = `Fall Limited Edition Sneakers`;
        cartSummary.innerHTML = `$125.00 x ${quantity} = <span style="font-weight: 700;color:hsl(220, 13%, 13%);">$${totalPrice}.00</span>`;
        countItem.textContent=`${quantity}`;
        cartSummary.style.display = 'block'; // Show cart summary
        checkoutBtn.style.display = 'block'; // Show checkout button
        deleteBtn.style.display = 'block'; // Show delete button
        cartImage.style.display='block';
        countItem.style.display='block';
        document.querySelector('.item-count').style.display = 'block';

    } else {
        cartStatus.textContent = `Your cart is empty.`;
        cartSummary.style.display = 'none'; // Hide cart summary
        checkoutBtn.style.display = 'none'; // Hide checkout button
        deleteBtn.style.display = 'none'; // Hide delete button
        cartImage.style.display='none';
        countItem.style.display='none';
        document.querySelector('.item-count').style.display = 'none';
       
    }
}

// Function to increase quantity
increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity; // Update input field
     // Update cart status
});
deleteBtn.addEventListener('click', () => {
    quantity = 0; // Reset quantity
    quantityInput.value = quantity; // Update input field
    updateCart(); // Update cart status
});

// Function to decrease quantity
decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityInput.value = quantity; // Update input field
         // Update cart status
    }
});

// Toggle cart dropdown visibility when clicking the cart icon
cartIcon.addEventListener('click', () => {
    const isDisplayed = cartDropdown.style.display === 'block';
    cartDropdown.style.display = isDisplayed ? 'none' : 'block'; // Toggle display
    updateCart(); // Update cart display when opened
});

// Add to cart button functionality
addToCartBtn.addEventListener('click', () => {
    if (quantity > 0) {
        updateCart(); // Update cart status after adding items
    }
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (event.target !== cartIcon && !cartDropdown.contains(event.target)) {
        cartDropdown.style.display = 'none'; // Hide dropdown
    }
});




const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const carousel = document.getElementById('carousel');
const carouselImage = document.getElementById('carouselImage');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselThumbnails = document.querySelectorAll('.carousel-thumbnail');

let currentIndex = 0;
const images = Array.from(thumbnails).map(thumb => thumb.getAttribute('data-image'));

// Update main image on thumbnail click
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
        mainImage.src = this.getAttribute('data-image');
        cartImage.src=this.getAttribute('data-image');
        carouselImage.src=this.getAttribute('data-image');
        currentIndex = index;
    });
});

// Open carousel when main image is clicked
mainImage.addEventListener('click', function() {
    carouselImage.src = mainImage.src;
    carousel.style.display = 'flex'; // Use flex to center the image
    carousel.style.flexDirection='column';
});

// Close carousel
closeBtn.addEventListener('click', function() {
    carousel.style.display = 'none'; // Hide the carousel
});

// Function to update the active thumbnail in the gallery
function updateActiveThumbnail() {
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[currentIndex].classList.add('active');
    
    // Update carousel thumbnails
    carouselThumbnails.forEach(thumb => thumb.classList.remove('active'));
    carouselThumbnails[currentIndex].classList.add('active');
}

// Navigate to the previous image
prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    carouselImage.src = images[currentIndex];
    updateActiveThumbnail();  // Update the active thumbnail
});

// Navigate to the next image
nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    carouselImage.src = images[currentIndex];
    updateActiveThumbnail();  // Update the active thumbnail
});

// Update carousel image when thumbnail is clicked
carouselThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        currentIndex = index; // Set current index to the clicked thumbnail's index
        carouselImage.src = this.getAttribute('data-image'); // Update carousel image
        updateActiveThumbnail(); // Update active thumbnail
    });
});

//////////////////////////////////////////////////////////////////////////////////////////

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("closeSidebar"); // Correct ID

// Toggle sidebar visibility
menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Close sidebar when the close button is clicked
closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


    