"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `2021 yılından beri karmaşık sorunları basit, anlaşılır ve güzel tasarımlara döküyorum. Responsive ve kullanıcı dostu arayüzler oluştururken göz alıcı CSS animasyonları kullanarak bu deneyimi taçlandırıyorum.`;

export function TextAnimation() {
  return <TextGenerateEffect words={words} />;
}
