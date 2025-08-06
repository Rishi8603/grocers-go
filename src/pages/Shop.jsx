import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { products } from "@/data/grocery";

function Shop() {
    return (
        <>
            <Navbar />
            <div className="text-center mt-6 mb-2">
                <h1 className="text-4xl font-bold tracking-wide text-green-800">SHOP</h1>
                <p className="text-zinc-500 text-base mt-2 max-w-xl mx-auto px-4">
                    Discover our wide range of fresh groceries and daily essentials.
                </p>
            </div>
            <div className="p-10 flex flex-wrap gap-8 justify-center">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
export default Shop;