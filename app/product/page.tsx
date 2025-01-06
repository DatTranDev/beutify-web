'use client';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Slider } from "@/components/ui/slider"

import { useState } from "react";
export default function ProductList() {
  const pathNames: { [key: string]: string } = {
    product: "Sản phẩm",
    cleanser: "Sữa rửa mặt",
    spa: "SPA",
  };
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
    },
    {
      id: 5,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    },
    {
      id: 6,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    },
    {
      id: 7,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    },
    {
      id: 8,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    },
    {
      id: 9,
      image: "/images/product1.png",
      title: "Son môi MAC Matte Lipstick",
      price: "230,000đ",
      rating: 3.5,
      reviews: "1.7k",
      favorite: false
    }
  ];
  // biến để cập nhật status của các thành phần collapse
  const [status, setStatus] = useState<{ [key: string]: boolean }>({});
  const handleCollapse = (key: string) => {
    const content = document.getElementById(key);
    if (!content) return;
    // Thêm sự kiện click vào nút để thay đổi trạng thái
    if (content.style.maxHeight) {
      content.style.maxHeight = ""; // Ẩn phần tử
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Hiển thị phần tử
    }
    handleStatus(key);
  }
  const handleStatus = (key: string) => {
    setStatus(prevStatus => ({
      ...prevStatus,
      [key]: !prevStatus[key]
    }));
  }
  return (
    <div className="m-auto">
      <div className="content">
        <div className="container px-44 py-4">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-black-500 py-4">
            <a href="#">Beautify</a>
            <span>&gt;</span>
            <a href="#" >Sản phẩm</a>
            <span>&gt;</span>
            <a href="#" >Tất cả</a>
          </div>
          {/* banner */}
          <div className="Contain_banner">
            <img src="/images/banner3.jpg" alt="banner" className="w-full h-[390px]" />
          </div>

          {/* Content */}
          <div className="content my-4 flex flex-col md:flex-row">

            {/* Filter */}
            <div className="filter border-2 border-black-900 rounded-[10px] me-6 p-4 w-[300px] h-[800px]">
              <h3 className="title_filter font-bold text-[20px]">Lọc sản phẩm</h3>
              {/* collapse Thành phần */}
              {/* <!-- Collapse Button --> */}
              <button id="collapseButton" onClick={() => { handleCollapse("ingredient") }} className="
              focus:bg-gray-100
              hover:bg-gray-100 w-full px-2  py-2 mt-4 flex items-center rounded-[10px]
              transition-all duration-300 relative">
                Thành phần
                <span className={`absolute right-2 transition-transform duration-300`}>
                  {status['ingredient'] ? (<IoIosArrowDown className="" />) : (<IoIosArrowForward className="" />)}
                </span>
              </button>
              {/* <!-- Collapsible Content --> */}
              <div id="ingredient" className="overflow-hidden my-2  transition-all duration-300 max-h-0">
                <div className="px-4 bg-white-500">
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="ingredient1" name="ingredient1" className="me-4 w-[15px] h-[15px]" value="Bike" />
                    <label htmlFor="ingredient1"> Niacinamide </label><br />
                  </div>
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="ingredient2" name="ingredient2" className="me-4 w-[15px] h-[15px]" value="Car" />
                    <label htmlFor="ingredient2"> Retinol </label><br />
                  </div>
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="ingredient3" name="ingredient3" className="me-4 w-[15px] h-[15px]" value="Boat" />
                    <label htmlFor="ingredient3"> Hyaluronic </label>
                  </div>
                </div>
              </div>

              {/* collapse Loại da */}
              <button id="collapseButton" onClick={() => { handleCollapse("skinType") }} className="
              focus:bg-gray-100
              hover:bg-gray-100 w-full px-2 py-2 flex items-center rounded-[10px]
              transition-all duration-300 relative">
                Loại da
                <span className={`absolute right-2 transition-transform duration-300`}>
                  {status['skinType'] ? (<IoIosArrowDown className="" />) : (<IoIosArrowForward className="" />)}
                </span>
              </button>
              {/* <!-- Collapsible Content --> */}
              <div id="skinType" className="overflow-hidden my-2  transition-all duration-300 max-h-0">
                <div className="px-4 bg-white-500">
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="skinType1" name="skinType1" className="me-4 w-[15px] h-[15px]" value="Bike" />
                    <label htmlFor="skinType1"> Da khô </label><br />
                  </div>
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="skinType2" name="skinType2" className="me-4 w-[15px] h-[15px]" value="Car" />
                    <label htmlFor="skinType2"> Da dầu </label><br />
                  </div>
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="skinType3" name="skinType3" className="me-4 w-[15px] h-[15px]" value="Boat" />
                    <label htmlFor="skinType3"> Da hỗn hợp </label>
                  </div>
                </div>
              </div>

              {/* collapse Xuất sứ */}
              <button id="collapseButton" onClick={() => { handleCollapse("Country") }} className="
              focus:bg-gray-100
              hover:bg-gray-100 w-full px-2 py-2 flex items-center rounded-[10px]
              transition-all duration-300 relative">
                Xuất sứ
                <span className={`absolute right-2 transition-transform duration-300`}>
                  {status['Country'] ? (<IoIosArrowDown className="" />) : (<IoIosArrowForward className="" />)}
                </span>
              </button>
              {/* <!-- Collapsible Content --> */}
              <div id="Country" className="overflow-hidden my-2  transition-all duration-300 max-h-0">
                <div className="px-4 bg-white-500">
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="Country1" name="Country1" className="me-4 w-[15px] h-[15px]" value="Bike" />
                    <label htmlFor="Country1"> Việt Nam </label><br />
                  </div>
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="Country2" name="Country2" className="me-4 w-[15px] h-[15px]" value="Car" />
                    <label htmlFor="Country2"> Thái Lan </label><br />
                  </div>
                  <div className="item_ingredient flex items-center">
                    <input type="checkbox" id="Country3" name="Country3" className="me-4 w-[15px] h-[15px]" value="Boat" />
                    <label htmlFor="Country3"> Trung Quốc </label>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-[1px] border-gray-300"></hr>

              {/* Lọc theo giá */}
              <h3 className="px-2 my-6">
                Giá
              </h3>
              <Slider defaultValue={[33, 50]} max={100} step={1} />
              <div className="flex my-4 justify-between px-2">
                <div className="me-4">
                  <h3 className="mb-4">Từ </h3>
                  <div className="border-2 px-3 py-2 rounded-[10px]">100,000đ</div>
                </div>
                <div>
                  <h3 className="mb-4">Đến </h3>
                  <div className="border-2 px-3 py-2 rounded-[10px]">500,000đ</div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="ProductList flex-grow">
              {/* sort */}
              <div className="Contain_sort flex justify-end items-center mb-4">
                <h3 className="opacity-70">Sắp xếp</h3>
                <select className="border rounded-md p-2 ml-2 mr-2">
                  <option value="1">Mặc định</option>
                  <option value="2">Giá tăng dần</option>
                  <option value="3">Giá giảm dần</option>
                  <option value="4">Sản phẩm mới</option>
                </select>
              </div>
              {/* list */}
              <div className="inner_List grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
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
      </div>
    </div >
  );
}

