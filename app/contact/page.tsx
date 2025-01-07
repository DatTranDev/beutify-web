'use client';

export default function Contact() {
    return (
        <main className="container mx-auto px-44 py-12">
            <div className="bg-white rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Liên Hệ Với Chúng Tôi</h2>
                <p className="text-black leading-relaxed mb-8">
                    Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm thông tin về sản phẩm, vui lòng điền vào mẫu dưới đây hoặc liên hệ trực tiếp với chúng tôi qua thông tin liên lạc.
                </p>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div>
                        <label className="block text-black-700 font-medium mb-2">Họ và Tên</label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên của bạn"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-[--lpink]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Nhập địa chỉ email của bạn"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-[--lpink]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black-700 font-medium mb-2">Số Điện Thoại</label>
                        <input
                            type="tel"
                            placeholder="Nhập số điện thoại của bạn"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-[--lpink]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black-7000 font-medium mb-2">Tin Nhắn</label>
                        <textarea
                            rows={5}
                            placeholder="Nhập nội dung tin nhắn của bạn"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-[--lpink]"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[--pink] text-white py-3 rounded-lg font-medium hover:bg-[--peach] transition"
                    >
                        Gửi Tin Nhắn
                    </button>
                </form>

                {/* Contact Info */}
                <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thông Tin Liên Hệ</h3>
                    <p className="text-gray-600 mb-2">
                        📍 Địa chỉ: 15 LINH TRUNG, TP.THỦ ĐỨC, THÀNH PHỐ HỒ CHÍ MINH
                    </p>
                    <p className="text-gray-600 mb-2">
                        📞 Số điện thoại: +84 969 032 940
                    </p>
                    <p className="text-gray-600">
                        📧 Email: <a href="mailto:support@beautycatalog.com" className="text-pink-600 hover:underline">support@beautycatalog.com</a>
                    </p>
                </div>
            </div>
        </main>
    );
}