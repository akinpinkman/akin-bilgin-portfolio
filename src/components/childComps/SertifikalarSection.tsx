import React from "react";
import akinBilgin from "../../pages/api/akinbilgin";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { PiCertificateDuotone } from "react-icons/pi";

export function SertifikalarSection() {
  return (
    <section className="">
      <h1 className="flex justify-center pb-10 text-4xl font-bold">
        SERTİFİKALAR
      </h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {akinBilgin.map((akinBilgin, i) => (
          <React.Fragment key={i}>
            <BentoGridItem
              title={akinBilgin.sertifikalar.react.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto graySerti"
                  src={akinBilgin.sertifikalar.react.sertifikagorsel}
                  alt={akinBilgin.sertifikalar.react.isim}
                />
              }
              icon={<PiCertificateDuotone />}
            />

            <BentoGridItem
              title={akinBilgin.sertifikalar.javascript.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto graySerti"
                  src={akinBilgin.sertifikalar.javascript.sertifikagorsel}
                  alt={akinBilgin.sertifikalar.javascript.isim}
                />
              }
              icon={<PiCertificateDuotone />}
            />

            <BentoGridItem
              title={akinBilgin.sertifikalar.canva.isim}
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              img={
                <img
                  className="m-auto graySerti"
                  src={akinBilgin.sertifikalar.canva.sertifikagorsel}
                  alt={akinBilgin.sertifikalar.canva.isim}
                />
              }
              icon={<PiCertificateDuotone />}
            />
          </React.Fragment>
        ))}
      </BentoGrid>
    </section>
  );
}
