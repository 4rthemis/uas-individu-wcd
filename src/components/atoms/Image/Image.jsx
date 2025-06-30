import { cn } from "../../../lib/utils";

export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = "cover",
  rounded = false,
  loading = "lazy",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={cn(
        "relative",
        objectFit === "cover" && "object-cover",
        objectFit === "contain" && "object-contain",
        objectFit === "fill" && "object-fill",
        objectFit === "none" && "object-none",
        objectFit === "scale-down" && "object-scale-down",
        rounded && "rounded-full",
        className
      )}
    />
  );
};
