import React from "react";
import akinBilgin from "../../pages/api/akinbilgin";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

export function ProjelerSection() {
  return (
    <section className="pb-40">
      <h1 className="flex justify-center pb-10 text-4xl font-bold">PROJELER</h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {akinBilgin.map((akinBilgin, i) => (
          <React.Fragment key={i}>
            <BentoGridItem
              title={
                <Link
                  href="https://next-gaming-blog.vercel.app"
                  target="_blank"
                >
                  {akinBilgin.projeler.nextgaming.isim}
                </Link>
              }
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.projeler.nextgaming.teknolojiler}
              img={
                <Link
                  href="https://next-gaming-blog.vercel.app"
                  target="_blank"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    className="m-auto grayPro"
                    src={akinBilgin.projeler.nextgaming.logo}
                    alt={akinBilgin.projeler.nextgaming.isim}
                  />
                </Link>
              }
              icon={<FaLaptopCode />}
            />

            <BentoGridItem
              title={
                <Link
                  href="https://yourgaminglibrary.netlify.app/games"
                  target="_blank"
                >
                  {akinBilgin.projeler.yourgaminglibrary.isim}
                </Link>
              }
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.projeler.yourgaminglibrary.teknolojiler}
              img={
                <Link
                  href="https://yourgaminglibrary.netlify.app/games"
                  target="_blank"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    className="m-auto grayPro"
                    src={akinBilgin.projeler.yourgaminglibrary.logo}
                    alt={akinBilgin.projeler.yourgaminglibrary.isim}
                  />
                </Link>
              }
              icon={<FaLaptopCode />}
            />

            <BentoGridItem
              title={
                <Link href="https://akinbilgin-netflix.web.app" target="_blank">
                  {akinBilgin.projeler.netflixclone.isim}
                </Link>
              }
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.projeler.netflixclone.teknolojiler}
              img={
                <Link
                  href="https://akinbilgin-netflix.web.app"
                  target="_blank"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    className="m-auto grayPro"
                    src={akinBilgin.projeler.netflixclone.logo}
                    alt={akinBilgin.projeler.netflixclone.isim}
                  />
                </Link>
              }
              icon={<FaLaptopCode />}
            />

            <BentoGridItem
              title={
                <Link
                  href="https://akinpinkman.github.io/gaming-news-scrapper/"
                  target="_blank"
                >
                  {akinBilgin.projeler.gamingnewsscrapper.isim}
                </Link>
              }
              className={
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              }
              description={akinBilgin.projeler.gamingnewsscrapper.teknolojiler}
              img={
                <Link
                  href="https://akinpinkman.github.io/gaming-news-scrapper/"
                  target="_blank"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    className="m-auto grayPro"
                    src={akinBilgin.projeler.gamingnewsscrapper.logo}
                    alt={akinBilgin.projeler.gamingnewsscrapper.isim}
                  />
                </Link>
              }
              icon={<FaLaptopCode />}
            />
          </React.Fragment>
        ))}
      </BentoGrid>
    </section>
  );
}
