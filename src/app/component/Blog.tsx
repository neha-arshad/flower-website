import React from 'react'

const Blog = () => {
	return (
    <div className="ml-60 mr-60 bg-white p-11 " id='blog'>
      <div className="relative">
        <img src="/Images/blog.png" alt="" className="mt-14" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
        <span className="text-white text-xl font-mono ">New year Offer</span>
        <span className="text-white text-2xl font-extrabold">Fresh Flowers any special occasion</span>
				</div>
      </div>
    </div>
  );
}

export default Blog