/*import express from 'express';
import { createBlog, getAllBlogs, getSingleBlog, updateBlog, getFeaturedBlogs } from '../controllers/blogController.js';

const blogRoute = express.Router();

// Log and handle routes

blogRoute.post('/', (req, res) => {
  console.log('Create Blog Request Body:', req.body);  // Log request body
  createBlog(req, res);
});

blogRoute.get('/', (req, res) => {
  console.log('Fetching all blogs');
  getAllBlogs(req, res);
});

blogRoute.get('/:id', (req, res) => {
  console.log('Fetching blog with ID:', req.params.id);  // Log the blog ID
  getSingleBlog(req, res);
});

blogRoute.put('/:id', (req, res) => {
  console.log('Updating Blog with ID:', req.params.id);
  console.log('Update Request Body:', req.body);  // Log update request body
  updateBlog(req, res);
});

blogRoute.delete('/:id', (req, res) => {
  console.log('Deleting Blog with ID:', req.params.id);  // Log blog ID to delete
  deleteBlog(req, res);
});

blogRoute.get('/featured', (req, res) => {
  console.log('Fetching featured blogs');
  getFeaturedBlogs(req, res);
});

export default blogRoute; */

import express from 'express';
import {
  createBlog,
  updateBlog,
  getSingleBlog,
  getAllBlogs,
  getFeaturedBlogs} from '../controllers/blogController.js';

const blogRoute = express.Router();

blogRoute.get('/featured', getFeaturedBlogs);

blogRoute.get('/:id', getSingleBlog);

blogRoute.get('/', getAllBlogs);

blogRoute.post('/', createBlog);

blogRoute.put('/:id', updateBlog);

export default blogRoute;