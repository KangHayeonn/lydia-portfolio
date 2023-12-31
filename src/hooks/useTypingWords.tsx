import React, { useState, useEffect } from "react";
import { ITypingWords } from "@/types/intro";

const useTypingWords = ({ completeWords, delay }: ITypingWords) => {
  const [words, setWords] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [idx, setIdx] = useState<number>(0);
  const [delayTime, setDelayTime] = useState<number>(delay);

  useEffect(() => {
    const typingWords = setInterval(() => {
      const wordLen = completeWords[idx].length;
      const maxWordLen = 2 * wordLen;

      if (words.length === wordLen) {
        if (idx === completeWords.length - 1) {
          return;
        }
      }

      if (count === maxWordLen) {
        setWords("");
        setCount(0);
        setIdx(idx + 1);
        return;
      }

      setWords(() => {
        let nextWord = "";

        if (count <= wordLen) {
          nextWord = completeWords[idx].substring(0, count);
          setDelayTime(delay);

          if (count === wordLen) {
            setDelayTime(completeDelayTime(delay));
          }
        } else {
          nextWord = completeWords[idx].substring(0, maxWordLen - count);
          setDelayTime(removeDelayTime(delay));
        }

        setCount(count + 1);

        return nextWord;
      });
    }, delayTime);

    return () => {
      clearInterval(typingWords);
    };
  }, [completeWords, count, delay, idx, words, delayTime]);

  const removeDelayTime = (time: number) => {
    return time - 70;
  };

  const completeDelayTime = (time: number) => {
    return time + 1000;
  };

  return words;
};

export default useTypingWords;
