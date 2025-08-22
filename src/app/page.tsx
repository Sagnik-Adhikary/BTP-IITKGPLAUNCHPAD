"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Users, Lightbulb, DollarSign, Building, Award, Globe } from 'lucide-react';

// --- Reusable Button Component (from page.tsx) ---
const CarouselButton = ({ onClick, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 border border-gray-200"
    {...props}
  >
    {children}
  </button>
);

// --- Hero Section (from page.tsx) ---
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-sm font-medium text-blue-200">🏆 #1 Entrepreneurship Platform in India</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent leading-tight">
            Launch Your Startup at
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              IIT KGP
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Join India&apos;s premier entrepreneurship ecosystem. Get mentorship, funding, and the network you need to build the next big thing.
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-gray-300">Startups Launched</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-teal-400">$50M+</div>
              <div className="text-sm text-gray-300">Funding Raised</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Launch Your Startup?
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join hundreds of successful founders who started their journey at IIT KGP Launchpad
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 cursor-pointer">
                <span className="flex items-center gap-3">
                  🚀 Apply Now - Join Our Next Cohort
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-white/30 text-white font-bold py-5 px-12 rounded-xl text-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  📚 Learn More
                  <svg className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Featured Student Projects Section (from page.tsx with FIX) ---
const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Healthcare Platform",
      description: "Revolutionizing patient care with machine learning algorithms for early disease detection",
      team: "Team of 5 students from Computer Science & Medical departments",
      stage: "Prototype Development",
      impact: "Potential to serve 10,000+ patients in rural areas",
      category: "Healthcare"
    },
    {
      title: "Sustainable Energy Solutions",
      description: "Developing affordable solar-powered solutions for rural electrification",
      team: "Cross-disciplinary team from Electrical & Environmental Engineering",
      stage: "Field Testing Phase",
      impact: "Targeting 50 villages for clean energy access",
      category: "Clean Energy"
    },
    {
      title: "EdTech Learning Platform",
      description: "Personalized learning system using AI to adapt to individual student needs",
      team: "Team of 4 from Computer Science & Education Technology",
      stage: "Beta Testing",
      impact: "Already helping 500+ students improve their grades",
      category: "Education"
    },
    {
      title: "Smart Agriculture IoT System",
      description: "IoT sensors and data analytics for precision farming and crop optimization",
      team: "Team of 6 from Electronics, Agriculture & Data Science",
      stage: "Pilot Program",
      impact: "Increasing crop yield by 30% in test farms",
      category: "Agriculture"
    },
    {
      title: "FinTech Payment Gateway",
      description: "Secure, low-cost payment solutions for small businesses and startups",
      team: "Team of 3 from Computer Science & Finance",
      stage: "MVP Development",
      impact: "Reducing transaction costs by 60% for merchants",
      category: "FinTech"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    if (!emblaApi) return;
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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Student Projects
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our current cohort is building
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-50" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div className="flex-grow-0 flex-shrink-0 basis-full min-w-0 p-8 md:p-12" key={index}>
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-block text-sm font-medium px-4 py-2 rounded-full ${
                        project.stage.includes('Prototype') ? 'bg-green-100 text-green-800' :
                        project.stage.includes('Testing') ? 'bg-orange-100 text-orange-800' :
                        project.stage.includes('Beta') ? 'bg-blue-100 text-blue-800' :
                        project.stage.includes('Pilot') ? 'bg-purple-100 text-purple-800' :
                        'bg-teal-100 text-teal-800'
                      }`}>
                      {project.stage}
                      </span>
                      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          Team
                        </h4>
                        <p className="text-gray-600">{project.team}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-green-600" />
                          Impact
                        </h4>
                        <p className="text-gray-600">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <CarouselButton onClick={scrollPrev} disabled={prevBtnDisabled} style={{ left: '1.5rem' }}>
            <ChevronLeft size={28} className="text-gray-700" />
          </CarouselButton>
          <CarouselButton onClick={scrollNext} disabled={nextBtnDisabled} style={{ right: '1.5rem' }}>
            <ChevronRight size={28} className="text-gray-700" />
          </CarouselButton>
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- What You Get Section (from page.tsx) ---
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
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-teal-500">
              <div className={`mb-4 ${
                offering.title.includes('Mentorship') ? 'text-blue-600' :
                offering.title.includes('Funding') ? 'text-green-600' :
                offering.title.includes('Space') ? 'text-purple-600' :
                offering.title.includes('Innovation') ? 'text-orange-600' :
                offering.title.includes('Global') ? 'text-indigo-600' :
                'text-teal-600'
              }`}>
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

// --- Meet the Mentors Section (from page.tsx) ---
const MentorsSection = () => {
    const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Former VP Engineering, Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "IIT KGP '95 alumnus with 25+ years in tech. Led engineering teams at Google, Microsoft, and multiple successful startups. Passionate about mentoring next-gen entrepreneurs.",
      expertise: "AI/ML, Product Strategy, Team Building",
      company: "Ex-Google, Microsoft"
    },
    {
      name: "Priya Mehta",
      title: "Founder & CEO, HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "IIT KGP '08 graduate who built a $50M healthcare startup. Expert in healthcare technology, regulatory compliance, and scaling startups in regulated industries.",
      expertise: "Healthcare Tech, Regulatory, Scaling",
      company: "HealthTech Innovations"
    },
    {
      name: "Arjun Singh",
      title: "Managing Director, Venture Capital",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "IIT KGP '92 alumnus with 20+ years in venture capital. Has invested in 50+ startups with 15 successful exits. Specializes in fintech and enterprise software.",
      expertise: "Venture Capital, FinTech, Enterprise",
      company: "Sequoia Capital India"
    },
    {
      name: "Dr. Anjali Desai",
      title: "Chief Technology Officer, Green Energy Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "IIT KGP '06 PhD in Renewable Energy. Pioneer in sustainable technology with 15+ patents. Built and sold two cleantech companies for over $100M combined.",
      expertise: "Clean Energy, Deep Tech, IP Strategy",
      company: "Green Energy Corp"
    },
    {
      name: "Vikram Sharma",
      title: "Serial Entrepreneur & Angel Investor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      bio: "IIT KGP '00 alumnus who founded 3 successful startups. Exited two companies for $200M+. Now angel investing and mentoring early-stage startups.",
      expertise: "B2B SaaS, Market Entry, Exit Strategy",
      company: "Multiple Exits"
    },
    {
      name: "Dr. Meera Patel",
      title: "Head of Innovation, Global Tech Inc",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      bio: "IIT KGP '10 graduate leading innovation at Fortune 500 company. Expert in corporate innovation, strategic partnerships, and building innovation ecosystems.",
      expertise: "Corporate Innovation, Partnerships, Strategy",
      company: "Global Tech Inc"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Meet the Mentors
        </h3>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Learn from IIT KGP alumni who have built successful companies and are passionate about helping the next generation of entrepreneurs
        </p>
        
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-transparent hover:border-teal-500">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-teal-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{mentor.name}</h4>
                    <p className="text-sm text-teal-600 font-medium">{mentor.title}</p>
                    <p className="text-xs text-gray-500">{mentor.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {mentor.bio}
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-3 rounded-lg border border-teal-200">
                  <p className="text-xs font-semibold text-teal-800 mb-1">Expertise:</p>
                  <p className="text-xs text-teal-700">{mentor.expertise}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Our mentor network includes 50+ successful IIT KGP alumni across various industries
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
            View All Mentors
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section (from page.tsx) ---
const TestimonialsSection = () => {
    const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, TechFlow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "IIT KGP Launchpad gave me the mentorship and network I needed. We&apos;ve raised $2M in funding and are growing 300% year-over-year.",
      company: "AI-powered workflow automation"
    },
    {
      name: "Rahul Verma",
      role: "CEO, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The access to IIT KGP&apos;s research facilities and expert network was game-changing. We&apos;re now serving 50+ cities across India.",
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
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-l-4 ${
              index === 0 ? 'border-l-green-500 hover:border-l-green-600' :
              index === 1 ? 'border-l-blue-500 hover:border-l-blue-600' :
              'border-l-orange-500 hover:border-l-orange-600'
            }`}>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full mr-4 ring-2 ${
                    index === 0 ? 'ring-green-200' :
                    index === 1 ? 'ring-blue-200' :
                    'ring-orange-200'
                  }`}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className={`text-xs font-medium ${
                    index === 0 ? 'text-green-600' :
                    index === 1 ? 'text-blue-600' :
                    'text-orange-600'
                  }`}>{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className={`mt-4 text-xs font-medium ${
                index === 0 ? 'text-green-600' :
                index === 1 ? 'text-blue-600' :
                'text-orange-600'
              }`}>
                ✓ Success Story #{index + 1}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-12 md:col-span-3">
            <button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <span>View All Success Stories</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sponsors Section (from page.tsx) ---
const SponsorsSection = () => {
    const sponsors = [
    { 
      name: 'Google for Startups', 
      logo: 'https://placehold.co/200x100/4285f4/ffffff?text=Google',
      category: 'Tech Giant',
      description: 'Global startup support and cloud infrastructure'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://placehold.co/200x100/00a4ef/ffffff?text=Microsoft',
      category: 'Enterprise Tech',
      description: 'Enterprise solutions and startup partnerships'
    },
    { 
      name: 'Amazon Web Services', 
      logo: 'https://placehold.co/200x100/ff9900/ffffff?text=AWS',
      category: 'Cloud Platform',
      description: 'Leading cloud infrastructure provider'
    },
    { 
      name: 'Sequoia Capital', 
      logo: 'https://placehold.co/200x100/000000/ffffff?text=Sequoia',
      category: 'Venture Capital',
      description: 'Premier venture capital firm'
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <span className="text-sm font-medium text-blue-200">🤝 Strategic Partnerships</span>
            </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We partner with the world&apos;s most innovative companies to provide our startups with cutting-edge resources and global opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <div key={sponsor.name} className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/40 cursor-pointer ${
              index === 0 ? 'hover:shadow-blue-500/25' :
              index === 1 ? 'hover:shadow-cyan-500/25' :
              index === 2 ? 'hover:shadow-orange-500/25' :
              'hover:shadow-gray-500/25'
            }`}>
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-xl transition-all duration-300 ${
                  index === 0 ? 'bg-blue-50 group-hover:bg-blue-100' :
                  index === 1 ? 'bg-cyan-50 group-hover:bg-cyan-100' :
                  index === 2 ? 'bg-orange-50 group-hover:bg-orange-100' :
                  'bg-gray-50 group-hover:bg-gray-100'
                }`}>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 md:h-20 object-contain transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-bold text-white text-lg mb-2">{sponsor.name}</h4>
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
                  index === 0 ? 'bg-blue-100 text-blue-800' :
                  index === 1 ? 'bg-cyan-100 text-cyan-800' :
                  index === 2 ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {sponsor.category}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h4 className="text-2xl font-bold text-white text-center mb-8">Partnership Benefits</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-white mb-2">Access to Resources</h5>
              <p className="text-gray-300 text-sm">Cutting-edge tools, APIs, and infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-white mb-2">Global Network</h5>
              <p className="text-gray-300 text-sm">Connect with partners worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-white mb-2">Funding Access</h5>
              <p className="text-gray-300 text-sm">Direct access to investment opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Main Page Component (from page.tsx) ---
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <OfferingsSection />
      <MentorsSection />
      <TestimonialsSection />
      <SponsorsSection />
    </>
  );
}