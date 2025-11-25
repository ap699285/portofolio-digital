import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Aji Prasetyo",
  description:
    "Aji Prasetyo adalah seorang developer yang selalu terbuka untuk berdiskusi mengenai peluang kerja sama, proyek baru, atau sekadar menyapa. Jangan ragu untuk menghubungi saya melalui email atau mengisi formulir kontak di bawah ini. Saya berkomitmen untuk merespons setiap pesan secepat mungkin dan menantikan kesempatan untuk terhubung dengan Anda.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
