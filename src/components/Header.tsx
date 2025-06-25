"use client";
import React, { Fragment, useState } from "react";
import { DerivableLogo, DerivableLogoMini } from "../icons/index";
import config from "../config/index.json";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Menu = (props) => {
  const { navigation } = config;
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Popover>
        <div className="flex flex-col items-start fixed w-full h-[80px] background-gray top-0 z-[9999]">
          <nav className="flex flex-row justify-between p-2 lg:px-[120px] py-0 w-full h-full border-b-[1px] border-zinc-700">
            <div className="flex justify-center items-center h-full">
              <a href="#">
                <DerivableLogo />
              </a>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center gap-[56px] self-stretch h-full">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.target}
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      props.setUrl(item.href);
                    }
                  }}
                  className="h-full"
                >
                  <div
                    className={`h-full ${
                      props.url === item.href && "button-active"
                    } button-link box-border flex flex-row items-center py-2 gap-2 text-heading text-sm text-grey-1`}
                  >
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
            <div className="hidden md:flex h-full justify-center items-center">
              <a href={"https://app.derion.io"} target="_blank">
              <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] min-w-[120px] rounded-lg text-heading text-xs">
                <div className="border-gradient p-[2px] h-[48px] w-full rounded-lg">
                  <div className="group relative h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                    LAUNCH DEMO
                    {/*
                    <div className="border-light absolute top-full text-normal !text-black left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded border bg-white py-[6px] px-4 text-sm font-semibold opacity-0 group-hover:opacity-100">
                      <span className="border-light absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm border-t border-l bg-white"></span>
                      COMING SOON
                    </div>
                    */}
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <Popover.Button
                className={`bg-background rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
              >
                <MenuIcon
                  className="h-8 w-8"
                  aria-hidden="true"
                  onClick={handleOpen}
                />
              </Popover.Button>
            </div>
            {show && (
              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className={`absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
                >
                  <div
                    className={`rounded-lg shadow-md bg-[#0E0C15] ring-1 ring-black ring-opacity-5 overflow-hidden`}
                  >
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <DerivableLogoMini />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button
                          className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                        >
                          <span className="sr-only">Close main menu</span>
                          <XIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                            onClick={handleClose}
                          />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.target}
                          onClick={() => {
                            if (item.href.startsWith('#')) {
                              props.setUrl(item.href);
                            }
                            handleClose();
                          }}
                          className="block px-3 py-2 text-heading text-2xl text-grey-1 border-l-[3px] border-transparent button-link-mobile"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="flex h-full justify-start pb-[1rem]">
                      <a href={"https://app.derion.io"} target="_blank">
                      <div className="box-border flex flex-row justify-center items-center px-3 py-2 gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                        <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                          <div className="group relative h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                            LAUNCH DEMO
                            {/*
                            <div className="border-light text-normal text-base !text-black text-body-color absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded border bg-white py-[6px] px-4 text-sm font-semibold opacity-0 group-hover:opacity-100">
                              <span className="border-light absolute -left-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-r-sm border-b border-l bg-white"></span>
                              COMING SOON
                            </div>
                             */}
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            )}
          </nav>
        </div>
      </Popover>
    </>
  );
};

export default Menu
