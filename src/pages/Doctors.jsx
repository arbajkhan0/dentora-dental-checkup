import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Orthodontist',
      experience: '12 Years',
      bio: 'Dr. Johnson specializes in orthodontics and has helped hundreds of patients achieve perfect smiles with braces and aligners.',
      image: 'https://i.pravatar.cc/200?img=1',
      education: 'DDS, Harvard Dental School',
      certifications: ['ADA', 'AAO']
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Implant Surgeon',
      experience: '15 Years',
      bio: 'An expert in dental implants and oral surgery, Dr. Chen has performed over 5000 successful implant procedures.',
      image: 'https://i.pravatar.cc/200?img=3',
      education: 'MD, DDS, Columbia University',
      certifications: ['ADA', 'AAOMS']
    },
    {
      name: 'Dr. Emily Davis',
      specialization: 'Pediatric Dentist',
      experience: '10 Years',
      bio: 'Dr. Davis loves working with children and creating a fun, comfortable environment for young patients.',
      image: 'https://i.pravatar.cc/200?img=5',
      education: 'DDS, University of Michigan',
      certifications: ['ADA', 'AAPD']
    },
    {
      name: 'Dr. James Wilson',
      specialization: 'Endodontist',
      experience: '14 Years',
      bio: 'Root canal specialist dedicated to saving teeth and relieving pain with advanced endodontic techniques.',
      image: 'https://i.pravatar.cc/200?img=8',
      education: 'DDS, UCLA School of Dentistry',
      certifications: ['ADA', 'AAE']
    },
    {
      name: 'Dr. Lisa Brown',
      specialization: 'Cosmetic Dentist',
      experience: '11 Years',
      bio: 'Transforming smiles with cosmetic dentistry including veneers, whitening, and smile makeovers.',
      image: 'https://i.pravatar.cc/200?img=9',
      education: 'DDS, NYU College of Dentistry',
      certifications: ['ADA', 'AACD']
    },
    {
      name: 'Dr. David Miller',
      specialization: 'Periodontist',
      experience: '13 Years',
      bio: 'Gum health specialist focused on preventing and treating periodontal disease.',
      image: 'https://i.pravatar.cc/200?img=11',
      education: 'DDS, University of Pennsylvania',
      certifications: ['ADA', 'AAP']
    }
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Doctors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of expert dentists dedicated to your oral health
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                    <p className="text-blue-200 font-medium">{doctor.specialization}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 mb-2">{doctor.experience} Experience</p>
                  <p className="text-gray-600 mb-4">{doctor.bio}</p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Education: {doctor.education}</p>
                    <div className="flex gap-2 mt-2">
                      {doctor.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/appointment"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Meet Our Doctors?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a consultation today and get the expert care you deserve
            </p>
            <Link
              to="/appointment"
              className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Schedule Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
