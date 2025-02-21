import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import CallbackForm from './components/CallbackForm';
import BusinessManagement from './pages/BusinessManagement';
import Level3Diploma from './pages/Level3Diploma';
import Level4Diploma from './pages/Level4Diploma';
import Level5Diploma from './pages/Level5Diploma';
import Level6TopUp from './pages/Level6TopUp';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const courses = [
  {
    title: 'Business Management',
    description: 'Master the fundamentals of business administration and leadership.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Computer Science',
    description: 'Develop expertise in programming, networking, and cybersecurity.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'HR Management',
    description: 'Learn strategic human resource management and organizational development.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Accounting & Finance',
    description: 'Master financial analysis, accounting principles, and business finance.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Explore global supply chain management and logistics operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Digital Marketing',
    description: 'Learn modern marketing strategies and digital campaign management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto text-center py-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Empower Your Future at Skillhub
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Transform your career with world-class education in Dubai
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
                    Get Started
                  </button>
                </div>
              </section>

              {/* Courses Section */}
              <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Our Featured Programs
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                      <CourseCard key={course.title} {...course} />
                    ))}
                  </div>
                </div>
              </section>
            </>
          } />

          {/* Business Management Pages */}
          <Route path="/business-management" element={<BusinessManagement />} />
          <Route path="/business-management/level-3" element={<Level3Diploma />} />
          <Route path="/business-management/level-4" element={<Level4Diploma />} />
          <Route path="/business-management/level-5" element={<Level5Diploma />} />
          <Route path="/business-management/level-6-top-up" element={<Level6TopUp />} />
        </Routes>

        {/* Footer with Contact Form */}
        <footer className="bg-gray-900 text-gray-300 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <CallbackForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@skillhub.com" className="hover:text-white">
                    info@skillhub.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+123-456-7890</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>
                    Dubai Knowledge Park<br />
                    Block 1, Ground Floor<br />
                    Dubai, UAE
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex flex-col space-y-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
