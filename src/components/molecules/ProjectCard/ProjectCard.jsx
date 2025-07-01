import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Text } from "../../atoms/Text/Text";
import { Image } from "../../atoms/Image/Image";
import { Icon } from "../../atoms/Icon/Icon";

export const ProjectCard = ({ project, className }) => {
  return (
    <Card
      className={`group transition-colors duration-300 
        ${project.bgColor} 
        hover:bg-[#3d46c9]/90
        hover:text-white 
        p-4 sm:p-6 md:p-8 
        flex flex-col lg:flex-row items-center lg:items-start justify-between 
        gap-4 sm:gap-5 md:gap-6 
        rounded-2xl sm:rounded-3xl 
        border-none 
        w-full max-w-7xl mx-auto 
        overflow-hidden 
        ${className}
      `}
    >
      {/* Text Section */}
      <CardContent className="flex flex-col items-start gap-3 sm:gap-4 p-0 w-full lg:flex-[1]">
        <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 w-full">
            <Text
              variant="caption"
              className={`whitespace-nowrap transition-colors duration-300 group-hover:text-slate-200 ${project.categoryColor}`}
            >
              {project.category}
            </Text>
          </div>

          <Text
            variant="h4"
            className={`transition-colors duration-300 group-hover:text-white ${project.textColor}`}
          >
            {project.title}
          </Text>
        </div>

        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Icon
              src="/image/arrow.svg"
              alt="North east"
              size="xl"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:brightness-0 group-hover:invert transition duration-300"
            />
          </a>
        )}
      </CardContent>

      {/* Image */}
      <div className="w-full lg:flex-[2]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] xl:h-[360px] object-cover rounded-lg"
        />
      </div>
    </Card>
  );
};

export default ProjectCard;
