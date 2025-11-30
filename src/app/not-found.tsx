import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/50">
          <span className="text-white font-bold text-3xl">N</span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">
          Página no encontrada
        </h2>

        <p className="text-gray-400 mb-8">
          La página que buscas no existe o fue movida.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all"
        >
          Volver al inicio
        </Link>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} Negocia
      </p>
    </div>
  );
}
