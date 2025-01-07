'use client';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Slider } from "@/components/ui/slider"
import { useWishlist } from "@/context/WishListContext";
import { useState } from "react";
import { useRouter } from 'next/navigation';
export default function ProductList() {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const router = useRouter();
  const pathNames: { [key: string]: string } = {
    product: "Sản phẩm",
    cleanser: "Sữa rửa mặt",
    spa: "SPA",
  };
  const products: Product[] = [
    {
      id: 1,
      name: "Son môi MAC Matte Lipstick",
      category: "Lip",
      shortDescription: "A beautiful lipstick",
      description: "Long-lasting lipstick with rich color payoff.",
      price: "230,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "1.7k",
      rating: 3.5
    },
    {
      id: 2,
      name: "Son môi Dior Rouge Lipstick",
      category: "Lip",
      shortDescription: "A luxurious Dior lipstick",
      description: "Smooth and creamy texture for elegant lips.",
      price: "450,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "2.5k",
      rating: 4.5
    },
    {
      id: 3,
      name: "Son dưỡng Nivea Care",
      category: "Skincare",
      shortDescription: "Moisturizing lip balm",
      description: "Provides soft and nourished lips throughout the day.",
      price: "90,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "500",
      rating: 4.0
    },
    {
      id: 4,
      name: "Kem dưỡng ẩm Cetaphil",
      category: "Skincare",
      shortDescription: "Gentle moisturizing cream",
      description: "Clinically proven to hydrate and soothe dry skin.",
      price: "300,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "1.2k",
      rating: 4.2
    },
    {
      id: 5,
      name: "Serum Vitamin C La Roche-Posay",
      category: "Skincare",
      shortDescription: "Brightening serum",
      description: "Helps reduce dark spots and brighten skin.",
      price: "540,000đ",
      image: ["/images/product1.png"],
      favorite: true,
      reviews: "2.1k",
      rating: 4.8
    },
    {
      id: 6,
      name: "Phấn phủ Maybelline Fit Me",
      category: "Makeup",
      shortDescription: "Lightweight powder",
      description: "Keeps your face matte and smooth all day long.",
      price: "190,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "3.4k",
      rating: 4.0
    },
    {
      id: 7,
      name: "Kem nền Estee Lauder Double Wear",
      category: "Makeup",
      shortDescription: "Full coverage foundation",
      description: "Provides a flawless finish for up to 24 hours.",
      price: "1,200,000đ",
      image: ["/images/product1.png"],
      favorite: true,
      reviews: "1.8k",
      rating: 4.6
    },
    {
      id: 8,
      name: "Nước hoa hồng Thayers",
      category: "Skincare",
      shortDescription: "Alcohol-free toner",
      description: "Refreshes and soothes skin with natural ingredients.",
      price: "320,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "2.9k",
      rating: 4.3
    },
    {
      id: 9,
      name: "Xịt khoáng Vichy",
      category: "Skincare",
      shortDescription: "Hydrating facial mist",
      description: "Instantly refreshes and hydrates your skin.",
      price: "220,000đ",
      image: ["/images/product1.png"],
      favorite: false,
      reviews: "900",
      rating: 4.1
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Tổng số trang

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const [list, setList] = useState(products);
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
  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
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
              <button id="collapseButton_ingredient" onClick={() => { handleCollapse("ingredient") }} className="
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
              <button id="collapseButton_skinType" onClick={() => { handleCollapse("skinType") }} className="
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
              <button id="collapseButton_Country" onClick={() => { handleCollapse("Country") }} className="
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
              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {list.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-md 
                    cursor-pointer
                    transition-shadow duration-300"
                  >
                    {/* Favorite Icon */}
                    <div className="flex justify-end">
                      {product.favorite ? (
                        <button onClick={(e) => {
                          e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
                          removeFromWishlist(product.id);
                          setList(list.map((item) => item.id === product.id ? { ...item, favorite: false } : item));
                        }}>
                          <span className="text-red-500 text-3xl">&hearts;</span>
                        </button>
                      ) : (
                        <button onClick={(e) => {
                          e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
                          addToWishlist(product);
                          setList(list.map((item) => item.id === product.id ? { ...item, favorite: true } : item));
                        }}>
                          <span className="text-gray-400 text-3xl">&hearts;</span>
                        </button>
                      )}
                    </div>

                    {/* Product Image */}
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-32 h-32 mx-auto mb-4 object-contain"
                    />

                    {/* Product Details */}
                    <h3 className="text-sm font-semibold text-gray-800 text-center mb-1">
                      {product.name}
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
              {/* pagination */}
              <div className="flex justify-center items-center mt-8">
                <button
                  className="px-4 py-2 mx-1 text-white bg-[--peach] hover:bg-[--pink] rounded-md disabled:bg-gray-300"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &laquo; Previous
                </button>

                {/* Các trang */}
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      className={`px-4 py-2 mx-1 text-sm font-medium rounded-md ${currentPage === page
                        ? "bg-[--peach] text-white"
                        : "bg-white text-black hover:bg-[--wheat]"
                        }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  className="px-4 py-2 mx-1 text-white bg-[--peach] hover:bg-[--pink] rounded-md disabled:bg-gray-300"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

