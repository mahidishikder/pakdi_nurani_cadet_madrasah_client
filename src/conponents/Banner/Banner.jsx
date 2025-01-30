import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

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
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2000, // Change slide every 2 seconds
          disableOnInteraction: false, // Keeps autoplay even if user interacts with the slider
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            src="https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_1280.jpg"
            alt="Boy reading book"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            src="https://img.freepik.com/free-vector/plain-background-with-muslim-boy-girl-reading-book_1308-42492.jpg?t=st=1738250458~exp=1738254058~hmac=b3689601a2638cf9035bb31788b1e527b021bd286a25c829f2f8b9c6b7dc12e0&w=1380"
            alt="Boy and Girl reading book"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            src="https://img.freepik.com/free-photo/school-boy-holding-books-apple_23-2148763998.jpg?t=st=1738250533~exp=1738254133~hmac=a6ccf5817b0e397178f735b9608ba082c0c2bf03e4d15c11313bf774393147cc&w=1380"
            alt="School boy holding books"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            src="https://img.freepik.com/free-photo/young-boy-church-experiencing-his-first-communion-ceremony_23-2151216310.jpg?t=st=1738251106~exp=1738254706~hmac=b47edbf204a8aa617159d1f270bb20e8ef42a6113e908c072a6c767510184dc4&w=1380"
            alt="School boy holding books"
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <img
            className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            src="https://img.freepik.com/free-photo/portrait-young-girl-student-attending-school_23-2150911347.jpg?t=st=1738251121~exp=1738254721~hmac=790396ca577a9fba069f41c2c257d83f9c9a1fd621b964d1321616926e6f2024&w=1060"
            alt="School boy holding books"
          />
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <img
            className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            src="https://img.freepik.com/free-vector/irag-kids-standing-front-whiteboard_1308-29553.jpg?t=st=1738251626~exp=1738255226~hmac=b8c8c09279bef85280fe9a0dafaac8a18342bc7d83959da09262cede5e5ad169&w=1380"
            alt="School boy holding books"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
