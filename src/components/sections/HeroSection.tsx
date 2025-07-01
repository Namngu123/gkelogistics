'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { FiPhoneCall } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const scrollToServices = () => {
    const section = document.getElementById('services')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="w-screen h-[95vh] relative overflow-hidden font-['Inter',sans-serif]">
      {/* Overlay tối nhẹ */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text chính */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute z-20 top-[28%] left-[8%] max-w-[90%] text-white"
      >
        <h1 className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
          GKE LOGISTICS
        </h1>
        <p className="text-2xl leading-relaxed font-medium text-gray-100 mb-6">
          Đối tác vận chuyển của các seller,<br />
          đơn vị fulfillment Việt Nam thị trường US/UK
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToServices}
            className="px-6 py-3 bg-white text-[#9E2A2F] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#9E2A2F] hover:text-white hover:scale-105"
          >
            Khám Phá Dịch Vụ
          </button>
          <button
            onClick={() => alert('💬 Tính năng tư vấn đang được phát triển!')}
            className="px-6 py-3 bg-white text-[#9E2A2F] rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:bg-[#9E2A2F] hover:text-white hover:scale-105"
          >
            <FiPhoneCall size={20} />
            Nhận Tư Vấn Ngay
          </button>
        </div>
      </motion.div>

      {/* Carousel ảnh */}
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={1000}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="h-full z-0"
        effect="coverflow"
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1 }}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/carousel/img1.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/carousel/img2.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/carousel/img3.jpg"
              alt="Slide 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
