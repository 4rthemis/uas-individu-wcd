import { cn } from '../../../lib/utils';

const variantStyles = {
  h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-normal leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[81px]',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.2] sm:leading-[52.8px]',
  h3: 'text-lg sm:text-xl md:text-[length:var(--small-bold-font-size)] font-[number:var(--small-bold-font-weight)] leading-[var(--small-bold-line-height)]',
  h4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] sm:leading-[1.3] md:leading-[54px]',
  body: 'text-base sm:text-lg md:text-xl leading-[1.5] sm:leading-[30px]',
  caption: 'text-sm sm:text-base leading-6',
  small: 'text-xs sm:text-sm leading-[1.5] sm:leading-[21px]'
};

const colorStyles = {
  primary: 'text-[#242528]',
  secondary: 'text-[#808690]',
  accent: 'text-[#525ceb]',
  muted: 'text-[#dbdbdb]',
  white: 'text-white'
};

const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

export const Text = ({
  children,
  variant = 'body',
  color = 'primary',
  align = 'left',
  className
}) => {
  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component
      className={cn(
        "[font-family:'Plus_Jakarta_Sans',Helvetica]",
        variantStyles[variant],
        colorStyles[color],
        alignStyles[align],
        className
      )}
    >
      {children}
    </Component>
  );
};