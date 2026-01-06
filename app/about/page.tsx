export default function About() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="border-b border-primary/30 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">About Nightfall</h1>
            </div>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-primary uppercase tracking-wider">Mission Statement</h2>
                <p className="text-text/90 leading-relaxed">
                    Nightfall Cyber Ops exists to establish a definitive anchor for digital operations.
                    In a landscape defined by volatility and misinformation, we provide the structured backbone
                    for verification, intelligence distribution, and controlled public interaction.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-primary uppercase tracking-wider">Operating Philosophy</h2>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                    <div className="bg-surface p-6 border border-white/5">
                        <h3 className="text-white font-bold mb-3">Minimalism</h3>
                        <p className="text-text-muted">
                            We believe in the power of restraint. We do not engage for the sake of engagement.
                            Information is released only when verified, necessary, and actionable.
                        </p>
                    </div>

                    <div className="bg-surface p-6 border border-white/5">
                        <h3 className="text-white font-bold mb-3">Authority</h3>
                        <p className="text-text-muted">
                            Credibility is our currency. This central hub serves as the spine of our operations,
                            ensuring that all external social limbs are anchored to a verified origin.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-primary uppercase tracking-wider">Core Values</h2>
                <ul className="list-disc list-inside space-y-3 text-text/90 marker:text-primary">
                    <li><strong className="text-white">Discipline:</strong> Controlled action over reactive chaos.</li>
                    <li><strong className="text-white">Precision:</strong> Accuracy is non-negotiable.</li>
                    <li><strong className="text-white">Accountability:</strong> We own our narrative and our operations.</li>
                </ul>
            </section>
        </div>
    );
}
