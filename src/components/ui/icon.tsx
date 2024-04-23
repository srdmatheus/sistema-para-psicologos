import {
  CalendarDaysIcon,
  LayoutGridIcon,
  LucideProps,
  type LucideIcon
} from 'lucide-react';

export const Icon = {
  calendar: CalendarDaysIcon,
  grid: LayoutGridIcon
};

export type IconType = LucideIcon;
export type IconName = keyof typeof Icon;

interface DynamicIconProps extends LucideProps {
  name: IconName;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = Icon[name];
  return <IconComponent {...props} />;
}
