import FAQComponent from "@/components/faq1";
import FAQ from "@/components/faq2";
import HowItWorks from "@/components/how";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
    <div>
      <HowItWorks />
      <FAQComponent/>
      <FAQ />
    </div>
    </main>
  );
}
