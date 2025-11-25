import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Aji Prasetyo",
  description:
    "Aji Prasetyo adalah seorang developer yang selalu terbuka untuk berdiskusi mengenai peluang kerja sama, proyek baru, atau sekadar menyapa. Jangan ragu untuk menghubungi saya melalui email atau mengisi formulir kontak di bawah ini. Saya berkomitmen untuk merespons setiap pesan secepat mungkin dan menantikan kesempatan untuk terhubung dengan Anda.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        Apa yang sedang saya kerjakan saat ini?{" "}
      </Heading>

      <Products />
    </Container>
  );
}
