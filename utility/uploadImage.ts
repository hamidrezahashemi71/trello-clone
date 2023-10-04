import { ID, storage } from "@/config/appwrite"

const uploadImage = async(file: File) => {

    if(!file) return

    const fileUpload = await storage.createFile(
        process.env.NEXT_PUBLIC_TODOS_IMAGE_BUCKET_ID!,
        ID.unique(),
        file
    )

    return fileUpload
}

export default uploadImage