import Card from "./Card";
import { products } from "@/data/grocery.js";
import { Button } from "./ui/button.jsx";

function Container() {
    return (
        <>
            <div id="featured" className="main-container bg-gray-50 p-10 flex flex-wrap gap-8 justify-center">
                <h1 className="w-full text-center text-4xl font-bold mb-4">Featured Items</h1>
                {products.slice(0, 4).map(product => (
                    <Card key={product.id} product={product} />
                ))}
                <div className="w-full flex justify-center items-center mt-6">
                    <a href="/shop">
                        <Button className="text-[1.1rem] p-6 rounded-md bg-green-700 hover:bg-green-800">
                            View All Products
                        </Button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Container;