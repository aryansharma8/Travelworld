import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path'; // Import dirname
import Blog from './models/Blog.js';

dotenv.config();

// Get the directory name of the current module in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogs = [
    {
      title: "Westminster Bridge - A Must-See Landmark in London",
      content: `Discover the beauty of Westminster Bridge in London...`,
      author: "TravelEnthusiast",
      date: "2023-07-29",
      photo: `http://localhost:3000/tour-images/tour-img01.jpg`,
      comments: [],
      featured: false,
    },
    {
      title: "Paris Eiffel Tower - Icon of Romance and History",
      content: `An unforgettable journey through the streets of Paris...`,
      author: "Explorer",
      date: "2023-08-01",
      photo: `http://localhost:3000/tour-images/tour-img02.jpg`,
      comments: [],
      featured: true,
    },
    {
      title: "The Great Wall of China - A Journey Through Time",
      content: `Walking along the Great Wall is a truly awe-inspiring experience...`,
      author: "HistoryBuff",
      date: "2023-08-05",
      photo: `http://localhost:3000/tour-images/tour-img03.jpg`,
      comments: [],
      featured: true,
    },
    {
      title: "The Colosseum - Rome's Ancient Amphitheater",
      content: `A visit to the Colosseum is like stepping back in time to the gladiatorial battles of Ancient Rome...`,
      author: "RomanExplorer",
      date: "2023-08-10",
      photo: `http://localhost:3000/tour-images/tour-img04.jpg`,
      comments: [],
      featured: true,
    },
    {
      title: "Santorini - A Paradise in the Aegean Sea",
      content: `Santorini offers some of the most breathtaking views in the world, with its iconic white buildings and blue domes...`,
      author: "IslandLover",
      date: "2023-08-15",
      photo: `http://localhost:3000/tour-images/tour-img05.jpg`,
      comments: [],
      featured: true,
    },
    {
      title: "Machu Picchu - The Lost Inca City",
      content: `Machu Picchu is one of the most famous archaeological sites in the world, surrounded by mystery and stunning landscapes...`,
      author: "AdventureSeeker",
      date: "2023-08-20",
      photo: `http://localhost:3000/tour-images/tour-img06.jpg`,
      comments: [],
      featured: false,
    },
    {
      title: "Dubai - A Modern Marvel in the Desert",
      content: `Dubai is a city of contrast, where modern skyscrapers meet traditional markets. It's a futuristic city in the heart of the desert...`,
      author: "DesertExplorer",
      date: "2023-08-25",
      photo: `http://localhost:3000/tour-images/tour-img07.jpg`,
      comments: [],
      featured: true,
    },
  ];
  

const seedBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to the database successfully.");

    // Delete any existing blogs before seeding new ones
    await Blog.deleteMany();
    console.log("✅ Old blogs removed.");

    // Seed new blogs with images
    await Blog.insertMany(blogs);
    console.log("✅ Blogs seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedBlogs();

