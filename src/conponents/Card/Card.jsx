import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

function Card() {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-10">Our Students</h2>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 1"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 2"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 3"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 4"
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 5"
          />
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 6"
          />
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 7"
          />
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 8"
          />
        </SwiperSlide>

        {/* Slide 9 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 9"
          />
        </SwiperSlide>

        {/* Slide 10 */}
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/muslim-kid-with-holy-book-koran_SKd5taSj_SB_PM.jpg"
            alt="Student 10"
          />
        </SwiperSlide>
      </Swiper>

      <div className="text-center mt-10">
        <button className="py-3 px-8 hover:text-white/70 duration-500 bg-[#00A758] text-lg font-semibold">
          View Gallery
        </button>
      </div>
    </div>
  );
}

export default Card;
