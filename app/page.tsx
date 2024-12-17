'use client';

import { getCookies, navigate } from "@/lib/action";
import { useEffect, useState } from "react";

export default function Page1() {
    const [currentPage, setCurrentPage] = useState(1);

    // State to store answers
    const [answers, setAnswers] = useState({
        age: "",
        gender: "",
        purpose: "",
        skin: "",
        scent: "",
    });

    // Handle next and previous page
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    useEffect(() => {
        const handleCookies = async () => {
            const userCookie = await getCookies("user");
            const userString = userCookie?.value;
            if (!userString) {
                navigate("/login");
            }
        };
        handleCookies();
    }, []);

    // Handle answer selection
    const handleSelect = (question: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [question]: value }));
    };

    // Reusable button class for styling
    const buttonStyle = (isSelected: boolean) =>
        `px-4 py-2 rounded-md ${
            isSelected ? "bg-[#FF9B99] text-white" : "bg-gray-200 hover:bg-gray-300"
        }`;

    return (
        <div className="min-h-screen bg-[#FFAD99] flex items-center justify-center">
            <div className="bg-white shadow-md rounded-md p-6 w-full max-w-4xl">
                <img src="/icons/textLogo.svg" className="m-auto" />
                <h1 className="text-center font-semibold italic text-3xl my-6 roboto-medium text-[#FF9B99]">
                    Hãy cung cấp một vài thông tin để tối ưu trải nghiệm mua sắm của bạn nhé!
                </h1>

                {/* Page 1: Personal Information */}
                {currentPage === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Thông tin cá nhân</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium mb-2">
                                    1. Tuổi của bạn là bao nhiêu?
                                </label>
                                <div className="flex gap-2">
                                    {["Dưới 18", "18-24", "25-34", "35-44", "Trên 45"].map(
                                        (age) => (
                                            <button
                                                key={age}
                                                onClick={() => handleSelect("age", age)}
                                                className={buttonStyle(answers.age === age)}
                                            >
                                                {age}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">2. Bạn là:</label>
                                <div className="flex gap-2">
                                    {["Nam", "Nữ", "Khác"].map((gender) => (
                                        <button
                                            key={gender}
                                            onClick={() => handleSelect("gender", gender)}
                                            className={buttonStyle(answers.gender === gender)}
                                        >
                                            {gender}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={nextPage}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Page 2: Beauty Needs */}
                {currentPage === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Thói quen và nhu cầu làm đẹp</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium mb-2">
                                    1. Bạn thường sử dụng sản phẩm làm đẹp với mục đích gì?
                                </label>
                                {["Chăm sóc da", "Trang điểm", "Chăm sóc tóc", "Chăm sóc cơ thể"].map(
                                    (purpose) => (
                                        <div
                                            key={purpose}
                                            className="flex items-center gap-2"
                                        >
                                            <input
                                                type="radio"
                                                name="purpose"
                                                checked={answers.purpose === purpose}
                                                onChange={() => handleSelect("purpose", purpose)}
                                            />
                                            <span>{purpose}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevPage}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextPage}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Page 3: Skin Problems */}
                {currentPage === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Vấn đề gặp phải</h2>
                        <div>
                            <label className="block font-medium mb-2">1. Loại da của bạn là gì?</label>
                            {["Da thường", "Da khô", "Da dầu", "Da hỗn hợp"].map((skin) => (
                                <div key={skin} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="skin"
                                        checked={answers.skin === skin}
                                        onChange={() => handleSelect("skin", skin)}
                                    />
                                    <span>{skin}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevPage}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextPage}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Page 4: Preferences */}
                {currentPage === 4 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Sở thích cá nhân</h2>
                        <div>
                            <label className="block font-medium mb-2">
                                1. Bạn thích sản phẩm làm đẹp có mùi hương như thế nào?
                            </label>
                            {["Ngọt ngào", "Thanh mát", "Không mùi"].map((scent) => (
                                <div key={scent} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="scent"
                                        checked={answers.scent === scent}
                                        onChange={() => handleSelect("scent", scent)}
                                    />
                                    <span>{scent}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevPage}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => navigate("/home")}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
