import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/useApi";
import { Card } from "../../components/Card";
import ImageCardSkeleton from '../../components/Skeletons/ImageCardSkeleton';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center py-10 lg:py-20">
        <h1 className="text-3xl md:text-6xl xl:text-8xl 2xl:text-8xl leading-tight">
          Full-featured <span className="font-extrabold text-transparent md:text-6xl xl:text-8xl 2xl:text-8xl bg-clip-text bg-gradient-to-b from-yellow-500 to-yellow-900 block 2xl:-my-4 leading-tight">Website Listing</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {isLoading ? (
          Array(products.length || 6).fill().map((_, index) => (
            <ImageCardSkeleton key={index} />
          ))
        ) : (
          products.map((product) => (
            <Card 
              key={product.id} 
              id={product.id} 
              image={product.image} 
              title={product.title} 
              price={product.price} 
              category={product.category} 
              description={product.description} 
              rating={product.rating} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
