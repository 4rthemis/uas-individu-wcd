import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";

export const SkillCard = ({ skill, className }) => {
  return (
    <Card
      className={`flex flex-col w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] bg-[#fff7ea] rounded-xl shadow-[5px_4px_100px_#feb4331a] border-none hover:shadow-[5px_4px_120px_#feb43330] transition-shadow duration-300 ${className}`}
    >
      <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14">
        <Icon
          src={skill.icon}
          alt={`${skill.title} icon`}
          size="lg"
          className="mt-[-0.75px] ml-[-0.75px] w-8 h-8 sm:w-10 sm:h-10"
        />
        <Text variant="h3" color="primary" className="self-stretch">
          {skill.title}
        </Text>
        <Text variant="small" color="primary" className="flex-1">
          {skill.description}
        </Text>
      </CardContent>
    </Card>
  );
};
