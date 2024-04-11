import React from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" name="title" placeholder="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" placeholder="price" required />
        <input type="number" name="stock" placeholder="stock" required />
        <input type="number" name="color" placeholder="color" required />
        <input type="number" name="size" placeholder="size" required />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
