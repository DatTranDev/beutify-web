'use client';

import { getCookies, navigate, setCookies } from "@/lib/action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the type for the answers state
type AnswersState = {
    age: string;
    gender: string;
    purpose: string;
    skin: string;
    scent: string;
    frequency: string;
    preferences: string[]; // Array for multi-select values
    problems: string[]; // Array for multi-select values
    nightcare: string;
    brand: string;
};

export default function Question() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    // State with proper type
    const [answers, setAnswers] = useState<AnswersState>({
        age: "",
        gender: "",
        purpose: "",
        skin: "",
        scent: "",
        frequency: "",
        preferences: [],
        problems: [],
        nightcare: "",
        brand: "",
    });

    // Handle next and previous page
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);

    useEffect(() => {
        const handleCookies = async () => {
            const userCookie = await getCookies("user");
            const userString = userCookie?.value;
            if (!userString) {
                navigate("/question");
            }
        };
        handleCookies();
    }, []);

    // Handle answer selection for single-choice questions
    const handleSelect = (question: keyof AnswersState, value: string) => {
        setAnswers((prev) => ({ ...prev, [question]: value }));
    };

    // Handle toggling for multi-select fields
    const handleToggle = (question: keyof AnswersState, value: string) => {
        setAnswers((prev) => {
            const currentValues = prev[question] as string[]; // Cast to string[] for multi-select
            if (currentValues.includes(value)) {
                return { ...prev, [question]: currentValues.filter((item) => item !== value) };
            } else {
                return { ...prev, [question]: [...currentValues, value] };
            }
        });
    };

    // Reusable button class for styling
    const buttonStyle = (isSelected: boolean) =>
        `px-4 py-2 rounded-md ${isSelected ? "bg-[#FF9B99] text-white" : "bg-gray-200 hover:bg-gray-300"}`;

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
                                <label className="block font-medium mb-2">1. Tuổi của bạn là bao nhiêu?</label>
                                <div className="flex gap-2">
                                    {["Dưới 18", "18-24", "25-34", "35-44", "Trên 45"].map((age) => (
                                        <button
                                            key={age}
                                            onClick={() => handleSelect("age", age)}
                                            className={buttonStyle(answers.age === age)}
                                        >
                                            {age}
                                        </button>
                                    ))}
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
                                Kế tiếp
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
                                {["Chăm sóc da", "Trang điểm", "Chăm sóc tóc", "Chăm sóc cơ thể"].map((purpose) => (
                                    <div key={purpose} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="purpose"
                                            checked={answers.purpose === purpose}
                                            onChange={() => handleSelect("purpose", purpose)}
                                        />
                                        <span>{purpose}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    2. Bạn sử dụng sản phẩm làm đẹp thường xuyên như thế nào?
                                </label>
                                {["Hàng ngày", "Một vài lần mỗi tuần", "Chỉ khi có dịp đặc biệt"].map((frequency) => (
                                    <div key={frequency} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="frequency"
                                            checked={answers.frequency === frequency}
                                            onChange={() => handleSelect("frequency", frequency)}
                                        />
                                        <span>{frequency}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    3. Bạn có ưu tiên các sản phẩm làm đẹp với đặc điểm nào?
                                </label>
                                {["Thành phần tự nhiên", "Thương hiệu uy tín", "Giá cả hợp lý", "Được chứng nhận không thử nghiệm trên động vật"].map((preference) => (
                                    <div key={preference} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="preferences"
                                            checked={answers.preferences.includes(preference)}
                                            onChange={() => handleToggle("preferences", preference)}
                                        />
                                        <span>{preference}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevPage}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={nextPage}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Kế tiếp
                            </button>
                        </div>
                    </div>
                )}

                {/* Page 3: Skin Problems */}
                {currentPage === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Vấn đề gặp phải</h2>
                        <div className="space-y-4">
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

                            <div>
                                <label className="block font-medium mb-2">
                                    2. Bạn đang gặp vấn đề gì với làn da của mình?
                                </label>
                                {["Mụn", "Thâm", "Nám", "Lỗ chân lông to", "Lão hóa", "test"].map((problem) => (
                                    <div key={problem} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="problems"
                                            checked={problem==="test"? answers.problems?.includes("test") : answers.problems?.includes(problem)}
                                            onChange={() => handleToggle("problems", problem)}
                                        />
                                        {problem === "test" ? <span>
                                            Khác:   
                                            <input
                                                className="border-b border-gray-400 focus:outline-none w-28  ml-2"
                                                type="text"
                                                name="problem"
                                                
                                            />
                                        </span> 
                                        : <span>{problem}</span>}
                                        
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    3. Bạn có thường xuyên sử dụng sản phẩm dưỡng da ban đêm không?
                                </label>
                                {["Có", "Không"].map((answer) => (
                                    <div key={answer} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="nightcare"
                                            checked={answers.nightcare === answer}
                                            onChange={() => handleSelect("nightcare", answer)}
                                        />
                                        <span>{answer}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevPage}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={nextPage}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Kế tiếp
                            </button>
                        </div>
                    </div>
                )}

                {/* Page 4: Preferences */}
                {currentPage === 4 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Sở thích cá nhân</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium mb-2">
                                    1. Bạn thích sản phẩm làm đẹp có mùi hương như thế nào?
                                </label>
                                {["Ngọt ngào", "Thanh mát", "Không mùi", "Khác"].map((scent) => (
                                    <div key={scent} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="scent"
                                            checked={answers.scent === scent}
                                            onChange={() => handleSelect("scent", scent)}
                                        />
                                        {scent === "Khác" ?<span>
                                            Khác:   
                                            <input
                                                className="border-b border-gray-400 focus:outline-none w-28  ml-2"
                                                type="text"
                                                name="problem"
                                                
                                            />
                                        </span>  :<span>{scent}</span>}
                                        
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    2. Thương hiệu làm đẹp bạn yêu thích là gì?
                                </label>
                                {["L'Oréal", "Innisfree", "Laneige", "Hada Labo", "Khác"].map((brand) => (
                                    <div key={brand} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="brand"
                                            checked={answers.brand === brand}
                                            onChange={() => handleSelect("brand", brand)}
                                        />
                                        {brand === "Khác" ?<span>
                                            Khác:   
                                            <input
                                                className="border-b border-gray-400 focus:outline-none w-28  ml-2"
                                                type="text"
                                                name="problem"
                                                
                                            />
                                        </span> :<span>{brand}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevPage}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                                Quay lại
                            </button>
                            <button
                                onClick={async () => {
                                    router.push('/');
                                    await setCookies("user", JSON.stringify("user"));
                                }}
                                className="px-4 py-2 bg-[#FF9B99] text-white rounded-md hover:bg-[#FF7B7B]"
                            >
                                Hoàn thành
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
