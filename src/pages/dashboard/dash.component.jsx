import React, { useEffect, useState } from "react";
import "./dash.styles.scss";
import { formatter } from "../../util";
import Axios from "axios";
import CustomButton from "../../components/custom-button/custom-button.component";
import AddProductComponent from "./add-product.component";
import Loader from "../../components/loader/loader.component";
import { Image } from "cloudinary-react";
import { serverUrl } from "../../util";
import { useHistory } from "react-router-dom";

export default function Dash() {
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);
  useEffect(() => {
    setIsFetchingProducts(true);
    const fetchData = () => {
      Axios.get(`${serverUrl}/products/`).then((res) => {
        setIsFetchingProducts(false);
        setProducts(res.data);
      });
    };
    fetchData();
  }, []);

  const [products, setProducts] = useState([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const history = useHistory();

  return (
    <div className="dash">
      <div className="dash__left">
        <div className="goback" >
          <img
            src="https://img.icons8.com/bubbles/50/000000/back.png"
            alt="back"
            onClick={() =>
              isAddingProduct ? setIsAddingProduct(false) : history.push("/")
            }
          />
          {isAddingProduct ? <h1 onClick={() => setIsAddingProduct(false)} >BACK</h1> : <h1 onClick={() => history.push("/")} >HOME</h1>}
        </div>
      </div>

      <div className="dash__right">
        {isFetchingProducts ? (
          <Loader />
        ) : isAddingProduct ? (
          <AddProductComponent />
        ) : (
          <div className="dash__right__container">
            <div className="dash__right__title">
              <h1>Product</h1>
              <CustomButton toggle={() => setIsAddingProduct(true)}>
                + Add Product
              </CustomButton>
            </div>

            <div className="dash__products__header">
              <div className="dash__products__header__container">
                <h6 className="firstCol">Name</h6>
                <h6 className="secondCol">Category</h6>
                <h6 className="thirdCol">Sku</h6>
                <h6 className="fourthCol">Price</h6>
                <div className="fifthCol" />
              </div>
            </div>
            <div className="dash__product__container">
              {products && products.length
                ? products.map((product, index) => (
                    <div className="dash__product" key={index}>
                      <div className="image_and_title firstCol">
                        <Image
                          publicId={product.images[0]}
                          cloudName="ashwin808"
                          height="45"
                        />
                        <h6>{product.title}</h6>
                      </div>
                      <h6 className="secondCol">{product.category}</h6>
                      <h6 className="thirdCol">{product.sku}</h6>
                      <h6 className="fourthCol">
                        {formatter.format(product.price)}
                      </h6>
                      <h6 className="fifthCol">X</h6>
                    </div>
                  ))
                : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
