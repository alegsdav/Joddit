import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

// Simple icon components with retro-futuristic aesthetic
export const SearchIcon = ({ size = 16, color = 'rgba(0,0,0,0.5)' }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Circle cx="7" cy="7" r="5" stroke={color} strokeWidth="1.5" fill="none" />
    <Path d="M11 11l4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export const PinIcon = ({ size = 14, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7 0L7.5 5.5L12 6L7 11L2 6L6.5 5.5L7 0Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

export const FolderIcon = ({ size = 12, color = 'rgba(0,0,0,0.6)' }) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <Path
      d="M2 2H5L6 4H10V10H2V2Z"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
  </Svg>
);

export const UserIcon = ({ size = 18, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <Circle cx="9" cy="6" r="3" stroke={color} strokeWidth="1.5" fill="none" />
    <Path
      d="M3 15C3 12 6 11 9 11C12 11 15 12 15 15"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const MicrophoneIcon = ({ size = 20, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M10 1C8.9 1 8 1.9 8 3V9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9V3C12 1.9 11.1 1 10 1Z"
      fill={color}
    />
    <Path
      d="M15 9C15 12.3 12.3 15 9 15M9 15V18M9 15C5.7 15 3 12.3 3 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const PlusIcon = ({ size = 18, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <Path
      d="M9 1V17M1 9H17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const ShareIcon = ({ size = 20, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Circle cx="5" cy="10" r="2" stroke={color} strokeWidth="1.5" fill="none" />
    <Circle cx="15" cy="6" r="2" stroke={color} strokeWidth="1.5" fill="none" />
    <Circle cx="15" cy="14" r="2" stroke={color} strokeWidth="1.5" fill="none" />
    <Path
      d="M7 10L13 7M13 13L7 10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const TrashIcon = ({ size = 20, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M4 6H16M6 6V4C6 3.4 6.4 3 7 3H13C13.6 3 14 3.4 14 4V6M6 9V15C6 15.6 6.4 16 7 16H13C13.6 16 14 15.6 14 15V9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

