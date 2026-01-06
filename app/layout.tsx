import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: "--font-inconsolata",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Nightfall Cyber Ops",
    description: "Dominance. Precision. Control. The official central authority hub for Nightfall Cyber Ops.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inconsolata.variable} font-mono bg-background text-text min-h-screen flex flex-col`}>
                <AmbientBackground />
                <Header />
                <main className="flex-grow flex flex-col items-center justify-start w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
