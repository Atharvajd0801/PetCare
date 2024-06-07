// src/Pages/Home/SliderComponent.js

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./Slider.css";

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

function SliderContent() {
  const [List, setList] = useState(staticProductData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = List.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, List]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="new-products p-1 mt-4">
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span> Available Products
          </h2>
        </div>
        <div className="section-center">
          {List.map((product, perind) => {
            let position = "nextSlide";
            if (perind === index) {
              position = "activeSlide";
            }
            if (
              perind === index - 1 ||
              (index === 0 && perind === List.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={perind} className={position}>
                <img
                  src={product.photos}
                  alt={product.productname}
                  className="person-img"
                />
                <h4>{product.productname}</h4>
                <h6 className="title">₹{product.cost}</h6>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default SliderContent;
