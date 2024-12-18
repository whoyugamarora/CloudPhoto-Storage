import React from "react";
import HomeNavbar from "../Components/HomeNavbar";

const Homepage = () => {
  return (
    <div>
      <HomeNavbar />
      <header className="bg-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to CloudPhoto</h1>
          <p className="text-lg">Upload, store, and manage your photos securely and effortlessly.</p>
          <div className="mt-8">
            <a
              href="/login"
              className="bg-white text-indigo-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12">
        {/* Features Section */}
        <section className="text-center p-20 mb-12">
          <h2 className="text-4xl font-extrabold mb-10">Why Choose CloudPhoto?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
            <div className="py-20 px-4 border rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Secure Storage</h3>
              <p className="text-gray-600 text-sm">Your photos are stored with top-notch encryption and privacy.</p>
            </div>
            <div className="py-20 px-4 border rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Easy Access</h3>
              <p className="text-gray-600 text-sm">Access your photos anytime, anywhere, on any device.</p>
            </div>
            <div className="py-20 px-4 border rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Unlimited Storage</h3>
              <p className="text-gray-600 text-sm">Enjoy unlimited photo uploads with our premium plan.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-center bg-gray-50 py-12 rounded-lg items-center px-10">
          <h2 className="text-4xl font-extrabold mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="py-20 px-4 border rounded-lg shadow-md">
              <p className="italic text-gray-600">"CloudPhoto makes managing my photo albums so simple and efficient!"</p>
              <h4 className="mt-4 font-bold">- Sarah L.</h4>
            </div>
            <div className="py-20 px-4 border rounded-lg shadow-md">
              <p className="italic text-gray-600">"I love the secure storage and easy access from all my devices."</p>
              <h4 className="mt-4 font-bold">- John D.</h4>
            </div>
            <div className="py-20 px-4 border rounded-lg shadow-md">
              <p className="italic text-gray-600">"Unlimited storage for my travel photos? Yes, please!"</p>
              <h4 className="mt-4 font-bold">- Emily R.</h4>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Sign up today and take the first step toward organizing your photo memories.</p>
          <a
            href="/signup"
            className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700"
          >
            Create an Account
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} CloudPhoto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
