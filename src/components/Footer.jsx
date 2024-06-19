export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-32 sm:mt-40" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; {currentYear} SVHEN Buildings. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
