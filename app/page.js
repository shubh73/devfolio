import { ClientWrapper } from "app/components/client-wrapper";
import { Header } from "@/components/ui/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Cursor } from "@/components/ui/cursor";
import { Home } from "./components/home";
import { About1 } from "./components/about1";
import { Skills } from "./components/skills";
import { About2 } from "./components/about2";
import { Projects } from "./components/projects";
import { Work } from "./components/work";
import { Collaboration } from "./components/collaboration";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Page() {
  return (
    <ClientWrapper>
      <>
        <Header />
        <ScrollProgress />
        <Cursor />
        <main className="flex flex-col gap-44">
          <div
            role="img"
            className="absolute -right-12 top-1/3 -z-10 flex rotate-90 items-center text-9xl text-gray-light-1/10"
          >
            DEV
          </div>
          <Home />
          {/* <About1 />
          <Skills />
          <About2 />
          <Projects />
          <Work />
          <Collaboration />
          <Contact /> */}
        </main>
        {/* <Footer /> */}
      </>
    </ClientWrapper>
  );
}
