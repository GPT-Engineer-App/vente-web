import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommendedProducts } from "@/services/productService";

const Index = () => {
  const { data: recommendedProducts, error, isLoading } = useQuery({
    queryKey: ["recommendedProducts"],
    queryFn: fetchRecommendedProducts,
  });

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg mb-8">Find the best products at unbeatable prices.</p>
          <Button variant="primary" size="lg">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Placeholder for products */}
          {[1, 2, 3, 4].map((product) => (
            <Card key={product}>
              <CardHeader>
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              </CardHeader>
              <CardContent>
                <CardTitle>Product Name</CardTitle>
                <p>$99.99</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading recommended products</p>
          ) : (
            recommendedProducts.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[200px]" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <p>${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;