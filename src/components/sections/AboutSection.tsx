'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#ffe0e6] to-white font-['Inter',sans-serif]"
    >
      <div className="container mx-auto px-6 md:px-16 max-w-7xl font-['Inter',sans-serif]">
        <div className="grid md:grid-cols-2 gap-14 items-center font-['Inter',sans-serif]">

          {/* BÊN TRÁI: NỘI DUNG */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 font-['Inter',sans-serif]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#9E2A2F] mb-8 leading-tight tracking-wide drop-shadow-[4px_6px_10px_rgba(0,0,0,0.25)]">
              Giới Thiệu Về GKE Logistics
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4 relative">
              <span className="text-5xl text-[#9E2A2F] absolute -left-6 -top-2">&ldquo;</span>
              <strong className="text-[#9E2A2F]">CÔNG TY CỔ PHẦN GKE LOGISTICS</strong> hoạt động mạnh trong thị trường thương mại điện tử Việt – Mỹ phát triển mạnh mẽ.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed relative mb-8">
              Hướng đến việc cung cấp dịch vụ logistics thương mại
              <strong className="text-[#9E2A2F]"> AN TOÀN – BỀN VỮNG – HỢP PHÁP </strong>
              cho các doanh nghiệp, xưởng sản xuất, đơn vị fulfillment, seller trên các sàn thương mại điện tử US.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#9E2A2F] mb-2">
                Tầm Nhìn & Sứ Mệnh
              </h3>
              <p className="text-lg leading-relaxed">
                <span className="italic text-[#9E2A2F]">
                  &quot;REAL SERVICE – Cung cấp một dịch vụ Logistics thực thụ, điều đang thiếu ở Việt Nam&quot;
                </span><br />
                GKE LOGISTICS hướng đến trở thành đối tác chiến lược cho các doanh nghiệp hiện đại, cung cấp dịch vụ vận chuyển hàng hóa và giải pháp logistics toàn diện, bền vững, hiệu quả và an toàn.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#9E2A2F] mb-2">
                Giá Trị Cốt Lõi
              </h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>
                  <strong className="text-[#9E2A2F]">Chất lượng vượt trội:</strong> Cam kết chất lượng dịch vụ logistics luôn ổn định và tối ưu cho khách hàng.
                </li>
                <li>
                  <strong className="text-[#9E2A2F]">Uy tín và trách nhiệm:</strong> GKE luôn đặt sự tin tưởng và lợi ích của khách hàng lên hàng đầu.
                </li>
                <li>
                  <strong className="text-[#9E2A2F]">Đổi mới và sáng tạo:</strong> Không ngừng cải tiến dịch vụ để bắt kịp xu thế và thị trường toàn cầu.
                </li>
                <li>
                  <strong className="text-[#9E2A2F]">Hợp tác và kết nối:</strong> Mở rộng liên kết với các đơn vị, đối tác trong và ngoài nước
                  <span className="text-2xl text-[#9E2A2F] ml-1">&rdquo;</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* BÊN PHẢI: LƯỚI ẢNH */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { src: '/images/photo1.jpg', col: 'col-span-2', h: 'h-100', delay: 0 },
              { src: '/images/photo2.jpg', col: 'col-span-1', h: 'h-40', delay: 0.1 },
              { src: '/images/photo3.jpg', col: 'col-span-1', h: 'h-40', delay: 0.2 },
              { src: '/images/photo4.jpg', col: 'col-span-1', h: 'h-48', delay: 0.3 },
              { src: '/images/photo6.jpg', col: 'col-span-1', h: 'h-48', delay: 0.4 },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className={`${img.col} ${img.h} relative rounded-xl overflow-hidden border border-white shadow-md cursor-pointer`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 24px rgba(158,42,47,0.3)',
                }}
                transition={{ duration: 0.5, delay: img.delay }}
              >
                <Image src={img.src} alt={`Ảnh ${idx + 1}`} fill className="object-cover transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
