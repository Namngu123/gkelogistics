'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaShippingFast, FaGlobeEurope, FaPlane } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import { AiOutlineDeliveredProcedure } from "react-icons/ai"

export default function ServicesSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2 })
  const { ref: serviceRef, inView: serviceInView } = useInView({ threshold: 0.2 })

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#ffe0e6] to-white scroll-mt-32 font-['Inter',sans-serif]"
    >
      <div className="container mx-auto px-4 font-['Inter',sans-serif]">

        {/* Tiêu đề */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#9E2A2F] leading-tight tracking-wide drop-shadow-[4px_6px_10px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: -10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            DỊCH VỤ <br /> VẬN CHUYỂN
          </motion.h2>
        </motion.div>

        {/* Danh sách dịch vụ */}
        <motion.div
          ref={serviceRef}
          initial={{ opacity: 0, y: 30 }}
          animate={serviceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Priority */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={serviceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-transparent hover:border-[#9E2A2F] hover:shadow-[0_8px_30px_rgba(158,42,47,0.3)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaShippingFast size={24} className="text-[#9E2A2F]" />
                <h3 className="text-xl font-semibold text-[#9E2A2F]">Priority - 4-9 Ngày làm việc</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Dịch vụ chuyển phát nhanh, thời gian vận chuyển nhanh chóng từ 4-9 ngày.</p>
              <p className="text-gray-500 text-sm">Bạn cần vận chuyển cho sàn Tiktok?</p>
              <p className="text-gray-500 text-sm">Bạn cần vận chuyển cho sàn ETSY?</p>
              <p className="text-gray-500 text-sm">Bạn cần vận chuyển cho sàn Amz?</p>
            </motion.div>

            {/* Economy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={serviceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-transparent hover:border-[#9E2A2F] hover:shadow-[0_8px_30px_rgba(158,42,47,0.3)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaPlane size={24} className="text-[#9E2A2F]" />
                <h3 className="text-xl font-semibold text-[#9E2A2F]">Economy - 6-14 Ngày làm việc</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Dịch vụ chuyển phát tiết kiệm, thời gian vận chuyển từ 6-14 ngày.</p>
              <p className="text-gray-500 text-sm">Bạn cần vận chuyển cho sàn Ebay?</p>
              <p className="text-gray-500 text-sm">Bạn mới bán hàng quốc tế lần đầu?</p>
            </motion.div>

            {/* TikTok - Seller */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={serviceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-transparent hover:border-[#9E2A2F] hover:shadow-[0_8px_30px_rgba(158,42,47,0.3)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <AiOutlineDeliveredProcedure size={24} className="text-[#9E2A2F]" />
                <h3 className="text-xl font-semibold text-[#9E2A2F]">TikTok - SHIP BY SELLER</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Dịch vụ vận chuyển cho người bán TikTok, giúp tối ưu quy trình vận chuyển.</p>
              <p className="text-gray-500 text-sm">Bạn mới bán hàng quốc tế lần đầu?</p>
            </motion.div>

            {/* TikTok - by TikTok */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={serviceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-transparent hover:border-[#9E2A2F] hover:shadow-[0_8px_30px_rgba(158,42,47,0.3)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <FiSmartphone size={24} className="text-[#9E2A2F]" />
                <h3 className="text-xl font-semibold text-[#9E2A2F]">TikTok - SHIP BY TIKTOK</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Dịch vụ vận chuyển cho người bán TikTok, giúp tối ưu quy trình vận chuyển.</p>
            </motion.div>

            {/* UK - EVRI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={serviceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-transparent hover:border-[#9E2A2F] hover:shadow-[0_8px_30px_rgba(158,42,47,0.3)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaGlobeEurope size={24} className="text-[#9E2A2F]" />
                <h3 className="text-xl font-semibold text-[#9E2A2F]">UK _ EVRI - 4-8 Ngày</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Dịch vụ chuyển phát tại UK, thời gian vận chuyển từ 4-8 ngày.</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
