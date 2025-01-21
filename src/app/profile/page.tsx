'use client'

import { useState } from 'react';
import EditProfileModal from './components/EditProfileModal';
interface Profile {
    id: string;
    name: string;
    surname: string;
    alias: string;
    email: string;
    phone: string;
}

export default function ProfilePage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        id: "1",
        name: "Homero",
        surname: "Simpson",
        alias: "Homero Tompson",
        email: "hsimpson@gmail.com",
        phone: "2613144123",
    });

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveProfile = (updatedData: any) => {
        setProfileData(updatedData);
    };

    return (
        <main
            className="container mx-3 w-auto mt-5 mb-10 p-1 flex-col justify-center md:m-auto space-y-5.5">
            <section className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base/7 font-semibold text-gray-900 dark:text-gray-100" >Información de perfil</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">V 1.0</p>
                </div>
                <div className="mt-6 border-t dark:border-gray-100 border-gray-300">
                    <dl className="divide-y dark:divide-gray-100 divide-gray-300">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Nombre Completo</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">{`${profileData.name} ${profileData.surname}`}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Alias</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">{profileData.alias}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Email</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">{profileData.email}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Whatsapp</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">{profileData.phone}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm/6 font-bold text-gray-900 dark:text-gray-50">Acciones</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-100">
                                <button
                                    onClick={handleEditClick}
                                    className="bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded float-right"
                                >
                                    Editar perfil
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
            {isModalOpen && (
                <EditProfileModal
                    data={profileData}
                    onClose={handleCloseModal}
                    onSave={handleSaveProfile}
                />
            )}
        </main>
    )
}