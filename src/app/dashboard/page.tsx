import ProductiveTime from "@/app/dashboard/components/ProductiveTime";
import WelcomeUser from "./WelcomeUser";
import ProclastinateTime from "@/app/dashboard/components/ProclastinateTime";
import ProjectList from "@/app/dashboard/components/ProjectsList";
import Notes from "@/app/dashboard/components/Notes";

const Dashboard = () => {
    return (
        <main
            className="container mx-3 w-auto mt-5 mb-10 p-1 flex-col justify-center md:m-auto space-y-5.5">
            <WelcomeUser />
            <ProductiveTime />
            <ProclastinateTime />
            <ProjectList />
            <Notes />
        </main>
    )
}

export default Dashboard;