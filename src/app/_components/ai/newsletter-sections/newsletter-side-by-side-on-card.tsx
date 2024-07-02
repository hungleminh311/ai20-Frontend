import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_HEADING = "Get notified when we’re launching.";
const DEFAULT_BUTTON_TEXT = "Notify me";
const DEFAULT_PRIVACY_POLICY_TEXT = "We care about your data. Read our";

export default function NewsletterSideBySideOnCard({theme, variables}: AiComponentProps) {
  return (
    <div
      className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} py-16 sm:py-24`}
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`relative isolate flex flex-col gap-10 overflow-hidden ${
            theme === "dark" ? "bg-black/50" : "bg-gray-100"
          } px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32`}
        >
          <h2
            className={`mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } sm:text-4xl`}
          >
            {variables?.["heading"] || DEFAULT_HEADING}
          </h2>
          <form className="w-full max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                {variables?.["emailLabel"] || "Email address"}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={
                  theme === "dark"
                    ? "min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    : "min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                }
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                {variables?.["buttonText"] || DEFAULT_BUTTON_TEXT}
              </button>
            </div>
            <p
              className={`mt-4 text-sm leading-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {variables?.["privacyPolicyText"] || DEFAULT_PRIVACY_POLICY_TEXT}{" "}
              <a
                href="#"
                className={`font-semibold ${
                  theme === "dark"
                    ? "text-primary-500 hover:text-primary-400"
                    : "text-primary-600 hover:text-primary-500"
                }`}
              >
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <ThemeOverlay theme={theme} />
        </div>
      </div>
    </div>
  );
}
