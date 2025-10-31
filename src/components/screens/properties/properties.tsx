export default function Properties() {
    const projects = [
        {
            name: "Uday Heights",
            location: "Mumbai",
            img: "https://images.unsplash.com/photo-1593697820481-999ca0b66c1c"
        },
        {
            name: "Uday Residency",
            location: "Pune",
            img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28"
        },
    ];


    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Completed Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-lg border hover:scale-[1.02] transition">
                        <img src={p.img} className="h-64 w-full object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">{p.name}</h3>
                            <p className="text-sm opacity-70">{p.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}