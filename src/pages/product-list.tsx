import { useNavigate } from "@hooks/useNavigate"

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$199",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$299",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: "$79",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: "$129",
        image: "https://via.placeholder.com/150",
    },
]

export const ProductList = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Product List
            </h1>
            <button type="button" onClick={() => navigate("/add")} className="bg-red-400 tracking-wider text-white px-3 py-1 rounded-md mb-3">Add</button>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-700 group-hover:text-blue-500">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 mt-2">{product.price}</p>
                            <button type="button" className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
