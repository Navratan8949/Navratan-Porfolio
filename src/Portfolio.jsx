import React, { useState, useEffect } from "react";
import {
    Menu, X, ArrowRight, ArrowUpRight, Mail, Phone,
    MapPin, Smartphone, Globe, Database, Code2, GraduationCap, Briefcase,
    Layers, Sparkles, CheckCircle2, Rocket,
} from "lucide-react";

const GithubIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
);

const c = {
    bg: "#0A0E1A",
    bgSoft: "#0D1220",
    surface: "#121828",
    surface2: "#161D30",
    border: "#212B42",
    borderSoft: "#1A2136",
    text: "#EEF1F8",
    muted: "#8B93A8",
    faint: "#5B6478",
    violet: "#7C6CFF",
    violetDim: "#4E3BD6",
    violetSoft: "rgba(124,108,255,0.14)",
    mint: "#33D9B2",
    mintSoft: "rgba(51,217,178,0.14)",
};

const NAV_LINKS = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
    {
        title: "Mobile",
        icon: Smartphone,
        accent: c.mint,
        accentSoft: c.mintSoft,
        items: ["React Native", "Expo CLI"],
    },
    {
        title: "Frontend",
        icon: Code2,
        accent: c.violet,
        accentSoft: c.violetSoft,
        items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    },
    {
        title: "Backend & Data",
        icon: Database,
        accent: c.mint,
        accentSoft: c.mintSoft,
        items: ["Node.js", "MongoDB"],
    },
    {
        title: "Always adding",
        icon: Layers,
        accent: c.violet,
        accentSoft: c.violetSoft,
        items: ["Git & GitHub", "REST APIs", "+ more on the way"],
    },
];

const SERVICES = [
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "End-to-end React Native apps — from wireframe to a build published on the Play Store.",
    },
    {
        icon: Globe,
        title: "Web Development",
        desc: "Fast, responsive websites and web apps with React.js and Next.js.",
    },
    {
        icon: Database,
        title: "Backend & APIs",
        desc: "Node.js and MongoDB backends that power the apps — auth, data, and everything in between.",
    },
];

const JOURNEY = [
    { tag: "Class 10", title: "Secondary School", detail: "Completed", state: "done" },
    { tag: "Class 12", title: "Higher Secondary", detail: "Completed", state: "done" },
    { tag: "Now", title: "Bachelor's Degree", detail: "2nd year — in progress, alongside shipping real apps", state: "active" },
];

const PROJECTS = [
    {
        name: "BellBuddy",
        category: "Mobile App",
        year: "2026",
        desc: "A digital reminder app that keeps users on top of their tasks and schedules, built for everyday, no-friction use.",
        stack: ["React Native", "Next.js", "MongoDB"],
        highlights: ["Custom reminder scheduling and notifications", "Clean, distraction-free UI"],
    },
    {
        name: "BNI App",
        category: "Mobile App",
        year: "2026",
        desc: "A business networking app that helps professionals connect, share referrals, and grow their network.",
        stack: ["React Native", "Node.js", "MongoDB"],
        highlights: ["Member profiles and referral tracking", "Node.js REST API backend"],
    },
    {
        name: "Staff Management",
        category: "Mobile App",
        year: "2025",
        desc: "A school staff management system covering attendance, daily updates, and internal communication in one app.",
        stack: ["React Native", "Node.js", "MongoDB"],
        highlights: ["Attendance and daily task tracking", "Role-based access for staff"],
    },
    {
        name: "Wavvy",
        category: "Mobile App",
        year: "2025",
        desc: "A booking app for a hair salon — clients browse services, check offers, and book appointments in a few taps.",
        stack: ["React Native", "Node.js", "MongoDB"],
        highlights: ["Real-time appointment booking", "Offers and service catalog"],
    },
    {
        name: "CRM",
        category: "Web App",
        year: "2025",
        desc: "A custom CRM for tracking customers, sales pipelines, and follow-ups from a single dashboard.",
        stack: ["React.js", "Node.js", "MongoDB"],
        highlights: ["Pipeline and lead management dashboard", "MongoDB-backed customer records"],
    },
    {
        name: "Femora",
        category: "Mobile App",
        year: "2025",
        desc: "An inventory management app for tracking stock, movement, and day-to-day operations on the go.",
        stack: ["React Native", "Node.js", "MongoDB"],
        highlights: ["Real-time stock tracking", "Operations dashboard for daily use"],
    },
];

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goto = (id) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div style={{ background: c.bg, color: c.text, fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        html { scroll-behavior: smooth; }
        .disp { font-family: 'Sora', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .chip { transition: border-color .2s ease, transform .2s ease; }
        .card { transition: border-color .25s ease, transform .25s ease; }
        .card:hover { transform: translateY(-4px); }
        .navlink { position: relative; }
        .navlink::after { content:''; position:absolute; left:0; right:0; bottom:-4px; height:1px; background:${c.mint}; transform: scaleX(0); transform-origin: left; transition: transform .2s ease; }
        .navlink:hover::after { transform: scaleX(1); }
        .btn-primary { transition: transform .15s ease, box-shadow .15s ease; }
        .btn-primary:hover { transform: translateY(-2px); }
      `}</style>

            {/* NAV */}
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backdropFilter: "blur(10px)",
                    background: scrolled ? "rgba(10,14,26,0.85)" : "rgba(10,14,26,0.4)",
                    borderBottom: `1px solid ${scrolled ? c.border : "transparent"}`,
                    transition: "all .25s ease",
                }}
            >
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <button onClick={() => goto("home")} className="disp" style={{ background: "none", border: "none", cursor: "pointer", color: c.text, fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${c.violet}, ${c.mint})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#0A0E1A", fontWeight: 800 }}>NP</span>
                        Navratan
                    </button>

                    <nav style={{ display: "flex", gap: 28 }} className="hidden-mobile">
                        {NAV_LINKS.map((l) => (
                            <button key={l.id} onClick={() => goto(l.id)} className="navlink" style={{ background: "none", border: "none", cursor: "pointer", color: c.muted, fontSize: 14 }}>
                                {l.label}
                            </button>
                        ))}
                    </nav>

                    <button onClick={() => goto("contact")} className="btn-primary hidden-mobile" style={{ background: c.text, color: c.bg, border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                        Let's talk
                    </button>

                    <button onClick={() => setMenuOpen((v) => !v)} className="show-mobile" style={{ background: "none", border: `1px solid ${c.border}`, borderRadius: 8, padding: 8, color: c.text, cursor: "pointer" }}>
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="show-mobile" style={{ borderTop: `1px solid ${c.border}`, padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 14, background: c.bgSoft }}>
                        {NAV_LINKS.map((l) => (
                            <button key={l.id} onClick={() => goto(l.id)} style={{ background: "none", border: "none", textAlign: "left", color: c.muted, fontSize: 15, padding: "6px 0", cursor: "pointer" }}>
                                {l.label}
                            </button>
                        ))}
                        <button onClick={() => goto("contact")} style={{ background: c.text, color: c.bg, border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                            Let's talk
                        </button>
                    </div>
                )}
            </header>

            {/* HERO */}
            <section
                id="home"
                style={{
                    position: "relative",
                    maxWidth: 1120,
                    margin: "0 auto",
                    padding: "72px 24px 64px",
                    display: "grid",
                    gridTemplateColumns: "1.15fr 0.85fr",
                    gap: 40,
                    alignItems: "center",
                    backgroundImage: `radial-gradient(${c.borderSoft} 1px, transparent 1px)`,
                    backgroundSize: "26px 26px",
                    backgroundPosition: "-10px -10px",
                }}
                className="hero-grid"
            >
                <div>
                    <div className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${c.border}`, background: c.surface, borderRadius: 999, padding: "6px 14px", fontSize: 12, color: c.mint, marginBottom: 24 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.mint, display: "inline-block" }} />
                        open to full-time opportunities
                    </div>

                    <h1 className="disp" style={{ fontSize: "clamp(2.1rem, 5vw, 3.4rem)", lineHeight: 1.08, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
                        I build apps that go{" "}
                        <span style={{ color: "transparent", backgroundImage: `linear-gradient(90deg, ${c.violet}, ${c.mint})`, WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                            from idea to app store.
                        </span>
                    </h1>

                    <p style={{ fontSize: 17, color: c.muted, lineHeight: 1.7, maxWidth: 500, marginBottom: 32 }}>
                        I'm Navratan Prajapat, a React Native &amp; React.js developer with 2+ years of hands-on
                        experience shipping mobile apps and web platforms end to end — UI, backend and all.
                    </p>

                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
                        <button onClick={() => goto("projects")} className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${c.violet}, ${c.violetDim})`, color: "#fff", border: "none", borderRadius: 10, padding: "13px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                            View projects <ArrowRight size={16} />
                        </button>
                        <button onClick={() => goto("contact")} className="btn-primary" style={{ background: "transparent", color: c.text, border: `1px solid ${c.border}`, borderRadius: 10, padding: "13px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                            Get in touch
                        </button>
                        <a href="/Navratan_React_Native_React.js_Developer.pdf" download className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: c.muted, border: `1px dashed ${c.border}`, borderRadius: 10, padding: "13px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                            Download resume
                        </a>
                    </div>

                    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                        {[
                            ["2+", "Years experience"],
                            ["2", "Apps published"],
                            ["6+", "Projects shipped"],
                        ].map(([n, l]) => (
                            <div key={l}>
                                <div className="disp" style={{ fontSize: 26, fontWeight: 800, color: c.text }}>{n}</div>
                                <div style={{ fontSize: 13, color: c.faint, marginTop: 2 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }} className="hero-phones">
                    <div style={{ position: "relative", width: 300, maxWidth: "100%" }}>
                        <div
                            style={{
                                borderRadius: 24,
                                overflow: "hidden",
                                border: `2px solid ${c.border}`,
                                background: `linear-gradient(160deg, ${c.violet}33, ${c.mint}22)`,
                                aspectRatio: "4 / 5",
                                position: "relative",
                            }}
                        >
                            {/* Replace src below with your own photo URL, or upload a file and swap it in */}
                            <img
                                src="/navratan.jpg"
                                alt="Navratan Prajapat"
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display = "flex";
                                }}
                            />
                            <div style={{ display: "none", position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" }}>
                                <span className="disp" style={{ fontSize: 72, fontWeight: 800, color: c.text, opacity: 0.35 }}>NP</span>
                            </div>
                        </div>

                        <div style={{ position: "absolute", bottom: -16, left: -16, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                            <Smartphone size={15} color={c.mint} />
                            <span className="mono" style={{ fontSize: 11.5, color: c.text }}>React Native dev</span>
                        </div>
                        <div style={{ position: "absolute", top: -14, right: -14, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: "9px 13px" }}>
                            <span className="mono" style={{ fontSize: 11.5, color: c.mint }}>● open to work</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px", borderTop: `1px solid ${c.borderSoft}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56 }} className="two-col">
                    <div>
                        <div className="mono" style={{ color: c.mint, fontSize: 13, marginBottom: 10 }}>about</div>
                        <h2 className="disp" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
                            Mobile-first, but comfortable anywhere in the stack.
                        </h2>
                    </div>
                    <div>
                        <p style={{ fontSize: 16, color: c.muted, lineHeight: 1.8, marginBottom: 18 }}>
                            I'm a software developer who works across the full stack, but mobile is where I spend
                            most of my time. Over the past 2+ years I've shipped React Native apps that are live in
                            production, built web platforms with React.js and Next.js, and handled the Node.js and
                            MongoDB backends powering them.
                        </p>
                        <p style={{ fontSize: 16, color: c.muted, lineHeight: 1.8, marginBottom: 28 }}>
                            I'm currently in my 2nd year of college — learning formally while continuing to build
                            and ship for real users on the side. Two of my apps are already published and in use.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {[
                                "2+ years building production React Native & React.js apps",
                                "2 mobile apps published and live",
                                "Comfortable end-to-end: UI, state, APIs, and database",
                            ].map((t) => (
                                <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                    <CheckCircle2 size={18} color={c.mint} style={{ flexShrink: 0, marginTop: 2 }} />
                                    <span style={{ fontSize: 14.5, color: c.text }}>{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px", borderTop: `1px solid ${c.borderSoft}` }}>
                <div className="mono" style={{ color: c.mint, fontSize: 13, marginBottom: 10 }}>what I do</div>
                <h2 className="disp" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, margin: "0 0 40px" }}>
                    Where I can add value.
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
                    {SERVICES.map((s) => (
                        <div key={s.title} className="card" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, padding: 24 }}>
                            <div style={{ width: 42, height: 42, borderRadius: 10, background: c.violetSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                                <s.icon size={20} color={c.violet} />
                            </div>
                            <h3 className="disp" style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>{s.title}</h3>
                            <p style={{ fontSize: 13.5, color: c.muted, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills" style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px", borderTop: `1px solid ${c.borderSoft}` }}>
                <div className="mono" style={{ color: c.mint, fontSize: 13, marginBottom: 10 }}>skills</div>
                <h2 className="disp" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, margin: "0 0 40px" }}>
                    The stack I ship with.
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
                    {SKILL_GROUPS.map((g) => (
                        <div key={g.title} className="card" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, padding: 22 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: g.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                <g.icon size={19} color={g.accent} />
                            </div>
                            <h3 className="disp" style={{ fontSize: 15.5, fontWeight: 700, margin: "0 0 14px" }}>{g.title}</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                                {g.items.map((s) => (
                                    <span key={s} className="mono chip" style={{ fontSize: 11.5, color: c.muted, border: `1px solid ${c.border}`, borderRadius: 6, padding: "5px 9px" }}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* JOURNEY */}
            <section id="journey" style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px", borderTop: `1px solid ${c.borderSoft}` }}>
                <div className="mono" style={{ color: c.mint, fontSize: 13, marginBottom: 10 }}>journey</div>
                <h2 className="disp" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, margin: "0 0 40px" }}>
                    Education and experience, side by side.
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="two-col">
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                            <GraduationCap size={18} color={c.violet} />
                            <span style={{ fontSize: 14, fontWeight: 600, color: c.text }}>Education</span>
                        </div>
                        <div style={{ position: "relative", paddingLeft: 24 }}>
                            <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 1, background: c.border }} />
                            {JOURNEY.map((j, i) => (
                                <div key={j.title} style={{ position: "relative", marginBottom: i === JOURNEY.length - 1 ? 0 : 30 }}>
                                    <div style={{ position: "absolute", left: -24, top: 3, width: 11, height: 11, borderRadius: "50%", background: j.state === "active" ? c.mint : c.bg, border: `2px solid ${j.state === "active" ? c.mint : c.faint}` }} />
                                    <div className="mono" style={{ fontSize: 11.5, color: c.faint, marginBottom: 4 }}>{j.tag}</div>
                                    <div style={{ fontSize: 15.5, fontWeight: 600, color: c.text, marginBottom: 3 }}>{j.title}</div>
                                    <div style={{ fontSize: 13.5, color: c.muted }}>{j.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                            <Briefcase size={18} color={c.mint} />
                            <span style={{ fontSize: 14, fontWeight: 600, color: c.text }}>Experience</span>
                        </div>
                        <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, padding: 24 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: c.text }}>Mobile & Web Developer</div>
                                    <div style={{ fontSize: 13.5, color: c.muted, marginTop: 2 }}>Self-driven Projects</div>
                                </div>
                                <span className="mono" style={{ fontSize: 11.5, color: c.mint, border: `1px solid ${c.border}`, borderRadius: 6, padding: "4px 9px", whiteSpace: "nowrap" }}>2+ years</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                                {[
                                    "Shipped 2 React Native apps published and live for real users",
                                    "Built and maintained a custom CRM for managing customer pipelines",
                                    "Delivered 6+ mobile and web projects across booking, staff and inventory management",
                                ].map((t) => (
                                    <div key={t} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                                        <Rocket size={14} color={c.mint} style={{ flexShrink: 0, marginTop: 3 }} />
                                        <span style={{ fontSize: 13.5, color: c.muted, lineHeight: 1.6 }}>{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px", borderTop: `1px solid ${c.borderSoft}` }}>
                <div className="mono" style={{ color: c.mint, fontSize: 13, marginBottom: 10 }}>projects</div>
                <h2 className="disp" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, margin: "0 0 40px" }}>
                    Things I've shipped.
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
                    {PROJECTS.map((p, idx) => (
                        <div key={p.name} className="card" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                            <div style={{ height: 96, background: `linear-gradient(135deg, ${idx % 2 === 0 ? c.violet : c.mint}22, ${c.bgSoft})`, position: "relative", display: "flex", alignItems: "center", padding: "0 20px", borderBottom: `1px solid ${c.border}` }}>
                                <span className="disp" style={{ fontSize: 22, fontWeight: 800, color: c.text, opacity: 0.9 }}>
                                    {p.name}
                                </span>
                                <span className="mono" style={{ position: "absolute", top: 12, right: 14, fontSize: 10.5, color: c.faint }}>{p.year}</span>
                            </div>
                            <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
                                <span className="mono" style={{ alignSelf: "flex-start", fontSize: 11, color: idx % 2 === 0 ? c.violet : c.mint, background: idx % 2 === 0 ? c.violetSoft : c.mintSoft, borderRadius: 6, padding: "4px 9px", marginBottom: 12 }}>
                                    {p.category}
                                </span>
                                <p style={{ fontSize: 14, color: c.muted, lineHeight: 1.65, marginBottom: 14 }}>{p.desc}</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18, flex: 1 }}>
                                    {p.highlights.map((h) => (
                                        <div key={h} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                            <CheckCircle2 size={13} color={idx % 2 === 0 ? c.violet : c.mint} style={{ flexShrink: 0, marginTop: 2 }} />
                                            <span style={{ fontSize: 12.5, color: c.muted, lineHeight: 1.5 }}>{h}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                                    {p.stack.map((s) => (
                                        <span key={s} className="mono" style={{ fontSize: 10.5, color: c.faint, border: `1px solid ${c.border}`, borderRadius: 5, padding: "3px 7px" }}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px 40px", borderTop: `1px solid ${c.borderSoft}` }}>
                <div style={{ background: `linear-gradient(135deg, ${c.surface}, ${c.bgSoft})`, border: `1px solid ${c.border}`, borderRadius: 20, padding: "56px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <Sparkles size={20} color={c.mint} style={{ marginBottom: 18 }} />
                    <h2 className="disp" style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)", fontWeight: 800, margin: "0 0 14px" }}>
                        Let's work together.
                    </h2>
                    <p style={{ fontSize: 15.5, color: c.muted, maxWidth: 480, margin: "0 auto 32px" }}>
                        I'm actively looking for a full-time role as a React Native / React.js developer.
                        Reach out if my profile fits your team.
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 30 }}>
                        <a href="mailto:navratan0442@gmail.com" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${c.violet}, ${c.violetDim})`, color: "#fff", borderRadius: 10, padding: "13px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                            <Mail size={16} /> navratan0442@gmail.com
                        </a>
                        <a href="tel:+918949936535" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: c.text, border: `1px solid ${c.border}`, borderRadius: 10, padding: "13px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                            <Phone size={16} /> +91 89499 36535
                        </a>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                        {[
                            { Icon: GithubIcon, url: "https://github.com/Navratan8949" },
                            { Icon: LinkedinIcon, url: "https://www.linkedin.com/in/navratan-prajapat-458157277?utm_source=share_via&utm_content=profile&utm_medium=member_android" }
                        ].map((item, i) => (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" key={i} style={{ width: 38, height: 38, borderRadius: 10, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: c.muted, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = c.text} onMouseLeave={(e) => e.currentTarget.style.color = c.muted}>
                                <item.Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, padding: "36px 4px 0", color: c.faint, fontSize: 12.5 }}>
                    <span>© 2026 Navratan Prajapat. Built with React.</span>
                    <span className="mono">Designed &amp; developed by Navratan</span>
                </div>
            </section>

            <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-phones { margin-top: 20px; }
          .two-col { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 861px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </div>
    );
}