'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect } from 'react'
import Image from 'next/image'

export default function PartnerAndTestimonialSection() {
  const partners = [
    "/images/usps.svg",
    "/images/dhl.png",
    "/images/usps.svg",
    "/images/hanjin.png",
    "/images/4px.png",
    "/images/dhl.png",
    "/images/uni.png",
    "/images/korea.png"
  ]

  useEffect(() => {
    const title = document.getElementById("partner-title")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && title) {
          title.classList.add("opacity-100", "translate-y-0")
          title.classList.remove("opacity-0", "translate-y-6")
        } else if (title) {
          title.classList.remove("opacity-100", "translate-y-0")
          title.classList.add("opacity-0", "translate-y-6")
        }
      },
      { threshold: 0.5 }
    )
    if (title) observer.observe(title)
    return () => {
      if (title) observer.unobserve(title)
    }
  }, [])

  return (
    <section
      id="partner-testimonial"
      className="bg-gradient-to-b from-[#ffe0e6] to-white py-24 px-4 text-center font-['Inter',sans-serif]"
    >
      {/* Tiêu đề Đối tác */}
      <h2
        id="partner-title"
        className="text-5xl md:text-4xl font-extrabold text-[#9E2A2F] leading-tight tracking-wide drop-shadow-[4px_6px_10px_rgba(0,0,0,0.25)] mb-12 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      >
        ĐỐI TÁC CỦA CHÚNG TÔI
      </h2>

      {/* Slider logo đối tác */}
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-6xl mx-auto mb-20"
      >
        {partners.map((logo, index) => (
          <SwiperSlide key={logo + index} className="flex justify-center items-center">
            <div className="relative h-12 w-36">
              <Image
                src={logo}
                alt={`Logo đối tác ${index + 1}`}
                fill
                className="object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider cảm nhận khách hàng */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        spaceBetween={50}
        slidesPerView={1}
        className="max-w-3xl mx-auto"
        pagination={{ clickable: true }}
      >
        {[
          {
            name: "Lê Thị Thuận",
            role: "Amazon Seller",
            avatar: "/images/user2.png",
            title: "Rất tuyệt vời",
            content: "Tìm kiếm thông tin dễ dàng và nhanh chóng. Đội ngũ hỗ trợ khách hàng chuyên nghiệp, luôn sẵn sàng giúp đỡ. Cảm thấy an tâm và tin tưởng khi sử dụng dịch vụ vận chuyển của GKE Logistics."
          },
          {
            name: "Nguyễn Thị Khánh",
            role: "Chủ shop thời trang xuất khẩu",
            avatar: "/images/user1.png",
            title: "Dịch vụ tận tâm",
            content: "Tôi cảm thấy rất hài lòng với sự hỗ trợ từ đội ngũ GKE. Mỗi lần hàng có vấn đề, các bạn đều xử lý nhanh chóng và cực kỳ chuyên nghiệp."
          },
          {
            name: "John Trần",
            role: "Fulfillment agency tại California",
            avatar: "/images/user3.png",
            title: "Nhanh và an toàn",
            content: "Tôi chuyển hàng từ Việt Nam sang Mỹ gần như mỗi tuần, và chưa lần nào GKE làm tôi thất vọng. Hàng đến đúng giờ, đóng gói kỹ, không bị bóp méo."
          },
          {
            name: "Phạm Thu Liên",
            role: "Chuyên viên vận hành sàn Etsy",
            avatar: "/images/user4.png",
            title: "Tin tưởng tuyệt đối",
            content: "Sau nhiều lần làm việc với các đơn vị logistics khác, tôi đã chọn GKE làm đối tác lâu dài vì sự rõ ràng, minh bạch và tốc độ xử lý đơn hàng rất tốt."
          },
        ].map((review, idx) => (
          <SwiperSlide key={review.name + idx}>
            <h3 className="text-xl font-semibold text-[#9E2A2F] mb-4">{review.title}</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-8">“{review.content}”</p>
            <div className="flex flex-col items-center">
              <div className="relative w-14 h-14 mb-2">
                <Image
                  src={review.avatar}
                  alt={`Avatar ${review.name}`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="font-medium text-[#9E2A2F]">{review.name}</div>
              <div className="text-gray-600 text-sm italic">{review.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
