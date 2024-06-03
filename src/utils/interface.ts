export interface ButtonProps {
  title: string;
  style: string;
  onClick: () => void;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export interface InputProps {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ReusableProps {
  description: string;
}

export interface TailwindButtonProps {
  id: string;
  title?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export interface ToDoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
