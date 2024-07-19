import FAQComponent from "@/components/faq1";
import FAQ from "@/components/faq2";
import HowItWorks from "@/components/how";
import "./gradient.css";

export default function Home() {
  return (
    <main className="text-white gradient-background">
      <div>
        <HowItWorks />
        <FAQComponent />
        {/* <FAQ /> */}
      </div>
    </main>
  );
}
