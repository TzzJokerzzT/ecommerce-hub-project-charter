import AnimatedSection from "./AnimatedSection";

const phases = [
  {
    label: '1. Formulación',
    color: 'bg-blue-600',
    content: ['1.1 Formular proposito y alcance', '1.2 Desarrollar cronograma y costo', '1.3 Analizar riesgos e interesados']
  },
  {
    label: '2. Historias de usuario',
    color: 'bg-red-600',
    content: ['2.1 Eleborar historias de usuario', '2.2 Definir criterios de aceptación']
  },
  {
    label: '3. Asignación de tares',
    color: 'bg-purple-600',
    content: ['3.1 Desglosar tareas tecnicas', '3.2 Asignar tareas por sprint']
  },
  {
    label: '4. Desarrollo Frontend',
    color: 'bg-yellow-600',
    content: ['4.1 Implementar catálogo y carrito', '4.2 Construir panel administrativo']
  },
  {
    label: '5. Desarrollo BE',
    color: 'bg-green-600',
    content: ['5.1 Construir API REST', '5.2 Implementar lógica de negocio', '5.3 Modelar base de datos']
  },
  {
    label: '6. Despliegue',
    color: 'bg-orange-600',
    content: ['6.1 Configurar entornos', '6.2 Desplegar a producción', '6.3 Ejecutar pruebas post-despliegue']
  },
  {
    label: '7. Cierre',
    color: 'bg-slate-700',
    content: ['7.1 Identificar qué funcionó bien', '7.2 Identificar qué mejorar', '7.3 Definir recomendaciones clave']
  },
];

export default function EDTSection() {
  return (
    <section className="overflow-x-auto bg-[#f2f4f6] py-20">
      <AnimatedSection animation="fadeDown" className="mx-auto max-w-[1280px] min-w-[1000px] px-10">
        <h3 className="mb-12 text-[24px] leading-[32px] font-semibold">
          EDT - Estructura de Desglose del Trabajo
        </h3>
        <div className="flex flex-col items-center">
          <div className="w-64 rounded-lg bg-[#003f87] p-4 text-center font-bold text-white shadow-md">
            Project Charter: Ecommerce Hub
          </div>
          <div className="h-8 w-px bg-[#727784]" />
          <div className="h-px w-[85%] bg-[#727784]" />
          <div className="mt-0 flex w-full justify-between">
            {phases.map((phase) => (
              <div key={phase.label} className="flex flex-1 flex-col items-center">
                <div className="h-8 w-px bg-[#727784]" />
                <div
                  className={`${phase.color} w-40 rounded p-3 text-center text-sm font-semibold text-white`}
                >
                  {phase.label}
                </div>
                <div className="h-8 w-px bg-[#727784]" />
                <div
                  className={`${phase.color} w-40 rounded p-3 text-center text-sm font-semibold text-white`}
                >
                  {phase.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

