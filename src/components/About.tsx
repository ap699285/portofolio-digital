"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about-1.jpg",
    "/images/about-3.jpg",
    "/images/about-2.jpeg",
    "/images/about-4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hai, saya Aji Prasetyo — seorang developer yang suka mengeksplorasi teknologi, 
          pecinta alam yang menemukan ketenangan di antara pepohonan dan gunung, 
          serta pembaca buku yang selalu haus akan cerita dan pengetahuan baru. 
          Selamat datang di ruang digital saya!
        </Paragraph>
        <Paragraph className=" mt-4">
          Sejak awal, saya tertarik dengan bagaimana baris-baris kode bisa berubah menjadi sesuatu yang nyata dan berguna. 
          Membangun aplikasi, menyelesaikan masalah teknis, dan melihat ide berkembang menjadi sebuah produk — 
          itu hal yang selalu membuat saya semangat sebagai developer.
        </Paragraph>

        <Paragraph className=" mt-4">
          Namun hidup saya tidak hanya tentang layar monitor dan baris kode. Ketika butuh jeda, saya beralih ke alam. 
          Mendaki, berkemah, atau sekadar berkeliling menikmati udara segar membantu saya kembali jernih dan penuh energi. 
          Di alam, saya belajar tentang kesederhanaan, keseimbangan, dan ritme yang tidak bisa diajarkan oleh buku teks atau framework apa pun.
        </Paragraph>
        <Paragraph className=" mt-4">
          Berbicara soal buku, membaca adalah teman lama saya. Dari buku-buku teknologi dan psikologi, 
          sampai novel fiksi yang membawa saya ke dunia baru — setiap halaman memberi perspektif baru dan 
          membantu saya menjadi pribadi yang lebih reflektif dan dewasa.
        </Paragraph>
        <Paragraph className=" mt-4">
          Lewat tempat ini, saya ingin berbagi sudut pandang, pengalaman, dan karya saya. 
          Jika kamu seorang developer, penikmat alam, pembaca buku… 
          atau seseorang yang menemukan kebahagiaan dalam perpaduan ketiganya — 
          di sini kita punya banyak hal untuk dibahas.
        </Paragraph>
        <Paragraph className=" mt-4">
          Terima kasih sudah mampir.
        </Paragraph>
      </div>
    </div>
  );
}
