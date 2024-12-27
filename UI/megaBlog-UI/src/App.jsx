import React from "react";
// import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Login", slug: "/login" },
    { name: "Signup", slug: "/signup" },
    { name: "All Posts", slug: "/all-posts" },
    { name: "Add Post", slug: "/add-post" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#364037] text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#myblog">My Blog</a>
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.slug}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Home = () => {
  const cardData = [
    {
      src: "https://images.pexels.com/photos/5779600/pexels-photo-5779600.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "A Serene Escape",
      content:
        "Discover tranquility in the embrace of nature, where every sunrise feels like a warm hug.",
    },
    {
      src: "https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Urban Oasis",
      content:
        "Explore the perfect blend of city vibes and natural beauty in a single captivating frame.",
    },
    {
      src: "https://images.pexels.com/photos/5560617/pexels-photo-5560617.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Golden Hour Glow",
      content:
        "Bask in the golden hues of the setting sun as the world around you becomes a masterpiece.",
    },
    {
      src: "https://images.pexels.com/photos/29876547/pexels-photo-29876547/free-photo-of-winter-reflection-in-boston-public-park.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Winter Reflections",
      content:
        "A mesmerizing mirror of snow-laden trees, capturing the peaceful essence of wintertime.",
    },
  ];

  return (
    <div>
      {/* Background Video Section */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Our Site
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Experience the best of creativity and innovation.
          </p>
          <a
            href="/about"
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Featured Post Section */}
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Featured Post"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
            <p className="text-gray-300 mb-6">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>
            <a
              href="#featured-posts"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg overflow-hidden"
              >
                <img src={card.src} alt={card.title} className="w-full" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#364037] text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default App;
