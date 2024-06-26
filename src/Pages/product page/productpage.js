import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Loading } from "../../components/loading/Loading";
import { useCartAuth } from "../Product/Cart";
import { Cell, Heading } from "./product-page-styled-component";
import "./productpage.css";
import { products } from "../Product/constant";


export const ProductPage = () => {
  // This is to display the description of the prodcut in the product page
  const [descriptionDisplay, setDescriptionDisplay] = useState("");
  const [specificationDisplay, setSpecificationDisplay] = useState("");
  const [imageContainer, setImageContainer] = useState("");
  const [heading, setHeading] = useState("");
  const [rating, setRating] = useState("");
  const [cost, setCost] = useState("");


  const parameter = useParams();


  const productDetail = products[(parameter.id)-1];


  console.log(productDetail);
  
  // To update the number of things ordered by the person
  const cartAuth = useCartAuth();

  // This is for the loading container
  const [isLoading, setLoading] = useState(false);

  // This is to get the data from server and then display the details in the product page
  useEffect(() => {
    setLoading(true);

    setImageContainer(
      <>
        <div>
          <img
            src={productDetail.photos}
            alt="image"
            className="product-page-image"
          ></img>
          <div className="">
            <Button
              variant="primary"
              className="product-page-button"
              style={{ marginRight: 50 }}
              onClick={() => console.log("Primary")}
            >
              Add to cart
            </Button>
            <Button
              variant="outline-primary"
              className="product-page-button"
              onClick={() => console.log("Primary")}
            >
              Buy now
            </Button>
          </div>
        </div>
      </>
    );
    
    setHeading(productDetail.productName);
    setRating(productDetail.rating);
    setCost(productDetail.cost);
    setDescriptionDisplay(
      <>
        <h4>Product Description</h4>
        {productDetail.description.map((item, index) => (
          <div
            className="product-page-highlight-description-container"
            key={index}
          >
            <h4 style={{ marginTop: 5, marginBottom: 0 }}>{item.title}</h4>
            <div style={{ marginBottom: 8 }}>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </>
    );

    setSpecificationDisplay(
      <>
        <h4>Specifications</h4>
        {productDetail.specification.map((item, index) => (
          <div key={index}>
            <h5>{item.title}</h5>
            <table>
              <tbody>
                {item.specificationList.map((secondItem, secondIndex) => (
                  <tr key={secondIndex}>
                    <Cell>{secondItem.title}</Cell>
                    <Cell>{secondItem.value}</Cell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </>
    );

    setLoading(false);

  }, []);



  const addToCart = (event) => {
    const id = event.target.value;
    console.log(id);
    if (cartAuth.findOccur(id) === true) {
      cartAuth.updateCount(id);
    } else {
      cartAuth.updateCartList(id);
    }
    console.log(cartAuth.printCartList());
  };
  const buyNow = (event) => {
    console.log(event.target.value);
  };


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
          <div className="product-page-main-container">
            <div className="product-page-image-container">{imageContainer}</div>
            <div className="product-page-another-container">
              <Heading>{heading}</Heading>
              <div className="product-page-rating-container">
                <div className="productPageRating">
                  <Rating
                    value={rating}
                    onChange={setRating}
                    readOnly
                    className="productPageRating"
                  />
                </div>
                <div className="centerContents productPageRatingValue">
                  <span>{rating} Rating</span>
                </div>
              </div>
              <div className="product-page-price-container">
                <span style={{ color: "green" }}>Special price</span>
                <h2>₹{cost}</h2>
                <div className="product-page-highlight-container">
                  {descriptionDisplay}
                </div>
              </div>
              <div className="product-page-specification-container">
                {specificationDisplay}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};