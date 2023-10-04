import { storage } from "@/config/appwrite";

export const getImageUrl = async(image: Image) => {

    const url = storage.getFilePreview(image.bucketId, image.fileId)
    
    return url
}