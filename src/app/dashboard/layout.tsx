import Navbar from "../ui/navbar";

export default function DashboardLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-full">
            <Navbar></Navbar>
            {children}
        </div>
    );
}