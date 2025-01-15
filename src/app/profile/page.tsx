
export default function ProfilePage() {

    return (

        <div className="md:container md:mx-auto dark:text-black mt-6">
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-gray-100" >Información de perfil</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">V 1.0</p>
            </div>
            <div className="mt-6 border-t dark:border-gray-100 border-gray-300">
                <dl className="divide-y dark:divide-gray-100 divide-gray-300">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Nombre Completo</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">Homero simpson</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Alias</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">Homero Tompson</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Email</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">hsimpson@gmail.com</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Whatsapp</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">2613144123</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Acciones</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded float-right"
                            >
                                Editar perfil
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}