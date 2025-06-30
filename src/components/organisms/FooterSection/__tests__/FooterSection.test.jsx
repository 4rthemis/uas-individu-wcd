import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FooterSection } from '../FooterSection';

// Mock data
const mockSocialLinks = [
  {
    id: "dribbble",
    name: "Dribbble",
    icon: "/image/dribbble.png",
    iconClass: "w-[27px] h-[29px] top-[3px] left-[3px]",
    url: "https://dribbble.com/syahruluix",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/image/Instagram.png",
    iconClass: "w-[30px] h-[30px] top-px left-px",
    url: "https://www.instagram.com/syahrul.uix/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "/image/LinkedIn.png",
    iconClass: "w-[30px] h-[29px] top-px left-px",
    url: "https://www.linkedin.com/in/syahrul-awaludin/",
  },
];

// Mock window.open
const mockWindowOpen = vi.fn();

describe('FooterSection', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    
    // Mock window.open
    Object.defineProperty(window, 'open', {
      value: mockWindowOpen,
      writable: true,
    });
  });

  it('renders footer section with correct content', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    // Check if main heading is rendered
    expect(screen.getByText('Ready to Craft your Big Ideas?')).toBeInTheDocument();
    
    // Check if subtitle is rendered
    expect(screen.getByText("Let's bring your design vision to life.")).toBeInTheDocument();
    
    // Check if copyright text is rendered
    expect(screen.getByText('Copyright © 2025 syahrul.uix - Made with ❤')).toBeInTheDocument();
  });

  it('renders Get in Touch button with correct attributes', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    const getInTouchButton = screen.getByTestId('get-in-touch-button');
    
    // Check if button exists
    expect(getInTouchButton).toBeInTheDocument();
    
    // Check if button has correct text
    expect(getInTouchButton).toHaveTextContent('Get in Touch!');
    
    // Check if button has correct styling classes
    expect(getInTouchButton).toHaveClass('bg-[#3d46c9]');
    expect(getInTouchButton).toHaveClass('rounded-[999px]');
    expect(getInTouchButton).toHaveClass('text-white');
  });

  it('opens email client when Get in Touch button is clicked', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    const getInTouchButton = screen.getByTestId('get-in-touch-button');
    
    // Click the button
    fireEvent.click(getInTouchButton);
    
    // Check if window.open was called with correct email URL
    expect(mockWindowOpen).toHaveBeenCalledTimes(1);
    expect(mockWindowOpen).toHaveBeenCalledWith('mailto:syahrul.uix@gmail.com', '_blank');
  });

  it('renders social links correctly', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    // Check if all social links are rendered
    mockSocialLinks.forEach((link) => {
      const socialLink = screen.getByLabelText(link.name);
      expect(socialLink).toBeInTheDocument();
      expect(socialLink).toHaveAttribute('href', link.url);
      expect(socialLink).toHaveAttribute('target', '_blank');
      expect(socialLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('has correct accessibility attributes', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    const getInTouchButton = screen.getByTestId('get-in-touch-button');
    
    // Check if button is accessible
    expect(getInTouchButton).toBeVisible();
    expect(getInTouchButton).not.toBeDisabled();
    
    // Check if social links have proper aria-labels
    mockSocialLinks.forEach((link) => {
      const socialLink = screen.getByLabelText(link.name);
      expect(socialLink).toHaveAttribute('aria-label', link.name);
    });
  });

  it('handles empty social links array', () => {
    render(<FooterSection socialLinks={[]} />);
    
    // Should still render the main content
    expect(screen.getByText('Ready to Craft your Big Ideas?')).toBeInTheDocument();
    expect(screen.getByTestId('get-in-touch-button')).toBeInTheDocument();
    
    // Social links container should be empty
    const socialLinksContainer = screen.getByTestId('get-in-touch-button').parentElement?.parentElement?.querySelector('.max-w-\\[216px\\]');
    if (socialLinksContainer) {
      expect(socialLinksContainer.children).toHaveLength(0);
    }
  });

  it('button has hover effects applied via CSS classes', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    const getInTouchButton = screen.getByTestId('get-in-touch-button');
    
    // Check if hover classes are present
    expect(getInTouchButton).toHaveClass('hover:bg-[#3d46c9]/90');
    expect(getInTouchButton).toHaveClass('transition-colors');
  });

  it('renders message icon in the button', () => {
    render(<FooterSection socialLinks={mockSocialLinks} />);
    
    const messageIcon = screen.getByAltText('Message icon');
    
    expect(messageIcon).toBeInTheDocument();
    expect(messageIcon).toHaveAttribute('src', '/image/sms.png');
  });
});