import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Heart, Shield, Zap, Star, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Dental Checkup',
      description: 'Comprehensive dental examination including X-rays, gum health assessment, and personalized treatment plan.',
      icon: Stethoscope,
      features: ['Complete oral exam', 'Digital X-rays', 'Gum disease screening', 'Oral cancer check', 'Treatment planning'],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop'
    },
    {
      title: 'Teeth Cleaning',
      description: 'Professional dental cleaning to remove plaque, tartar, and stains for a brighter, healthier smile.',
      icon: Sparkles,
      features: ['Professional scaling', 'Polishing', 'Fluoride treatment', 'Stain removal', 'Fresh breath'],
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop'
    },
    {
      title: 'Root Canal',
      description: 'Save infected teeth with our expert endodontic treatment, relieving pain and preserving your natural smile.',
      icon: Heart,
      features: ['Pain-free procedure', 'Tooth preservation', 'Advanced technology', 'Single visit option', 'Crown preparation'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent, natural-looking tooth replacement solution that looks, feels, and functions like real teeth.',
      icon: Zap,
      features: ['Permanent solution', 'Natural appearance', 'Bone preservation', 'Long-lasting results', 'Expert surgeons'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c80853?w=600&h=400&fit=crop'
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening treatments that safely and effectively brighten your smile by several shades.',
      icon: Star,
      features: ['Professional strength', 'Custom trays', 'In-office options', 'Take-home kits', 'Long-lasting results'],
      image: 'https://images.unsplash.com/photo-1596464716127-f9a80946684e?w=600&h=400&fit=crop'
    },
    {
      title: 'Braces & Aligners',
      description: 'Modern orthodontic solutions including traditional braces and clear aligners to straighten your teeth.',
      icon: Shield,
      features: ['Metal braces', 'Ceramic braces', 'Invisible aligners', 'Digital treatment planning', 'Flexible payment'],
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=400&fit=crop'
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care for all your oral health needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Appointment <ChevronRight className="ml-2 w-5 h-5" />
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule your appointment today and experience exceptional dental care
            </p>
            <Link
              to="/appointment"
              className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Book Your Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
