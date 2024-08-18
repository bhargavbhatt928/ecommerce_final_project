import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
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
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className=" flex flex-col items-center justify-center">
            <div className="z-10 w-1/2 absolute items-center justify-center ">
              <img src="src/assets/logoes/logo2.png" className="w-full" />
            </div>
            <img
              src="src/assets/slideshow/img1.jpg"
              className="z-0 relative h-fit"
            />
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center justify-center">
            <div className="z-10 w-1/2 absolute items-center justify-center">
              <img src="src/assets/logoes/logo2.png" className="w-full" />
            </div>
            <img src="src/assets/slideshow/img2.jpg" className="z-0 relative" />
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center justify-center">
            <div className="z-10 w-1/2 absolute items-center justify-center">
              <img src="src/assets/logoes/logo2.png" className="w-full" />
            </div>
            <img src="src/assets/slideshow/img3.jpg" className="z-0 relative" />
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center justify-center">
            <div className="z-10 w-1/2 absolute items-center justify-center">
              <img src="src/assets/logoes/logo2.png" className="w-full" />
            </div>
            <img src="src/assets/slideshow/img4.jpg" className="z-0 relative" />
          </SwiperSlide>
        </Swiper>
        <div className=" flex flex-col items-center justify-center w-full">
          <div className="z-10 absolute h-full w-4/6  items-center justify-center flex flex-col">
            <h1 className="text-slate-300 text-3xl font-bold">
              Featured Product
            </h1>
            <Slider {...settings} className="w-full bg-black bg-opacity-45 p-8">
              {product.map((product) => (
                <div key={product._id} className="p-4">
                  <img src={product.productImage} className="w-full rounded-t-lg" />
                  <div className="flex flex-col items-center justify-center bg-sky-900 rounded-b-lg">
            <span className="text-slate-300 text-3xl">
              {product.productName}
            </span>
            <p className="text-slate-300 px-4">{product.productDescription}</p>
            <button className="bg-orange-400 h-8 px-4 rounded-lg m-4">
              Add to cart
            </button>
            </div>
                </div>
              ))}
            </Slider>
          </div>
          <img src="src/assets/slideshow/img4.jpg" className="z-0 relative" />
        </div>
      </div>
    </div>
  );
};

export default Home;
