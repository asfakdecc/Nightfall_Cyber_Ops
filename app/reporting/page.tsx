import Link from "next/link";

export default function Reporting() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="border-b border-primary/30 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Reporting Guidance</h1>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm">
                <p className="text-text-muted text-sm italic">
                    <strong>Notice:</strong> We do not accept direct file uploads on this website for security reasons.
                    Use the designated secure channels below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <section className="space-y-6">
                    <h2 className="text-xl font-semibold text-green-400/80 uppercase tracking-wider">What to Report</h2>
                    <ul className="space-y-3 text-sm text-text/90 list-disc list-inside">
                        <li>Credible threats of violence or harm.</li>
                        <li>Large-scale coordinated bot networks.</li>
                        <li>Severe doxxing or privacy violations.</li>
                        <li>Impersonation of Nightfall Cyber Ops personnel.</li>
                        <li>Critical vulnerabilities in digital infrastructure.</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-xl font-semibold text-red-400/80 uppercase tracking-wider">Do NOT Report</h2>
                    <ul className="space-y-3 text-sm text-text/90 list-disc list-inside">
                        <li>Petty interpersonal disputes or drama.</li>
                        <li>General spam (use platform tools).</li>
                        <li>Unverified rumors or hearsay.</li>
                        <li>Requests for "hacking" or offensive services (Immediate Ban).</li>
                    </ul>
                </section>
            </div>

            <section className="space-y-8 pt-8 border-t border-white/5">
                <h2 className="text-xl font-semibold text-white uppercase tracking-wider text-center">Secure Intake Channels</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <a
                        href="https://t.me/ReportToNightfall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-6 bg-surface hover:bg-primary/10 border border-white/10 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-white group-hover:text-primary">Telegram Intake</span>
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-text-muted">Encrypted</span>
                        </div>
                        <p className="text-sm text-text-muted">
                            Direct connection to our intake bot. Preferred for sensitive reports.
                        </p>
                    </a>

                    <a
                        href="https://www.facebook.com/groups/reporttonightfall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-6 bg-surface hover:bg-blue-600/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-white group-hover:text-blue-400">Facebook Group</span>
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-text-muted">Community</span>
                        </div>
                        <p className="text-sm text-text-muted">
                            Join the reporting community. Good for public awareness issues.
                        </p>
                    </a>
                </div>
            </section>

            <section className="bg-red-900/10 border border-red-500/20 p-6">
                <h3 className="text-red-400 font-bold mb-2 uppercase text-sm">Vital Disclaimer</h3>
                <p className="text-xs text-text-muted">
                    Reporting an incident does not guarantee immediate action. Illegal content should always be reported to local law enforcement first.
                    Nightfall Cyber Ops operates within strict legal and ethical boundaries.
                </p>
            </section>
        </div>
    );
}
