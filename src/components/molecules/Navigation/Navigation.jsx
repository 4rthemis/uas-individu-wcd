import { Icon } from "../../atoms/Icon/Icon";
import { useNavigation } from "../../../hooks/useNavigation";
import { useResponsive } from "../../../hooks/useResponsive";
import { useScrollDirection } from "../../../hooks/useScrollDirection";

export const Navigation = ({ items = [], className = "" }) => {
  const {
    isMobileMenuOpen,
    activeSection,
    toggleMobileMenu,
    navigateToSection,
  } = useNavigation();
  const { isMobile } = useResponsive();
  const showNav = useScrollDirection();

  return (
    <nav
      className={`
        fixed top-0 left-1/2 -translate-x-1/2 z-[999]
        w-full max-w-[1200px] mx-auto flex items-center justify-between
        px-4 sm:px-8 md:px-14 py-3
        bg-[#ffffffcc] border-b-2 border-[#e5e6e8] rounded-full
        backdrop-blur-[6.9px] backdrop-brightness-100
        transition-transform duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${className}
      `}
    >
      {/* Logo */}
      <Icon
        src="/image/logo.png"
        alt="Logo"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:inline-flex items-start gap-[60px]">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateToSection(item.id)}
            className={`
              relative font-medium text-xl whitespace-nowrap 
              transition-all duration-300 ease-in-out
              hover:text-[#3d46c9] hover:scale-105
              ${
                activeSection === item.id
                  ? "text-[#3d46c9] scale-105"
                  : "text-[#242528]"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && isMobile && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-2 gap-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigateToSection(item.id);
                  toggleMobileMenu();
                }}
                className={`
                  text-left p-3 rounded-lg transition-all duration-200 text-sm
                  hover:bg-gray-100 hover:scale-[1.02]
                  ${
                    activeSection === item.id
                      ? "text-[#3d46c9] bg-[#eff0ff] font-medium"
                      : "text-[#242528]"
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;