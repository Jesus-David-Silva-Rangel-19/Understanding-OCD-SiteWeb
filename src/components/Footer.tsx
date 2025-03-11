
import React from "react";
import { Heart, Rocket } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Created with</span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span>by Jesús David Silva Rangel</span>
            <Rocket className="w-5 h-5 text-primary" />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            This website provides information about Obsessive Compulsive Disorder for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
