export default function Team() {
    const team = [
        { name: "Uday Singh", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/12.jpg" },
        { name: "Aisha Khan", role: "Architect Lead", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    ];
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {team.map((t, i) => (
                    <div key={i} className="text-center">
                        <img className="w-40 h-40 mx-auto rounded-full object-cover border shadow" src={t.img} />
                        <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>
                        <p className="text-sm opacity-70">{t.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}