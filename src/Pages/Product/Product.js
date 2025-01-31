import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Loading } from "../../components/loading/Loading";
import { useCartAuth } from "./Cart"; // Ensure this path is correct
import "./Product.css";
import debounce from "lodash.debounce";

const staticProductData = [
  {
    _id: "1",
    productname: "Premium Dog Food",
    cost: 100,
    photos: "https://www.puprise.com/wp-content/uploads/2023/07/1213-calibra-dog-premium-puppy-junior-12kg.webp",
  },
  {
    _id: "2",
    productname: "Gourmet Cat Food",
    cost: 150,
    photos: "https://static.miscota.com/media/1/photos/products/187853/187853-gold-terrine-de-pollo-2-2-jpeg_1_g.jpeg",
  },
  {
    _id: "3",
    productname: "Small Pet Food Mix",
    cost: 200,
    photos: "https://www.petkonnect.in/cdn/shop/products/PK2022_19KB3Xf7RsZD7cFOHzzhxrBGaClS8A8KSeyLekDf.jpg?v=1662117634&width=823",
  },
  {
    _id: "4",
    productname: "Interactive Dog Toy",
    cost: 250,
    photos: "https://qpets.in/cdn/shop/products/rB-aqGMHLVqAEJSoAAgD4S-Y4Hc994_823x.jpg?v=1678957807",
  },
  {
    _id: "5",
    productname: "Catnip Toy",
    cost: 300,
    photos: "https://m.media-amazon.com/images/I/51ZYjJuowLL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    _id: "6",
    productname: "Pet Carrier",
    cost: 350,
    photos: "https://m.media-amazon.com/images/I/41PEmTDRCfL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    _id: "7",
    productname: "Pet Bed",
    cost: 400,
    photos: "https://www.adairs.com.au/globalassets/13.-ecommerce/03.-product-images/2022_images/homewares/pets/53107_forest_zoom_1.jpg?width=800&mode=crop&heightratio=1&quality=80",
  },
  {
    _id: "8",
    productname: "Pet Water Fountain",
    cost: 450,
    photos: "https://m.media-amazon.com/images/I/51uXQbRw1vL._AC_SL1500_.jpg",
  },
  {
    _id: "9",
    productname: "Pet Shampoo",
    cost: 500,
    photos: "https://m.media-amazon.com/images/I/41xa3thh7qL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    _id: "10",
    productname: "Bird Seed Mix",
    cost: 550,
    photos: "https://images-cdn.ubuy.co.in/644528c773de1b2c6577fb0d-schoen-farms-finch-small-wild-bird.jpg",
  },
  {
    _id: "11",
    productname: "Fish Tank Filter",
    cost: 550,
    photos: "https://s7cdn.spectrumbrands.com/~/media/Pet/Tetra/Images/Learning%20Centers/Fish%20Learning%20Center/Power%20Filters.jpg",
  },
  {
    _id: "12",
    productname: "Reptile Heat Lamp",
    cost: 550,
    photos: "https://www.petcity.com.au/assets/full/9325136076059.jpg?20200703041341",
  },
];

export const Product = () => {
  const cartAuth = useCartAuth();
  const [, setSortingOption] = useState("Alphabetical");
  const [dataList, setDataList] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulating API call with static data
      const response = staticProductData;
      setDataList(response);
      setFilteredDataList(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (event) => {
    const id = event.target.value;
    console.log("Adding to cart:", id); // Check if this log appears in the console
  
    // Check if the product already exists in the cart
    const existingProductIndex = cartAuth.cartList.findIndex(item => item.id === id);
  
    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCartList = [...cartAuth.cartList];
      updatedCartList[existingProductIndex].count += 1;
      cartAuth.setCartList(updatedCartList);
    } else {
      // If the product is not in the cart, add it with quantity 1
      cartAuth.setCartList([...cartAuth.cartList, { id: id, count: 1 }]);
    }
  };
  

  const buyNow = (event) => {
    const id = event.target.value;
    console.log("Buying now:", id); // Check if this log appears in the console
  
    // Check if the product already exists in the cart
    const existingProductIndex = cartAuth.cartList.findIndex(item => item.id === id);
  
    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCartList = [...cartAuth.cartList];
      updatedCartList[existingProductIndex].count += 1;
      cartAuth.setCartList(updatedCartList);
    } else {
      // If the product is not in the cart, add it to the cart with a quantity of 1
      cartAuth.setCartList([...cartAuth.cartList, { id: id, count: 1 }]);
    }
  
    // After adding to cart, navigate to the checkout or cart page
    navigate("/cart"); // Update this with the appropriate navigation path
  };
  

  const optionChange = (event) => {
    const sortOption = event.target.value;
    setSortingOption(sortOption);
    let sortedList = [...filteredDataList];
    switch (sortOption) {
      case "alphabetical":
        sortedList.sort((a, b) => a.productname.localeCompare(b.productname));
        break;
      case "low to high":
        sortedList.sort((a, b) => a.cost - b.cost);
        break;
      case "high to low":
        sortedList.sort((a, b) => b.cost - a.cost);
        break;
      default:
        break;
    }
    setFilteredDataList(sortedList);
  };

  const searchItems = useCallback(
    debounce((search) => {
      let filteredList = dataList.filter(item =>
        item.productname.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredDataList(filteredList);
    }, 300),
    [dataList]
  );

  const handleSearchChange = (event) => {
    const search = event.target.value;
    setSearchText(search);
    searchItems(search);
  };

  const divContainerClick = (id) => {
    navigate(id);
  };

  const displayAllData = filteredDataList.map((x) => (
    <div key={x._id} className="product-container">
      <div onClick={() => divContainerClick(x._id)}>
        <img className="convert-image" src={x.photos} alt={x.productname} />
        <br />
        <div id="product-page-data-container">
          <div id="product-container-product-name">{x.productname}</div>
          <div id="product-container-price-container">MRP₹-{x.cost}</div>
        </div>
      </div>
      <button value={x._id} onClick={addToCart}>
        Add to Cart
      </button>
      <button value={x._id} onClick={buyNow}>
        Buy Now
      </button>
    </div>
  ));

  return (
    <>
      {isLoading ? (
        <div className="loadingContainer">
          <Loading />
        </div>
      ) : (
        <>
          <div>
            <Navbar />
          </div>
          <div id="product-page-all-container">
            <div id="product-page-nav-container">
              <div id="product-page-nav-total-data-container">
                <span>Showing {filteredDataList.length} items</span>
              </div>
              <div id="product-page-nav-search-container">
                <span>Search</span>
                <input
                  onChange={handleSearchChange}
                  value={searchText}
                />
              </div>
              <div id="product-page-nav-sort-container">
                <span>Sort by :</span>
                <select onChange={optionChange}>
                  <option value={"none"}>None</option>
                  <option value={"alphabetical"}>Alphabetical</option>
                  <option value={"low to high"}>Low to High</option>
                  <option value={"high to low"}>High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid-container">
              {displayAllData}
            </div>
          </div>
        </>
      )}
    </>
  );
};