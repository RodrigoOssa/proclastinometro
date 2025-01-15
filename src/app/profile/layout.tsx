import Navbar from "../../ui/navbar";

export default function ProfileLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            {children}
        </div>
    )
}
