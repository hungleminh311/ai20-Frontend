import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_TITLE = "Data to enrich your online business";
const DEFAULT_SUBTITLE = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
  "                  occaecat fugiat aliqua.";
const DEFAULT_BUTTON_TEXT = "Get started"
const DEFAULT_LINK_TEXT = "Learn more"

export default function HeroSplitWithImage({ theme, variables }: AiComponentProps) {
  return (
    <div
      className={`relative isolate ${
        theme === "dark"
          ? "bg-gray-900"
          : theme === "neo-brutal"
            ? "bg-primary-600/20"
            : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {theme !== "neo-brutal" && (
              <img
                className="h-11"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            )}
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div
                className={`relative rounded-full px-3 py-1 text-sm leading-6 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } ${
                  theme === "dark"
                    ? "ring-1 ring-gray-400/10 hover:ring-gray-400/20"
                    : theme === "neo-brutal"
                      ? "border-2 border-gray-900 shadow-neo-brutal"
                      : "ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                }`}
              >
                Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                <a
                  href="#"
                  className={`whitespace-nowrap font-semibold ${
                    theme === "dark" ? "text-primary-400" : "text-primary-600"
                  }`}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1
              className={`mt-24 text-4xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:mt-10 sm:text-6xl`}
            >
              {variables?.["title"] || DEFAULT_TITLE}
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
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
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
