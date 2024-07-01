import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import akinBilgin from "../../pages/api/akinbilgin";

export function DeneyimSection() {
  return (
    <section className="pb-40">
      <h1 className="flex justify-center pb-10 text-4xl font-bold">
        DENEYİMLER
      </h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {akinBilgin.map((akinBilgin, i) => (
          <React.Fragment key={i}>
            <BentoGridItem
              title={akinBilgin.deneyimler.plustech.isim}
              description={akinBilgin.deneyimler.plustech.pozisyon}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto grayExp"
                  src={akinBilgin.deneyimler.plustech.logo}
                  alt={akinBilgin.deneyimler.plustech.isim}
                />
              }
              icon={<FaBriefcase />}
            />

            <BentoGridItem
              title={akinBilgin.deneyimler.thenerdstash.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.deneyimler.thenerdstash.pozisyon}
              img={
                <img
                  className="m-auto grayExp"
                  src={akinBilgin.deneyimler.thenerdstash.logo}
                  alt={akinBilgin.deneyimler.thenerdstash.isim}
                />
              }
              icon={<FaBriefcase />}
            />

            <BentoGridItem
              title={akinBilgin.deneyimler.thegamer.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.deneyimler.thegamer.pozisyon}
              img={
                <img
                  className="m-auto grayExp"
                  src={akinBilgin.deneyimler.thegamer.logo}
                  alt={akinBilgin.deneyimler.thegamer.isim}
                />
              }
              icon={<FaBriefcase />}
            />

            <BentoGridItem
              title={akinBilgin.deneyimler.ginxtv.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.deneyimler.ginxtv.pozisyon}
              img={
                <img
                  className="m-auto grayExp"
                  src={akinBilgin.deneyimler.ginxtv.logo}
                  alt={akinBilgin.deneyimler.ginxtv.isim}
                />
              }
              icon={<FaBriefcase />}
            />

            <BentoGridItem
              title={akinBilgin.deneyimler.theglobalgaming.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.deneyimler.theglobalgaming.pozisyon}
              img={
                <img
                  className="m-auto w-20 grayExp"
                  src={akinBilgin.deneyimler.theglobalgaming.logo}
                  alt={akinBilgin.deneyimler.theglobalgaming.isim}
                />
              }
              icon={<FaBriefcase />}
            />

            <BentoGridItem
              title={akinBilgin.deneyimler.powerupgaming.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.deneyimler.powerupgaming.pozisyon}
              img={
                <img
                  className="m-auto grayExp"
                  src={akinBilgin.deneyimler.powerupgaming.logo}
                  alt={akinBilgin.deneyimler.powerupgaming.isim}
                />
              }
              icon={<FaBriefcase />}
            />
          </React.Fragment>
        ))}
      </BentoGrid>
    </section>
  );
}
