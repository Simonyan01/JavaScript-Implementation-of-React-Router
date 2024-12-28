export const Product = () => {
  const product = {
    id: 1,
    name: "Wireless Headphones",
    price: "$199",
    image: "https://via.placeholder.com/400",
    description:
      "Experience the best sound quality with these wireless headphones. Featuring noise cancellation, long battery life, and a comfortable design.",
    features: ["Noise Cancellation", "Bluetooth 5.0", "20 Hours Battery Life"],
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover sm:h-80"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-blue-500 font-semibold mt-2">
            {product.price}
          </p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 text-sm"
              >
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
