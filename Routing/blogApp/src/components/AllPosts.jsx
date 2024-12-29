import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "10 Tips for Responsive Web Design",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content:
      "Responsive design is essential in today's mobile-first world. These 10 tips will help you create websites that look great on any device.",
  },
  {
    id: 2,
    title: "Why UX Design Matters",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content:
      "A great user experience is crucial for any successful product. Find out how to improve your designs to better serve your users.",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content:
      "Web development is evolving rapidly with technologies like AI, Web3, and enhanced user experiences. Discover the trends that will shape the future of the web.",
  },
  {
    id: 4,
    title: "Mastering JavaScript in 2024",
    img: "https://files.oaiusercontent.com/file-6rtXz3sKYZNBeB8hmFgZLN?se=2024-12-29T10%3A05%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df11fdaf4-9528-4e69-a0bd-0e20d9f04053.webp&sig=%2Bib6sjcca%2BjxArwYJN41NROGpD4NgU8rkIj%2Bi9ax8DQ%3D",
    content:
      "JavaScript remains at the forefront of web development. Learn advanced techniques, best practices, and the tools you need to stay ahead.",
  },

  {
    id: 5,
    title: "The Rise of AI in Everyday Apps",
    img: "https://files.oaiusercontent.com/file-Jh7mSZzxUNx7M8PqYbyLvA?se=2024-12-29T10%3A04%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3b27b242-26c9-4107-8dc8-cce812fb4578.webp&sig=4KuKcmyxn3ohdC0pka2L1fjlHuLRQFqRc4TVKNXoRks%3D",
    content:
      "AI is now part of our daily lives, enhancing apps with smarter features. Explore how this technology is transforming the digital landscape.",
  },
];

function AllPosts({ className }) {
  return (
    <div className={`w-full`}>
      <div className={`${className}`}>
        <ul className={`w-full flex flex-wrap m-6 gap-4 ${className}`}>
          {" "}
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              state={{ post }}
              className="max-w-96 h-auto border flex flex-col text-left"
            >
              <img src={post.img} alt={post.title} className="w-full" />
              <div className="p-4">
                <h1 className="my-2 text-gray-800 text-xl">{post.title}</h1>
                <p className="text-md text-gray-600">{post.content}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllPosts;
