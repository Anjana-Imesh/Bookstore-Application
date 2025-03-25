import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">About Us</h1>
      <div className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-blue-600">Whispering Pages</span>!
          We believe in the transformative power of books. Founded by a group of avid readers, our mission is to create a heaven for book lovers of all ages.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          Whispering Pages started as a small bookstore in the heart of the community, inspired by our love for literature and the desire to foster a culture of reading. Over the years, we have grown into a beloved destination for bibliophiles, curating a diverse collection that spans genres, from timeless classics and contemporary fiction to non-fiction and young adult literature.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">What We Offer</h2>
        <ul className="text-lg text-gray-700 mb-4">
          <li>🕮 <strong>A Curated Selection:</strong> Our shelves are filled with carefully selected titles that resonate with our readers. We take pride in supporting local authors and showcasing hidden gems alongside bestsellers.</li>
          <li>📚 <strong>Personalized Recommendations:</strong> Our knowledgeable staff is passionate about books and is always ready to assist you in finding the perfect read. Whether you need a gripping thriller or a heartwarming romance, we are here to help.</li>
          <li>📅 <strong>Community Events:</strong> Join us for author signings, book clubs, and reading events that bring readers together to share their love for literature.</li>
          <li>🛒 <strong>Online Shopping:</strong> Can’t make it to the store? Explore our online shop, where you can browse our collection and have your favorite books delivered right to your doorstep.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Join Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          We invite you to step into our world of stories, imagination, and inspiration. Whether you’re a lifelong reader or just beginning your literary journey, there’s a place for you at Whispering Pages. Join our community of readers and discover the joy of reading with us!
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Connect with Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stay updated on new arrivals, events, and special promotions by following us on social media or signing up for our newsletter. We love hearing from our customers, so don’t hesitate to reach out with any questions or book recommendations.
        </p>
        <p className="text-lg text-gray-700 font-semibold">
          Thank you for being a part of the Whispering Pages family. Together, let’s celebrate the love of books!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
