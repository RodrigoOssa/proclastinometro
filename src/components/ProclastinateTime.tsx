export default function ProclastinateTime() {

    interface Data {
        monthly: number,
        weekly: number,
        dayly: number,
        monthlyLoss: number,
        weeklyLoss: number,
        daylyLoss: number,

    }
    const data: Data = {
        monthly: 160,
        weekly: 40,
        dayly: 8,
        monthlyLoss: 20,
        weeklyLoss: 3,
        daylyLoss: 1,
    }
    return (
        <section className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-hColor dark:text-hColor text-2xl">
                Proclastinómetro
            </h1>
            <p className="text-pColor dark:text-pColor">

            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Horas Mensuales</h2>
                    <p className="mt-2 text-3xl font-bold text-orange-400">160</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Horas Semanales</h2>
                    <p className="mt-2 text-3xl font-bold text-orange-400">40</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Horas Diarias</h2>
                    <p className="mt-2 text-3xl font-bold text-orange-400">8</p>
                </div>
            </div>
        </section>
    )
}