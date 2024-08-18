import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productImage:{
      type:String,
      required:true
    },
    productId:{
      type:String,
      required:true,
      unique:true
    },
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
