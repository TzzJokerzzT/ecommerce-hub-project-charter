import AnimatedSection from "./AnimatedSection";

export default function PurposeSection() {
  return (
    <section id="purpose" className="py-20 bg-white">
      <AnimatedSection animation="fadeUp" className="px-10 max-w-[800px] mx-auto text-center">
        <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#003f87] uppercase mb-4 block">
          Propósito del Proyecto
        </span>
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold mb-6">
          Centralización de Procesos para PyMEs
        </h2>
        <p className="text-[18px] leading-[28px] text-[#424752] leading-relaxed">
          Desarrollar <strong>EcommerceHub</strong>, una plataforma de comercio electrónico integral que permita a una empresa o emprendedor gestionar de forma centralizada todo el ciclo operativo de su negocio: la venta de productos en línea, la administración de clientes, el control de inventario, la gestión de proveedores y el seguimiento de ventas. El sistema busca unificar en una sola herramienta procesos que normalmente se manejan de forma dispersa (hojas de cálculo, sistemas independientes, procesos manuales), reduciendo errores operativos y mejorando la trazabilidad de la información del negocio.</p>
      </AnimatedSection>
    </section>
  );
}

