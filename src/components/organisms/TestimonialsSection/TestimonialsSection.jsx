import { Text } from "../../atoms/Text/Text";
import { TestimonialCard } from "../../molecules/TestimonialCard/TestimonialCard";

export const TestimonialsSection = ({ testimonials }) => {
  return (
    <section
      id="testimonials"
      className="w-full py-8 sm:py-12 md:py-16"
    >
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-16 lg:px-[120px]">
          <Text variant="h2" color="primary" align="center">
            Testimonials
          </Text>
          <Text
            variant="body"
            color="secondary"
            align="center"
            className="max-w-[782px]"
          >
            Here's what people say about working with me. Real words from
            collaborators and clients.
          </Text>
        </div>

        {/* Marquee Animation with Pause on Hover */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;