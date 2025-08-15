"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../utils";

export const TextGenerateEffect = ({
  words,
  segments, // NEW: array of { text, className }
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  // Build the array of words with their own colors
  let wordsArray = [];
  if (segments && Array.isArray(segments)) {
    segments.forEach((seg) => {
      seg.text.split(" ").forEach((w) => {
        wordsArray.push({ word: w, className: seg.className || "" });
      });
    });
  } else {
    wordsArray = words.split(" ").map((w) => ({ word: w, className: "text-white" }));
  }

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration: duration ?? 1, delay: stagger(0.2) }
    );
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div ref={scope}>
          {wordsArray.map((item, idx) => (
            <motion.span
              key={item.word + idx}
              className={cn("opacity-0", item.className)}
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {item.word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
