import React from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";

export const Ticker = ({ items = [] }) => {
  return (
    <div className="w-full overflow-x-hidden bg-[linear-gradient(356deg,_#242528_0.28%,_#80838E_241.04%)] py-6 sm:py-8 px-4 relative my-4 sm:my-6 md:my-8 lg:my-20">
      <div className="relative w-full">
        <div className="animate-scroll flex w-max gap-8 sm:gap-12 md:gap-16">
          {items.concat(items).map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-5 min-w-fit"
            >
              <Icon
                src="/image/ornament.png"
                alt="Ornament"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <Text
                variant="body"
                color="white"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap"
              >
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};