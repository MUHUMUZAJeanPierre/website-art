import { products } from "../components/data/products";

const ProductGrid: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p: Product, idx: number) => (
          <div key={idx} className="bg-white shadow rounded-xl overflow-hidden">
            <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="text-green-700 font-medium">${p.price}</p>

              <button className="w-full mt-3 bg-green-800 text-white py-2 rounded-lg font-medium hover:bg-green-900">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
