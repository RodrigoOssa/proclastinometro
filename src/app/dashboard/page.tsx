import ProductiveTime from "@/components/ProductiveTime";
import WelcomeUser from "./WelcomeUser";
import ProclastinateTime from "@/components/ProclastinateTime";
import ProjectList from "@/components/ProjectsList";

const Dashboard = () => {
    return (
        <main
            className="container mx-3 w-auto mt-5 mb-10 p-1 flex-col justify-center md:m-auto space-y-5.5">
            <WelcomeUser />
            <ProductiveTime />
            <ProclastinateTime />
            <ProjectList />
        </main>
    )
}

export default Dashboard;