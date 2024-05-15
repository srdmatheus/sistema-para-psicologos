import {
  ArrowLeftFromLineIcon,
  AtSignIcon,
  BrainIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  CircleFadingPlusIcon,
  CircleXIcon,
  ClockIcon,
  ContactRoundIcon,
  CopyIcon,
  DollarSignIcon,
  EllipsisVerticalIcon,
  HandshakeIcon,
  LayoutGridIcon,
  LucideProps,
  NotebookPenIcon,
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
  arrowLeftFromLine: ArrowLeftFromLineIcon,
  atSign: AtSignIcon,
  brain: BrainIcon,
  calendar: CalendarDaysIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  circleCheck: CircleCheckIcon,
  circleFadingPlus: CircleFadingPlusIcon,
  circleX: CircleXIcon,
  clock: ClockIcon,
  contact: ContactRoundIcon,
  copy: CopyIcon,
  dollar: DollarSignIcon,
  ellipsisVertical: EllipsisVerticalIcon,
  handshake: HandshakeIcon,
  grid: LayoutGridIcon,
  notebookText: NotebookTextIcon,
  pencil: PencilIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  notebookPen: NotebookPenIcon,
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
