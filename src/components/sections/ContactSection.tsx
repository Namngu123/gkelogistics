'use client'

import { Mail, Phone } from 'lucide-react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <div>
      {/* Section Google Map */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <div className="mt-0">
            <iframe
              title="Google Map GKE Logistics"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.243339547278!2d105.858233!3d20.9828806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0029542799%3A0x91bd0ea6b6e7cab9!2sGKE%20LOGISTICS!5e0!3m2!1svi!2s!4v1750233751865!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#981d3b] text-white py-10 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Cột 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">GKE LOGISTICS</h3>
            <ul className="space-y-2">
              <li>Giới thiệu</li>
              <li>Hỗ trợ trực tuyến</li>
              <li>Tuyển đại lý – API</li>
              <li>Cổng thông tin khách hàng</li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />0879 089 789 (Hotline)</p>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />0879 089 799 (Hotline)</p>
            <p className="flex items-center"><Mail className="w-4 h-4 mr-2" />cshangkelogistics@gmail.com</p>
            <p className="flex items-center"><Mail className="w-4 h-4 mr-2" />gkeketoan@gmail.com</p>
          </div>

          {/* Cột 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Địa chỉ</h4>
            <p><strong>Văn phòng HN:</strong> Căn B20 Liền Kề Tổng Cục 8 - ngõ 175 Định Công - Hoàng Mai - Hà Nội</p>
            <p><strong>Kho khai thác HN:</strong> 3 Đền Lừ 3 - Hoàng Văn Thụ - Hoàng Mai - Hà Nội</p>
            <p><strong>Kho khai thác HCM:</strong> 47/8A Thăng Long - P.4 - Tân Bình - HCM</p>
            <p><strong>Kho nhận Đà Nẵng:</strong> 284 Nguyễn Tri Phương - Thạc Gián - Thanh Khê - Đà Nẵng</p>
          </div>
        </div>

        {/* Mạng xã hội */}
        <div className="mt-8 flex justify-center space-x-4 text-white">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-gray-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-gray-300" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 hover:text-gray-300" />
          </a>
        </div>

        {/* Bản quyền */}
        <div className="mt-4 text-center text-xs text-gray-200">
          Copyright © 2021 GKE LOGISTICS. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
