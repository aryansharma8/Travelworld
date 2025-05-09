/*import Blog from "../models/Blog.js"

export const createBlog = async (req, res) => {
    try {
      console.log(req.body);
      const newBlog = await Blog.create(req.body);
      console.log(newBlog); 
      const savedBlog = await newBlog.save();
      console.log(savedBlog);
      res.status(201).json(newBlog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create the blog' });
    }
  };
  

export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the blog' });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the blog' });
  }
};


export const getAllBlogs = async ( req,res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const getFeaturedBlogs = async (req, res) => {
  try {
    const featuredBlogs = await Blog.find({ featured: true });
    if (featuredBlogs.length > 0) {
      res.status(200).json({
        success: true,
        message: "Featured blogs retrieved successfully",
        data: featuredBlogs,
      });
    } else {
      res.status(404).json({ success: false, message: "No featured blogs found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to get featured blogs" });
  }
};*/

import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // Log incoming data
    const newBlog = await Blog.create(req.body);
    console.log('New Blog Created:', newBlog);  // Log the created blog
    const savedBlog = await newBlog.save();
    console.log('Saved Blog:', savedBlog);  // Log the saved blog
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create the blog' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    console.log('Updating Blog ID:', req.params.id);  // Log the blog ID being updated
    console.log('Request Body:', req.body);  // Log the updated data
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log('Updated Blog:', updatedBlog);  // Log the updated blog data
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Failed to update the blog' });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the blog' });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const getFeaturedBlogs = async (req, res) => {
  try {
    const featuredBlogs = await Blog.find({ featured: true });  // Fetch featured blogs
    console.log('Fetched Featured Blogs:', featuredBlogs);  // Log the fetched featured blogs

    if (featuredBlogs.length > 0) {
      res.status(200).json({
        success: true,
        message: "Featured blogs retrieved successfully",
        data: featuredBlogs,
      });
    } else {
      res.status(404).json({ success: false, message: "No featured blogs found" });
    }
  } catch (err) {
    console.error('Error fetching featured blogs:', err);
    res.status(500).json({ success: false, message: "Failed to get featured blogs" });
  }
};

