import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="bg-[#e0e3e5] border-t border-[#c2c6d4] py-12">
      <AnimatedSection animation="slideUp" className="flex flex-col md:flex-row justify-between items-center px-10 max-w-[1280px] mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[20px] leading-[28px] font-semibold text-[#191c1e] font-bold">
            Ecommerce Hub
          </span>
          <p className="text-[14px] leading-[20px] text-[#424752]">
            © 2026 Ecommerce Hub Corporate Systems
          </p>
        </div>
        <div className="flex gap-8 text-[14px] leading-[20px] text-[#424752]">
          <a className="hover:text-[#003f87] transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-[#003f87] transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-[#003f87] transition-colors" href="#">
            Project Documentation
          </a>
        </div>
      </AnimatedSection>
    </footer>
  );
}

