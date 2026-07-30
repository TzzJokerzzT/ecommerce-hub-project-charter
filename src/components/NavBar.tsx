import { Download, ChevronDown, FileText } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const downloadOptions = [
  { label: 'Acta de Constitución', href: '/Plantilla Acta de Constitucion  del Proyecto.doc', icon: FileText },
  { label: 'EDT', href: '/EDT.DOC', icon: FileText },
  { label: 'Organigrama', href: '/Organigrama.doc', icon: FileText },
  { label: 'Matriz Raci', href: '/Matriz Raci.png', icon: FileText }
];

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.1 } },
};

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const links = [
    { href: '#hero', label: 'Hero' },
    { href: '#purpose', label: 'Purpose' },
    { href: '#scope', label: 'Scope' },
    { href: '#team', label: 'Team' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#risk', label: 'Risk' },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-[#f7f9fb] border-b border-[#c2c6d4] transition-all duration-200 ${scrolled ? 'shadow-md h-14' : 'h-16'
        }`}
    >
      <div className="flex justify-between items-center w-full px-10 max-w-[1280px] mx-auto h-full">
        <div className="flex items-center gap-4">
          <span className="text-[24px] leading-[32px] font-bold text-[#003f87]">Ecommerce Hub</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[16px] text-[#424752]">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors cursor-pointer hover:text-[#003f87] ${i === 0 ? 'text-[#003f87] font-bold border-b-2 border-[#003f87] pb-1' : ''
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4" ref={menuRef}>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-[#0056b3] text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2 text-[14px] cursor-pointer"
            >
              <Download size={16} />
              Descargar Archivos
              <motion.span
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center"
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-full mt-2 w-56 bg-white border border-[#c2c6d4] rounded-xl shadow-lg py-2 z-50 origin-top-right"
                >
                  {downloadOptions.map((option) => (
                    <motion.a
                      key={option.label}
                      variants={itemVariants}
                      href={option.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#424752] hover:bg-[#f2f4f6] hover:text-[#003f87] transition-colors cursor-pointer"
                      download
                    >
                      <option.icon size={16} className="text-[#003f87]" />
                      {option.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

