import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Group_39504 from "./Group 39504.png";
import Image from "next/image";

const DEFAULT_TITLE = "Data to enrich your online business";
const DEFAULT_SUBTITLE =
  "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.";

export default function HeroSimpleCentered({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <>
      {theme === "neo-brutal" ? (
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 border-2 border-gray-900 hover:opacity-80 shadow-neo-brutal">
                    Announcing our next round of funding.{" "}
                    <a
                      href="#"
                      className="whitespace-nowrap font-semibold text-primary-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                  {variables?.["title"] || DEFAULT_TITLE}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {variables?.["subtitle"] || DEFAULT_SUBTITLE}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className={`rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white ${
                      theme === "neo-brutal"
                        ? "border-2 border-gray-900 shadow-neo-brutal"
                        : "shadow-sm"
                    } hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600`}
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex items-center justify-center">
              <Image src={Group_39504} alt="" unoptimized />
            </div>
          </div>
        </div>
      ) : (
        <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
          <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                  className={`relative rounded-full px-3 py-1 text-sm leading-6 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } ring-1 ${
                    theme === "dark"
                      ? "ring-gray-400/10"
                      : "ring-gray-900/10 hover:ring-gray-900/20"
                  }`}
                >
                  Announcing our next round of funding.{" "}
                  <a
                    href="#"
                    className={`font-semibold ${theme === "dark" ? "text-primary-400" : "text-primary-600"}`}
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1
                  className={`text-4xl font-bold tracking-tight ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  } sm:text-6xl`}
                >
                  {variables?.["title"] || DEFAULT_TITLE}
                </h1>
                <p
                  className={`mt-6 text-lg leading-8 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {variables?.["subtitle"] || DEFAULT_SUBTITLE}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className={`text-sm font-semibold leading-6 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <ThemeOverlay theme={theme} />
          </div>
        </div>
      )}
    </>
  );
}
