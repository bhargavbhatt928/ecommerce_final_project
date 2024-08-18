import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
export default function Men() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const swiperData = async () => {
      try {
        const response = await axios.get("/sales/topSales");
        setProduct(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    swiperData();
  }, []);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="items-center flex flex-col">
      <div className="w-4/5">
        <div className=" flex flex-col items-center justify-center w-full">
          <div className="z-10 absolute h-full w-4/6  items-center justify-center flex flex-col mt-4">
            <h1 className="text-slate-300 text-3xl font-bold">
              Casual Clothing
            </h1>
            <Slider {...settings} className="w-full bg-black bg-opacity-45 p-8">
              {product.map((product) => (
                <div key={product._id} className="p-4">
                  <img
                    src={product.productImage}
                    className="w-full rounded-t-lg"
                  />
                  <div className="flex flex-col items-center justify-center bg-sky-900 rounded-b-lg">
                    <span className="text-slate-300 text-3xl">
                      {product.productName}
                    </span>
                    <p className="text-slate-300 px-4">
                      {product.productDescription}
                    </p>
                    <button className="bg-orange-400 h-8 px-4 rounded-lg m-4">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <img src="src/assets/img7.jpg" className="z-0 relative" />
        </div>
        <div className=" flex flex-col items-center justify-center w-full">
          <div className="z-10 absolute h-full w-4/6  items-center justify-center flex flex-col mt-4">
            <h1 className="text-slate-300 text-3xl font-bold">
              Formal Clothing
            </h1>
            <Slider {...settings} className="w-full bg-black bg-opacity-45 p-8">
              {product.map((product) => (
                <div key={product._id} className="p-4">
                  <img
                    src={product.productImage}
                    className="w-full rounded-t-lg"
                  />
                  <div className="flex flex-col items-center justify-center bg-sky-900 rounded-b-lg">
                    <span className="text-slate-300 text-3xl">
                      {product.productName}
                    </span>
                    <p className="text-slate-300 px-4">
                      {product.productDescription}
                    </p>
                    <button className="bg-orange-400 h-8 px-4 rounded-lg m-4">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <img src="src/assets/img8.jpg" className="z-0 relative" />
        </div>
      </div>
    </div>
  );
}
