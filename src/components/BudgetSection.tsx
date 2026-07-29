import AnimatedSection from "./AnimatedSection";
import {
  Asterisk,
  Banknote,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  build: Wrench,
  emergency: Asterisk,
};

const budgetSummary = [
  {
    icon: "cloud",
    label: "Infraestructura",
    amount: "$10 - $99",
    note: "Hosting, dominio y almacenamiento",
  },
  {
    icon: "build",
    label: "Herramientas",
    amount: "$0",
    note: "100% Open Source",
  },
  {
    icon: "emergency",
    label: "Contingencia",
    amount: "$2 - $20",
    note: "15-20% del subtotal",
  },
];

const budgetSections = [
  {
    title: "Infraestructura y Hosting",
    items: [
      {
        item: "Hosting Frontend",
        option: "Vercel / Netlify (Plan gratuito)",
        cost: "$0",
      },
      {
        item: "Hosting Backend",
        option: "Render / Railway",
        cost: "$0 - $84",
      },
      {
        item: "Base de datos",
        option: "MongoDB Atlas M0",
        cost: "$0",
      },
      {
        item: "Dominio",
        option: ".com",
        cost: "$10 - $15",
      },
      {
        item: "Cloudinary",
        option: "Plan gratuito",
        cost: "$0",
      },
    ],
  },
  {
    title: "Herramientas de Desarrollo",
    items: [
      {
        item: "GitHub",
        option: "Plan gratuito",
        cost: "$0",
      },
      {
        item: "Gestión de tareas",
        option: "GitHub Projects / Trello",
        cost: "$0",
      },
      {
        item: "VS Code",
        option: "Editor",
        cost: "$0",
      },
      {
        item: "Figma",
        option: "Plan gratuito",
        cost: "$0",
      },
    ],
  },
  {
    title: "Contingencia",
    items: [
      {
        item: "Reserva",
        option: "Upgrade de servicios",
        cost: "$2 - $20",
      },
    ],
  },
];

export default function BudgetSection() {
  return (
    <section className="bg-white py-20">
      <AnimatedSection animation="flipUp" className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-3xl font-bold">
          Presupuesto Estimado
        </h2>

        {/* Resumen */}

        <div className="mb-14 grid gap-6 md:grid-cols-4">
          {budgetSummary.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm"
              >
                <div className="mb-4 flex justify-center">
                  <Icon
                    size={24}
                    className="text-blue-700"
                  />
                </div>

                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {item.label}
                </h4>

                <p className="mt-3 text-4xl font-bold text-slate-900">
                  {item.amount}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {item.note}
                </p>
              </div>
            );
          })}

          <div className="rounded-xl bg-blue-700 p-8 text-center text-white shadow-lg">
            <Banknote
              size={24}
              className="mx-auto mb-4"
            />

            <h4 className="text-xs font-bold uppercase tracking-widest">
              Total Estimado
            </h4>

            <p className="mt-3 text-4xl font-bold">
              $12 - $119
            </p>

            <p className="mt-2 text-sm text-blue-100">
              Costo anual del proyecto
            </p>
          </div>
        </div>

        {/* Detalle */}

        <div className="space-y-8">
          {budgetSections.map((section) => (
            <div
              key={section.title}
              className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="border-b bg-slate-100 px-6 py-4">
                <h3 className="font-semibold">
                  {section.title}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">
                        Ítem
                      </th>

                      <th className="px-6 py-3 text-left text-sm font-semibold">
                        Opción
                      </th>

                      <th className="px-6 py-3 text-right text-sm font-semibold">
                        Costo
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {section.items.map((item) => (
                      <tr
                        key={item.item}
                        className="border-t hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-medium">
                          {item.item}
                        </td>

                        <td className="px-6 py-4 text-slate-600">
                          {item.option}
                        </td>

                        <td className="px-6 py-4 text-right font-semibold text-blue-700">
                          {item.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
