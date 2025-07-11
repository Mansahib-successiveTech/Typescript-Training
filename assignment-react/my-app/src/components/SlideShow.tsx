"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images:string[] = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
];

const SlideShow = () => {
  const [play, setPlay] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  const pleasePause = () => setPlay(false);
  const pleasePlay = () => setPlay(true);

  useEffect(() => {
    let intervalId=null ;

    if (play) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex < images.length - 1) {
            return prevIndex + 1;
          } else {
            setPlay(false);
            return 0; // Reset to first image
          }
        });
      }, 3000);
    }else 
    setIndex(index);

    return () => clearInterval(intervalId);
  }, [play,index]);

  return (
    <>
      <Image
        src={images[index]}
        width={500}
        height={500}
        alt={`Slide ${index + 1}`}
      />
      <div>
        <button onClick={pleasePlay}>Play</button>
        <button onClick={pleasePause}>Pause</button>
      </div>
    </>
  );
};

export default SlideShow;
