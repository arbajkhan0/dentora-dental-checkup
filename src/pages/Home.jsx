import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Calendar, 
  Stethoscope, 
  Shield, 
  Clock, 
  Heart, 
  Award, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Stethoscope, title: 'Experienced Dentists', desc: 'Our team consists of highly trained and experienced dental professionals.' },
    { icon: Sparkles, title: 'Modern Equipment', desc: 'State-of-the-art technology for the best dental care experience.' },
    { icon: Heart, title: 'Affordable Treatment', desc: 'Quality dental care at prices you can afford with flexible payment options.' },
    { icon: Clock, title: 'Emergency Care', desc: '24/7 emergency dental services when you need us most.' }
  ];

  const services = [
    { title: 'Dental Checkup', desc: 'Regular dental checkups to maintain your oral health.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop' },
    { title: 'Teeth Cleaning', desc: 'Professional cleaning to remove plaque and tartar.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop' },
    { title: 'Root Canal', desc: 'Save your infected teeth with our expert care.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop' },
    { title: 'Dental Implants', desc: 'Permanent tooth replacement solution.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c80853?w=400&h=300&fit=crop' },
    { title: 'Teeth Whitening', desc: 'Brighten your smile with professional whitening.', image: 'https://images.unsplash.com/photo-1596464716127-f9a80946684e?w=400&h=300&fit=crop' },
    { title: 'Braces & Aligners', desc: 'Straighten your teeth with modern solutions.', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=300&fit=crop' }
  ];

  const whyChooseUs = [
    { icon: Award, title: 'Certified Dentists', desc: 'All our dentists are board-certified professionals.' },
    { icon: Sparkles, title: 'Latest Technology', desc: 'Advanced dental equipment for precise treatment.' },
    { icon: Shield, title: 'Safe Procedures', desc: 'Strict sterilization and safety protocols.' },
    { icon: Heart, title: 'Thousands of Happy Patients', desc: 'Join our community of satisfied patients.' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'Amazing dental care! The team is so professional and caring.', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Michael Chen', rating: 5, text: 'Best dental experience I have ever had. Highly recommend!', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Emily Davis', rating: 5, text: 'Wonderful staff and beautiful clinic. My family loves Dentora.', image: 'https://i.pravatar.cc/100?img=5' },
    { name: 'James Wilson', rating: 5, text: 'Emergency care saved my tooth! Thank you Dentora team.', image: 'https://i.pravatar.cc/100?img=8' },
    { name: 'Lisa Brown', rating: 5, text: 'Professional, friendly, and excellent service every time.', image: 'https://i.pravatar.cc/100?img=9' },
    { name: 'David Miller', rating: 5, text: 'The best dental clinic in town! Modern and comfortable.', image: 'https://i.pravatar.cc/100?img=11' }
  ];

  const stats = [
    { number: '10,000+', label: 'Patients' },
    { number: '25+', label: 'Dentists' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Smile Deserves <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert Care</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional dental checkups, cosmetic dentistry, and oral healthcare services for your entire family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Book Appointment <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c80853?w=800&h=600&fit=crop"
                  alt="Dental Clinic"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5.0</div>
                    <div className="text-sm text-gray-500">Patient Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dentora</h2>
            <p className="text-lg text-gray-600">We provide exceptional dental care with a personal touch</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive dental care for all your needs</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to="/services" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600">Real stories from real patients</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">Happy Patient</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book Your Dental Checkup Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the first step towards a healthier, brighter smile
            </p>
            <Link
              to="/appointment"
              className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Schedule Appointment Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
