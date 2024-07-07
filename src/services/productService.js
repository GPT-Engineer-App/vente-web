export const fetchProductDetails = async (productId) => {
  // Simulate an API call to fetch product details
  return {
    id: productId,
    name: "Product Name",
    price: 99.99,
    image: "/placeholder.svg",
    description: "This is a detailed description of the product.",
  };
};

export const fetchProductReviews = async (productId) => {
  // Simulate an API call to fetch product reviews
  return [
    { id: 1, rating: 5, title: "Great product!", comment: "I love this product. Highly recommend!" },
    { id: 2, rating: 4, title: "Good value", comment: "Worth the price. Satisfied with the purchase." },
    { id: 3, rating: 3, title: "Average", comment: "It's okay. Not the best, but not the worst either." },
  ];
};