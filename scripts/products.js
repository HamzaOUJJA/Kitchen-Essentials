console.log('hello')
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-grid-container');
    // Define your product data as an array of objects
    const products = [
        {
            id: 1,
            image: 'images/01.jpg', // Path to your product image
            alt: 'Fullstar Vegetable Chopper and Spiralizer',
            isBestseller: true,
            isNew: false, // Add a flag for 'New' if applicable
            title: 'Fullstar Vegetable Chopper and Spiralizer',
            description: 'Food Chopper with Container, Fruit Slicer, Kitchen Gadgets & Accessories, Home Essentials (4 in 1, White)',
            originalPrice: 49.99,
            reducedPrice: 29.99,
            rating: 4.5, // Number of stars (e.g., 4.5 for 4 and a half stars)
            reviewsCount: '119,463',
            affiliateLink: 'https://amzn.to/4nRrJC1',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 2,
            image: 'images/02.jpg',
            alt: 'Ourokhome Cheese Grater',
            isBestseller: false,
            isNew: false,
            title: 'Ourokhome Cheese Grater',
            description: 'Ourokhome Cheese Grater Hank Crank Cheese Shredder, Mandoline Vegetable Slicer with 5 Interchangeable Blades and Strong Suction Base for Fruit, Vegetables, Nuts Black',
            originalPrice: 0,
            reducedPrice: 32.99,
            rating: 4.5,
            reviewsCount: '1,502',
            affiliateLink: 'https://amzn.to/40YSquN',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 3,
            image: 'images/03.jpg',
            alt: 'MR.SIGA Soap Dispensing Palm Brush',
            isBestseller: false,
            isNew: false,
            title: 'MR.SIGA Soap Dispensing Palm Brush',
            description: 'MR.SIGA Soap Dispensing Palm Brush, Kitchen Brush for Dish Pot Pan Sink Cleaning, Pack of 2, Navy/Blue',
            originalPrice: 0,
            reducedPrice: 15.99,
            rating: 4.5,
            reviewsCount: '5,502',
            affiliateLink: 'https://amzn.to/4kJohXD',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 4,
            image: 'images/04.jpg',
            alt: 'Vegetable Peeler With Container',
            isBestseller: false,
            isNew: false,
            title: 'Vegetable Peeler With Container',
            description: 'Vegetable peeler with container,Set of 2 peelers with storage and 6 interchangeable blades kitchen gadget.Fruits and vegetables peelers for kitchen.',
            originalPrice: 0,
            reducedPrice: 9.99,
            rating: 4,
            reviewsCount: '86',
            affiliateLink: 'https://amzn.to/3IGUoK5',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 5,
            image: 'images/05.jpg',
            alt: 'Egg Shell Opener',
            isBestseller: false,
            isNew: false,
            title: 'Egg Shell Opener',
            description: '2Pcs Egg Shell Opener, 2025 New Egg Cracker Tool for Raw Eggs, Hard Boiled Egg Peeler Egg Cube Egg Separator Handheld, Stainless Steel Eggshell Breaker Egg Shell Cutter Kitchen Gadgets（Orange+Yellow）',
            originalPrice: 0,
            reducedPrice: 9.99,
            rating: 4.5,
            reviewsCount: '25',
            affiliateLink: 'https://amzn.to/4kIR9Px',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 6,
            image: 'images/06.jpg',
            alt: 'Oil Dispenser',
            isBestseller: false,
            isNew: false,
            title: 'Oil Dispenser',
            description: 'Oil Dispenser for Kitchen, 2 in 1 Olive Oil Sprayer, Olive Oil Dispenser Spray Bottle with Brush, Oil Sprayer for Cooking for Air Fryer, Barbecue, Salad 16oz/470ml (Black)',
            originalPrice: 9.99,
            reducedPrice: 6.99,
            rating: 4.5,
            reviewsCount: '1,002',
            affiliateLink: 'https://amzn.to/4m1Vpe8',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 7,
            image: 'images/07.jpg',
            alt: 'Apple Peeler',
            isBestseller: true,
            isNew: false,
            title: 'Apple Peeler',
            description: 'Apple Peeler Corer, Long lasting Chrome Cast Magnesium Alloy Apple Peeler Slicer Corer with Stainless Steel Blades and Powerful Suction Base for Apples and Potatoes(Red)',
            originalPrice: 0,
            reducedPrice: 19.99,
            rating: 4.5,
            reviewsCount: '1,033',
            affiliateLink: 'https://amzn.to/3TKr1Jd',
            pageLink: 'pages/product_1.html'
        },
        {
            id: 8,
            image: 'images/08.jpg',
            alt: 'Vacuum Steamer',
            isBestseller: false,
            isNew: true,
            title: 'Vacuum Steamer',
            description: 'Neakasa Magic 1 Vacuum Steamer, Handheld Travel Garment Steamer for Clothes, 2300Pa Suction for Clothes Grips, Steamer Iron 2 In 1 (for 110-120V Use)',
            originalPrice: 99.99,
            reducedPrice: 84.99,
            rating: 4,
            reviewsCount: '287',
            affiliateLink: 'https://amzn.to/44HvZNa'
        }
    ];

    // Function to generate star icons based on rating
    function generateStars(rating) {
        let starsHtml = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        // Optionally add empty stars to complete a set of 5
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star"></i>'; // Use far fa-star for empty stars
        }
        return starsHtml;
    }

    products.forEach(product => {
        const discountPercentage = product.originalPrice && product.reducedPrice ?
            Math.round(((product.originalPrice - product.reducedPrice) / product.originalPrice) * 100) : 0;

        const productCardHtml = `
            <div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
                <a href="${product.pageLink}" target="_blank">    
                    <div class="relative">
                        <img src="${product.image}" alt="${product.alt}" class="w-full object-cover">
                        ${product.isBestseller ? `<div class="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">BESTSELLER</div>` : ''}
                        ${product.isNew ? `<div class="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>` : ''}
                    </div>
                </a>
                <div class="p-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-bold text-lg mb-1">${product.title}</h3>
                            <p class="text-gray-600 text-sm">${product.description}</p>
                        </div>
                        ${discountPercentage > 0 ? `<div class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">-${discountPercentage}%</div>` : ''}
                    </div>
                    <div class="mt-3 flex items-center">
                        <div class="flex text-yellow-400 mr-2">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="text-gray-500 text-sm">(${product.reviewsCount})</span>
                    </div>
                    <div class="mt-4 flex justify-between items-center">
                        <div>
                            ${product.originalPrice ? `<span class="text-gray-500 line-through text-sm">$${product.originalPrice.toFixed(2)}</span>` : ''}
                            <span class="font-bold text-lg ml-2">$${product.reducedPrice.toFixed(2)}</span>
                        </div>
                        <a href="${product.affiliateLink}" target="_blank" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-300">Buy Now</a>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productCardHtml;
    });
});
