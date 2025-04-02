import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
config()

    // Configuration
    cloudinary.config({ 
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET
    });
    
export default cloudinary