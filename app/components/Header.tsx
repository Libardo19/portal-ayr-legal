import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white py-6 px-4 md:px-10 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Branding */}
        <div className="flex items-center gap-4">
          <div className="bg-[#102131] p-2 rounded shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-black text-[#102131] leading-none tracking-tighter">A&amp;R</h1>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Abogados e Ingenieros</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-sky-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-7.088a6.5 6.5 0 00-13 0c0 2.686 1.274 5.01 3.218 7.088a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-gray-800">Valledupar, Cesar</p>
              <p className="text-gray-500">Colombia</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 text-sky-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-gray-800">+ (57) 300 000 0000</p>
              <p className="text-gray-500">info@ar-abogadoseingenieros.com</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            href="#contacto"
            className="text-white font-bold py-4 px-8 rounded shadow-lg transition duration-300 uppercase text-sm tracking-wider hover:opacity-90"
            style={{ backgroundColor: '#C8A75D' }}
          >
            Solicitar Consulta
          </Link>
        </div>

      </div>
    </header>
  );
}