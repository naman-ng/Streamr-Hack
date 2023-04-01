import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <header class="fixed w-full">
        <nav class="bg-fblack border-gray-200 py-2.5 dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-purple-600">
                Createx
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              <a
                href="/dashboard"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Launch App
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="text-white h-auto p-4 md:p-10 flex bg-fblack">
        <div className="w-full  md:mx-10 text-center ">
          <h1 className=" text-5xl md:text-6xl lg:text-7xl p-10 font-bold font-Poppins  text-white mt-5">
            Unleash Your Voice
          </h1>
          <h1 className=" text-5xl md:text-6xl lg:text-7xl p-10 font-bold font-Poppins  text-white">
            <br /> Join the <br />
            Decentralized Video Revolution
          </h1>
          <p className="p-4 text-xl py-12">
            Tired of censorship on mainstream video platforms? Our decentralized
            video platform gives you the freedom to express yourself without
            fear of being silenced. With uncensored channels, videos, and
            comments, you can unleash your voice and connect with like-minded
            individuals from around the world. Join the decentralized video
            revolution and take back control of your online presence. <br />
          </p>
        </div>
      </div>

      {/* <!-- Start block --> */}
      <section class="bg-fblack">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Row --> */}
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white">
                Problems We Solve
              </h2>

              {/* <!-- List --> */}
              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-white"
              >
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    You lose your wallet
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    You lose your keys
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    You pass away with no way to recover your funds
                  </span>
                </li>
              </ul>
              <p class="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - lets you set your
                assets to be distributed upon a set date.
              </p>
            </div>
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="https://img.freepik.com/free-vector/battery-runtime-abstract-concept-illustration_335657-1886.jpg?w=1060&t=st=1672029758~exp=1672030358~hmac=ae398376fc0fee54ca4c4f586919005a10b3b94b4b7fa30aeb14618238cec744"
              alt="dashboard feature image"
            />
          </div>
          {/* <!-- Row --> */}
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1672029758~exp=1672030358~hmac=6ef539ab2987e89d141f7e3569d80159e8052f0e9ef6ba30665e3171883e9a73"
              alt="feature image 2"
            />
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white">
                How It Works
              </h2>
              {/* <!-- List --> */}
              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-white"
              >
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    You Set Your Tokens And Beneficiary Wallet's.
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    Set A "Deadman's lock" To Execute
                  </span>
                </li>
                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    If There Is No Check In Renewal, Chainlink Automation Will
                    Execute The Transfers
                  </span>
                </li>

                <li class="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-white">
                    Knowledge management
                  </span>
                </li>
              </ul>
              <p class="font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
      <section class="bg-fblack dark:bg-gray-900">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <p class="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight md:text-3xl text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your assets.
            </p>
            <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-white">
              <div>
                <a
                  href="#"
                  class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Explore Legality Guide
                  <svg
                    class="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Visit the Trust Center
                  <svg
                    class="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold text-white">99.99% uptime</h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                For Createx, with zero maintenance downtime
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold text-white">600M+ Users</h3>
              <p class="font-light text-gray-400">
                Trusted by over 600 milion users around the world
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold text-white">100+ countries</h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                Have used Createx to create functional websites
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold text-white">5+ Million</h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                Transactions per day
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
      <section class="bg-fblack">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-xl font-medium md:text-2xl text-white">
                "Createx is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard."
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-white">
                <div class="pr-3 font-medium text-white">Micheal Gough</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* <!-- End block --> */}

      <Footer />
    </div>
  );
}
