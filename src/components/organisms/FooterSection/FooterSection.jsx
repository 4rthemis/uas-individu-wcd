import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";

export const FooterSection = ({ socialLinks }) => {
  const handleGetInTouch = () => {
    window.open("mailto:syahrul.uix@gmail.com", "_blank");
  };

  return (
    <section id="footer" className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-[120px]">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col items-center gap-4 sm:gap-6"
            >
              <Text variant="h2" color="primary" align="center">
                Ready to Craft your Big Ideas?
              </Text>

              <Text
                variant="body"
                color="secondary"
                align="center"
                className="text-lg sm:text-xl md:text-2xl"
              >
                Let&#39;s bring your design vision to life.
              </Text>
            </div>

            <Button
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              onClick={handleGetInTouch}
              data-testid="get-in-touch-button"
              className="flex w-full max-w-[200px] h-12 sm:h-14 items-center justify-center gap-2 px-3 py-2 bg-[#3d46c9] rounded-[999px] text-white hover:bg-[#3d46c9]/90 transition-colors"
            >
              <Icon
                src="/image/sms.png"
                alt="Message icon"
                size="md"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="w-fit text-sm sm:text-base font-['Plus_Jakarta_Sans',Helvetica] font-normal text-center tracking-[0] leading-normal">
                Get in Touch!
              </span>
            </Button>
          </div>

          {/* Social Links */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex items-center justify-center gap-4 w-full max-w-[216px]"
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`relative cursor-pointer hover:scale-110 transition-transform ${
                  index === 3 ? "w-8 h-[30px]" : "w-8 h-8"
                }`}
              >
                {index === 3 ? (
                  <div
                    className="relative w-[30px] h-[29px] top-px left-px bg-[url(/linkedin.svg)] bg-[100%_100%]"
                    role="img"
                  />
                ) : (
                  <Icon
                    src={link.icon}
                    alt={link.name}
                    className={`absolute ${link.iconClass}`}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Separator + Copyright */}
          <div className="flex flex-col items-center gap-4 sm:gap-[25px] w-full mt-8">
            <Separator className="w-full h-px" />
            <Text
              variant="body"
              className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-neutral-600 text-sm sm:text-lg md:text-xl text-center"
            >
              Copyright © 2025 syahrul.uix - Made with ❤
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};
