import Link from "next/link";

export default function ProjectList() {

    const projects = [
        {
            id: 1,
            name: 'Project One',
            link: '/project-one',
            img: '/path/to/image-1.jpg'
        },
        {
            id: 2,
            name: 'Project Two',
            link: '/project-two',
            img: '/path/to/image-2.jpg'
        },
        {
            id: 3,
            name: 'Project Three',
            link: '/project-three',
            img: '/path/to/image-3.jpg'
        },
    ];
    return (
        <section className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-hColor dark:text-hColor text-2xl">
                Proyectos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {projects.map(project => (
                    <Link href={project.link} key={project.id} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105 shadow-lg">
                        <div className="project-card-content flex items-center justify-center" style={{ backgroundImage: `url('/path/to/image-${project.id}.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: '200px' }}>
                            <h3 className="text-xl font-semibold text-orange-400">{project.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}