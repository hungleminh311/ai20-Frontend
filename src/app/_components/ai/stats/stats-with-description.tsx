import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

const DEFAULT_MISSION_TITLE = "Our mission";
const DEFAULT_MISSION_DESCRIPTION = `
  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
  scelerisque eget. Eleifend egestas fringilla sapien.
`;

const DEFAULT_MISSION_SUBTITLE = `
  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
  Id dolor praesent donec est. Odio penatibus risus viverra
  tellus varius sit neque erat velit. Faucibus commodo massa
  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
  mauris semper sed amet vitae sed turpis id.
`;

export default function StatsWithDescription({ theme,variables }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              {variables?.["missionTitle"] || DEFAULT_MISSION_TITLE}
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p
                  className={`text-xl leading-8 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {variables?.["missionDescription"] || DEFAULT_MISSION_DESCRIPTION}
                </p>
                <p
                  className={`mt-10 max-w-xl text-base leading-7 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {variables?.["missionSubtitle"] || DEFAULT_MISSION_SUBTITLE}
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt
                        className={`text-base leading-7 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {stat.label}
                      </dt>
                      <dd
                        className={`text-5xl font-semibold tracking-tight ${
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
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
