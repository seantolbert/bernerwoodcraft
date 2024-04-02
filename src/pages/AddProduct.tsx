// src/components/AddProductForm.tsx

import React, { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

interface ProductDimensions {
  length: number;
  width: number;
  height: number;
}

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  materials: string[];
  dimensions: ProductDimensions;
  images: string[]; // Array of image URLs
  inStock: boolean;
}

const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [materials, setMaterials] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState<ProductDimensions>({ length: 0, width: 0, height: 0 });
  const [images, setImages] = useState<string[]>([]);
  const [inStock, setInStock] = useState(true);

  const db = getFirestore();

  const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedMaterials = materials.map((material, i) => i === index ? e.target.value : material);
    setMaterials(updatedMaterials);
  };

  const addMaterialField = () => setMaterials([...materials, '']);
  const removeMaterialField = (index: number) => setMaterials(materials.filter((_, i) => i !== index));

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedImages = images.map((image, i) => i === index ? e.target.value : image);
    setImages(updatedImages);
  };

  const addImageField = () => setImages([...images, '']);
  const removeImageField = (index: number) => setImages(images.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      name,
      description,
      price,
      category,
      materials,
      dimensions,
      images, // Include the images array
      inStock,
    };

    try {
      await addDoc(collection(db, "products"), newProduct);
      alert('Product added successfully!');
      // Reset form fields after successful submission
      setName('');
      setDescription('');
      setPrice(0);
      setCategory('');
      setMaterials([]);
      setDimensions({ length: 0, width: 0, height: 0 });
      setImages([]);
      setInStock(true);
    } catch (error) {
      console.error("Error adding product:", error);
      alert('Error adding product.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full"/>
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="mt-1 block w-full"/>
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required className="mt-1 block w-full"/>
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required className="mt-1 block w-full"/>
        </label>
        <fieldset>
          <legend>Materials</legend>
          {materials.map((material, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input type="text" value={material} onChange={(e) => handleMaterialChange(e, index)} className="mt-1 block w-full"/>
              <button type="button" onClick={() => removeMaterialField(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addMaterialField}>Add Material</button>
        </fieldset>
        <fieldset>
          <legend>Images</legend>
          {images.map((image, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input type="text" value={image} onChange={(e) => handleImageChange(e, index)} placeholder="Image URL" className="mt-1 block w-full"/>
              <button type="button" onClick={() => removeImageField(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addImageField}>Add Image</button>
        </fieldset>
        <fieldset className="grid grid-cols-3 gap-4">
          <label>
            Length:
            <input type="number" value={dimensions.length} onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) })} required className="mt-1 block w-full"/>
          </label>
          <label>
            Width:
            <input type="number" value={dimensions.width} onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })} required className="mt-1 block w-full"/>
          </label>
          <label>
            Height:
            <input type="number" value={dimensions.height} onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })} required className="mt-1 block w-full"/>
          </label>
        </fieldset>
        <label>
          In Stock:
          <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} className="ml-2"/>
        </label>
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
