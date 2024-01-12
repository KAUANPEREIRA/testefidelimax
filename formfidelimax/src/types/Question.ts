export type Questions = {
  error: string;
  itens: Question[];
  warning: string;
};
export type Question = {
  answerValue: any;
  horizontal?: boolean;
  itens?: Itens[];
  content: string;
  mandatory: boolean;
  typeQuestion: number;
};

export type Itens = {
  value: number;
  description: string;
};
