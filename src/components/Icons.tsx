import React from 'react';

interface IconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  fill?: string;
  stroke?: string;
}

// Arrow Up Right Icon (External Link)
export const ArrowUpRightIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Email Icon
export const EmailIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke={stroke}
      strokeWidth="2"
    />
    <polyline points="22,6 12,13 2,6" stroke={stroke} strokeWidth="2" />
  </svg>
);

// Twitter/X Icon
export const TwitterIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  fill = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill={fill}
    />
  </svg>
);

// Dribbble Icon
export const DribbbleIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="2" />
    <path
      d="M8.56 2.75C4.37 6.03 2 10.83 2 16.15C2 17.38 2.18 18.58 2.5 19.72C4.08 16.65 8.75 13.5 15.97 13.5C18.69 13.5 21.02 14.07 22.5 14.9C21.95 11.13 19.58 7.93 16.19 6.15C15.17 8.45 13.14 10.06 10.75 10.06C9.04 10.06 7.5 9.15 6.44 7.68C7.27 5.02 8.5 3.5 8.56 2.75Z"
      stroke={stroke}
      strokeWidth="2"
    />
  </svg>
);

// LinkedIn Icon
export const LinkedInIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V9H14V11A6 6 0 0 1 16 8Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="9"
      width="4"
      height="12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="4"
      cy="4"
      r="2"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Peerlist Icon (Sun/Star icon)
export const PeerlistIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke={stroke} strokeWidth="2" />
    <path
      d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
      stroke={stroke}
      strokeWidth="2"
    />
  </svg>
);

// Checkmark Icon
export const CheckmarkIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  fill = 'currentColor',
}) => (
  <svg
    className={className}
    fill={fill}
    viewBox="0 0 20 20"
    width={width}
    height={height}
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// Document Icon
export const DocumentIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="12"
      rx="2"
      stroke={stroke}
      strokeWidth="2"
    />
    <path
      d="M7 8h6M7 12h4"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Refresh Icon
export const RefreshIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M3 12A9 9 0 0 1 12 3C16.97 3 21 7.03 21 12S16.97 21 12 21"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L7 8M3 12L7 16"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// File Document Icon
export const FileDocumentIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z"
      stroke={stroke}
      strokeWidth="2"
    />
  </svg>
);

// Layers Icon
export const LayersIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <polygon
      points="12,2 22,8.5 12,15 2,8.5"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="2,17 12,23.5 22,17"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="2,12 12,18.5 22,12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Palette Icon
export const PaletteIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="13.5" cy="6.5" r=".5" stroke={stroke} strokeWidth="2" />
    <circle cx="17.5" cy="10.5" r=".5" stroke={stroke} strokeWidth="2" />
    <circle cx="8.5" cy="7.5" r=".5" stroke={stroke} strokeWidth="2" />
    <circle cx="6.5" cy="12.5" r=".5" stroke={stroke} strokeWidth="2" />
    <path
      d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22C13.6 22 15 20.6 15 19S13.6 16 12 16H8.5C7.1 16 6 14.9 6 13.5S7.1 11 8.5 11H12C17.5 11 22 6.5 22 12S17.5 2 12 2Z"
      stroke={stroke}
      strokeWidth="2"
    />
  </svg>
);

// Back Arrow Icon
export const BackArrowIcon: React.FC<IconProps> = ({
  width = '20',
  height = '20',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19 12H5M12 19L5 12L12 5"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Hamburger Menu Icon
export const HamburgerIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// Close/X Icon
export const CloseIcon: React.FC<IconProps> = ({
  width = '24',
  height = '24',
  className = '',
  stroke = 'currentColor',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    stroke={stroke}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default {
  ArrowUpRightIcon,
  EmailIcon,
  TwitterIcon,
  DribbbleIcon,
  LinkedInIcon,
  PeerlistIcon,
  CheckmarkIcon,
  DocumentIcon,
  RefreshIcon,
  FileDocumentIcon,
  LayersIcon,
  PaletteIcon,
  BackArrowIcon,
  HamburgerIcon,
  CloseIcon,
};
