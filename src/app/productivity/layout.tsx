import Navbar from "@/ui/navbar";

export default function ProductivityLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-auto min-h-screen">
            <Navbar />
            {children}
            {/* <Footer /> */}
        </div>
    );
}