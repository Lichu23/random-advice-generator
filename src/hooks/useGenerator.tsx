import { useEffect, useState } from "react";
import { Slip } from "../types";

const useGenerator = () => {
  const emptyFrases: Slip = { id: 0, advice: "" };
  const [{ advice, id }, setFrases] = useState(emptyFrases);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    getNewAdvice().then((newAdvice) => {
      setFrases(newAdvice);
    });
  };

  const getNewAdvice = async (): Promise<Slip> => {
    setIsLoading(true);
    return fetch("https://api.adviceslip.com/advice")
      .then(async (res) => await res.json())
      .then((res) => {
        setIsLoading(false);

        return res.slip;
      })
      .catch((err) => {
        console.error(err);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getNewAdvice().then((newAdvice) => {
      setFrases(newAdvice);
    });
  }, []);

  return { advice, id, handleClick, isLoading };
};

export default useGenerator;
