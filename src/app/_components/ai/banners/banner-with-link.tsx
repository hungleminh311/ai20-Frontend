import { XMarkIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_EVENT_DESCRIPTION = "GeneriCon 2024 is on June 7 – 9 in Denver. ";
const DEFAULT_LINK_TEXT = "Get your ticket";

export default function BannerWithLink({ theme, variables }: AiComponentProps) {
  return (
    <div
      className={`relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${
        theme === "neo-brutal" ? "bg-primary-200 border-2 border-b-4 border-gray-900 mx-10 rounded-t-[14px]" : ""
      }`}
    >
      <p className="text-sm leading-6 text-gray-900">
        {variables?.["eventDescription"] || DEFAULT_EVENT_DESCRIPTION}{" "}
        <a href="#" className="whitespace-nowrap font-semibold">
          {variables?.["linkText"] || DEFAULT_LINK_TEXT}&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
