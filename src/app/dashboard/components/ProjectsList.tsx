import Link from "next/link";

export default function ProjectList() {

    const projects = [
        {
            id: 1,
            name: 'Proyecto KFC',
            link: '/project-one',
            img: `/assets/img/1`
        },
        {
            id: 2,
            name: 'Proyecto McDonalds',
            link: '/project-two',
            img: `/assets/img/2`
        },
        {
            id: 3,
            name: 'Proyecto Burger King',
            link: '/project-three',
            img: `/assets/img/3`
        },
    ];
    return (
        <section className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-hColor dark:text-hColor text-2xl">
                Proyectos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {projects.map(project => (
                    <Link href={project.link} key={project.id} className="block p-6  rounded-lg  hover:border hover:border-gray-200 shadow-md hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105 shadow-lg bg-white dark:bg-gray-800">
                        <div className="project-card-content flex items-center justify-center tooltip" style={{ backgroundImage: `url('${project.img}/image-${project.id}.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: '200px' }}>
                            <span className="text-xl font-semibold text-orange-400 tooltip-text bg-darkBg/75 dark:darkBg/75">{project.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}