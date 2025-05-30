import React, { useState } from "react";
import { Send } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-200 text-lg mb-8">
            Subscribe to our newsletter for the latest course updates, learning
            tips, and exclusive offers
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            {!isSubmitted ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-gray-800 hover:bg-gray-700 text-white rounded-md p-2 transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <Send size={20} />
                </button>
              </>
            ) : (
              <div className="bg-gray-800 rounded-lg py-3 px-4 animate-pulse">
                <p className="font-medium">Thank you for subscribing!</p>
              </div>
            )}
          </form>

          <p className="text-gray-300 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
