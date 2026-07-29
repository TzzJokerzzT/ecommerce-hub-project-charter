import { Flag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const objectives = [
  {
    id: 1,
    fase: "Formulación",
    especific:
      "Definir el propósito, la justificación, la descripción, el alcance, el cronograma, el costo, la calidad y los indicadores de éxito del proyecto.",
    success:
      "Documento de formulación completo, con el 100% de sus secciones definidas.",
    quality:
      "El documento es revisado y validado antes de pasar a la siguiente fase.",
  },
  {
    id: 2,
    fase: "Historias de Usuario",
    especific:
      "Elaborar las historias de usuario por rol (cliente, administrador, vendedor).",
    success:
      "El 100% de las funcionalidades clave cuenta con al menos una historia de usuario.",
    quality:
      'Cada historia sigue el formato "Como/quiero/para" e incluye criterios de aceptación verificables.',
  },
  {
    id: 3,
    fase: "Asignación de Tareas",
    especific:
      "Desglosar cada historia de usuario en tareas técnicas y organizarlas por prioridad.",
    success:
      "El 100% de las historias de usuario tiene tareas técnicas asociadas.",
    quality:
      "Cada tarea es trazable a su historia de usuario y cuenta con una estimación de esfuerzo.",
  },
  {
    id: 4,
    fase: "Desarrollo Frontend",
    especific:
      "Implementar la interfaz de la tienda (catálogo, carrito, checkout) y el panel administrativo.",
    success:
      "Un usuario puede completar el flujo de compra de principio a fin sin errores.",
    quality:
      "Cero errores bloqueantes en los flujos críticos de la interfaz.",
  },
  {
    id: 5,
    fase: "Desarrollo Frontend",
    especific:
      "Diseñar una interfaz clara e intuitiva para el cliente final y para los usuarios administrativos.",
    success:
      "La interfaz es usable sin necesidad de explicación adicional (validado por prueba de usuario o revisión).",
    quality:
      "Consistencia visual y diseño responsive en todas las vistas principales.",
  },
  {
    id: 6,
    fase: "Desarrollo Backend",
    especific:
      "Construir la API que soporte la gestión de productos, clientes, proveedores y ventas.",
    success:
      "Todos los endpoints requeridos están implementados y responden correctamente.",
    quality:
      "Los endpoints cuentan con pruebas funcionales y documentación básica.",
  },
  {
    id: 7,
    fase: "Desarrollo Backend",
    especific:
      "Implementar la lógica de negocio (actualización de inventario, cálculo de totales, roles y permisos).",
    success:
      "Cero inconsistencias entre las ventas registradas y el stock actualizado.",
    quality:
      "Las reglas de negocio críticas están cubiertas por pruebas automatizadas o funcionales.",
  },
  {
    id: 8,
    fase: "Desarrollo Backend",
    especific:
      "Conectar el sistema a una base de datos que garantice persistencia y consistencia.",
    success:
      "Cero pérdidas o corrupciones de datos durante las pruebas.",
    quality:
      "El modelo de datos está normalizado y documentado.",
  },
  {
    id: 9,
    fase: "Arquitectura (transversal)",
    especific:
      "Construir el sistema bajo Clean Architecture y principios SOLID en frontend y backend.",
    success:
      "La separación de capas (presentación, lógica de negocio, datos) se cumple en ambos proyectos.",
    quality:
      "El código pasa revisión respecto a los principios de arquitectura definidos.",
  },
  {
    id: 10,
    fase: "Despliegue",
    especific:
      "Configurar los entornos de desarrollo, staging y producción.",
    success:
      "Los tres entornos están operativos y correctamente diferenciados.",
    quality:
      "Variables de entorno y configuración documentadas para cada ambiente.",
  },
  {
    id: 11,
    fase: "Despliegue",
    especific:
      "Desplegar el frontend y el backend en un ambiente de producción funcional.",
    success:
      "El sistema es accesible públicamente y opera sin caídas tras el despliegue.",
    quality:
      "Tiempo de actividad (uptime) estable durante el período posterior al despliegue.",
  },
  {
    id: 12,
    fase: "Despliegue",
    especific:
      "Realizar pruebas post-despliegue que validen el funcionamiento del sistema en producción.",
    success:
      "Cero errores críticos detectados en producción tras el despliegue.",
    quality:
      "Checklist de pruebas post-despliegue completado al 100%.",
  },
];
export default function ObjectivesSection() {
  return (
    <section className="py-20 bg-[#f2f4f6]">
      <AnimatedSection animation="fadeLeft" className="px-10 max-w-[1280px] mx-auto">
        <div className="mb-12">
          <h3 className="text-[24px] leading-[32px] font-semibold mb-8">Objetivos Estratégicos</h3>
          <div className="bg-white border border-[#c2c6d4] p-8 rounded-xl mb-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Flag size={40} color="#003C81" />
              <div>
                <h4 className="text-[20px] leading-[28px] font-semibold mb-2 text-[#003f87]">
                  Objetivo General
                </h4>
                <p className="text-[16px] leading-[24px] text-[#424752]">
                  Desarrollar e implementar una plataforma escalable de Ecommerce Hub que centralice
                  las operaciones de venta multicanal y gestión de inventario para 500 PyMEs en el
                  primer año fiscal.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="w-16 px-4 py-3 text-left text-sm font-semibold">#</th>
                  <th className="w-48 px-4 py-3 text-left text-sm font-semibold">
                    Fase
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Objetivo Específico
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Indicador de Éxito
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Criterio de Calidad
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {objectives.map((obj) => (
                  <tr
                    key={obj.id}
                    className="transition-colors hover:bg-slate-50 even:bg-gray-50"
                  >
                    <td className="px-4 py-4 font-semibold text-slate-700">
                      {obj.id}
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        {obj.fase}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm leading-6 text-gray-700">
                      {obj.especific}
                    </td>

                    <td className="px-4 py-4 text-sm leading-6 text-gray-700">
                      {obj.success}
                    </td>

                    <td className="px-4 py-4 text-sm leading-6 text-gray-700">
                      {obj.quality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>        </div>
      </AnimatedSection>
    </section>
  );
}

