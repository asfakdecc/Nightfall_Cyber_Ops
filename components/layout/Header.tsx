import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const navItems = [
        { name: "About", href: "/about" },
        { name: "Safety", href: "/safety" },
        { name: "Reporting", href: "/reporting" },
        { name: "Intel", href: "/intelligence" },
        { name: "Channels", href: "/channels" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="w-full border-b border-white/10 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-8 h-8 md:w-10 md:h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Nightfall Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_8px_rgba(70,130,180,0.5)] transition-opacity group-hover:opacity-80"
                                    priority
                                />
                            </div>
                            <span className="font-bold text-lg tracking-wider text-primary hidden sm:block">
                                NIGHTFALL <span className="text-white">CYBER OPS</span>
                            </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200 uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Placeholder (Simple) */}
                    <div className="md:hidden">
                        <span className="text-xs text-text-muted">[MENU]</span>
                        {/* In a real implementation, we'd add a mobile drawer here */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
