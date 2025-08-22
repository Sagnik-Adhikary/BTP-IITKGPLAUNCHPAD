"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Users, Lightbulb, DollarSign, Building, Award, Globe } from 'lucide-react';

// --- Reusable Button Component ---
const CarouselButton = ({ onClick, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 border border-gray-200"
    {...props}
  >
    {children}
  </button>
);

// --- Hero Section with Ongoing Project Details ---
const HeroSection = () => {
  // Ongoing project details - replace with actual project photos when available
  const projects = [
    {
      title: "AI-Powered Healthcare Platform",
      description: "Revolutionizing patient care with machine learning algorithms for early disease detection",
      team: "Team of 5 students from Computer Science & Medical departments",
      stage: "Prototype Development",
      impact: "Potential to serve 10,000+ patients in rural areas"
    },
    {
      title: "Sustainable Energy Solutions",
      description: "Developing affordable solar-powered solutions for rural electrification",
      team: "Cross-disciplinary team from Electrical & Environmental Engineering",
      stage: "Field Testing Phase",
      impact: "Targeting 50 villages for clean energy access"
    },
    {
      title: "EdTech Learning Platform",
      description: "Personalized learning system using AI to adapt to individual student needs",
      team: "Team of 4 from Computer Science & Education Technology",
      stage: "Beta Testing",
      impact: "Already helping 500+ students improve their grades"
    },
    {
      title: "Smart Agriculture IoT System",
      description: "IoT sensors and data analytics for precision farming and crop optimization",
      team: "Team of 6 from Electronics, Agriculture & Data Science",
      stage: "Pilot Program",
      impact: "Increasing crop yield by 30% in test farms"
    },
    {
      title: "FinTech Payment Gateway",
      description: "Secure, low-cost payment solutions for small businesses and startups",
      team: "Team of 3 from Computer Science & Finance",
      stage: "MVP Development",
      impact: "Reducing transaction costs by 60% for merchants"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Launch Your Startup at IIT KGP
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          Join India's premier entrepreneurship ecosystem. Get mentorship, funding, and the network you need to build the next big thing.
        </p>
        
        {/* Prominent CTA Button */}
        <div className="mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
            Apply Now - Join Our Next Cohort
          </button>
        </div>

        {/* Ongoing Projects Carousel */}
        <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-5xl mx-auto bg-white" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div className="flex-grow-0 flex-shrink-0 w-full p-8 md:p-12" key={index}>
                <div className="text-left">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {project.stage}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
                      <p className="text-gray-600">{project.team}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                      <p className="text-gray-600">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CarouselButton onClick={scrollPrev} disabled={prevBtnDisabled} style={{ left: '1.5rem' }}>
            <ChevronLeft size={28} className="text-gray-700" />
          </CarouselButton>
          <CarouselButton onClick={scrollNext} disabled={nextBtnDisabled} style={{ right: '1.5rem' }}>
            <ChevronRight size={28} className="text-gray-700" />
          </CarouselButton>
        </div>
      </div>
    </section>
  );
};

// --- What You Get Section ---
const OfferingsSection = () => {
  const offerings = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Get guidance from successful entrepreneurs, industry experts, and IIT KGP alumni"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Seed Funding",
      description: "Access to initial funding and connections to angel investors and VCs"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Co-working Space",
      description: "Modern office space with all amenities at IIT KGP Innovation Hub"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Lab Access",
      description: "Use cutting-edge technology and research facilities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with entrepreneurs worldwide through our international partnerships"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Get featured in media and showcase at prestigious events"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
          What You Get
        </h3>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to turn your idea into a successful startup
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 mb-4">
                {offering.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {offering.title}
              </h4>
              <p className="text-gray-600">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, TechFlow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "IIT KGP Launchpad gave me the mentorship and network I needed. We've raised $2M in funding and are growing 300% year-over-year.",
      company: "AI-powered workflow automation"
    },
    {
      name: "Rahul Verma",
      role: "CEO, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The access to IIT KGP's research facilities and expert network was game-changing. We're now serving 50+ cities across India.",
      company: "Sustainable energy solutions"
    },
    {
      name: "Anjali Patel",
      role: "Co-founder, EduTech Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "From idea to 100,000+ users in 18 months. The Launchpad program provided everything we needed to scale rapidly.",
      company: "Online learning platform"
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Success Stories
        </h3>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from founders who transformed their ideas into successful businesses
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sponsors Section ---
const SponsorsSection = () => {
  const sponsors = [
    { name: 'Google for Startups', logo: 'https://placehold.co/200x100/4285f4/ffffff?text=Google' },
    { name: 'Microsoft', logo: 'https://placehold.co/200x100/00a4ef/ffffff?text=Microsoft' },
    { name: 'Amazon Web Services', logo: 'https://placehold.co/200x100/ff9900/ffffff?text=AWS' },
    { name: 'Sequoia Capital', logo: 'https://placehold.co/200x100/000000/ffffff?text=Sequoia' },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-white mb-10">
          Trusted by Industry Leaders
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Final CTA Section ---
const FinalCTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of successful founders who started their journey at IIT KGP Launchpad
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
            Apply Now
          </button>
          <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="bg-gray-900 font-sans">
      <main>
        <HeroSection />
        <OfferingsSection />
        <TestimonialsSection />
        <SponsorsSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
