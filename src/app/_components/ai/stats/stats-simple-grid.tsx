import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

const DEFAULT_TITLE = "Trusted by creators worldwide";
const DEFAULT_DESCRIPTION = "Lorem ipsum dolor sit amet consect adipisicing possimus.";

export default function StatsSimpleGrid({ theme, variables }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2
                className={`text-3xl font-bold tracking-tight ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } sm:text-4xl`}
              >
                {variables?.["title"] || DEFAULT_TITLE}
              </h2>
              <p
                className={`mt-4 text-lg leading-8 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {variables?.["description"] || DEFAULT_DESCRIPTION}
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt
                    className={`text-sm font-semibold leading-6 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {stat.name}
                  </dt>
                  <dd
                    className={`order-first text-3xl font-semibold tracking-tight ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
