import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Art from "../../galleries/PhotoGallery/Art";
import Fantasy from "../../galleries/PhotoGallery/Fantasy";
import Nature from "../../galleries/PhotoGallery/Nature";
import "./MobilePhoto.scss";
import "../../index.css";
import "swiper/scss";
import "swiper/scss/pagination";
import Portraits from "../../galleries/PhotoGallery/Portraits";
import Love from "../../galleries/PhotoGallery/Love";

function MobilePhoto(props) {
  const mobilePhotoClasses = `mobile-photo ${props.className}`;

  return (
    <section className={mobilePhotoClasses}>
      <h1 className="mobile-photo__header">Photo.</h1>
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
          <SwiperSlide>
            <Portraits />
          </SwiperSlide>
          <SwiperSlide>
            <Love />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default MobilePhoto;
