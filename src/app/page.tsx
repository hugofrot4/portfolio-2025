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
} from "@/components/ui/dialog"


export default function Home() {
  return (
    <div className="py-30">
      <div className="flex flex-col items-center max-w-[900px] mx-4 md:mx-auto ">
        <Avatar className="w-[200px] h-[200px]">
          <AvatarImage src="/hugo-avatar2.jpeg" />
          <AvatarFallback>Hugo</AvatarFallback>
        </Avatar>
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
                  <div className="flex flex-1 aspect-square border rounded bg-gray-400"></div>
                </CarouselItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nome do projeto</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
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
