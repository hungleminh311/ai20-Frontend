import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_TITLE_PART1 = "Ready to dive in?";
const DEFAULT_TITLE_PART2 = "Start your free trial today.";
const DEFAULT_LINK_TEXT1 = "Get started";
const DEFAULT_LINK_TEXT2 = "Learn more";

export default function CtaSimpleJustified({ theme, variables }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } sm:text-4xl`}
          >
            {variables?.["titlePart1"] || DEFAULT_TITLE_PART1}
            <br />
            {variables?.["titlePart2"] || DEFAULT_TITLE_PART2}
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
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
              {variables?.["linkText2"] || DEFAULT_LINK_TEXT2} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
