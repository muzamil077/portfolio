import React from 'react';


const BlogPosts = [
    {
      blog: "Blog 1",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        blog: "Blog 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
        blog: "Blog 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
        blog: "Blog 4",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
        blog: "Blog 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
        blog: "Blog 6",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
  ];
const BlogSection = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Blog Posts</h2>
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-wrap bg-white rounded-lg shadow-lg overflow-hidden">
          {BlogPosts.map((item)=>(
             // eslint-disable-next-line react/jsx-key
             <div className="p-6">
             <h3 className="text-xl font-bold text-gray-800 mb-2">{item.blog}</h3>
             <p className="text-gray-700 mb-4">{item.description}</p>
             <a href="/blog-post-1" className="inline-block py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600">Read More</a>
           </div>
         

          ))}
         </div>
        {/* Repeat for additional blog posts */}
    </section>
  );
}

export default BlogSection;