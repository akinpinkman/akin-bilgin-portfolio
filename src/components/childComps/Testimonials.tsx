"use client";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function Yorumlar() {
  return (
    <div className="pt-40 pb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Akin is really an excellent gaming writer. He is proactive and applies feedback fast. I really liked how much heart he put into the article and he is definitely not your average content writer which could get replaces by OpenAI. ",
    name: "Marc H.",
    title: "The Global Gaming",
  },
  {
    quote:
      "I didn't have to tell Akin twice what to do twice. It's rarity, considering that working with our texts is not always simple. Job done quick and sharp.",
    name: "Dmitrii M.",
    title: "Crowdo Net",
  },
  {
    quote:
      "Akin is somebody who has impressed us in a big way. He has amazing writing skills, He is very quick in understanding the job requirement and he can work with minimum supervision. A good communicator and always completes his work on time. We are planning to work long term with him.",
    name: "Grow More",
    title: "Asif Hossain M.",
  },
];
