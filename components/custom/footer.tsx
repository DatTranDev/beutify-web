'use client'
export default function Footer() {
  return (
    <footer className="bg-[--hwheat]  px-44 py-12">
      <div className="container grid grid-cols-3 md:grid-cols-3 gap-16">
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-bold p-0 m-0">Nhận thông tin</h3>
          <h3 className="text-4xl font-bold mb-4 p-0 ">khuyến mãi</h3>
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </form>
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>support@beautycatalog.com</li>
              <li>15 Linh Trung, Tp.Thủ Đức, Thành phố Hồ Chí Minh</li>
              <li>0969032940</li>
            </ul>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="h-24">
          </div>
          <button
            className="bg-[--pink] hover:bg-[--lpink] text-white px-8 py-2 rounded-xl shadow-lg"
            onClick={() => alert("Đăng ký thành công")}
          >
            Đăng ký
          </button>
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Lịch sử công ty</a></li>
              <li><a href="#">Câu chuyện thương hiệu</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center md:text-left">
          <img src="/icons/logo.svg" className="h-36" alt="logo" />
          <div className="mt-10">
            <h3 className="text-lg font-bold mb-4">Fanpage</h3>
            <div className="flex justify-center md:justify-start space-x-4">
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
          </div>
        </div>
      </div>
    </footer>
  )
}