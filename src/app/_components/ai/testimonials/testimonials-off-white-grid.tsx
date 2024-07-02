import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
    author: {
      name: "Lindsay Walton",
      handle: "lindsaywalton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
    author: {
      name: "Tom Cook",
      handle: "tomcook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    author: {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
    author: {
      name: "Brenna Goyette",
      handle: "brennagoyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    },
  },
  // More testimonials...
];

export default function TestimonialsOffWhiteGrid({ theme }: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2
              className={`text-lg font-semibold leading-8 tracking-tight ${
                theme === "dark" ? "text-primary-500" : "text-primary-600"
              }`}
            >
              Testimonials
            </h2>
            <p
              className={`mt-2 text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author.handle}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure
                    className={`rounded-2xl ${
                      theme === "dark" ? "bg-black/50" : "bg-gray-50"
                    } p-8 text-sm leading-6`}
                  >
                    <blockquote
                      className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={testimonial.author.imageUrl}
                        alt=""
                      />
                      <div>
                        <div
                          className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                        >
                          {testimonial.author.name}
                        </div>
                        <div
                          className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {`@${testimonial.author.handle}`}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
