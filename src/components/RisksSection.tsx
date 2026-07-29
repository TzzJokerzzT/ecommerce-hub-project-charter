import AnimatedSection from "./AnimatedSection";
import {
  CircleAlert,
  OctagonAlert,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  warning: TriangleAlert,
  priority_high: OctagonAlert,
  info: CircleAlert,
};

const risksSummary = [
  {
    badge: "ALTO IMPACTO",
    badgeStyle: "bg-red-100 text-red-700",
    icon: "warning",
    iconColor: "text-red-600",
    title: "5 Riesgos",
    description:
      "Requieren seguimiento continuo y acciones preventivas durante todo el proyecto.",
  },
  {
    badge: "MEDIO IMPACTO",
    badgeStyle: "bg-orange-100 text-orange-700",
    icon: "priority_high",
    iconColor: "text-orange-600",
    title: "4 Riesgos",
    description:
      "Necesitan monitoreo periódico para evitar que aumenten su impacto.",
  },
  {
    badge: "BAJO IMPACTO",
    badgeStyle: "bg-green-100 text-green-700",
    icon: "info",
    iconColor: "text-green-600",
    title: "1 Riesgo",
    description:
      "Riesgo controlado que únicamente requiere seguimiento preventivo.",
  },
];

const riskItems = [
  {
    id: 1,
    title: "Subestimación del tiempo de desarrollo por fase.",
    category: "Tiempo",
    probability: "Media",
    impact: "Alto",
    mitigation:
      "Definir un cronograma con márgenes de holgura y revisar el avance en cada fase.",
  },
  {
    id: 2,
    title:
      "Cambios de alcance durante el desarrollo (nuevas funcionalidades).",
    category: "Alcance",
    probability: "Media",
    impact: "Alto",
    mitigation:
      "Congelar el alcance del MVP y documentar nuevas funcionalidades para una segunda fase.",
  },
  {
    id: 3,
    title:
      "Inconsistencias entre inventario y ventas por errores de lógica.",
    category: "Técnico",
    probability: "Media",
    impact: "Alto",
    mitigation:
      "Realizar pruebas funcionales del flujo de ventas y actualización del inventario.",
  },
  {
    id: 4,
    title: "Problemas de integración entre Frontend y Backend.",
    category: "Técnico",
    probability: "Media",
    impact: "Medio",
    mitigation:
      "Definir y documentar la API antes del desarrollo paralelo.",
  },
  {
    id: 5,
    title:
      "Limitaciones de hosting o base de datos en la capa gratuita.",
    category: "Infraestructura",
    probability: "Baja",
    impact: "Medio",
    mitigation:
      "Monitorear el consumo y preparar un plan de escalamiento.",
  },
  {
    id: 6,
    title:
      "Falta de disponibilidad del desarrollador durante el proyecto.",
    category: "Recursos",
    probability: "Media",
    impact: "Alto",
    mitigation:
      "Crear un cronograma basado en la disponibilidad real.",
  },
  {
    id: 7,
    title:
      "Historias de usuario mal definidas o incompletas.",
    category: "Gestión",
    probability: "Media",
    impact: "Medio",
    mitigation:
      "Validar historias de usuario y criterios de aceptación antes del desarrollo.",
  },
  {
    id: 8,
    title:
      "Errores de seguridad en autenticación y control de roles.",
    category: "Seguridad",
    probability: "Baja",
    impact: "Alto",
    mitigation:
      "Diseñar la estrategia de autenticación y permisos desde la arquitectura.",
  },
  {
    id: 9,
    title:
      "Errores detectados después del despliegue en producción.",
    category: "Despliegue",
    probability: "Media",
    impact: "Alto",
    mitigation:
      "Ejecutar un checklist completo de pruebas post-despliegue.",
  },
  {
    id: 10,
    title:
      "Acumulación de deuda técnica por incumplir Clean Architecture y SOLID.",
    category: "Calidad / Arquitectura",
    probability: "Media",
    impact: "Medio",
    mitigation:
      "Realizar revisiones periódicas de código antes de avanzar de fase.",
  },
];

export default function RisksSection() {
  return (
    <section
      id="risk"
      className="bg-[#f2f4f6] py-20"
    >
      <AnimatedSection animation="blurIn" className="mx-auto max-w-[1280px] px-10">
        <h3 className="mb-12 text-2xl font-semibold">
          Gestión de Riesgos
        </h3>

        {/* Resumen */}

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {risksSummary.map((risk) => {
            const Icon = iconMap[risk.icon];

            return (
              <div
                key={risk.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${risk.badgeStyle}`}
                  >
                    {risk.badge}
                  </span>

                  <Icon
                    size={24}
                    className={risk.iconColor}
                  />
                </div>

                <h4 className="mb-2 text-xl font-bold">
                  {risk.title}
                </h4>

                <p className="text-sm leading-6 text-slate-600">
                  {risk.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tabla */}

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b bg-slate-100 px-6 py-4">
            <h4 className="text-lg font-semibold">
              Matriz de Riesgos del Proyecto
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr className="border-b">
                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    #
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Riesgo
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Categoría
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Probabilidad
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Impacto
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Mitigación Inicial
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {riskItems.map((risk) => (
                  <tr
                    key={risk.id}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <td className="px-5 py-5 font-semibold text-slate-700">
                      {risk.id}
                    </td>

                    <td className="max-w-sm px-5 py-5 text-sm leading-6 font-medium text-slate-800">
                      {risk.title}
                    </td>

                    <td className="px-5 py-5">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {risk.category}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${risk.probability === "Media"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                          }`}
                      >
                        {risk.probability}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${risk.impact === "Alto"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                          }`}
                      >
                        {risk.impact}
                      </span>
                    </td>

                    <td className="max-w-md px-5 py-5 text-sm leading-6 text-slate-600">
                      {risk.mitigation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
