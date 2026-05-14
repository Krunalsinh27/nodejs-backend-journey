import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) return null;

    const absolutePath = path.resolve(localFilePath);

    try {
        const response = await cloudinary.uploader.upload(absolutePath, {
            resource_type: "auto"
        });

        await fs.promises.unlink(absolutePath);
        return response;
    } catch (error) {
        console.error("Cloudinary upload failed:", error);

        try {
            await fs.promises.unlink(absolutePath);
        } catch (cleanupError) {
            console.error("Failed to remove temp file:", cleanupError);
        }

        return null;
    }
}

export {uploadOnCloudinary};