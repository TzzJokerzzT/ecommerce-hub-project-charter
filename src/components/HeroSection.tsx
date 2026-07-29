export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[600px] flex items-center bg-[#003f87] text-white"
    >
      <div className="relative z-10 px-10 max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold mb-4">
            Ecommerce Hub
          </h1>
          <p className="text-[18px] leading-[28px] mb-8 text-[#d7e2ff]">
            Plataforma integral de comercio electrónico — de la formulación al despliegue. Diseñada
            para transformar el futuro digital de las PyMEs.
          </p>
          <div className="flex gap-4">
            <a href="https://stitch.withgoogle.com/projects/11241913599048100592" target="_blanck" rel="noopener noreferrer">
              <button className="bg-white text-[#003f87] px-8 py-3 rounded font-bold hover:bg-[#c9c1bf] transition-all">
                Ver diseño de la app
              </button>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtXoUC2l1RuwtgXL30VPL9qaRU4O3PEqkfBclnpFUpBA-pFI3ARklC8lEP1M7OwyV9Qxn-77YD4ORmV438nZEPnmI_FzeMF_jvX_iF-nBJVc8GtdqixJqr73KcUN-yQolVyvh5go516AP_WbYZAML9ulp99c2tGuHaCd66UnOUqnrG_xeEB2gdAtkaw-6hO05-g0v3cHAsV6zkG7Vm4DQoEcmmhTDcM17RJ0o2Fjif-3AR57x5vzByRQ"
              alt="Abstract isometric ecommerce dashboard"
              className="w-full h-auto rounded shadow-inner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

