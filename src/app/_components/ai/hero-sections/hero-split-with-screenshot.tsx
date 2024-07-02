import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_TITLE = "Deploy to the cloud with confidence";
const DEFAULT_SUBTITLE = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
  "                  occaecat fugiat aliqua.";
const DEFAULT_BUTTON_TEXT = "Get started"
const DEFAULT_LINK_TEXT = "Learn more"

export default function HeroSplitWithScreenshot({ theme, variables }: AiComponentProps) {
  return (
    <div
      className={`relative isolate overflow-hidden ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {theme !== "neo-brutal" && (
            <img
              className="h-11"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          )}
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span
                className={`${
                  theme === "dark"
                    ? "rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-primary-500/20"
                    : theme === "neo-brutal"
                      ? "rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 border-2 ring-inset border-gray-900 shadow-neo-brutal"
                      : "rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10"
                }`}
              >
                What{"'"}s new
              </span>
              <span
                className={`inline-flex items-center space-x-2 text-sm font-medium leading-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  className={`h-5 w-5 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
          <h1
            className={`mt-10 text-4xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } sm:text-6xl`}
          >
            {variables?.["title"] || DEFAULT_TITLE}
          </h1>
          <p
            className={`mt-6 text-lg leading-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            {variables?.["subtitle"] ?? DEFAULT_SUBTITLE}
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
        <div
          className={`mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32
          ${theme === "neo-brutal" ? "shadow-[-23px_25px_0px_-14px_rgba(0,0,0,3)]" : ""}
          `
          }>
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div
              className={`-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4
              ${theme === "neo-brutal" ? "" : "bg-gray-900/5 ring-1 ring-inset ring-gray-900/10"}
              `}>
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
