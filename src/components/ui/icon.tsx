import {
  AtSignIcon,
  CalendarDaysIcon,
  ContactRoundIcon,
  DollarSignIcon,
  LayoutGridIcon,
  LucideProps,
  NotebookTextIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  UserPlusIcon,
  VideoIcon,
  type LucideIcon
} from 'lucide-react';

export const Icon = {
  atSign: AtSignIcon,
  calendar: CalendarDaysIcon,
  contact: ContactRoundIcon,
  dollar: DollarSignIcon,
  grid: LayoutGridIcon,
  notebookText: NotebookTextIcon,
  phone: PhoneIcon,
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
