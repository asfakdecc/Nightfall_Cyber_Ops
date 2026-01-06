export default function Intelligence() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="border-b border-primary/30 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Intelligence & Updates</h1>
            </div>

            <section className="space-y-6">
                <p className="text-lg text-text-muted">
                    Our public intelligence feed provides high-level threat trends and clarifications on misinformation.
                    This page mirrors our official X (formerly Twitter) presence.
                </p>
            </section>

            <section className="grid gap-8">

                {/* Placeholder for Dynamic Content / Embeds */}
                <div className="bg-surface border border-white/10 p-8 text-center space-y-6">
                    <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-black fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </div>

                    <h2 className="text-xl font-bold text-white">Live Intel Feed</h2>

                    <p className="text-text-muted max-w-md mx-auto">
                        For real-time operational updates, threat alerts, and rapid clarifications, follow our designated intelligence handle.
                    </p>

                    <a
                        href="https://x.com/NightfallIntel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-white text-black font-bold uppercase hover:bg-gray-200 transition-colors"
                    >
                        Follow @NightfallIntel
                    </a>
                </div>

                <div className="space-y-6 mt-8">
                    <h2 className="text-xl font-semibold text-primary uppercase tracking-wider">Current Threat Trends (Q1 2026)</h2>
                    <div className="space-y-4">
                        <article className="border-l-2 border-primary pl-4 py-1">
                            <h3 className="text-white font-bold">AI-Generated Disinformation</h3>
                            <p className="text-sm text-text-muted mt-1">Increasing volume of synthetic media used to fabricate evidence. Verification via cryptographic signing or original source tracing is mandatory.</p>
                        </article>
                        <article className="border-l-2 border-primary pl-4 py-1">
                            <h3 className="text-white font-bold">Targeted Phishing Campaigns</h3>
                            <p className="text-sm text-text-muted mt-1">Sophisticated spear-phishing targeting organization admins using compromised "verified" accounts.</p>
                        </article>
                    </div>
                </div>

            </section>
        </div>
    );
}
