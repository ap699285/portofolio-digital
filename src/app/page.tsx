import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hallo! Saya Aji Prasetyo Purnomo</Heading>
      <Paragraph className="max-w-xl mt-4">
        Saya adalah seorang{" "} <Highlight>Full-Stack Developer</Highlight> 
        dengan pengalaman profesional selama kurang lebih <Highlight>7 tahun</Highlight> di bidang pengembangan aplikasi web.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Fokus saya adalah membangun sistem yang scalable,
        memiliki performa optimal, serta memberikan pengalaman pengguna yang baik,
        baik pada sisi frontend maupun backend.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Projek yang saya kerjakan:
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
