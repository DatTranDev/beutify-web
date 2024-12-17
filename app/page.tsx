'use client';
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Home() {
  const banners = [
    { src: "/images/banner1.jpg", alt: "Banner 1" },
    { src: "/images/banner2.jpg", alt: "Banner 2" },
  ];
  const products = [
    {
      id: 1,
      image: "/images/product1.png", // Replace with actual image
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: true
    },
    {
      id: 2,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    },
    {
      id: 3,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    },
    {
      id: 4,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    }
  ];
  const router = useRouter();
  const viewProductDtails = () => {
    return router.push('/product/10')
  }

  return (
    <div>
      {/* Slider Banner */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className=" mt-8">
        <div className="flex flex-col gap-8 h-[520px] px-44">
          {/* Top Image */}
          <div className="w-full max-w-3xl relative z-10">
            <img
              src="/images/home_about_top.webp"
              alt="Top Display"
              className="w-auto max-h-[300px] rounded-lg shadow-md z-10"
            />
          </div>

          {/* Slogan Section */}
          <div className="px-4 absolute w-[480px] left-[55%] ">
            <h2 className="text-xl md:text-3xl font-bold italic mb-4 ">
              NGƯỜI BẠN ĐỒNG HÀNH CHO MỌI TÍN ĐỒ LÀM ĐẸP
            </h2>
            <p className="text-sm md:text-base text-gray-600 italic">
              Mang đến trải nghiệm mua sắm đầy cảm hứng, giúp mỗi cá nhân khám phá và
              tỏa sáng với phong cách độc đáo của mình.
            </p>
          </div>

          {/* Bottom Image */}
          <div className="self-end items-end flex flex-row absolute top-[100%]">
            <img
              src="/images/home_about_bot.webp"
              alt="Bottom Display"
              className="w-auto max-h-[300px] rounded-lg shadow-md self-end"
            />
          </div>
        </div>
        <div className="bg-[--hwheat] px-44">
          <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Left Content Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold italic mb-4 text-gray-800">
                Why do we use it? Where can I get some?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it
                look like readable English.
              </p>
              <button className="bg-[--lpeach] hover:bg-[--peach] text-white font-semibold py-2 px-6 rounded-full" onClick={viewProductDtails}>
                Xem chi tiết
              </button>
            </div>
            {/* Right Section with Single Image */}
            <div className="lg:w-1/2 flex justify-end">
              <div className="relative">
                <img
                  src="/images/product1.png" // Replace with actual image
                  alt="Product"
                  className="w-auto max-h-[380px] rounded-lg shadow-lg "
                />
                <span className="absolute -top-4 -right-4 bg-[--peach] text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-44">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-[--pink] mb-6">Chăm sóc da</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Favorite Icon */}
                <div className="flex justify-end">
                  {product.favorite ? (
                    <span className="text-red-500 text-xl">&hearts;</span>
                  ) : (
                    <span className="text-gray-400 text-xl">&hearts;</span>
                  )}
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />

                {/* Product Details */}
                <h3 className="text-sm font-semibold text-gray-800 text-center mb-1">
                  {product.title}
                </h3>
                <p className="text-center text-gray-600 mb-2">Giá: <strong>{product.price}</strong></p>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 ${index < Math.floor(product.rating) ? "opacity-100" : "opacity-50"
                        }`}
                    >
                      &#9733;
                    </span>
                  ))}
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[--hwheat] px-44">
          <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Right Section with Single Image */}
            <div className="lg:w-1/2 flex justify-start">
              <div className="relative">
                <img
                  src="/images/product1.png" // Replace with actual image
                  alt="Product"
                  className="w-auto max-h-[380px] rounded-lg shadow-lg "
                />
                <span className="absolute -top-4 -right-4 bg-[--peach] text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
            </div>
            {/* Left Content Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold italic mb-4 text-gray-800">
                Why do we use it? Where can I get some?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it
                look like readable English.
              </p>
              <button className="bg-[--lpeach] hover:bg-[--peach] text-white font-semibold py-2 px-6 rounded-full" onClick={viewProductDtails}>
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className="py-6 px-44">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-[--pink] mb-6">Chăm sóc da</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Favorite Icon */}
                <div className="flex justify-end">
                  {product.favorite ? (
                    <span className="text-red-500 text-xl">&hearts;</span>
                  ) : (
                    <span className="text-gray-400 text-xl">&hearts;</span>
                  )}
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />

                {/* Product Details */}
                <h3 className="text-sm font-semibold text-gray-800 text-center mb-1">
                  {product.title}
                </h3>
                <p className="text-center text-gray-600 mb-2">Giá: <strong>{product.price}</strong></p>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 ${index < Math.floor(product.rating) ? "opacity-100" : "opacity-50"
                        }`}
                    >
                      &#9733;
                    </span>
                  ))}
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
