// --- 1. SETUP ---
// No database needed! We'll store the menu data right here.

const menuData = [
    // Breakfast
    { category: 'Breakfast', name: 'Bread Butter', price: 40 },
    { category: 'Breakfast', name: 'Poha', price: 99 },
    { category: 'Breakfast', name: 'Plain Parantha', price: 40 },
    { category: 'Breakfast', name: 'Aloo Pyaaz Parantha', price: 70 },
    { category: 'Breakfast', name: 'Gobhi Parantha (Seasonal)', price: 70 },
    { category: 'Breakfast', name: 'Onion Parantha', price: 60 },
    { category: 'Breakfast', name: 'Paneer Parantha', price: 110 },
    { category: 'Breakfast', name: 'Poori Bhaji', price: 110 },
    { category: 'Breakfast', name: 'Poori Choley', price: 120 },
    { category: 'Breakfast', name: 'Choley Bhature', price: 120 },
    // Starters
    { category: 'Starters', name: 'Malai Chaap', price: 280 },
    { category: 'Starters', name: 'Tandoori Chaap', price: 240 },
    { category: 'Starters', name: 'Lemon Chaap', price: 260 },
    { category: 'Starters', name: 'Haryali Chaap', price: 260 },
    { category: 'Starters', name: 'Afghani Chaap', price: 280 },
    { category: 'Starters', name: 'Kali Mirch Chaap', price: 290 },
    { category: 'Starters', name: 'Malai Masala Chaap', price: 320 },
    { category: 'Starters', name: 'Achari Chaap', price: 340 },
    { category: 'Starters', name: 'Paneer Tikka', price: 300 },
    { category: 'Starters', name: 'Paneer Malai Tikka', price: 320 },
    { category: 'Starters', name: 'Mushroom Tikka', price: 280 },
    // Soups
    { category: 'Soups', name: 'Tomato Soup', price: 70 },
    { category: 'Soups', name: 'Hot & Sour Soup', price: 75 },
    { category: 'Soups', name: 'Veggie Soup', price: 80 },
    { category: 'Soups', name: 'Sweet Corn', price: 90 },
    { category: 'Soups', name: 'Manchow Soup', price: 95 },
    // Tandoori Delights
    { category: 'Tandoori Delights', name: 'Malai Chaap (H/F)', price: '140 / 260' },
    { category: 'Tandoori Delights', name: 'Tandoori Chaap (H/F)', price: '130 / 240' },
    { category: 'Tandoori Delights', name: 'Lemon Chaap (H/F)', price: '150 / 280' },
    { category: 'Tandoori Delights', name: 'Haryali Chaap (H/F)', price: '140 / 260' },
    { category: 'Tandoori Delights', name: 'Afghani Chaap (H/F)', price: '150 / 280' },
    { category: 'Tandoori Delights', name: 'Kali Mirch Chaap (H/F)', price: '140 / 260' },
    { category: 'Tandoori Delights', name: 'Malai Masala Chaap (H/F)', price: '180 / 340' },
    { category: 'Tandoori Delights', name: 'Paneer Tikka (H/F)', price: '180 / 340' },
    { category: 'Tandoori Delights', name: 'Paneer Malai Tikka (H/F)', price: '200 / 320' },
    // Momos
    { category: 'Momos', name: 'Veg Momos (8 Pcs)', price: 90 },
    { category: 'Momos', name: 'Fried Momos', price: 110 },
    { category: 'Momos', name: 'Tandoori Momos', price: 140 },
    { category: 'Momos', name: 'Paneer Momos', price: 130 },
    { category: 'Momos', name: 'Fried Tandoori', price: 160 },
    // South Indian
    { category: 'South Indian', name: 'Plain Dosa', price: 115 },
    { category: 'South Indian', name: 'Masala Dosa', price: 130 },
    { category: 'South Indian', name: 'Masala Onion Dosa', price: 140 },
    { category: 'South Indian', name: 'Rawa Dosa', price: 145 },
    { category: 'South Indian', name: 'Rawa Masala Dosa', price: 160 },
    { category: 'South Indian', name: 'Paneer Masala Dosa', price: 175 },
    { category: 'South Indian', name: 'Rawa Paneer Dosa', price: 195 },
    { category: 'South Indian', name: 'Curd Rice', price: 130 },
    { category: 'South Indian', name: 'Vada Sambhar', price: 85 },
    { category: 'South Indian', name: 'Idli Sambhar', price: 95 },
    // Rock & Rolls
    { category: 'Rock & Rolls', name: 'Paneer Tikka Roll', price: 180 },
    { category: 'Rock & Rolls', name: 'Malai Chaap Roll', price: 200 },
    { category: 'Rock & Rolls', name: 'Achari Roll', price: 220 },
    // Papad
    { category: 'Papad', name: 'Roasted Papad', price: 20 },
    { category: 'Papad', name: 'Fry Papad', price: 30 },
    { category: 'Papad', name: 'Masala Papad', price: 80 },
    // Salad & Raita
    { category: 'Salad & Raita', name: 'Plain Curd', price: 60 },
    { category: 'Salad & Raita', name: 'Boondi Raita', price: 90 },
    { category: 'Salad & Raita', name: 'Mix Raita', price: 110 },
    { category: 'Salad & Raita', name: 'Dahi Tadka', price: 110 },
    { category: 'Salad & Raita', name: 'Green Salad', price: 60 },
    { category: 'Salad & Raita', name: 'Cream Salad', price: 105 },
    { category: 'Salad & Raita', name: 'Cucumber Salad', price: 75 },
    // Basmati Ki Bahar
    { category: 'Rice (Basmati Ki Bahar)', name: 'Steam Rice', price: 100 },
    { category: 'Rice (Basmati Ki Bahar)', name: 'Jeera Rice', price: 120 },
    { category: 'Rice (Basmati Ki Bahar)', name: 'Veg Pulao', price: 150 },
    { category: 'Rice (Basmati Ki Bahar)', name: 'Handi-e-Biryani', price: 240 },
    // Main Course
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Mix Veg', price: 180 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Jeera Aloo', price: 140 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Aloo Gobhi Masala', price: 160 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Chana Masala', price: 195 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Malai Kofta', price: 230 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Dal Fry', price: 170 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Dal Tadka', price: 190 },
    { category: 'Main Course (Sabj-E-Bahar)', name: 'Dal Makhani', price: 240 },
    // Lazeez's Paneer
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Shahi Paneer', price: 240 },
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Kadhai Paneer', price: 240 },
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Paneer Bhurji', price: 220 },
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Paneer Lababdar', price: 250 },
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Kali Mirch Paneer', price: 250 },
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Paneer Lahori', price: 270 },
    { category: 'Main Course (Lazeez’s Paneer)', name: 'Paneer Butter Masala', price: 245 },
    // Breads
    { category: 'Breads', name: 'Tawa Roti', price: 10 },
    { category: 'Breads', name: 'Butter Tawa', price: 15 },
    { category: 'Breads', name: 'Tandoori Roti', price: 15 },
    { category: 'Breads', name: 'Tandoori Butter', price: 20 },
    { category: 'Breads', name: 'Tandoori Pyaz Roti', price: 40 },
    { category: 'Breads', name: 'Missi Roti', price: 35 },
    { category: 'Breads', name: 'Lacha Pratha', price: 50 },
    { category: 'Breads', name: 'Naan', price: 35 },
    { category: 'Breads', name: 'Stuff Naan', price: 70 },
    { category: 'Breads', name: 'Garlic Naan', price: 75 },
    { category: 'Breads', name: 'Green Chilli Naan', price: 75 },
    { category: 'Breads', name: 'Green Chilli Lachha', price: 75 },
    // Thali
    { category: 'Thali', name: 'Thali', price: 180, description: 'Mix Veg + Dal + 2 Roti + 1 Naan + Chatni' },
    { category: 'Thali', name: 'Special Thali', price: 270, description: 'Dal Makhani + Kadhai Paneer + Mix Veg + Rice + Green Salad + Butter Roti + Naan' },
    { category: 'Thali', name: 'Unlimited Thali', price: 450, description: "Paneer Lababdar + Dal Makhani + Lassi + Raita + Haveli's Spl. Veg + Green Salad + Rice + Roti + Dessert (Unlimited for one person)" },
];

// --- 2. DOM ELEMENTS ---
const menuContainer = document.getElementById('menu-container');
const header = document.querySelector('.main-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.getElementById('nav-links');
const menuSection = document.getElementById('menu');

// --- 3. UI/UX Enhancements ---

/**
 * Adds a shadow to the header when the user scrolls down.
 */
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

/**
 * Animates content sections as they scroll into view.
 */
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// --- 4. MENU DISPLAY ---

/**
 * Displays menu items from the local menuData array.
 */
function displayMenu() {
    if (!menuData || menuData.length === 0) {
        menuContainer.innerHTML = `<p>Menu is currently being updated. Please check back soon!</p>`;
        return;
    }

    menuContainer.innerHTML = '';

    // Group items by category
    const menuByCategory = menuData.reduce((acc, item) => {
        const category = item.category || 'Miscellaneous';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    // Display items for each category
    for (const category in menuByCategory) {
        const categoryHeader = document.createElement('button');
        categoryHeader.className = 'menu-category-header';
        categoryHeader.textContent = category;
        menuContainer.appendChild(categoryHeader);

        const panel = document.createElement('div');
        panel.className = 'menu-category-panel';

        menuByCategory[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            const priceString = typeof item.price === 'string' ? `₹ ${item.price}` : `₹${item.price}`;
            
            itemDiv.innerHTML = `
                <div class="menu-item-header">
                    <h4>${item.name}</h4>
                    <strong>${priceString}</strong>
                </div>
                ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
            `;
            panel.appendChild(itemDiv);
        });
        menuContainer.appendChild(panel);

        categoryHeader.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// --- 5. INITIAL LOAD & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    handleScrollAnimations();
});

// Handle menu link click to reveal the menu section
document.querySelectorAll('a[href="#menu"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default anchor jump

        // If the mobile menu is open, close it
        if (navLinks.getAttribute('data-visible') === 'true') {
            navLinks.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        // Show the menu section
        menuSection.style.display = 'block';

        // Scroll to the menu section smoothly
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });
});

navToggle.addEventListener('click', () => {
    const isVisible = navLinks.getAttribute('data-visible');

    if (isVisible === 'true') {
        navLinks.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    } else {
        navLinks.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    }
});

window.addEventListener('scroll', handleHeaderScroll);