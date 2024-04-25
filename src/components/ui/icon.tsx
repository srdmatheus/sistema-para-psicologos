import {
  CalendarDaysIcon,
  ContactRoundIcon,
  LayoutGridIcon,
  LucideProps,
  NotebookTextIcon,
  PlusIcon,
  SearchIcon,
  UserPlusIcon,
  VideoIcon,
  type LucideIcon
} from 'lucide-react';

export const Icon = {
  calendar: CalendarDaysIcon,
  contact: ContactRoundIcon,
  grid: LayoutGridIcon,
  notebookText: NotebookTextIcon,
  plus: PlusIcon,
  search: SearchIcon,
  userPlus: UserPlusIcon,
  video: VideoIcon
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
