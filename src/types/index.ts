export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface HeroProps {
  url: string;
  title: string;
}

export type FeedbackItem = {
  id: number;
  color: string;
  icon: string;
  text: string;
  username: string;
};

export type Feedbacks = FeedbackItem[];

export type Equipment = Array<{
  id: number;
  name: string;
}>;
