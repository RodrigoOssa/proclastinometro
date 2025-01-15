export default function WelcomeUser() {

    interface Data {
        id: number,
        alias: string,
        position: string,
    }
    const data: Data = {
        id: 123,
        alias: "Rodrigo",
        position: "Frontend Developer",
    }

    return (
        <section className="mx-auto px-4 py-6 border-b border-gray-800 dark:shadow-white dark:border-slate-200 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-hColor dark:text-hColor text-2xl">
                Bienvenido, <strong className="text-orange-400 font-semibold">{data.alias}</strong>!
            </h1>
            <p className="text-pColor dark:text-pColor">
                {data.position}
            </p>
        </section>
    )
};
