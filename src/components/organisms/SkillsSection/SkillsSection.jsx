import { Text } from "../../atoms/Text/Text";
import { SkillCard } from "../../molecules/SkillCard/SkillCard";

export const SkillsSection = ({ skills }) => {
  return (
    <section
      id="skills"
      className="w-full"
    >
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <Text variant="h2" color="primary" align="center">
            Skills
          </Text>

          <Text
            variant="body"
            color="secondary"
            align="center"
            className="w-full max-w-[782px]"
          >
            I specialize in UI/UX Design, with a focus on solving problems through
            thoughtful user experience, research, and design innovation.
          </Text>
        </div>

        <div className="flex flex-col items-center gap-8 self-stretch w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};