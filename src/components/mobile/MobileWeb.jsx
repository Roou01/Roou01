import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Art from "../../galleries/PhotoGallery/Art";
import Fantasy from "../../galleries/PhotoGallery/Fantasy";
import Nature from "../../galleries/PhotoGallery/Nature";
import "./MobileWeb.scss";
import "../../index.css";
import "swiper/scss";
import "swiper/scss/pagination";

function MobilePhoto(props) {
  const mobileWebClasses = `mobile-web ${props.className}`;

  return (
    <section className={mobileWebClasses}>
      <h1 className="mobile-photo__header">Web.</h1>
      <div className="mobile-photo__gallery">
        <Swiper
          style={{
            "--swiper-pagination-color": "var(--prime-color)",
            "--swiper-pagination-bullet-inactive-color": "var(--text-color)",
            "--swiper-pagination-bullet-inactive-opacity": ".5",
            "--swiper-pagination-bullet-size": "10px",
          }}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Art />
          </SwiperSlide>
          <SwiperSlide>
            <Fantasy />
          </SwiperSlide>
          <SwiperSlide>
            <Nature />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default MobilePhoto;
