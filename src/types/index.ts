export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface HeroProps {
  url: string;
  title: string;
}

export type Feedbacks = Array<{
  id: number;
  color: string;
  icon: string;
  text: string;
  username: string;
}>;

export type Equipment = Array<{
  id: number;
  name: string;
}>;
