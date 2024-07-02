import { AiComponentProps } from "../base/ai-component-props";

const DEFAULT_TITLE = "Deploy to the cloud with confidence";
const DEFAULT_SUBTITLE = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
  "                  occaecat fugiat aliqua.";
const DEFAULT_BUTTON_TEXT = "Get started"
const DEFAULT_LINK_TEXT = "Learn more"

export default function HeroWithAngledImageOnRight({
  theme, variables
}: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className={`absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform ${
                theme === "dark" ? "fill-gray-900" : "fill-white"
              } lg:block`}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div
                    className={`relative rounded-full px-3 py-1 text-sm leading-6 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    } ${
                      theme === "dark"
                        ? "ring-1 ring-gray-400/20"
                        : theme === "neo-brutal" ? ""
                          : "ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    }
                    ${theme === "neo-brutal" ? "shadow-neo-brutal border-2 border-b-4 border-gray-900" : ""}
                    `}
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
                  className={`text-4xl font-bold tracking-tight ${
                    theme === "dark" ? "text-white" : "text-gray-900"
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
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
