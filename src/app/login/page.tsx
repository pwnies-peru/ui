'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network request
        setTimeout(() => {
            router.push('/dashboard');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E8DD6C]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#B85C5C]/10 blur-3xl pointer-events-none" />

            {/* Logo */}
            <Link href="/" className="mb-8 relative z-10 hover:opacity-80 transition-opacity">
                <span className="text-4xl font-playfair font-bold text-black">
                    negocIA<span className="text-[#B85C5C]">!</span>
                </span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative z-10"
            >
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-playfair font-bold text-black mb-2">Bienvenido de nuevo</h1>
                    <p className="text-gray-500 font-inter text-sm">Ingresa para gestionar tus negociaciones</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-sm font-inter font-medium text-gray-700 ml-1">Email</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E8DD6C] focus:border-transparent transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-inter font-medium text-gray-700 ml-1">Contraseña</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E8DD6C] focus:border-transparent transition-all"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#E8DD6C] text-black font-inter font-semibold py-3.5 rounded-xl hover:bg-[#D4C854] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                            <>
                                Ingresar al Dashboard
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 font-inter">
                        ¿No tienes cuenta?{' '}
                        <Link href="#" className="text-[#B85C5C] font-semibold hover:underline">
                            Crear cuenta gratis
                        </Link>
                    </p>
                </div>
            </motion.div>

            <p className="mt-8 text-xs text-gray-400 font-inter text-center">
                © 2025 negocIA. Todos los derechos reservados.
            </p>
        </div>
    );
}
