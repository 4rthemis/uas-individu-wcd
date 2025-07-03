import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Text } from "../../atoms/Text/Text";
import { Image } from "../../atoms/Image/Image";
import { Icon } from "../../atoms/Icon/Icon";
import { Navigation } from "../../molecules/Navigation/Navigation";

export const HeroSection = ({ personalInfo, navigationItems }) => {


  return (
    <section
      id="home"
      data-section-id="home"
      className="w-full pt-24 md:pt-32 pb-8 md:pb-8 min-h-screen flex items-center"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-[120px] w-full">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col w-full items-center gap-8 md:gap-16 relative flex-[0_0_auto]">
            <div>
              <Navigation items={navigationItems} />
            </div>

            {/* Greeting Section */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col sm:flex-row w-full max-w-[782px] items-center justify-between gap-4 sm:gap-8 relative flex-[0_0_auto]"
            >
              {/* Left Ornaments */}
              <div className="hidden sm:block relative w-[115px] h-[115px] rotate-180">
                <Icon
                  src="/image/ornament.png"
                  alt="Ornament"
                  className="absolute w-5 h-[21px] top-[94px] left-0 -rotate-180"
                />
                <Icon
                  src="/image/ornament.png"
                  alt="Ornament"
                  className="absolute w-[50px] h-[51px] top-0 left-[65px] -rotate-180"
                />
                <Icon
                  src="/image/ornament.png"
                  alt="Ornament"
                  className="absolute w-[27px] h-[29px] top-[23px] left-0 -rotate-180"
                />
              </div>

              {/* Center Profile & Greeting */}
              <div className="inline-flex flex-col items-center sm:items-start justify-center gap-4 sm:gap-8 relative flex-[0_0_auto]">
                <div>
                  <Image
                    src={personalInfo.profileImage}
                    alt="Profile"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>

                <div>
                  <Card className="bg-[#eff0ff] rounded-[0px_12px_12px_12px] border-none">
                    <CardContent className="px-4 sm:px-5 py-3 sm:py-4">
                      <Text
                        variant="body"
                        color="primary"
                        className="text-lg sm:text-2xl"
                      >
                        Hi! 👋 I'm {personalInfo.name}
                      </Text>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Ornament */}
              <div>
                <Icon
                  src="/image/ornament-2.png"
                  alt="Frame"
                  className="hidden sm:block w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-8 sm:gap-12 relative self-stretch w-full flex-[0_0_auto]">
              {/* Main Title */}
              <div data-aos="fade-up" data-aos-duration="1000">
                <Text
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  variant="h1"
                  color="primary"
                  align="center"
                  className="w-full"
                >
                  <span className="font-semibold">
                    {personalInfo.title}
                    <br />
                    Based in
                  </span>
                  <span className="font-bold"> {personalInfo.location}</span>
                </Text>
              </div>

              {/* Description */}
              <div data-aos="fade-up" data-aos-duration="1000">
                <Text
                  variant="body"
                  color="secondary"
                  align="center"
                  className="w-full max-w-[782px] text-sm sm:text-base"
                >
                  {personalInfo.description}
                </Text>
              </div>

              {/* CTA Button */}
              <div>
                <Button
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  asChild
                  className="w-32 sm:w-40 h-10 sm:h-12 bg-[#3d46c9] rounded-[999px] text-sm sm:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white hover:bg-[#3d46c9]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a
                    href="https://drive.google.com/file/d/1VpQ4Gbl3BoBldT7QHXudLIJ4pFzxZqqw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
