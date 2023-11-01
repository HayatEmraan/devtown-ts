interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  rating: number;
  seller: string;
  category: string;
  sub_category: string;
  featuers: string[];
  tag: string;
}

export const products = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://toy-collection-server.vercel.app/api/all"
  );
  const data = await response.json();
  return data;
};
