import {v2 as cloudinary} from "cloudinary"
import { error } from "console";
import fs from "fs"

cloudinary.config({ 
    cloud_name: "db87edpnb", 
    api_key: "579547434193832", 
    api_secret: "erNZAYMaiFJ9AWsO3Jj8ZtA0oLI"
  });

const ImageUpload = async (imagePath)=>{
   try {
    if(!imagePath) throw new Error("No image found");
    const savedImage = await cloudinary.uploader.upload(imagePath,{
        resource_type:"auto"
    });
    if (!savedImage || !savedImage.url) {
        throw new Error("Image upload failed", error.message);
    }
    console.log("image uploaded",savedImage.url);
    fs.unlinkSync(imagePath)
    return savedImage;
   } catch (error) {
    console.log("image upload error", error.message);
    
    return null
   }
}
export {ImageUpload}