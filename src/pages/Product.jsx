import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductDetails, fetchProductReviews } from "@/services/productService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const { data: product, error: productError, isLoading: productLoading } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => fetchProductDetails(productId),
  });
  const { data: reviews, error: reviewsError, isLoading: reviewsLoading } = useQuery({
    queryKey: ["productReviews", productId],
    queryFn: () => fetchProductReviews(productId),
  });

  return (
    <div className="container mx-auto space-y-8">
      {productLoading ? (
        <p>Loading product details...</p>
      ) : productError ? (
        <p>Error loading product details</p>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[400px]" />
          <p className="text-lg mt-4">${product.price}</p>
          <p className="mt-2">{product.description}</p>
        </div>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        {reviewsLoading ? (
          <p>Loading reviews...</p>
        ) : reviewsError ? (
          <p>Error loading reviews</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 h-5 w-5" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>{review.title}</CardTitle>
                  <p>{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Product;