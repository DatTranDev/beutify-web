
'use client';
export default function Policy() {
    return (
        // < !--Main Content-- >
        <div className="container mx-auto px-44 py-12 mt-16">
            <div className="bg-white rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Chính Sách Sử Dụng</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                    Chào mừng bạn đến với trang web sản phẩm làm đẹp của chúng tôi! Chính sách này nêu rõ các điều khoản và điều kiện khi truy cập và sử dụng, nơi giới thiệu các sản phẩm làm đẹp bao gồm chăm sóc da, trang điểm và chăm sóc tóc.
                </p>

                {/* Section 1 */}
                <h3 className="text-xl font-semibold text-black-600 mb-4">1. Mục Đích</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li className="mb-2">Trang web của chúng tôi được thiết kế nhằm cung cấp thông tin chi tiết về các sản phẩm làm đẹp. Bao gồm mô tả sản phẩm, giá cả và các khuyến nghị giúp khách hàng đưa ra quyết định mua sắm chính xác.</li>
                </ul>

                {/* Section 2 */}
                <h3 className="text-xl font-semibold text-black-600 mb-4">2. Quyền Truy Cập và Sử Dụng</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li className="mb-2">Trang web chỉ được sử dụng cho mục đích cá nhân.</li>
                    <li className="mb-2">Nghiêm cấm sao chép hoặc phân phối nội dung của trang web dưới mọi hình thức.</li>
                    <li>Người dùng cần đảm bảo rằng họ đang truy cập phiên bản mới nhất của trang web để có thông tin sản phẩm cập nhật.</li>
                </ul>

                {/* Section 3 */}
                <h3 className="text-xl font-semibold text-black-600 mb-4">3. Thông Tin Sản Phẩm</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li className="mb-2">Mọi thông tin về sản phẩm, bao gồm giá cả, có thể thay đổi mà không cần thông báo trước. Chúng tôi luôn cố gắng cung cấp thông tin chính xác và cập nhật, nhưng không thể đảm bảo rằng tất cả mô tả sản phẩm luôn đầy đủ và chính xác.</li>
                </ul>

                {/* Section 4 */}
                <h3 className="text-xl font-semibold text-black-600 mb-4">4. Quyền Riêng Tư và Bảo Vệ Dữ Liệu</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li className="mb-2">Chúng tôi tôn trọng quyền riêng tư của bạn. Mọi thông tin cá nhân thu thập thông qua trang web sẽ được xử lý theo chính sách bảo mật của chúng tôi.</li>
                </ul>
                {/* Section 5 */}
                <h3 className="text-xl font-semibold text-black-600 mb-4">5. Liên Hệ</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li className="mb-2"> Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào liên quan đến chính sách e-catalog, vui lòng liên hệ với đội ngũ chăm sóc khách hàng của chúng tôi qua email{' '}
                        <a href="mailto:support@beautycatalog.com" className="text-pink-600 hover:underline">support@beautycatalog.com</a>.</li>
                </ul>
            </div>
        </div>

    )
}