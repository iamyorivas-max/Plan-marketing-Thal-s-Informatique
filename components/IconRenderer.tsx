
import React from 'react';
import { ICON_MAP } from '../constants';
import { IconName } from '../types';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

const IconRenderer: React.FC<IconRendererProps> = ({ name, className, size = 24 }) => {
  const IconComponent = ICON_MAP[name as IconName] || ICON_MAP['Layers'];
  return <IconComponent className={className} size={size} />;
};

export default IconRenderer;
