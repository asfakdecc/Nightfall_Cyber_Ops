export default function Safety() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="border-b border-primary/30 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Cyber Safety & Awareness</h1>
            </div>

            <section className="space-y-6">
                <p className="text-lg text-text-muted">
                    Understanding the digital threat landscape is the first line of defense.
                    We provide public-facing value by categorizing common threats and establishing best practices.
                </p>
            </section>

            <section className="space-y-8">
                <h2 className="text-xl font-semibold text-primary uppercase tracking-wider">Common Threat Categories</h2>
                <div className="grid gap-6">
                    <div className="bg-surface p-6 border-l-4 border-red-500/50">
                        <h3 className="text-white font-bold text-lg mb-2">Social Engineering</h3>
                        <p className="text-text-muted text-sm">
                            Manipulation techniques aimed at tricking individuals into revealing confidential information.
                            Always verify the source before engaging.
                        </p>
                    </div>

                    <div className="bg-surface p-6 border-l-4 border-orange-500/50">
                        <h3 className="text-white font-bold text-lg mb-2">Coordinated Harassment</h3>
                        <p className="text-text-muted text-sm">
                            Organized efforts to intimidate or silence targets online.
                            Do not engage. Document evidence and report to platform authorities immediately.
                        </p>
                    </div>

                    <div className="bg-surface p-6 border-l-4 border-yellow-500/50">
                        <h3 className="text-white font-bold text-lg mb-2">Impersonation</h3>
                        <p className="text-text-muted text-sm">
                            Fake profiles created to damage reputation or scam followers.
                            Check account creation dates and verify against official channels listed on this site.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-primary uppercase tracking-wider">Best Practices</h2>
                <div className="prose prose-invert max-w-none text-text/90">
                    <ul className="space-y-2">
                        <li><strong>Limit PII Exposure:</strong> Restrict public visibility of personal identifying information.</li>
                        <li><strong>2FA Everywhere:</strong> Enable Two-Factor Authentication on all critical accounts.</li>
                        <li><strong>Trust No One:</strong> Verify requests for money or data, even from known contacts (who may be compromised).</li>
                        <li><strong>Digital Hygiene:</strong> Regularly purge old accounts and data logs.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
