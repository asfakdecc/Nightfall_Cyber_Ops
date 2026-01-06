import Link from "next/link";
import { ExternalLink, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Channels() {
    const channels = [
        { name: "Facebook Page", url: "https://www.facebook.com/NightfallCyberOps", type: "Official Page" },
        { name: "Facebook Group", url: "https://www.facebook.com/groups/reporttonightfall", type: "Community/Reporting" },
        { name: "X (Intel)", url: "https://x.com/NightfallIntel", type: "Intelligence Feed" },
        { name: "Instagram", url: "https://www.instagram.com/nightfallcyberops/", type: "Updates" },
        { name: "Telegram Channel", url: "https://t.me/ReportToNightfall", type: "Announcements" },
        { name: "Telegram Group", url: "https://t.me/DiscussWithNightfall", type: "Discussion" },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="border-b border-primary/30 pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Official Channels</h1>
            </div>

            <section className="bg-surface border border-white/5 p-8">
                <p className="text-lg text-text/90 mb-6">
                    These are the <strong>ONLY</strong> verified platforms operated by Nightfall Cyber Ops.
                    Any handle, group, or individual claiming affiliation not listed here is an impersonator.
                </p>

                <div className="grid gap-4">
                    {channels.map((channel) => (
                        <a
                            key={channel.url}
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-black/40 hover:bg-primary/5 border border-white/10 hover:border-primary/50 transition-all duration-200 group"
                        >
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="block font-bold text-white group-hover:text-primary transition-colors">{channel.name}</span>
                                    <span className="text-xs text-text-muted uppercase tracking-wider">{channel.type}</span>
                                </div>
                            </div>
                            <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </section>

            <section className="bg-red-900/10 border border-red-500/20 p-6 flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-red-400 font-bold mb-2 uppercase">Impersonation Warning</h3>
                    <p className="text-sm text-text-muted">
                        Nightfall Cyber Ops agents will <strong>NEVER</strong> ask for your passwords, financial details, or two-factor authentication codes.
                        We do not engage in private DMs for official business unless initiated via these verified channels.
                        If you are approached by someone claiming to be "staff" from an unlisted account, block and report them immediately.
                    </p>
                </div>
            </section>
        </div>
    );
}
