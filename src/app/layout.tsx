import "./globals.css";
import { inter, spaceGrotesk } from "./fonts";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/modeToggle";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.className}`}
      suppressHydrationWarning
    >
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-center border-b-1 fixed top-0 right-0 left-0 z-50 w-full">
            <nav className="flex flex-1 py-4 max-w-[900px] items-center justify-between bg-background mx-4">
              <h1
                className={`${spaceGrotesk.className} text-xl md:text-3xl font-bold`}
              >
                Hugo Frota Dev
              </h1>
              <ul className="hidden md:flex gap-10 items-center">
                <li>
                  <Link href="/" className="hover:underline">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Contato
                  </Link>
                </li>
                <li>
                  <ModeToggle />
                </li>
              </ul>
              <div className="md:hidden flex items-center">
                <Sheet>
                  <SheetTrigger>
                    <RxHamburgerMenu size={30} />
                  </SheetTrigger>
                  <div className="relative">
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <ul className="flex flex-col h-full gap-4 pt-10">
                          <li>
                            <Link href="/" className="hover:underline">
                              Sobre
                            </Link>
                          </li>
                          <li>
                            <Link href="/" className="hover:underline">
                              Projetos
                            </Link>
                          </li>
                          <li>
                            <Link href="/" className="hover:underline">
                              Contato
                            </Link>
                          </li>
                          <li className="absolute bottom-4 right-4">
                            <ModeToggle />
                          </li>
                        </ul>
                      </SheetHeader>
                    </SheetContent>
                  </div>
                </Sheet>
              </div>
            </nav>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
