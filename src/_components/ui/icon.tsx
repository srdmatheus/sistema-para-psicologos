import {
  AtSignIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  CircleXIcon,
  ClockIcon,
  ContactRoundIcon,
  CopyIcon,
  DollarSignIcon,
  LayoutGridIcon,
  LucideProps,
  NotebookTextIcon,
  PencilIcon,
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
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  circleCheck: CircleCheckIcon,
  circleX: CircleXIcon,
  clock: ClockIcon,
  contact: ContactRoundIcon,
  copy: CopyIcon,
  dollar: DollarSignIcon,
  grid: LayoutGridIcon,
  notebookText: NotebookTextIcon,
  pencil: PencilIcon,
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
