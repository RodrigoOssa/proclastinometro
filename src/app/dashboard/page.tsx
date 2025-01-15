import WorkPosition from "@/components/WorkPosition";

const Dashboard = () => {
    return (
        <div className="h-full">
            <header className="">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-slate-50">Dashboard</h1>
                </div>
            </header>
            <hr
                className="md:w-10/12 md:m-1 opacity-75 md:mx-auto border-gray-800 dark:shadow-white dark:border-slate-200 w-12/12 mx-0" />

            <main
                className="container mx-3 w-auto my-auto flex-col justify-center md:m-auto space-y-2.5">
                <WorkPosition />
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-zinc-900 dark:text-slate-50">
                    <h3>¿Qué es Lorem Ipsum?</h3>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;