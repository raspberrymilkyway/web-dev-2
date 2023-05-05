export interface QuizData {
  quiz_name: string;
  questions:{
    id: number;
    question: string;
    options: {
      id: number;
      text: string;
    }[];
    answer: number;
  }[];
}