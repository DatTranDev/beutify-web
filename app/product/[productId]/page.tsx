"use client";
import { PiGreaterThanFill } from "react-icons/pi";
import { PiLessThanFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { useWishlist } from "@/context/WishListContext";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useParams } from 'next/navigation'
export default function productDetails() {

    const products: Product[] = [
        {
            id: 1,
            name: "Son môi MAC Matte Lipstick",
            category: "Lip",
            shortDescription: "A beautiful lipstick",
            description: `Son môi MAC Matte Lipstick là dòng son lì cao cấp mang đến màu sắc rực rỡ và bền lâu trên môi suốt cả ngày. Với công thức đặc biệt, son giúp đôi môi mềm mại, không bị khô nứt nhờ thành phần dưỡng ẩm nhẹ. Chất son mịn màng, lướt nhẹ trên môi và tạo hiệu ứng lì tự nhiên, giúp tôn lên vẻ đẹp sắc sảo, cuốn hút. Bảng màu đa dạng, phù hợp với mọi phong cách trang điểm, từ trang nhã đến cá tính. Sản phẩm thích hợp cho những ai yêu thích sự bền màu và muốn có một lớp son chuẩn sắc trong thời gian dài mà không cần dặm lại.`,
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
            description: `Son môi Dior Rouge Lipstick là biểu tượng của sự sang trọng và đẳng cấp. Với chất son mịn mượt, mềm mại, sản phẩm mang lại cảm giác dễ chịu ngay khi thoa lên môi. Được chiết xuất từ các thành phần thiên nhiên và dưỡng chất đặc biệt, son giúp dưỡng ẩm và bảo vệ môi suốt cả ngày dài. Dior Rouge không chỉ giúp môi lên màu chuẩn, sắc nét mà còn duy trì độ ẩm và sự mềm mại, tránh tình trạng môi khô nứt. Thiết kế thanh lịch, sang trọng của sản phẩm làm nổi bật vẻ đẹp quý phái, là lựa chọn hoàn hảo cho những buổi tiệc hay sự kiện quan trọng.`,
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
            description: `Son dưỡng Nivea Care là giải pháp lý tưởng cho đôi môi khô ráp, nứt nẻ, mang lại cảm giác mềm mại và ẩm mượt ngay từ lần đầu sử dụng. Công thức dưỡng ẩm chuyên sâu chứa thành phần tự nhiên như dầu jojoba và bơ hạt mỡ giúp nuôi dưỡng môi từ bên trong, duy trì độ ẩm trong nhiều giờ liền. Sản phẩm nhẹ nhàng thấm sâu, không gây cảm giác bết dính, đồng thời tạo lớp bảo vệ môi khỏi tác động từ môi trường như gió và ánh nắng mặt trời. Son dưỡng Nivea Care phù hợp với mọi loại da, đặc biệt là trong mùa đông hoặc thời tiết hanh khô, giúp đôi môi luôn tươi tắn và tràn đầy sức sống.`,
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
            description: `Kem dưỡng ẩm Cetaphil là sản phẩm chăm sóc da dịu nhẹ, phù hợp cho cả làn da nhạy cảm. Với công thức dưỡng ẩm sâu, sản phẩm giúp cung cấp độ ẩm tức thì, làm dịu và phục hồi da khô, bong tróc. Thành phần lành tính, không chứa hương liệu hay chất gây kích ứng, giúp bảo vệ làn da khỏi các tác nhân gây hại từ môi trường. Cetaphil thấm nhanh, không gây nhờn rít, mang lại cảm giác dễ chịu khi sử dụng hàng ngày. Sản phẩm phù hợp cho mọi lứa tuổi, từ trẻ em đến người lớn, giúp duy trì làn da mịn màng, khỏe mạnh và tươi trẻ dài lâu.`,
            price: "300,000đ",
            image: ["/images/product1.png"],
            favorite: false,
            reviews: "1.2k",
            rating: 4.2
        },
    ];
    const params = useParams<{ productId: string }>();
    const product = products.find((product) => product.id === parseInt(params.productId));
    const [love, setLove] = useState(false);
    const [like, setLike] = useState(10);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const router = useRouter();
    const [list, setList] = useState(products);
    const handleProductClick = (productId: number) => {
        router.push(`/product/${productId}`);
    }
    const images = [
        '/images/product1.png',
        '/images/product2.jpg',
        '/images/detailOfProduct2.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const clickImage = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <>
            <div className="content mt-16">
                <div className="container px-44">
                    {/* address of product */}
                    <div className="flex items-center space-x-2 text-black-500 py-4">
                        <a href="#">Beautify</a>
                        <span>&gt;</span>
                        <a href="#" >Sản phẩm</a>
                        <span>&gt;</span>
                        <a href="#" >Dưỡng da</a>
                    </div>
                    {/* section one */}
                    <div className=" flex flex-row gap-4 mb-4">
                        {/* left section of section one */}
                        {/* <div className="basis-[55%]">
                            <div className="mb-4 flex justify-center">
                                <img src="/images/product2.jpg" alt="MainImage_DetailProduct"
                                    className="w-auto max-h-[425px] rounded-lg shadow-lg " />
                            </div>
                            <div className=" flex flex-row gap-4 items-center">
                                <div>
                                    <PiLessThanFill className="text-2xl" />
                                </div>
                                <div>
                                    <img src="/images/detailOfProduct2.jpg" alt="image1_DetailProduct"
                                        className="w-[650px] h-auto rounded-lg shadow-lg" />
                                </div>
                                <div>
                                    <img src="/images/detailOfProduct2.jpg" alt="image2_DetailProduct"
                                        className="w-[650px] h-auto rounded-lg shadow-lg " />
                                </div>
                                <div>
                                    <img src="/images/detailOfProduct2.jpg" alt="image3_DetailProduct"
                                        className="w-[650px] h-auto rounded-lg shadow-lg" />
                                </div>
                                <div>
                                    <PiGreaterThanFill className="text-2xl" />
                                </div>
                            </div>
                        </div> */}
                        <div className="basis-[55%]">
                            <div className="mb-4 flex justify-center">
                                <img
                                    src={images[currentIndex]}
                                    alt="MainImage_DetailProduct"
                                    className="w-auto max-w-[480px] h-[400px] rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <button onClick={prevSlide} aria-label="Previous Slide">
                                    <PiLessThanFill className="text-2xl" />
                                </button>
                                {images.map((img, index) => (
                                    <button onClick={()=>clickImage(index)} key={index} className="overflow-hidden max-h-28 items-center flex-col rounded-lg shadow-lg">
                                        <img
                                            src={img}
                                            alt={`image${index + 1}_DetailProduct`}
                                            className={`w-[650px]  h-auto  ${index === currentIndex ? '' : 'opacity-50'}`}
                                        />
                                    </button>
                                ))}
                                <button onClick={nextSlide} aria-label="Next Slide">
                                    <PiGreaterThanFill className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        {/* right section of section one */}
                        <div className="basis-[45%] ml-1">
                            <h2 className="text-xl md:text-3xl font-bold mb-6">
                                {
                                    product ? product.name : "Hada Labo Perfect White Serum"
                                }
                                
                            </h2>
                            <p className="leading-[42px] mb-10">
                                {
                                    product ? product.description: 
                                    `Hada Labo Perfect White Serum là serum dưỡng trắng da cao cấp, chứa các thành phần dưỡng trắng tối ưu như Arbutin tinh khiết và Vitamin C giúp ức chế sự hình thành sắc tố melanin, làm mờ vết thâm nám và đốm nâu.
                                Sản phẩm mang lại làn da đều màu, rạng rỡ tự nhiên.
                                Với công thức Hydrating Boost, serum còn cung cấp độ ẩm sâu, giúp da luôn mềm mại, căng mướt và đầy sức sống.
                                Kết cấu mỏng nhẹ, thấm nhanh vào da, không gây nhờn rít hay bít tắc lỗ chân lông, tạo cảm giác thoải mái khi sử dụng.
                                Sản phẩm phù hợp với mọi loại da, kể cả da nhạy cảm, giúp cải thiện độ đàn hồi và phục hồi làn da.`
                                }
                                
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    href="https://hasaki.vn/san-pham/lan-khu-mui-etiaxil-danh-cho-da-nhay-cam-15ml-9604.html"
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className="bg-[--pink] hover:bg-[--lpink] text-white font-medium py-2 px-14 rounded-[15px] shadow-md"
                                    >
                                        Mua ngay
                                    </button>
                                </Link>

                            </div>
                        </div>

                    </div>
                    {/* section two */}
                    <div className="my-8">
                        <div className="flex flex-row gap-4 items-center mb-3">
                            <p>Chia sẻ :</p>
                            <div className="flex justify-center md:justify-start space-x-6 border-r-2 border-gray-500 pr-5">
                                <a href="#" className="text-blue-600">
                                    <img src="/icons/logos_facebook.svg" className="h-6"></img>
                                </a>
                                <a href="#" className="text-pink-500">
                                    <img src="/icons/logos_instagram.svg" className="h-6"></img>
                                </a>
                                <a href="#" className="text-blue-400">
                                    <img src="/icons/logos_tiktok-icon.svg" className="h-6"></img>
                                </a>
                            </div>
                            <div className="flex justify-center items-center md:justify-start space-x-5 ml-1">
                                <AiTwotoneLike className="text-2xl" />
                                <p>Đã thích ({like})</p>
                            </div>

                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <p>Thêm vào danh sách yêu thích</p>
                            <button onClick={()=> {
                                setLove(!love);
                                setLike(love ? like - 1 : like + 1);
                            }}>
                                {love ? <FaHeart className="text-xl text-red-500" /> : <CiHeart className="text-2xl " />}
                            </button>
                        </div>
                    </div>
                    {/* section three */}
                    <div className="mb-8">
                        <div className="my-3">
                            <h2 className="text-xl font-bold">Thông số kỹ thuật </h2>
                            <ul className="my-2 list-disc list-inside ml-4 space-y-3">
                                <li>Dung tích: 30ml</li>
                                <li>Kết cấu: Dạng lỏng, không nhờn</li>
                                <li>Bao bì: Chai nhựa màu xanh, nắp vặn bạc</li>
                            </ul>
                        </div>
                        <div className="my-3">
                            <h2 className="text-xl font-bold">Thành phần</h2>
                            <ul className="my-2 list-disc list-inside ml-4 space-y-3">
                                <li>Arbutin: Làm sáng da, ức chế sản sinh melanin, giúp giảm thâm nám.</li>
                                <li>Vitamin C: Chống oxy hóa, làm mờ vết thâm và đều màu da.</li>
                                <li>Hyaluronic Acid: Dưỡng ẩm sâu, giúp da luôn mềm mượt và căng bóng.</li>
                                <li>Vitamin B3 (Niacinamide): Tăng cường bảo vệ hàng rào da và hỗ trợ làm sáng.</li>
                            </ul>
                        </div>

                        <div className="my-3">
                            <h2 className="text-xl font-bold">Hướng dẫn sử dụng </h2>
                            <ul className="my-2 list-disc list-inside ml-4 space-y-3">
                                <li>Sau bước làm sạch da và sử dụng nước hoa hồng, lấy một lượng serum vừa đủ thoa đều lên toàn bộ khuôn mặt.</li>
                                <li>Massage nhẹ nhàng để thẩm định sâu huyết thanh vào da.</li>
                                <li>Sử dụng 2 lần mỗi ngày vào buổi sáng và tối để đạt được hiệu quả tối ưu.</li>
                            </ul>
                        </div>
                        <div className="my-3">
                            <h2 className="text-xl font-bold">Lợi ích của sản phẩm</h2>
                            <ul className="my-2 list-disc list-inside ml-4 space-y-3">
                                <li>Dưỡng trắng da: Giúp da sáng mịn và đều màu.</li>
                                <li>Giảm thâm nám: Giảm thiểu các đốm nâu, tàn nhang do tác động của môi trường.</li>
                                <li>Dưỡng ẩm sâu: Giữ cho da luôn ẩm mượt, căng bóng, không bị khô ráp.</li>
                                <li>Chống oxy hóa: Bảo vệ da khỏi các tác nhân gây lão hóa từ môi trường.</li>
                            </ul>
                        </div>
                        <div className="my-3">
                            <h2 className="text-xl font-bold">Chứng nhận và tiêu chuẩn </h2>
                            <ul className="my-2 list-disc list-inside ml-4 space-y-3">
                                <li>Chứng nhận Dermatologically Tested: An toàn cho da, kể cả da nhạy cảm.</li>
                                <li>Không chứa cồn, hương liệu và dầu khoáng: Thân thiện và không gây kích ứng da.</li>
                            </ul>
                        </div>
                    </div>
                    {/* section four */}
                    <div className="py-6">
                        {/* Section Title */}
                        <h2 className="text-2xl font-bold text-[--pink] mb-6">Sản phẩm tương tự</h2>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {list.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => handleProductClick(product.id)}
                                    className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                                >
                                    {/* Favorite Icon */}
                                    <div className="flex justify-end">
                                        {product.favorite ? (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
                                                    removeFromWishlist(product.id);
                                                    setList(list.map((item) => item.id === product.id ? { ...item, favorite: false } : item));
                                                }}
                                            >
                                                <span className="text-red-500 text-3xl">&hearts;</span>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
                                                    addToWishlist(product);
                                                    setList(list.map((item) => item.id === product.id ? { ...item, favorite: true } : item));
                                                }}
                                            >
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
                                                className={`text-yellow-400 ${index < Math.floor(product.rating) ? "opacity-100" : "opacity-50"}`}
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
        </>

    );
}