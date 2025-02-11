import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/category_search/SideBar';
import axios from 'axios';
import DOMPurify from "dompurify";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogDetails, isLoading, error } = useQuery({
        queryKey: ['blogDetails',id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:8080/api/blog/${id}`)
            console.log('see check blog details', res.data.data)
            return res.data.data
        }

    })
      // Show a loading spinner or message while loading
  if (isLoading) return <div>Loading...</div>;

  // Show an error message if the API call fails
  if (error) return <div>Error: {error.message}</div>;

  // Add a fallback if blogDetails is undefined or has missing fields
  if (!blogDetails) return <div>No blog details found!</div>;
    return (
        <div className='mt-4'>
            <div className='flex justify-between gap-4'>

                <div className='w-[70%]'>
                    <img className='w-full object-cover' src={blogDetails.blogImage
                    } alt="" />
                   <div className='flex justify-between '>
                   <p className='px-4 text-blue-700 '>Published By - {blogDetails.publish_by}</p>
               
                   <p className='px-4 text-blue-700'>
                    Publish Date:{" "}
                    {new Date(blogDetails.createdAt).toLocaleDateString()}
                  </p>
                   </div>
                   <div>
                    <p className='text-3xl font-bold text-black px-4 mt-6 mb-3'>{blogDetails.title}</p>
                    <p
                  className="mt-2 text-gray-800 px-4"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blogDetails.details),
                  }}
                ></p>
                   </div>
                </div>
                <SideBar />
            </div>
        </div>
    );
};

export default BlogDetails;