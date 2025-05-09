import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path';
import Tour from './models/Tour.js'; // Assuming the tour model is inside the 'models' folder

dotenv.config();  // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tours = [
  {

    title: "Westminister Bridge",
    city: "London",
    address: "Somewhere",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img01.jpg",
    featured: true,
  },
  {
   
    title: "Bali, Indonesia",
    city: "Indonesia",
    address: "Somewhere",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img04.jpg",
    featured: true,
  },
  {
 
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img03.jpg",
    featured: true,
  },
  {
 
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img05.jpg",
    featured: true,
  },
  {
 
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img08.jpg",
    featured: false,
  },
  {
    title: "Cherry Blossoms Spring",
    city: "Japan",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img02.jpg",
    featured: false,
  },
  {

    title: "Holmen Lofoten",
    city: "France",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: "http://localhost:3000/tour-images/tour-Img06.jpg",
    featured: false,
  },
];

export default tours;


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
    seedDB();  // Run seed after successful connection
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Seed function to insert the tours
const seedDB = async () => {
  try {
    // Delete existing tours to avoid duplicates
    await Tour.deleteMany();
    console.log('Deleted old tours');

    // Insert new tours in bulk
    await Tour.insertMany(tours);
    console.log('Inserted new tours');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Ensure the database connection is closed after seeding
    mongoose.connection.close();
  }
};