import AnimatedSection from "./AnimatedSection";

export default function OrgChartSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <AnimatedSection animation="slideLeft" className="px-10 max-w-[1280px] mx-auto text-center">
        <h3 className="text-[24px] leading-[32px] font-semibold mb-12">Organigrama del Proyecto</h3>
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-[#003f87] p-4 rounded-xl shadow-sm w-56">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#003f87] text-[10px] block mb-1">
              PROJECT MANAGER
            </span>
            <p className="font-bold">Líder del Proyecto</p>
          </div>
          <div className="h-12 w-px bg-[#727784]" />
          <div className="w-96 h-px bg-[#727784]" />
          <div className="flex gap-40 mt-0">
            {[
              { role: 'FRONT-END', name: 'FE Developer' },
              { role: 'BACK-END', name: 'BE Developer' },
            ].map((dev) => (
              <div key={dev.role} className="flex flex-col items-center">
                <div className="h-8 w-px bg-[#727784]" />
                <div className="bg-white border border-[#c2c6d4] p-4 rounded-lg shadow-sm w-48">
                  <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#424752] text-[10px] block mb-1">
                    {dev.role}
                  </span>
                  <p className="font-semibold">{dev.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-40 h-12">
            <div className="w-px h-full bg-[#727784]" />
            <div className="w-px h-full bg-[#727784]" />
          </div>
          <div className="w-96 h-px bg-[#727784]" />
          <div className="h-8 w-px bg-[#727784]" />
          <div className="bg-[#0056b3] text-white p-4 rounded-xl shadow-md w-56">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#d7e2ff] text-[10px] block mb-1">
              GO LIVE
            </span>
            <p className="font-bold">QA y Despliegue</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

