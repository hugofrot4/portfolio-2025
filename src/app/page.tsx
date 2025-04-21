"use client";
import { inter, spaceGrotesk } from "./fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-30">
      <div className="flex flex-col items-center max-w-[900px] mx-4 md:mx-auto ">
        <div className="group w-48 h-48 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <Avatar className="absolute w-full h-full [backface-visibility:hidden]">
              <AvatarImage
                className="w-full h-full object-cover rounded-xl"
                src="/hugo-avatar2.jpeg"
              />
              <AvatarFallback>Hugo</AvatarFallback>
            </Avatar>
            <Avatar className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <AvatarImage
                className="w-full h-full object-cover rounded-xl"
                src="/hugo-avatar.png"
              />
              <AvatarFallback>Hugo</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <h1
          className={`${spaceGrotesk.className} text-5xl font-bold mt-6 text-center`}
        >
          Olá, Eu sou o Hugo.
        </h1>
        <p className={`${inter.className} mt-2 tracking-widest`}>
          Dev Frontend Web e Mobile
        </p>
      </div>

      <div className="mt-5 max-w-[900px] mx-4 md:mx-auto">
        <h2 className={`${spaceGrotesk.className} text-3xl font-bold pt-10`}>
          Sobre mim
        </h2>
        <p className={`${inter.className} mt-2 text-xl`}>
          Desenvolvedor Frontend com mais de 4 anos de experiência em projetos
          web e mobile, utilizando React, Next.js, Tailwind CSS e React Native
          com Expo. Atuação sólida na integração de APIs, versionamento com Git
          e foco em performance, usabilidade e boas práticas. Inglês técnico
          para leitura, escrita e comunicação básica.
        </p>
      </div>

      <div className="mt-5 max-w-[900px] mx-4 md:mx-auto">
        <h2
          className={`${spaceGrotesk.className} text-3xl font-bold pt-10 max-w-[900px] mx-auto`}
        >
          Projetos
        </h2>
        <Carousel className="mt-4">
          <CarouselContent className="-ml-4">
            <Dialog>
              <DialogTrigger className="basis-[200px] md:basis-1/3">
                <CarouselItem className="basis-[200px] md:basis-1/3 pl-4">
                  <Image
                    alt="Portfolio image"
                    src={"https://picsum.photos/1000/1000/?random&t=1"}
                    width={1000}
                    height={1000}
                    className="w-full md:h-full md:order-1 rounded"
                  />
                </CarouselItem>
              </DialogTrigger>
              <DialogContent className="md:grid md:grid-cols-2 md:min-w-[60vw] md:gap-5">
                <DialogHeader className="md:order-2">
                  <DialogTitle>Nome do projeto</DialogTitle>
                  <DialogDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aspernatur sapiente totam harum itaque provident
                    labore laboriosam. In pariatur sint vero atque explicabo sed
                    mollitia. Illo beatae id vitae ex.
                  </DialogDescription>
                  <ul className="list-disc ml-5">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </DialogHeader>
                <Image
                  alt="Portfolio image"
                  src={"https://picsum.photos/1000/1000/?random&t=1"}
                  width={1000}
                  height={1000}
                  className="w-full md:h-full md:order-1"
                />
              </DialogContent>
            </Dialog>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <div className="mt-5 max-w-[900px] mx-4 md:mx-auto">
        <h2 className={`${spaceGrotesk.className} text-3xl font-bold pt-10`}>
          Contato
        </h2>
        <ul className="mt-2 flex gap-8">
          <li>
            <Link
              href="https://github.com/hugofrot4"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-600 transition duration-200"
            >
              <FaGithub size={30} />
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/hugo-frota-7065b6127/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-500 transition duration-200"
            >
              <FaLinkedin size={30} />
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
