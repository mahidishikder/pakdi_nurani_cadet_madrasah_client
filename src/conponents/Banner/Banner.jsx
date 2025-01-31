import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Banner() {
  return (
    <div className="container mx-auto mt-4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src="https://www.littlelives.org.uk/wp-content/uploads/2023/06/reading-with-children-1.jpg"
              alt="Boy reading book"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src="https://www.learn71.ca/wp-content/uploads/2020/05/phonics-intro.jpg"
              alt="Boy and Girl reading book"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src="https://images.stockcake.com/public/f/3/e/f3e9c5c1-79c9-4987-bec7-49b39cc08a54_large/children-reading-together-stockcake.jpg"
              alt="School boy holding books"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;