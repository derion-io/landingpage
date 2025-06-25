"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  HomeContentHeader,
  HomeContentHeaderMobile,
  ScrollSVG,
} from "../icons";
import { Twitter, Github, Telegram } from "../icons/socials";
import { HackenVerified, Zero2Hero } from "../icons/badge";
import FunctionPlot from "./FuncPlot";
import Innovation from "./innovation/Innovation";
import Available from "./Available";
import Discover from "./Discover";
import Footer from "./Footer";
import AboutUs from "./about-us/AboutUs";
import Blog from "./blog/Blog";
import BlogDetail from "./blog/BlogDetail";
import { Link } from "react-router-dom";

function checkInnerWidth() {
  return typeof window !== "undefined" && window.innerWidth >= 768;
}

const HomeContent = (props) => {
  const [targetReached, setTargetReached] = useState(checkInnerWidth());

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width:768px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget]);

  return (
    <>
      <div className="absolute flex flex-col justify-center inset-x-0 items-center py-0 px-4 w-full top-[104px] md:top-[220px]">
        {typeof window !== "undefined" &&
          (props.url === "#home" || props.url === "") && (
            <>
              {targetReached ? (
                <div className="flex flex-col gap-[40px] items-center pt-[20px] pb-[300px]">
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-start gap-6">
                      <div className="relative flex flex-row flex-justify-between w-full">
                        <span className="text-heading text-[30px]">
                          &nbsp;
                        </span>
                        <span className="flex flex-row gap-6 opacity-[0.5]">
                          <a href="https://bnbsmartchain.com/winners-announcement-zero2hero-hackathon/#de-fi" target="_blank">
                            <Zero2Hero/>
                          </a>
                          <a href="https://docs.derion.io/audits" target="_blank">
                            <HackenVerified/>
                          </a>
                        </span>
                      </div>
                      <HomeContentHeader />
                      <div className="text-heading text-[30px] text-right w-full">
                        &nbsp;
                      </div>
                    </div>
                    <span className="text-normal text-lg md:text-xl text-center self-stretch leading-[30px]">
                      On-chain Speculation Market for any Price or Value
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-10 max-w-[384px]">
                    <Link
                      to={"https://github.com/derion-io"}
                      target="_blank"
                    >
                      <Github height={48} width={48} />
                    </Link>
                    <Link
                      to={"https://x.com/DerionLabs"}
                      target="_blank"
                    >
                      <Twitter height={48} width={48} />
                    </Link>
                    <Link
                      to={"https://t.me/DerivableLabs"}
                      target="_blank"
                    >
                      <Telegram height={48} width={48} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-[60px] mt-[40px] pb-[250px] max-w-[343px]">
                  <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-start gap-[10px]">
                      <div className="relative flex flex-row flex-justify-between w-full">
                        <span className="text-heading text-[16px]">
                          &nbsp;
                        </span>
                        <span className="flex flex-row gap-6 opacity-[0.5] scale-[0.7] badges-mobile">
                          <a href="https://bnbsmartchain.com/winners-announcement-zero2hero-hackathon/#de-fi" target="_blank">
                            <Zero2Hero/>
                          </a>
                          <a href="https://docs.derion.io/audits" target="_blank">
                            <HackenVerified/>
                          </a>
                        </span>
                      </div>
                      <HomeContentHeaderMobile />
                      <div className="text-heading text-[16px] text-right w-full">
                        &nbsp;
                      </div>
                    </div>
                    <span className="text-normal text-xl text-center self-stretch leading-[30px]">
                      On-chain Speculation Market<br/>for any Price or Value
                    </span>
                  </div>
                  <div className="flex flex-row items-start justify-center max-w-[384px] gap-6">
                  <Link
                      to={"https://github.com/derion-io"}
                      target="_blank"
                    >
                      <Github height={48} width={48} />
                    </Link>
                    <Link
                      to={"https://x.com/DerionLabs"}
                      target="_blank"
                    >
                      <Twitter height={48} width={48} />
                    </Link>
                    <Link
                      to={"https://t.me/DerivableLabs"}
                      target="_blank"
                    >
                      <Telegram height={48} width={48} />
                    </Link>
                  </div>
                </div>
              )}
              <FunctionPlot matches={targetReached} />
              <Innovation matches={targetReached} />
              <Available matches={targetReached} />
              <Discover matches={targetReached} />
            </>
          )}
        {props.url === "#about" && <AboutUs matches={targetReached} />}
        {props.url === "#blog" && <Blog setUrl={props.setUrl} />}
        {props.url === "#blog-detail" && <BlogDetail setUrl={props.setUrl} />}
        <Footer />
      </div>
    </>
  );
};

export default HomeContent;
