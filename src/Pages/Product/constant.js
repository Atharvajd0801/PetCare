export const products = [
  // Existing products...
  // Pet Food Products
  {
    productName: "Premium Dog Food",
    cost: 60.00,
    rating: 4.9,
    animal: "Dog",
    photos: "https://www.puprise.com/wp-content/uploads/2023/07/1213-calibra-dog-premium-puppy-junior-12kg.webp",
    desc: "High-quality dog food to keep your dog healthy and strong.",
    specification: [
      {
        title: 'Weight',
        specificationList: [{ title: 'Net Weight', value: '15 lbs' }],
      },
      {
        title: 'Ingredients',
        specificationList: [
          { title: 'Main Ingredients', value: 'Chicken, Rice, Vegetables' },
        ],
      },
      {
        title: 'Nutritional Information',
        specificationList: [
          { title: 'Protein', value: '25%' },
          { title: 'Fat', value: '15%' },
          { title: 'Fiber', value: '5%' },
        ],
      },
    ],
    description:[
      {
          title: 'Weight',
          value: '15 lbs',
        },
        {
          title: 'Ingredients',
          value: 'Chicken, Rice, Vegetables',
        },
        {
          title: 'Nutritional Information',
          value: 'Protein: 25%, Fat: 15%, Fiber: 5%',
        },
      ],
  },
  {
    productName: "Gourmet Cat Food",
    cost: 50.00,
    rating: 4.8,
    animal: "Cat",
    photos: "https://static.miscota.com/media/1/photos/products/187853/187853-gold-terrine-de-pollo-2-2-jpeg_1_g.jpeg",
    specification: [
      {
        title: 'Weight',
        specificationList: [{ title: 'Net Weight', value: '10 lbs' }],
      },
      {
        title: 'Ingredients',
        specificationList: [
          { title: 'Main Ingredients', value: 'Salmon, Tuna, Sweet Potatoes' },
        ],
      },
      {
        title: 'Nutritional Information',
        specificationList: [
          { title: 'Protein', value: '30%' },
          { title: 'Fat', value: '12%' },
          { title: 'Fiber', value: '4%' },
        ],
      },
    ],
    description:[
      {
          title: 'Weight',
          value: '10 lbs',
        },
        {
          title: 'Ingredients',
          value: 'Salmon, Tuna, Sweet Potatoes',
        },
        {
          title: 'Nutritional Information',
          value: 'Protein: 30%, Fat: 12%, Fiber: 4%',
        },
      ],
  },
  {
    productName: "Small Pet Food Mix",
    cost: 25.00,
    rating: 4.6,
    animal: "Small Pets",
    photos: "https://www.petkonnect.in/cdn/shop/products/PK2022_19KB3Xf7RsZD7cFOHzzhxrBGaClS8A8KSeyLekDf.jpg?v=1662117634&width=823",
    specification: [
      {
        title: 'Weight',
        specificationList: [{ title: 'Net Weight', value: '5 lbs' }],
      },
      {
        title: 'Ingredients',
        specificationList: [
          { title: 'Main Ingredients', value: 'Timothy Hay, Alfalfa, Carrots' },
        ],
      },
      {
        title: 'Nutritional Information',
        specificationList: [
          { title: 'Protein', value: '20%' },
          { title: 'Fat', value: '10%' },
          { title: 'Fiber', value: '15%' },
        ],
      },
    ],
    description:[
      {
          title: 'Weight',
          value: '5 lbs',
        },
        {
          title: 'Ingredients',
          value: 'Timothy Hay, Alfalfa, Carrots',
        },
        {
          title: 'Nutritional Information',
          value: 'Protein: 20%, Fat: 10%, Fiber: 15%',
        },
      ],
  },
  // Pet Toys
  {
    productName: "Interactive Dog Toy",
    cost: 20.00,
    rating: 4.7,
    animal: "Dog",
    photos: "https://qpets.in/cdn/shop/products/rB-aqGMHLVqAEJSoAAgD4S-Y4Hc994_823x.jpg?v=1678957807",
    desc: "Engaging toy to keep your dog entertained for hours.",
    specification: [
      {
        title: 'Dimensions',
        specificationList: [
          { title: 'Length', value: '8 inches' },
          { title: 'Width', value: '4 inches' },
          { title: 'Height', value: '4 inches' },
        ],
      },
      {
        title: 'Material',
        specificationList: [{ title: 'Material Type', value: 'Rubber' }],
      },
      {
        title: 'Color',
        specificationList: [{ title: 'Color Options', value: 'Blue, Red' }],
      },
    ],
    description:[
      {
          title: 'Dimensions',
          value: '8 inches x 4 inches x 4 inches',
        },
        {
          title: 'Material',
          value: 'Rubber',
        },
        {
          title: 'Color',
          value: 'Blue, Red',
        },
      ],
  },
  {
    productName: "Catnip Toy",
    cost: 15.00,
    rating: 4.8,
    animal: "Cat",
    photos: "https://m.media-amazon.com/images/I/51ZYjJuowLL._SX300_SY300_QL70_FMwebp_.jpg",
    desc: "Fun and stimulating catnip toy for your cat.",
    specification: [
      {
        title: 'Dimensions',
        specificationList: [
          { title: 'Length', value: '6 inches' },
          { title: 'Width', value: '2 inches' },
          { title: 'Height', value: '2 inches' },
        ],
      },
      {
        title: 'Material',
        specificationList: [{ title: 'Material Type', value: 'Fabric' }],
      },
      {
        title: 'Color',
        specificationList: [{ title: 'Color Options', value: 'Green, Yellow' }],
      },
    ],
    description:[
      {
          title: 'Dimensions',
          value: '6 inches x 2 inches x 2 inches',
        },
        {
          title: 'Material',
          value: 'Fabric',
        },
        {
          title: 'Color',
          value: 'Green, Yellow',
        },
      ],
  },
  // Pet Accessories
  {
    productName: "Pet Carrier",
    cost: 40.00,
    rating: 4.6,
    animal: "All",
    photos: "https://m.media-amazon.com/images/I/41PEmTDRCfL._SX300_SY300_QL70_FMwebp_.jpg",
    specification: [
      {
        title: 'Dimensions',
        specificationList: [
          { title: 'Length', value: '18 inches' },
          { title: 'Width', value: '12 inches' },
          { title: 'Height', value: '12 inches' },
        ],
      },
      {
        title: 'Material',
        specificationList: [{ title: 'Material Type', value: 'Plastic' }],
      },
      {
        title: 'Color',
        specificationList: [{ title: 'Color Options', value: 'Gray, Black' }],
      },
    ],
    description:[
      {
          title: 'Dimensions',
          value: '18 inches x 12 inches x 12 inches',
        },
        {
          title: 'Material',
          value: 'Plastic',
        },
        {
          title: 'Color',
          value: 'Gray, Black',
        },
      ],
  },
  {
    productName: "Pet Bed",
    cost: 35.00,
    rating: 4.8,
    animal: "All",
    photos: "https://www.adairs.com.au/globalassets/13.-ecommerce/03.-product-images/2022_images/homewares/pets/53107_forest_zoom_1.jpg?width=800&mode=crop&heightratio=1&quality=80",
    desc: "Comfortable and cozy bed for your pet.",
    specification: [
      {
        title: 'Dimensions',
        specificationList: [
          { title: 'Length', value: '24 inches' },
          { title: 'Width', value: '18 inches' },
          { title: 'Height', value: '6 inches' },
        ],
      },
      {
        title: 'Material',
        specificationList: [{ title: 'Material Type', value: 'Foam, Fabric' }],
      },
      {
        title: 'Color',
        specificationList: [{ title: 'Color Options', value: 'Brown, Beige' }],
      },
    ],
    description:[
      {
          title: 'Dimensions',
          value: '24 inches x 18 inches x 6 inches',
        },
        {
          title: 'Material',
          value: 'Foam, Fabric',
        },
        {
          title: 'Color',
          value: 'Brown, Beige',
        },
      ],
  },
  {
    productName: "Pet Water Fountain",
    cost: 30.00,
    rating: 4.7,
    animal: "All",
    photos: "https://m.media-amazon.com/images/I/51uXQbRw1vL._AC_SL1500_.jpg",
    desc: "Automatic water fountain to keep your pet hydrated.",
    specification: [
      {
        title: 'Capacity',
        specificationList: [{ title: 'Volume', value: '2 liters' }],
      },
      {
        title: 'Material',
        specificationList: [{ title: 'Material Type', value: 'Plastic' }],
      },
      {
        title: 'Color',
        specificationList: [{ title: 'Color Options', value: 'White, Blue' }],
      },
    ],
    description:[
      {
          title: 'Capacity',
          value: '2 liters',
        },
        {
          title: 'Material',
          value: 'Plastic',
        },
        {
          title: 'Color',
          value: 'White, Blue',
        },
      ],
  },
  // Pet Care Product
  {
    productName: "Pet Shampoo",
    cost: 15.00,
    rating: 4.9,
    animal: "All",
    photos: "https://m.media-amazon.com/images/I/41xa3thh7qL._SX300_SY300_QL70_FMwebp_.jpg",
    desc: "Gentle and effective shampoo for all types of pets.",
    specification: [
      {
        title: 'Volume',
        specificationList: [{ title: 'Net Volume', value: '16 oz' }],
      },
      {
        title: 'Ingredients',
        specificationList: [
          { title: 'Main Ingredients', value: 'Aloe Vera, Chamomile, Oatmeal' },
        ],
      },
      {
        title: 'Features',
        specificationList: [
          { title: 'Hypoallergenic', value: 'Yes' },
          { title: 'Scent', value: 'Lavender' },
        ],
      },
    ],
    description:[
      {
          title: 'Volume',
          value: '16 oz',
        },
        {
          title: 'Ingredients',
          value: 'Aloe Vera, Chamomile, Oatmeal',
        },
        {
          title: 'Features',
          value: 'Hypoallergenic, Lavender Scent',
        },
      ],
  },
  // New products
  {
    productName: "Bird Seed Mix",
    cost: 20.00,
    rating: 4.8,
    animal: "Bird",
    photos: "https://images-cdn.ubuy.co.in/644528c773de1b2c6577fb0d-schoen-farms-finch-small-wild-bird.jpg",
    desc: "A nutritious mix of seeds to keep your bird healthy and happy.",
    specification: [
      {
        title: 'Weight',
        specificationList: [{ title: 'Net Weight', value: '3 lbs' }],
      },
      {
        title: 'Ingredients',
        specificationList: [
          { title: 'Main Ingredients', value: 'Sunflower Seeds, Millet, Safflower' },
        ],
      },
      {
        title: 'Nutritional Information',
        specificationList: [
          { title: 'Protein', value: '16%' },
          { title: 'Fat', value: '10%' },
          { title: 'Fiber', value: '12%' },
        ],
      },
    ],
    description:[
      {
          title: 'Weight',
          value: '3 lbs',
        },
        {
          title: 'Ingredients',
          value: 'Sunflower Seeds, Millet, Safflower',
        },
        {
          title: 'Nutritional Information',
          value: 'Protein: 16%, Fat: 10%, Fiber: 12%',
        },
      ],
  },
  {
    productName: "Fish Tank Filter",
    cost: 25.00,
    rating: 4.7,
    animal: "Fish",
    photos: "https://s7cdn.spectrumbrands.com/~/media/Pet/Tetra/Images/Learning%20Centers/Fish%20Learning%20Center/Power%20Filters.jpg",
    desc: "Efficient filter to keep your fish tank clean and clear.",
    specification: [
      {
        title: 'Capacity',
        specificationList: [{ title: 'Max Tank Size', value: '50 gallons' }],
      },
      {
        title: 'Features',
        specificationList: [
          { title: 'Flow Rate', value: '200 GPH' },
          { title: 'Filter Media', value: 'Activated Carbon, Sponge' },
        ],
      },
      {
        title: 'Dimensions',
        specificationList: [
          { title: 'Length', value: '8 inches' },
          { title: 'Width', value: '4 inches' },
          { title: 'Height', value: '10 inches' },
        ],
      },
    ],
    description:[
      {
          title: 'Capacity',
          value: 'Max Tank Size: 50 gallons',
        },
        {
          title: 'Features',
          value: 'Flow Rate: 200 GPH, Filter Media: Activated Carbon, Sponge',
        },
        {
          title: 'Dimensions',
          value: '8 inches x 4 inches x 10 inches',
        },
      ],
  },
  {
    productName: "Reptile Heat Lamp",
    cost: 30.00,
    rating: 4.8,
    animal: "Reptile",
    photos: "https://www.petcity.com.au/assets/full/9325136076059.jpg?20200703041341",
    desc: "Provides essential heat and light for your reptile's habitat.",
    specification: [
      {
        title: 'Wattage',
        specificationList: [{ title: 'Power', value: '100W' }],
      },
      {
        title: 'Features',
        specificationList: [
          { title: 'Type', value: 'Ceramic' },
          { title: 'Safety', value: 'Overheat Protection' },
        ],
      },
      {
        title: 'Dimensions',
        specificationList: [
          { title: 'Diameter', value: '5 inches' },
          { title: 'Height', value: '6 inches' },
        ],
      },
    ],
    description:[
      {
          title: 'Wattage',
          value: '100W',
        },
        {
          title: 'Features',
          value: 'Ceramic, Overheat Protection',
        },
        {
          title: 'Dimensions',
          value: '5 inches x 6 inches',
        },
      ],
  },
];
