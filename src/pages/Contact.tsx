import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Block */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">info@formforge.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 9650 020 485</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Location</h3>
                  <p className="text-gray-600">Pillar no. 11-B, 372-73
                  First Floor, MG Road</p>
                  <p className="text-gray-600">
Sultanpur, New Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form Block */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="h-6 w-6 text-gray-600" />
              <h2 className="text-3xl font-semibold text-gray-800">Send us a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;