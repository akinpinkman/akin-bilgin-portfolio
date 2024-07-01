import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import akinBilgin from "../../pages/api/akinbilgin";

export function EgitimSection() {
  return (
    <section className="pb-40 pt-5">
      <h1 className="flex justify-center pb-10 text-4xl font-bold">
        EĞİTİMLER
      </h1>

      <BentoGrid className="md:flex items-center justify-center max-w-4xl mx-auto">
        {akinBilgin.map((akinBilgin, i) => (
          <React.Fragment key={i}>
            <BentoGridItem
              title={akinBilgin.egitim.anadolu.bolum}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.egitim.anadolu.isim}
              img={
                <img
                  className="m-auto grayEgt"
                  src={akinBilgin.egitim.anadolu.logo}
                  alt={akinBilgin.egitim.anadolu.isim}
                />
              }
              icon={<FaGraduationCap />}
            />

            <BentoGridItem
              title={akinBilgin.egitim.bulentecevit.bolum}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.egitim.bulentecevit.isim}
              img={
                <img
                  className="m-auto grayEgt"
                  src={akinBilgin.egitim.bulentecevit.logo}
                  alt={akinBilgin.egitim.bulentecevit.isim}
                />
              }
              icon={<FaGraduationCap />}
            />
          </React.Fragment>
        ))}
      </BentoGrid>
    </section>
  );
}
