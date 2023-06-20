import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button.jsx';
import Accordion from '../components/Accordion.jsx';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import { Link } from 'react-router-dom';

const Nivel = ({ data }) => {
  const { id, title, turno, icon, oferta, uniforme, images } = data;
  const [activeItem, setActiveItem] = useState(0);

  const galleryRef = useRef(null);
  const gallerySize = useRef([0, 0]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      gallerySize.current = [gallery.offsetWidth, gallery.offsetHeight];

      const galleryWidth = gallerySize.current[0];
      let initialSlides;

      if (galleryWidth < 480) {
        initialSlides = 1;
      } else if (galleryWidth < 620) {
        initialSlides = 2;
      } else if (galleryWidth < 1060) {
        initialSlides = 3;
      } else {
        initialSlides = 4;
      }

      setSlides(initialSlides);
    }
  }, []);

  const [slides, setSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const gallery = galleryRef.current;
      if (gallery) {
        const newWidth = gallery.offsetWidth;
        gallerySize.current = [newWidth, gallery.offsetHeight];

        if (newWidth < 480) {
          setSlides(1);
        } else if (newWidth < 620) {
          setSlides(2);
        } else if (newWidth < 1060) {
          setSlides(3);
        } else {
          setSlides(4);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-5 px-10">
      <h1 className="text-primary font-semibold text-3xl sm:text-4xl text-start">
        Nivel <span className="text-secondary">{title}</span>
      </h1>
      <h2 className="text-primary font-semibold text-xl sm:text-2xl">
        Turno <span>{turno}</span>
      </h2>

      <div className="flex flex-col sm:flex-row-reverse justify-between mt-6 sm:mt-14">
        <div className=" w-full sm:w-[50%]" ref={galleryRef}>
          <Swiper
            modules={[Pagination]}
            pagination={true}
            spaceBetween={10}
            slidesPerView={slides}
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={img.link}
                  alt={img.alt}
                  className="w-full h-[292.5px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-5 sm:mt-0 w-full sm:w-[40%]">
          <div>
            <h2 className="text-primary font-semibold text-xl sm:text-2xl">
              Oferta educativa
            </h2>
            <div className="pt-2">
              {oferta.map((item, index) => (
                <Accordion
                  key={index}
                  icono={item.icono}
                  title={item.title}
                  description={item.description}
                  img={item.images}
                  index={index}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-primary font-semibold text-xl sm:text-2xl mt-6">
              Uniforme
            </h2>
            <div className="pt-2">
              {uniforme.map((item, index) => (
                <p key={item.id} className="text-sm">
                  • {item.title}
                </p>
              ))}
            </div>
            <div className="mt-6 sm:w-[50%]">
              <Link to="/proximamente">
                <Button text={'Tienda Online'} styles={'w-full'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nivel;
