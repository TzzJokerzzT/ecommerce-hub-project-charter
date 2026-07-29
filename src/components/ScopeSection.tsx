import { Check, CheckCircle, CircleX, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const included = [
  'Módulo de administración de inventarios centralizado.',
  'Integración con APIs de transportadoras nacionales.',
  'Panel de analítica avanzada para propietarios de tiendas.',
  'Soporte técnico nivel 1 y 2 por 6 meses post-despliegue.',
];

const excluded = [
  'Desarrollo de aplicaciones móviles nativas (iOS/Android).',
  'Migración de datos históricos de plataformas legacy externas.',
  'Gestión física de bodegas o centros de distribución.',
  'Marketing digital o pauta publicitaria para clientes.',
];

export default function ScopeSection() {
  return (
    <section id="scope" className="bg-white py-20">
      <AnimatedSection animation="scaleUp" className="mx-auto max-w-[1280px] px-10">
        <h3 className="mb-12 text-center text-[24px] leading-[32px] font-semibold">
          Alcance del Proyecto
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#c2c6d4] bg-[#f2f4f6] p-8">
            <div className="mb-6 flex items-center gap-3 text-[#003f87]">
              <CheckCircle size={20} />
              <h4 className="text-[20px] leading-[28px] font-semibold">Incluye</h4>
            </div>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] leading-[24px]">
                  <Check size={18} className="mt-1" color="#003F87" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#c2c6d4] bg-white p-8">
            <div className="mb-6 flex items-center gap-3 text-[#ba1a1a]">
              <CircleX size={20} />
              <h4 className="text-[20px] leading-[28px] font-semibold">No incluye</h4>
            </div>
            <ul className="space-y-4">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] leading-[24px]">
                  <X size={18} className="mt-0.5" color="#BA1A1A" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

