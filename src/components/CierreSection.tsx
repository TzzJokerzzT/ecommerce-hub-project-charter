import AnimatedSection from "./AnimatedSection";
import { Lightbulb, Smile, TrendingUp, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  sentiment_satisfied: Smile,
  trending_up: TrendingUp,
  lightbulb: Lightbulb
}


const items = [
  {
    icon: 'sentiment_satisfied',
    title: '¿Qué funcionó?',
    description:
      'La metodología ágil permitió pivotar rápidamente sobre los requisitos cambiantes del mercado.',
    circleStyle: 'bg-[#0056b3] text-white',
    borderStyle: '',
  },
  {
    icon: 'trending_up',
    title: '¿Qué mejorar?',
    description:
      'Se requiere una fase de testing más robusta para casos de borde en dispositivos legacy.',
    circleStyle: 'bg-[#505f76] text-white',
    borderStyle: 'border-2 border-[#003f87]/20',
  },
  {
    icon: 'lightbulb',
    title: 'Recomendaciones',
    description:
      'Escalar el equipo a finales de Q3 para soportar la expansión a mercados internacionales.',
    circleStyle: 'bg-[#983c00] text-white',
    borderStyle: '',
  },
];

export default function CierreSection() {
  return (
    <section className="py-20 bg-white">
      <AnimatedSection animation="zoomBounce" className="px-10 max-w-[1280px] mx-auto">
        <h3 className="text-[24px] leading-[32px] font-semibold mb-12 text-center">
          Post-Mortem Anticipado &amp; Cierre
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon]

            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center p-8 bg-[#f2f4f6] rounded-2xl ${item.borderStyle}`}
              >
                <div
                  className={`w-16 h-16 ${item.circleStyle} rounded-xl flex items-center justify-center mb-6`}
                >
                  <span className="material-symbols-outlined text-3xl">{IconComponent && <IconComponent size={22} />}
                  </span>
                </div>
                <h4 className="text-[20px] leading-[28px] font-semibold mb-4">{item.title}</h4>
                <p className="text-[#424752]">{item.description}</p>
              </div>
            )
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}

