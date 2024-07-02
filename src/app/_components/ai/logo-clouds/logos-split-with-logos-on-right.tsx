import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_HEADING = "Trusted by the most innovative teams";
const DEFAULT_DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.";
const DEFAULT_BUTTON_TEXT = "Create account";
const DEFAULT_LINK_TEXT = "Contact us";

export default function LogosSplitWithLogosOnRight({ theme, variables }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2
                className={`text-3xl font-bold tracking-tight ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {variables?.["heading"] || DEFAULT_HEADING}
              </h2>
              <p
                className={`mt-6 text-lg leading-8 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {variables?.["description"] || DEFAULT_DESCRIPTION}
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  {variables?.["buttonText"] || DEFAULT_BUTTON_TEXT}
                </a>
                <a
                  href="#"
                  className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {variables?.["linkText"] || DEFAULT_LINK_TEXT} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {theme === "dark" ? (
              <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                  alt="Tuple"
                  width={105}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                  alt="Reform"
                  width={104}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
                  alt="SavvyCal"
                  width={140}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/laravel-logo-white.svg"
                  alt="Laravel"
                  width={136}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
                  alt="Statamic"
                  width={147}
                  height={48}
                />
              </div>
            ) : (
              <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={105}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={104}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={140}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                  alt="Laravel"
                  width={136}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={147}
                  height={48}
                />
              </div>
            )}
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
