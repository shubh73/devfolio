import { GSAPWrapper } from "../components/gsap-wrapper";
import { Cursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { Home } from "@/components/home";
import { About1 } from "@/components/about1";
import { About2 } from "@/components/about2";
import { Projects } from "@/components/projects";
import { Work } from "@/components/work";
import { Collaboration } from "@/components/collaboration";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { OverflowDebugger } from "@/components/overflow-debugger";

export default function Page() {
  return (
    <GSAPWrapper>
      <OverflowDebugger />
      <Cursor />
      <ScrollProgress />
      <Header />
      <main className="flex flex-col gap-96">
        <div
          role="img"
          className="absolute -right-12 top-1/3 -z-10 flex rotate-90 items-center text-9xl text-gray-light-1/10"
        >
          DEV
        </div>
        <Home />
        <About1 />
        {/* <Projects /> */}
        <About2 />
        <Work />
        {/* <Collaboration /> */}
        <Contact />
      </main>
      <Footer />
    </GSAPWrapper>
  );
}
