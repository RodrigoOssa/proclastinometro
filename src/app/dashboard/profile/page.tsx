import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function ProfilePage() {

    return (

        <div className="md:container md:mx-auto dark:text-black">
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white" >Applicant Information</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
            </div>
            <div className="mt-6 border-t border-gray-100 ">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Full name</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">Margot Foster</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Application for</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">Backend Developer</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Email address</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">margotfoster@example.com</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">Salary expectation</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">$120,000</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-bold text-gray-900 dark:text-white">About</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>

                </dl>
            </div>
        </div>
    )
}