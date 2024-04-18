import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import damaskred from "../../assets/carousel-img/damaskred.png";
import senatormen from "../../assets/carousel-img/senatormen.png";
import tabledamask from "../../assets/carousel-img/tabledamask.png";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Slide {
  description: string;
  icon: string;
  buttonLink: string;
  buttonText: string;
}

interface ICarouselProps {
  slides: Slide[];
}

const Carousel: React.FunctionComponent<ICarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="carousel relative py-10 mt-20 rounded-md">
      <div className="carousel-img flex items-center justify-center">
        <div className="w-full">
          <img
            src={slides[currentSlide].icon}
            alt=""
            className="w-full  h-[70vh]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-area absolute w-full h-[70vh] text-center "
        >
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }} // New exit animation
            transition={{ duration: 1.5 }}
            className="text-white text-5xl h-[70vh] border flex flex-col items-center justify-center border-red-500"
          >
            {slides[currentSlide].description}
            <div className="text-2xl text-center">
              <Link to={slides[currentSlide].buttonLink}>
                {slides[currentSlide].buttonText}
              </Link>
            </div>
          </motion.h1>
        </motion.div>
      </div>

      <div className="carousel-btn absolute top-[50%] left-5 ">
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="h-9 text-white"
          />
        </button>
      </div>
      <div className="carousel-btn absolute top-[50%] right-5">
        <button onClick={previousSlide}>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="h-9 text-white"
          />
        </button>
      </div>
      <div className="slide-indicators absolute bottom-4 left-0 w-full flex text-[10px] justify-center gap-4">
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="mx-1 cursor-pointer"
          >
            <FontAwesomeIcon icon={faCircle} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero: React.FunctionComponent = () => {
  // const slides = [damaskred, senatormen, tabledamask];
  // const text = ['hello world', 'about us', 'yo fammmmm'];
  const slides: Slide[] = [
    {
      description: "hello world",
      icon: damaskred,
      buttonLink: "/aboutus",
      buttonText: "about us",
    },
    {
      description: "hello there",
      icon: senatormen,
      buttonLink: "/shop",
      buttonText: "shop",
    },
    {
      description: "yooooo famm",
      icon: tabledamask,
      buttonLink: "contact us",
      buttonText: "contact us",
    },
  ];
  return (
    <>
      {/* text={text}  */}
      <div className="">
        <Carousel slides={slides} />
      </div>
    </>
  );
};

export default Hero;
