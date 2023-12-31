import React, { useState, useEffect } from "react";
import { ITypingWords } from "@/types/intro";

const useTypingWords = ({ completeWords, delay }: ITypingWords) => {
  const [words, setWords] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    const typingWords = setInterval(() => {
      if (words.length === completeWords[idx].length) {
        if (idx === completeWords.length - 1) {
          return;
        }
        setWords("");
        setCount(0);
        setIdx(idx + 1);
        return;
      }

      setWords((prevWord) => {
        const nextWord = prevWord
          ? prevWord + completeWords[idx][count]
          : completeWords[idx][0];

        setCount(count + 1);

        return nextWord;
      });
    }, delay);

    return () => {
      clearInterval(typingWords);
    };
  }, [completeWords, count, delay, idx, words]);

  return words;
};

export default useTypingWords;
