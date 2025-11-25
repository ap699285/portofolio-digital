import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Aji Prasetyo",
  description:
    "Aji Prasetyo adalah seorang developer yang selalu terbuka untuk berdiskusi mengenai peluang kerja sama, proyek baru, atau sekadar menyapa. Jangan ragu untuk menghubungi saya melalui email atau mengisi formulir kontak di bawah ini. Saya berkomitmen untuk merespons setiap pesan secepat mungkin dan menantikan kesempatan untuk terhubung dengan Anda.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
