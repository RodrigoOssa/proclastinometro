interface Data {
    monthly: number,
    weekly: number,
    dayly: number,
}
interface Props {
    title: string;
    estimatedTime?: Data;
    realTime?: Data;    //TODO: Agregar props de las horas de trabajo
}

export default function ProductiveTime({ title, estimatedTime }: Props) {
    const data: Data = {
        monthly: 160,
        weekly: 40,
        dayly: 8,
    }
    return (
        <section className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-hColor dark:text-hColor text-2xl">
                {title}
            </h1>
            <p className="text-pColor dark:text-pColor">

            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Horas Mensuales</h2>
                    {estimatedTime ?
                        <p className="mt-2 text-3xl font-bold text-orange-400">
                            160
                            <span className="text-3xl font-bold text-gray-900 dark:text-white"> / </span>
                            <span className="mt-2 text-3xl font-bold text-red-500"> 230</span>
                        </p>
                        :
                        <p className="mt-2 text-3xl font-bold text-orange-400">160</p>
                    }
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Horas Semanales</h2>
                    {estimatedTime ?
                        <p className="mt-2 text-3xl font-bold text-orange-400">
                            40
                            <span className="text-3xl font-bold text-gray-900 dark:text-white"> / </span>
                            <span className="mt-2 text-3xl font-bold text-red-500"> 100</span>
                        </p>
                        :
                        <p className="mt-2 text-3xl font-bold text-orange-400">40</p>
                    }
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Horas Diarias</h2>
                    {estimatedTime ?
                        <p className="mt-2 text-3xl font-bold text-orange-400">
                            8
                            <span className="text-3xl font-bold text-gray-900 dark:text-white"> / </span>
                            <span className="mt-2 text-3xl font-bold text-red-500"> 8</span>
                        </p>
                        :
                        <p className="mt-2 text-3xl font-bold text-orange-400">8</p>
                    }
                </div>
            </div>
        </section>
    )
}