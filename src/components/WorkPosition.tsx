export default function WorkPosition() {
    interface Data {
        id: number,
        position: string,
    }
    const data: Data = {
        id: 123,
        position: "Frontend Developer",
    }
    return (
        <section className="mx-auto px-4 py-6 text-textColor dark:text-textColor border-b border-gray-800 dark:shadow-white dark:border-slate-200">
            <h1 className="text-titleColor dark:text-titleColor font-bold text-2xl">
                Posicion
            </h1>
            <h2 className="text-titleColor dark:text-titleColor mt-1.5">
                {data.position}
            </h2>
        </section>
    )
}