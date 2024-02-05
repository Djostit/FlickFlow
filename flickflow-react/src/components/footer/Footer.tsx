import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Если Footer виден, запускаем анимацию
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
        }
      },
      { threshold: 0.1 } // Порог видимости, можно настроить по вашему усмотрению
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const controls = useAnimation();

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-gray-100 dark:bg-gray-800 pb-16 text-sm leading-6 mt-auto"
    >
      <div className="max-w-7xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8 dark:divide-gray-700">
        <div className="mt-16 pt-10 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Все права защищены. Flick Flow</p>
          <p>Сделано с любовью и страстью к питону.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
