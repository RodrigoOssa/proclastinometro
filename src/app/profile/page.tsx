import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function ProfilePage() {

    return (

        <div className="md:container md:mx-auto dark:text-black mt-6">
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white" >Información de perfil</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">V 1.0</p>
            </div>
            <div className="mt-6 border-t border-gray-100 ">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Nombre Completo</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">Homero simpson</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Alias</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">Homero Tompson</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Email</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">hsimpson@gmail.com</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Whatsapp</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">2613144123</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Acciones</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
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