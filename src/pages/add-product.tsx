import { useFormContext } from "@hooks/useFormContext"
import { InputUser } from "@helpers/types"
import { Link } from "@router/Link"

export const AddProduct = () => {
    const { register, handleSubmit, formState: { values, error }, reset } = useFormContext()

    const onSubmit = (data: InputUser) => {
        console.log(data, values, error)
        reset()
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Add Product
                </h1>
                <Link to="/" className="bg-red-400 px-3 py-2 inline-block text-white rounded-md text-center mb-4">
                    See All
                </Link>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            htmlFor="productName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Product Name
                        </label>
                        <input
                            {...register("username")}
                            id="productName"
                            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="productPrice"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Product Price
                        </label>
                        <input
                            {...register("price")}
                            id="productPrice"
                            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="productImage"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Product Image URL
                        </label>
                        <input
                            {...register("imageURL")}
                            id="productImage"
                            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="productDescription"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Product Description
                        </label>
                        <textarea
                            {...register("description")}
                            id="productDescription"
                            rows={4}
                            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter product description"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}
