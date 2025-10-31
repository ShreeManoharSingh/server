export default function Testimonials() {
    const reviews = [
        { name: "Rahul Mehta", text: "Amazing quality and service!" },
        { name: "Sneha Verma", text: "Luxury properties at great prices." },
    ];
    return (
        <section className="bg-blue-50 py-20 dark:bg-zinc-900">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Testimonials</h2>
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 px-6">
                {reviews.map((r, i) => (
                    <div key={i} className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow">
                        <p className="italic mb-2">"{r.text}"</p>
                        <h4 className="font-semibold">- {r.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}