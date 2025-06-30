import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Text } from "../../atoms/Text/Text";
import { Image } from "../../atoms/Image/Image";

export const AboutSection = ({ personalInfo }) => {
  return (
    <section
      id="about"
      className="w-full bg-[#eff0ff] rounded-[24px] sm:rounded-[48px] overflow-hidden relative"
    >
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-6 sm:gap-8 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
          <Text variant="h2" color="primary" align="center">
            About
          </Text>

          <Text
            variant="body"
            color="primary"
            align="center"
            className="max-w-[782px]"
          >
            <br />
            I&apos;m a{" "}
            <span className="font-semibold text-[#525ceb]">
              UI/UX Designer
            </span>{" "}
            {personalInfo.aboutDescription}
          </Text>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4 mb-8 sm:mb-12 md:mb-16">
        <Image
          src="/image/about.png"
          alt="Profile illustration"
          className="w-[250px] h-[270px] sm:w-[300px] sm:h-[324px] md:w-[350px] md:h-[378px] lg:w-[408px] lg:h-[441.27px]"
        />
      </div>

      <Image
        src="/image/bg-pattern.png"
        alt="Background pattern"
        className="absolute w-full h-full top-0 left-0 -z-2"
        objectFit="cover"
      />
    </section>
  );
};