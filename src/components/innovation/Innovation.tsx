"use client";
import React, { useState, useEffect } from "react";
import InnovationCard from "./components/InnovationCard";
import config from "../../config/index.json";
import { Carousel } from "@trendyol-js/react-carousel";
import EllipseSlider from "./components/EllipseSlider";
import useMediaQuery from "../hooks/useMedia";

const Innovation = (props) => {
  const { innovation } = config;
  const [page, setPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) pageIndicaterIncre();
    if (isRightSwipe) pageIndicaterDecre();
  };

  const pageIndicaterIncre = () => {
    if (page >= 0 && page < 4) {
      setPage((prevState) => ++prevState);
    } else setPage(0);
  };

  const pageIndicaterDecre = () => {
    if (page >= 1 && page <= 4) {
      setPage((prevState) => --prevState);
    } else setPage(4);
  };

  return (
    <>
      <div
        id="innovation"
        className="flex flex-col items-center gap-6 pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] md:gap-[56px]"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-heading text-[34px] md:text-5xl">
            OUR INNOVATIONS
          </p>
          <div className="flex flex-col">
            <p className="text-normal text-lg text-center">
              Uniswap solves the prediction market.
            </p>
            <p className="text-normal text-lg text-center">
              Derion solves the speculation market.
            </p>
          </div>
        </div>
        {props.matches ? (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-row justify-center max-w-[900px] flex-wrap items-start gap-8">
              {innovation.map((item, idx) => (
                <InnovationCard key={idx} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center gap-8">
            <div
              className="flex flex-row justify-center max-w-[345px] items-start gap-8"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <Carousel
                show={1.1}
                slide={1}
                swiping={true}
                swipeOn={0}
                useArrowKeys
                rightArrow={
                  <div
                    className="absolute w-[55.2px] h-full opacity-0 bg-transparent right-0"
                    onClick={() => pageIndicaterIncre()}
                  ></div>
                }
                className="carousel-list"
              >
                {innovation.map((item, idx) => (
                  <InnovationCard key={idx} item={item} />
                ))}
              </Carousel>
            </div>
            <EllipseSlider currentPage={page} setPage={setPage} />
          </div>
        )}
      </div>
    </>
  );
};

export default Innovation;
