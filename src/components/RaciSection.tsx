import AnimatedSection from "./AnimatedSection";

type Raci = 'R' | 'A' | 'C' | 'I';

const raciStyles: Record<Raci, string> = {
  R: 'bg-[#0056b3] text-white',
  A: 'bg-[#003f87] text-white',
  C: 'bg-[#d0e1fb] text-[#54647a]',
  I: 'bg-[#e0e3e5] text-[#424752]',
};

const roles = ['PM', 'DEV FE', 'DEV BE', 'QA', 'CLIENTE'];

const rows: { activity: string; assignments: Raci[] }[] = [
  { activity: 'Definición de Requisitos', assignments: ['A', 'C', 'C', 'I', 'R'] },
  { activity: 'Arquitectura del Sistema', assignments: ['C', 'I', 'A', 'R', 'I'] },
  { activity: 'Desarrollo UI/UX', assignments: ['I', 'A', 'I', 'C', 'R'] },
  { activity: 'Pruebas de Integración', assignments: ['C', 'R', 'R', 'A', 'I'] },
];

export default function RacioSection() {
  return (
    <section className="py-20 bg-[#f2f4f6]">
      <AnimatedSection animation="slideRight" className="px-10 max-w-[1280px] mx-auto overflow-x-auto">
        <h3 className="text-[24px] leading-[32px] font-semibold mb-8">Matriz RACI</h3>
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-[#c2c6d4]">
          <thead className="bg-[#e6e8ea] border-b border-[#c2c6d4]">
            <tr>
              <th className="p-4 text-left text-[12px] leading-[16px] tracking-[0.05em] font-bold">
                ACTIVIDAD / ROL
              </th>
              {roles.map((role) => (
                <th
                  key={role}
                  className="p-4 text-center text-[12px] leading-[16px] tracking-[0.05em] font-bold"
                >
                  {role}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c2c6d4]">
            {rows.map((row) => (
              <tr key={row.activity}>
                <td className="p-4 text-[16px] leading-[24px]">{row.activity}</td>
                {row.assignments.map((raci, i) => (
                  <td key={i} className="p-4 text-center">
                    <div className={`raci-badge ${raciStyles[raci]} mx-auto`}>{raci}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </AnimatedSection>
    </section>
  );
}

