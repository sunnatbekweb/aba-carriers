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
  position: string;
};

export type Feedbacks = FeedbackItem[];

export type Equipment = Array<{
  id: number;
  name: string;
}>;

export type Statistics = StatisticsItem[];

export type StatisticsItem = {
  id: number;
  total_loads_delivered: string;
  miles_covered_annually: string;
  satisfied_clients: string;
  team_size: string;
  industry_trust: string;
};
