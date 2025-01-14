import Navbar from "../../ui/navbar";

export default function ProfileLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
