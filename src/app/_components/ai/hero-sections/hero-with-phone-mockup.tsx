import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import Link from "next/link";

const DEFAULT_TITLE = "Deploy to the cloud with confidence";
const DEFAULT_SUBTITLE = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
  "                  occaecat fugiat aliqua.";
const DEFAULT_BUTTON_TEXT = "Get started"
const DEFAULT_LINK_TEXT = "Learn more"

export default function HeroWithPhoneMockup({ theme, variables }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate">
        {theme === "gradient" ? (
          <svg
            viewBox="0 0 1920 870"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 -z-10"
          >
            <g filter="url(#filter0_ii_617_9347)">
              <path d="M0 0H1920V521.07H0V0Z" fill="white" fillOpacity="0.2" />
              <path
                d="M0 620.218L45.8667 663.929C91.7333 707.641 183.467 795.064 274.773 837.186C366.293 879.109 457.173 875.93 548.693 855.068C640 834.206 731.733 795.66 823.04 763.671C914.56 731.483 1005.44 705.654 1096.96 692.342C1188.27 679.228 1280 678.434 1371.31 703.27C1462.83 728.106 1553.71 778.573 1645.23 799.435C1736.53 820.297 1828.27 811.555 1874.13 807.383L1920 803.011L1920 521.07H1874.13C1828.27 521.07 1736.53 521.07 1645.23 521.07C1553.71 521.07 1462.83 521.07 1371.31 521.07C1280 521.07 1188.27 521.07 1096.96 521.07C1005.44 521.07 914.56 521.07 823.04 521.07C731.733 521.07 640 521.07 548.693 521.07C457.173 521.07 366.293 521.07 274.773 521.07C183.467 521.07 91.7333 521.07 45.8667 521.07H0V620.218Z"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_617_9347"
                x="0"
                y="-22"
                width="1920"
                height="892"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-22" />
                <feGaussianBlur stdDeviation="57" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_617_9347"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-7" />
                <feGaussianBlur stdDeviation="32" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.501961 0 0 0 0 0.709804 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_617_9347"
                  result="effect2_innerShadow_617_9347"
                />
              </filter>
            </defs>
          </svg>
        ) : null}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div
                className={`relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ${
                  theme === "dark"
                    ? "ring-1 ring-gray-400/10 hover:ring-gray-400/20"
                    : theme === "neo-brutal"
                      ? "border-2 border-gray-900 shadow-neo-brutal"
                      : "ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                }`}
              >
                <span
                  className={`font-semibold ${theme === "dark" ? "text-primary-400" : "text-primary-600"}`}
                >
                  We’re hiring
                </span>
                <span
                  className={`h-4 w-px ${theme === "dark" ? "bg-gray-400" : "bg-gray-900/10"}`}
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className={`flex items-center gap-x-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  See open positions
                  <ChevronRightIcon
                    className={`-mr-2 h-5 w-5 ${theme === "dark" ? "text-gray-100" : "text-gray-400"}`}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <h1
              className={`mt-10 max-w-lg text-4xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-6xl`}
            >
              {variables?.["title"] || DEFAULT_TITLE}
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              {variables?.["subtitle"] || DEFAULT_SUBTITLE}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className={`rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                  theme === "neo-brutal" ? "border-2 border-black shadow-neo-brutal" : "shadow-sm"
                }`}
              >
                {variables?.["buttonText"] || DEFAULT_BUTTON_TEXT}
              </a>
              <a
                href="#"
                className={`text-sm font-semibold leading-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {variables?.["linkText"] || DEFAULT_LINK_TEXT} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <svg
              viewBox="0 0 366 729"
              role="img"
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width={316} height={684} rx={36} />
                </clipPath>
              </defs>
              <path
                fill="#4B5563"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              />
              <path
                fill="#343E4E"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
              <foreignObject
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              >
                <img
                  src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png"
                  alt=""
                />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
