import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="border-b border-primary/30 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Contact</h1>
            </div>

            <section className="space-y-6">
                <p className="text-lg text-text-muted">
                    For formal inquiries, please use the role-based email addresses below.
                    We do not use contact forms to ensure communication security.
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface p-8 border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-1">Reporting</h2>
                        <p className="text-sm text-text-muted mb-4">For incident submissions and safety concerns</p>
                        <a href="mailto:reporttonightfall@protonmail.com" className="text-primary hover:text-white transition-colors font-mono">
                            reporttonightfall@protonmail.com
                        </a>
                    </div>
                </div>

                <div className="bg-surface p-8 border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-1">General Enquiries</h2>
                        <p className="text-sm text-text-muted mb-4">For press, partnership, or general questions</p>
                        <a href="mailto:nightfallcyberops@protonmail.com" className="text-primary hover:text-white transition-colors font-mono">
                            nightfallcyberops@protonmail.com
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-surface p-6 border-l-2 border-primary mt-8">
                <h3 className="text-white font-bold mb-2">Communication Protocol</h3>
                <p className="text-sm text-text-muted">
                    Emails are monitored daily. Expect a response time of 24-48 hours for non-urgent matters.
                    For urgent threats, please utilize the Telegram Intake bot listed on the <a href="/reporting" className="text-primary underline">Reporting</a> page.
                </p>
            </section>
        </div>
    );
}
