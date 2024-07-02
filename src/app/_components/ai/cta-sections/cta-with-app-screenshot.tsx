import { AiComponentProps } from "../base/ai-component-props";

const DEFAULT_TITLE_PART1 = "Boost your productivity.";
const DEFAULT_TITLE_PART2 = "Start using our app today.";
const DEFAULT_DESCRIPTION = "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.";
const DEFAULT_LINK_TEXT1 = "Get started";
const DEFAULT_LINK_TEXT2 = "Learn more";

export default function CtaWithAppScreenshot({ theme, variables }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-700" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className={`relative isolate overflow-hidden ${
            theme === "gradient"
              ? "bg-gradient-to-br from-secondary to-[#9089fc40]"
              : theme === "dark"
                ? "bg-gray-900"
                : "bg-gray-100"
          } px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}
        >
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              {variables?.["titlePart1"] || DEFAULT_TITLE_PART1}
              <br />
              {variables?.["titlePart2"] || DEFAULT_TITLE_PART2}
            </h2>
            <p
              className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {variables?.["description"] || DEFAULT_DESCRIPTION}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                {variables?.["linkText1"] || DEFAULT_LINK_TEXT1}
              </a>
              <a
                href="#"
                className={`text-sm font-semibold leading-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {variables?.["linkText1"] || DEFAULT_LINK_TEXT2} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
