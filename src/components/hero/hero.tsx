export default function Hero({ image, title, subtitle }) {
    return (
        <section
            className="h-[90vh] w-full flex flex-col justify-center items-center text-center bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="bg-black/50 p-6 rounded-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>
            </div>
        </section>
    );
}