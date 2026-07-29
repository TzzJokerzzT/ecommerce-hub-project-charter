import AnimatedSection from "./AnimatedSection";

export default function PowerInterestSection() {
  return (
    <section className="py-20 bg-[#f2f4f6]">
      <AnimatedSection animation="rotateIn" className="px-10 max-w-[1280px] mx-auto">
        <h3 className="text-[24px] leading-[32px] font-semibold mb-8 text-center">
          Matriz de Poder e Interés
        </h3>
        <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-4 max-w-4xl mx-auto h-[600px]">
          <div className="flex flex-col justify-between py-12 text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#424752] [writing-mode:vertical-lr] rotate-180">
            <span>ALTO PODER</span>
            <span>BAJO PODER</span>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 border-2 border-[#c2c6d4] bg-white relative">
            <div className="border-r border-b border-[#c2c6d4] p-8 flex flex-col items-center justify-center gap-4 bg-[#0056b3]/5">
              <span className="text-[10px] text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#003f87] opacity-60">
                GESTIONAR ATENTAMENTE
              </span>
              <div className="flex gap-2 flex-wrap justify-center">
                <div className="bg-[#003f87] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Equipo
                </div>
                <div className="bg-[#003f87] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Dueño
                </div>
                <div className="bg-[#003f87] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Vendedores
                </div>
              </div>
            </div>
            <div className="border-b border-[#c2c6d4] p-8 flex flex-col items-center justify-center gap-4">
              <span className="text-[10px] text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#424752] opacity-60">
                MANTENER SATISFECHO
              </span>
              <div className="bg-[#e0e3e5] text-[#424752] px-3 py-1 rounded-full text-sm font-bold">
                Clientes
              </div>
            </div>
            <div className="border-r border-[#c2c6d4] p-8 flex flex-col items-center justify-center gap-4">
              <span className="text-[10px] text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#424752] opacity-60">
                MANTENER INFORMADO
              </span>
              <div className="bg-[#505f76] text-white px-3 py-1 rounded-full text-sm font-bold">
                Clientes Finales
              </div>
            </div>
            <div className="p-8 flex flex-col items-center justify-center gap-4">
              <span className="text-[10px] text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#424752] opacity-60">
                MONITORIZAR
              </span>
              <div className="bg-[#c2c6d4] text-[#191c1e] px-3 py-1 rounded-full text-sm font-bold">
                Proveedores
              </div>
            </div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#c2c6d4]" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-[#c2c6d4]" />
          </div>
          <div></div>
          <div className="flex justify-between px-12 text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#424752]">
            <span>BAJO INTERÉS</span>
            <span>ALTO INTERÉS</span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

