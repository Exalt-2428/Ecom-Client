import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export default function Products() {
    return (
        <>
            <Header />
            <div className="bg-primary p-4 flex justify-center items-center cursor-pointer h-screen">
                <h2>Products</h2>
            </div>
            <Footer />
        </>
    );
}