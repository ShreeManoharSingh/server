export default function Navbar() {
    return (
        <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b dark:bg-black/50">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl font-bold text-blue-700">Uday Real Estate</h1>
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}