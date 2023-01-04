import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IdeaProviderProps {
  children: React.ReactNode;
}

interface iIdeaData {
  title: string;
  imgs: string[];
  steps: string;
  materials: string[];
  categories: string[];
  estimated_cost: number;
  difficulty_level: number;
  userId: number;
}

export const IdeaContext = createContext({});

export const IdeaProvider = ({ children }: IdeaProviderProps) => {
  const createIdea = async (newIdeaData: iIdeaData, callback: () => void) => {
    try {
        await api.post("/ideas", newIdeaData, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
            }
        });

        toast.success("Ideia criada com sucesso.");

        callback();
    } catch (error) {
        toast.error("Não foi possível cadastrar a ideia");
    }
  };
};
