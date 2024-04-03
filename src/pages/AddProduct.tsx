import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const AddProductForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    setUploading(true);
    const storage = getStorage();
    const firestore = getFirestore();
    const fileRef = storageRef(storage, `products/${file.name}`);

    uploadBytes(fileRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          const productData = {
            name,
            description,
            price: Number(price),
            imageUrl: url,
          };
          addDoc(collection(firestore, "products"), productData)
            .then(() => {
              alert("Product added successfully");
              setUploading(false);
              // Reset form if needed
            })
            .catch((error) => {
              console.error("Error adding product:", error);
              setUploading(false);
            });
        });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setUploading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        accept="image/*"
      />
      <button type="submit" disabled={uploading}>
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
