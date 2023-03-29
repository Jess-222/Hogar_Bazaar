const { Item } = require('../../models');

const item_data = [
    {
        "id": 1,
        "name": "La-Z-Boy",
        "description": "A beautiful La-Z-Boy chair",
        "price": 100.00,
        "picture_url": "https://content.la-z-boy.com/Images/product/category/white/large/010582.jpg",
        "sale_price": 50.00,
        "sale_end": "2023-03-30"
    },
    {
        "id": 2,
        "name": "Reclining Sofa",
        "description": "Try sleeping on this!",
        "price": 600.00,
        "picture_url": "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1657556&recipeId=729"
    },
    {
        "id": 3,
        "name": "Rug",
        "description": "A red rug",
        "price": 200.00,
        "picture_url": "https://target.scene7.com/is/image/Target/GUEST_f16c5267-d313-4240-bf0d-05c7103b80bd"
    },
    {
        "id": 4,
        "name": "Desk",
        "description": "A desk",
        "price": 350.00,
        "picture_url": "https://www.ikea.com/us/en/images/products/arkelstorp-desk-black__0735967_pe740301_s5.jpg?f=s"
    },
    {
        "id": 5,
        "name": "Hammock",
        "description": "Hammock and pillow set.",
        "price": 125.99,
        "picture_url": "https://secure.img1-cg.wfcdn.com/im/51075602/resize-h600-w600%5Ecompr-r85/1494/149433696/Chair+Hammock.jpg"

    },
    {
        "id": 6,
        "name": "Lamp",
        "description": "A 1890's lamp",
        "price": 75.99,
        "picture_url": "https://ctlighting.com/wp-content/uploads/2021/04/RLG60530_1-1.jpg"
    }
]

const seedItems = () => Item.bulkCreate(item_data);

module.exports = seedItems;