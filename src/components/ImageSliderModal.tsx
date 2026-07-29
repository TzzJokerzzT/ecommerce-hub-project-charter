import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;

const images = [
  { src: "/01.png", alt: "Cronograma - Imagen 1" },
  { src: "/02.png", alt: "Cronograma - Imagen 2" },
  { src: "/03.png", alt: "Cronograma - Imagen 3" },
  { src: "/04.png", alt: "Cronograma - Imagen 4" },
  { src: "/05.png", alt: "Cronograma - Imagen 5" },
  { src: "/06.png", alt: "Cronograma - Imagen 6" },
  { src: "/07.png", alt: "Cronograma - Imagen 7" },
];

interface ImageSliderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageSliderModal({ isOpen, onClose }: ImageSliderModalProps) {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom when changing image
  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      resetZoom();
      setCurrent(([prev]) => {
        const next = prev + newDirection;
        if (next < 0) return [images.length - 1, newDirection];
        if (next >= images.length) return [0, newDirection];
        return [next, newDirection];
      });
    },
    [resetZoom]
  );

  const goTo = useCallback(
    (index: number) => {
      resetZoom();
      setCurrent(([prev]) => [index, index > prev ? 1 : -1]);
    },
    [resetZoom]
  );

  // Zoom controls
  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(s + ZOOM_STEP, MAX_SCALE));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => {
      const next = Math.max(s - ZOOM_STEP, MIN_SCALE);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Double-click to toggle zoom
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      if (scale > 1) {
        resetZoom();
      } else {
        setScale(2.5);
        // Zoom toward click point
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const x = (e.clientX - rect.left - rect.width / 2) * 0.5;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.5;
          setPosition({ x: -x, y: -y });
        }
      }
    },
    [scale, resetZoom]
  );

  // Mouse wheel zoom
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      setScale((s) => {
        const next = Math.min(Math.max(s + delta, MIN_SCALE), MAX_SCALE);
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
    };

    const el = containerRef.current;
    el?.addEventListener("wheel", handleWheel, { passive: false });
    return () => el?.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  // Drag to pan when zoomed
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale <= 1) return;
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      posStart.current = { ...position };
    },
    [scale, position]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPosition({
        x: posStart.current.x + dx,
        y: posStart.current.y + dy,
      });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, paginate, onClose, zoomIn, zoomOut, resetZoom]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const zoomPercent = Math.round(scale * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-4xl mx-4 flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Top bar: close + zoom controls */}
            <div className="flex items-center justify-between mb-2">
              {/* Zoom controls */}
              <div className="flex items-center gap-1 bg-black/50 rounded-lg px-1 py-1">
                <button
                  onClick={zoomOut}
                  disabled={scale <= MIN_SCALE}
                  className="w-8 h-8 rounded flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Alejar"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-white/60 text-xs font-mono w-10 text-center select-none">
                  {zoomPercent}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={scale >= MAX_SCALE}
                  className="w-8 h-8 rounded flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Acercar"
                >
                  <ZoomIn size={16} />
                </button>
                {scale > 1 && (
                  <button
                    onClick={resetZoom}
                    className="w-8 h-8 rounded flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Restablecer zoom"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X size={28} />
              </button>
            </div>

            {/* Image container */}
            <div
              ref={containerRef}
              className={`relative bg-[#1a1a1a] rounded-xl overflow-hidden aspect-[16/10] ${
                scale > 1 ? "cursor-grab" : "cursor-default"
              } ${isDragging ? "cursor-grabbing" : ""}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={current}
                  src={images[current].src}
                  alt={images[current].alt}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 w-full h-full object-contain select-none"
                  draggable={false}
                  style={{
                    scale: scale.toString(),
                    x: position.x,
                    y: position.y,
                  }}
                />
              </AnimatePresence>

              {/* Prev arrow */}
              {scale <= 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      paginate(-1);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      paginate(1);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "bg-[#0056b3] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-center text-white/50 text-sm mt-2">
              {current + 1} / {images.length}
            </p>

            {/* Keyboard hint */}
            <p className="text-center text-white/25 text-xs mt-1 select-none">
              Scroll para zoom · Doble clic para ampliar · ← → para navegar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
