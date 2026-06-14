import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Zap } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Dr. Sarah Johnson', specialization: 'Orthodontist', experience: '12 Years', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Dr. Michael Chen', specialization: 'Implant Surgeon', experience: '15 Years', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Dr. Emily Davis', specialization: 'Pediatric Dentist', experience: '10 Years', image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Dr. James Wilson', specialization: 'Endodontist', experience: '14 Years', image: 'https://i.pravatar.cc/150?img=8' }
  ];

  const certifications = [
    { icon: Award, title: 'ADA Certified', desc: 'American Dental Association' },
    { icon: Zap, title: 'Modern Tech', desc: 'Latest Dental Equipment' },
    { icon: Heart, title: 'Patient First', desc: 'Compassionate Care' },
    { icon: Users, title: 'Expert Team', desc: 'Specialized Professionals' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Dentora</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in dental health for over 15 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c80853?w=800&h=600&fit=crop"
                alt="Our Clinic"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2011, Dentora has been at the forefront of dental care, providing exceptional services to thousands of patients.
                What started as a small clinic has grown into a leading dental healthcare provider with a team of expert dentists.
              </p>
              <p className="text-gray-600 text-lg">
                Our mission has always been to make quality dental care accessible, affordable, and comfortable for everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide comprehensive, compassionate dental care using the latest technology, ensuring every patient achieves and maintains optimal oral health.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary to-secondary p-10 rounded-3xl shadow-lg text-white"
            >
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 text-lg">
                To be the most trusted dental healthcare provider, setting new standards in patient care, innovation, and community service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We're Different</h2>
            <p className="text-lg text-gray-600">Commitment to excellence in every aspect</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Expert dentists dedicated to your smile</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.specialization}</p>
                  <p className="text-gray-500 text-sm">{member.experience} Experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
