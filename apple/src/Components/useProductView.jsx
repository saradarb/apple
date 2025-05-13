import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProductView = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };

  const getImage = (color) => {
    const image = product.image?.data?.find((img) =>
      img.name.includes(color)
    );
    return image?.url || "";
  };

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0 && product.model && product.model.length > 0) {
      setSelectedColor(product.colors[0].name);
      setSelectedModel(product.model[0].name);
    }
  }, [product]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch all products and filter for the one we want
        const allProductsResponse = await axios.get('http://localhost:1337/api/products?populate=*');
        console.log("All products:", allProductsResponse.data);
        
        // Find the specific product in the array
        const foundProduct = allProductsResponse.data.data.find(
          p => p.id.toString() === productId.toString()
        );
        
        if (foundProduct) {
          console.log("Found product in list:", foundProduct);
          setProduct(foundProduct);
        }
      } catch (error) {
        console.log({error});
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return {
    product,
    selectedColor,
    selectedModel,
    selectedQuantity,
    getImage,
    handleQuantityChange,
    setSelectedColor,
    setSelectedModel,
  };
};