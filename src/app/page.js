import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export default function Home() {
    return (
        <>
            <Header />
            <div className="bg-primary p-4 flex justify-center items-center cursor-pointer h-screen">
                <h2>Home</h2>
            </div>
            <Footer />
        </>
    );
}