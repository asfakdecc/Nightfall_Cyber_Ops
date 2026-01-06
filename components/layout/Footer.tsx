import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-background/90 z-20 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Identity */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase">Nightfall Cyber Ops</h3>
                        <p className="text-xs text-text-muted max-w-xs">
                            Dominance. Precision. Control. The central authority for digital identity and operational integrity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white tracking-widest uppercase">Navigation</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs text-text-muted">
                            <Link href="/about" className="hover:text-primary">About</Link>
                            <Link href="/channels" className="hover:text-primary">Verify Channels</Link>
                            <Link href="/safety" className="hover:text-primary">Cyber Safety</Link>
                            <Link href="/contact" className="hover:text-primary">Contact</Link>
                            <Link href="/reporting" className="hover:text-primary">Reporting</Link>
                            <Link href="/intelligence" className="hover:text-primary">Intelligence</Link>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-red-400/80 tracking-widest uppercase">System Notice</h3>
                        <p className="text-[10px] text-text-muted leading-relaxed">
                            This website is for informational purposes only. Nightfall Cyber Ops does not guarantee operational response times via public channels.
                            <br /><br />
                            &copy; {new Date().getFullYear()} Nightfall Cyber Ops. All operations restricted.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
