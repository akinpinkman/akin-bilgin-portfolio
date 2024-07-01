import React from "react";
import akinBilgin from "../../pages/api/akinbilgin";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FaTools } from "react-icons/fa";

export function TeknolojilerSection() {
  return (
    <section className="pb-40">
      <h1 className="flex justify-center pb-10 text-4xl font-bold">
        TEKNOLOJİLER
      </h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {akinBilgin.map((akinBilgin, i) => (
          <React.Fragment key={i}>
            <BentoGridItem
              title={akinBilgin.teknolojiler.html.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.html.logo}
                  alt={akinBilgin.teknolojiler.html.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.css.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.css.logo}
                  alt={akinBilgin.teknolojiler.css.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.javascript.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.javascript.logo}
                  alt={akinBilgin.teknolojiler.javascript.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.react.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.react.logo}
                  alt={akinBilgin.teknolojiler.react.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.redux.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.redux.logo}
                  alt={akinBilgin.teknolojiler.redux.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.tankstack.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.tankstack.logo}
                  alt={akinBilgin.teknolojiler.tankstack.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.nextjs.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.nextjs.logo}
                  alt={akinBilgin.teknolojiler.nextjs.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.tailwindcss.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.tailwindcss.logo}
                  alt={akinBilgin.teknolojiler.tailwindcss.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.supabase.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.supabase.logo}
                  alt={akinBilgin.teknolojiler.supabase.isim}
                />
              }
              icon={<FaTools />}
            />

            <BentoGridItem
              title={akinBilgin.teknolojiler.firebase.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto"
                  src={akinBilgin.teknolojiler.firebase.logo}
                  alt={akinBilgin.teknolojiler.firebase.isim}
                />
              }
              icon={<FaTools />}
            />
          </React.Fragment>
        ))}
      </BentoGrid>
    </section>
  );
}
