import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import ImageSliderModal from "./ImageSliderModal";

const milestones = [
  {
    date: "07 AGO 2026",
    title: "Formulación del proyecto finalizada",
    description:
      "Se completa la documentación inicial del proyecto, incluyendo propósito, alcance, cronograma, costos y gestión de riesgos.",
  },
  {
    date: "14 AGO 2026",
    title: "Historias de usuario definidas y validadas",
    description:
      "Se documentan y validan las historias de usuario para clientes, administradores y vendedores.",
  },
  {
    date: "19 AGO 2026",
    title: "Asignación de tareas técnicas completada",
    description:
      "Las historias de usuario se descomponen en tareas técnicas priorizadas y estimadas.",
  },
  {
    date: "28 AGO 2026",
    title: "Módulo de Inventario y Proveedores completado",
    description:
      "Se implementan las funcionalidades del backend para la gestión de inventario y proveedores.",
  },
  {
    date: "04 SEP 2026",
    title: "Módulo de Clientes y Autenticación completado",
    description:
      "Se desarrolla el sistema de autenticación y la administración de clientes.",
  },
  {
    date: "11 SEP 2026",
    title: "Módulo de Ventas / API de Checkout completado",
    description:
      "Se implementa la lógica de ventas y la API encargada del proceso de compra.",
  },
  {
    date: "18 SEP 2026",
    title: "Frontend de la tienda completado",
    description:
      "Se finaliza la interfaz del catálogo, carrito de compras y proceso de checkout.",
  },
  {
    date: "25 SEP 2026",
    title: "Panel administrativo completado",
    description:
      "Se entrega el backoffice con herramientas para administrar productos, clientes, proveedores y ventas.",
  },
  {
    date: "30 SEP 2026",
    title: "Integración frontend-backend finalizada",
    description:
      "Se conectan correctamente el frontend y el backend, validando el funcionamiento de todas las funcionalidades.",
  },
  {
    date: "07 OCT 2026",
    title: "Pruebas funcionales y correcciones completadas",
    description:
      "Se ejecutan pruebas funcionales, se corrigen incidencias y se verifica la estabilidad del sistema.",
  },
  {
    date: "14 OCT 2026",
    title: "Despliegue en producción",
    description:
      "La aplicación es publicada en el entorno de producción y queda disponible para los usuarios finales.",
  },
  {
    date: "16 OCT 2026",
    title: "Pruebas post-despliegue y cierre del proyecto",
    description:
      "Se valida el correcto funcionamiento en producción, se documenta el cierre y se realiza la entrega oficial del proyecto.",
  },
];

function MilestoneItem({ milestone }: { milestone: (typeof milestones)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative pl-10">
      {/* Dot */}
      <motion.div
        className="absolute -left-2.5 top-0 w-5 h-5 bg-[#003f87] rounded-full ring-4 ring-[#d7e2ff]"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="font-mono text-[#003f87] text-sm">{milestone.date}</span>
        <h4 className="font-bold text-lg">{milestone.title}</h4>
        <p className="text-[#424752]">{milestone.description}</p>
      </motion.div>
    </div>
  );
}

export default function TimelineSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="timeline" className="py-20 bg-white">
      <AnimatedSection animation="fadeUp" className="px-10 max-w-[1280px] mx-auto">
        <h3 className="text-[24px] leading-[32px] font-semibold mb-12">Cronograma de Hitos</h3>
        <div className="flex justify-start gap-2 my-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0056b3] text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2 text-[14px] hover:bg-[#424752] duration-300 ease-in-out cursor-pointer"
          >
            Ver cronograma
          </button>
          <a href="https://alexbuelvas92.atlassian.net/jira/software/projects/KAN/boards/2/timeline" target="_blanck" rel="noopener noreferrer">
            <button
              className="bg-[#0056b3] text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2 text-[14px] hover:bg-[#424752] duration-300 ease-in-out cursor-pointer"
            >
              Ir cronograma
            </button>
          </a>
        </div>
        <div className="relative border-l-2 border-[#003f87]/20 ml-4 space-y-12">
          {milestones.map((m) => (
            <MilestoneItem key={m.date} milestone={m} />
          ))}
        </div>
      </AnimatedSection>
      <ImageSliderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

