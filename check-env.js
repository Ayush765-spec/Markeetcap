require('dotenv').config();
console.log('DATABASE_URL present:', !!process.env.DATABASE_URL);
console.log('MONGODB_URI present:', !!process.env.MONGODB_URI);
if (process.env.MONGODB_URI) {
    console.log('MONGODB_URI value starts with:', process.env.MONGODB_URI.substring(0, 15));
}
