"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `2021 yılından beri karmaşık sorunları basit, anlaşılır ve güzel tasarımlara döküyorum. Responsive ve kullanıcı dostu arayüzler oluştururken göz alıcı animasyonlar kullanarak bu deneyimi taçlandırıyorum.`;

export function TextAnimation() {
  return <TextGenerateEffect words={words} />;
}
