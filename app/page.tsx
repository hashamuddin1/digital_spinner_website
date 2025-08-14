"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function DigitalSpinnerWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex(
        (prev) => (prev + 1) % Math.ceil(clients.length / 3)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Social Media Marketing",
      description:
        "Boost your brand presence across all social platforms with engaging content and strategic campaigns.",
      image: "/social-media-dashboard.png",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Improve your website's visibility and ranking on search engines to drive organic traffic.",
      image: "/seo-analytics-dashboard.png",
    },
    {
      title: "Pay-Per-Click Advertising",
      description:
        "Maximize your ROI with targeted PPC campaigns across Google Ads and social media platforms.",
      image: "/ppc-advertising-dashboard.png",
    },
    {
      title: "Content Marketing",
      description:
        "Create compelling content that resonates with your audience and drives conversions.",
      image: "/content-marketing-strategy.png",
    },
    {
      title: "Email Marketing",
      description:
        "Build lasting relationships with personalized email campaigns that convert leads into customers.",
      image: "/email-marketing-campaign.png",
    },
    {
      title: "Web Design & Development",
      description:
        "Create stunning, responsive websites that provide exceptional user experiences.",
      image: "/modern-web-design-mockup.png",
    },
  ];

  const clients = [
    { name: "TechStart Inc.", logo: "/tech-startup-logo.png" },
    { name: "E-commerce Plus", logo: "/ecommerce-logo.png" },
    { name: "Local Bistro", logo: "/restaurant-logo.png" },
    { name: "FinanceFlow", logo: "/finance-company-logo.png" },
    { name: "HealthCare Pro", logo: "/healthcare-company-logo.png" },
    { name: "EduTech Solutions", logo: "/edutech-logo.png" },
    { name: "TechStart Inc.", logo: "/tech-startup-logo.png" },
    { name: "E-commerce Plus", logo: "/ecommerce-logo.png" },
    { name: "Local Bistro", logo: "/restaurant-logo.png" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "Digital Spinner transformed our online presence completely. Our website traffic increased by 300% in just 3 months!",
      image: "/professional-woman-headshot.png",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      rating: 5,
      text: "The team's expertise in PPC advertising helped us achieve a 250% ROI. Highly recommend their services!",
      image: "/professional-man-headshot.png",
    },
    {
      name: "Emily Rodriguez",
      company: "Local Bistro",
      rating: 5,
      text: "Their social media strategy brought us 500+ new customers. Digital Spinner truly understands digital marketing.",
      image: "/professional-woman-headshot.png",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary depending on the service. SEO typically shows results in 3-6 months, while PPC and social media campaigns can show immediate results. We provide monthly reports to track progress and adjust strategies accordingly.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes! We work with startups, small businesses, and large enterprises. Our flexible pricing plans and customizable services ensure we can meet the needs of any business size and budget.",
    },
    {
      question: "What makes Digital Spinner different from other agencies?",
      answer:
        "Our data-driven approach, transparent reporting, and dedicated account management set us apart. We focus on ROI and measurable results, not just vanity metrics. Plus, our team stays updated with the latest digital marketing trends and algorithm changes.",
    },
    {
      question: "Can I cancel my service at any time?",
      answer:
        "Yes, we offer flexible contracts with no long-term commitments. You can cancel or modify your service with 30 days notice. We believe in earning your business through results, not binding contracts.",
    },
    {
      question: "Do you provide detailed reporting and analytics?",
      answer:
        "We provide comprehensive monthly reports that include key performance indicators, campaign performance, ROI analysis, and actionable insights. You'll always know exactly how your investment is performing.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work across various industries including e-commerce, healthcare, finance, technology, restaurants, and professional services. Our diverse experience allows us to adapt strategies to any industry's unique challenges and opportunities.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextClients = () => {
    setCurrentClientIndex((prev) => (prev + 1) % Math.ceil(clients.length / 3));
  };

  const prevClients = () => {
    setCurrentClientIndex(
      (prev) =>
        (prev - 1 + Math.ceil(clients.length / 3)) %
        Math.ceil(clients.length / 3)
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .client-carousel {
          animation: slideIn 0.6s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .client-logo {
          transition: all 0.3s ease;
        }

        .client-logo:hover {
          transform: scale(1.1) rotate(2deg);
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#181842] to-[#00aeef] bg-clip-text text-transparent">
                Digital Spinner
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-[#181842] hover:text-[#00aeef] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-[#181842] hover:text-[#00aeef] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  className="text-[#181842] hover:text-[#00aeef] transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#clients"
                  className="text-[#181842] hover:text-[#00aeef] transition-colors"
                >
                  Our Clients
                </a>
                <a
                  href="#testimonials"
                  className="text-[#181842] hover:text-[#00aeef] transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-[#181842] hover:text-[#00aeef] transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                Pricing
              </a>
              <a
                href="#clients"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                Our Clients
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-[#181842] hover:text-[#00aeef]"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-[#181842] via-[#181842] to-[#00aeef]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-on-scroll">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Spin Your Digital
                <span className="block bg-gradient-to-r from-[#00aeef] to-white bg-clip-text text-transparent">
                  Success Story
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Transform your business with cutting-edge digital marketing
                strategies that drive real results and accelerate growth.
              </p>
              <Button
                size="lg"
                className="bg-[#00aeef] hover:bg-[#0099d4] text-white px-8 py-3 text-lg"
              >
                Get Started Today
              </Button>
            </div>
            <div className="relative animate-on-scroll">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  poster="/digital-marketing-thumbnail.png"
                >
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section with Carousel */}
      <section id="clients" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-[#181842] mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with innovative companies across various
              industries
            </p>
          </div>

          <div className="relative animate-on-scroll">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out client-carousel"
                style={{
                  transform: `translateX(-${currentClientIndex * 100}%)`,
                }}
              >
                {Array.from({ length: Math.ceil(clients.length / 3) }).map(
                  (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-3 gap-8 px-4">
                        {clients
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((client, index) => (
                            <div
                              key={`${slideIndex}-${index}`}
                              className="flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 client-logo grayscale hover:grayscale-0 border border-gray-100"
                            >
                              <img
                                src={client.logo || "/placeholder.svg"}
                                alt={client.name}
                                className="max-h-20 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevClients}
                className="border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef] hover:text-white bg-white shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextClients}
                className="border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef] hover:text-white bg-white shadow-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: Math.ceil(clients.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentClientIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentClientIndex === index
                        ? "bg-[#00aeef] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-[#181842] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to elevate your
              brand and drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white animate-on-scroll"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#181842] group-hover:text-[#00aeef] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-[#181842] to-[#00aeef]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Flexible pricing options designed to fit businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Silver Plan */}
            <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 text-white animate-on-scroll">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Silver</CardTitle>
                <div className="text-4xl font-bold mb-2">
                  $999<span className="text-lg font-normal">/month</span>
                </div>
                <CardDescription className="text-gray-200">
                  Perfect for small businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    ✓ Social Media Management
                  </li>
                  <li className="flex items-center">
                    ✓ Basic SEO Optimization
                  </li>
                  <li className="flex items-center">
                    ✓ Monthly Analytics Report
                  </li>
                  <li className="flex items-center">✓ Email Support</li>
                </ul>
                <Button className="w-full bg-white text-[#181842] hover:bg-gray-100">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Gold Plan */}
            <Card className="relative bg-gradient-to-br from-yellow-500/40 to-yellow-700/40 backdrop-blur-sm border-yellow-500/30 text-white transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Gold</CardTitle>
                <div className="text-4xl font-bold mb-2">
                  $1999<span className="text-lg font-normal">/month</span>
                </div>
                <CardDescription className="text-gray-200">
                  Ideal for growing businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">✓ Everything in Silver</li>
                  <li className="flex items-center">
                    ✓ PPC Campaign Management
                  </li>
                  <li className="flex items-center">✓ Content Marketing</li>
                  <li className="flex items-center">
                    ✓ Weekly Analytics Reports
                  </li>
                  <li className="flex items-center">✓ Phone & Email Support</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Diamond Plan */}
            <Card className="relative bg-gradient-to-br from-blue-500/40 to-purple-700/40 backdrop-blur-sm border-blue-500/30 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Diamond</CardTitle>
                <div className="text-4xl font-bold mb-2">
                  $3999<span className="text-lg font-normal">/month</span>
                </div>
                <CardDescription className="text-gray-200">
                  Enterprise-level solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">✓ Everything in Gold</li>
                  <li className="flex items-center">
                    ✓ Custom Web Development
                  </li>
                  <li className="flex items-center">
                    ✓ Advanced Analytics & BI
                  </li>
                  <li className="flex items-center">
                    ✓ Dedicated Account Manager
                  </li>
                  <li className="flex items-center">✓ 24/7 Priority Support</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:from-blue-500 hover:to-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-[#181842] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have
              transformed their digital presence with us
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto animate-on-scroll">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                    <p className="text-lg text-gray-700 mb-4 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-semibold text-[#181842]">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef] hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-[#00aeef] text-[#00aeef] hover:bg-[#00aeef] hover:text-white bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-[#181842] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our digital
              marketing services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border border-gray-200 animate-on-scroll"
              >
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-[#181842] text-left">
                      {faq.question}
                    </CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#00aeef] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#00aeef] flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-[#181842] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to spin your digital success story? Let's discuss how we can
              help grow your business
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-on-scroll">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#181842] mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-gray-300 focus:border-[#00aeef] focus:ring-[#00aeef]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#181842] mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-[#00aeef] focus:ring-[#00aeef]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#181842] mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project and goals..."
                      className="border-gray-300 focus:border-[#00aeef] focus:ring-[#00aeef]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#181842] to-[#00aeef] hover:from-[#1a1a4a] hover:to-[#0099d4] text-white py-3 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181842] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#00aeef] bg-clip-text text-transparent mb-4">
                Digital Spinner
              </h3>
              <p className="text-gray-300 mb-6">
                Spinning digital success stories for businesses worldwide
                through innovative marketing strategies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#00aeef] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#00aeef] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#00aeef] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[#00aeef]" />
                  <span className="text-gray-300">
                    hello@digitalspinner.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#00aeef]" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#00aeef] mt-1" />
                  <span className="text-gray-300">
                    123 Digital Avenue
                    <br />
                    Marketing City, MC 12345
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00aeef] transition-colors"
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00aeef] transition-colors"
                  >
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00aeef] transition-colors"
                  >
                    PPC Advertising
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00aeef] transition-colors"
                  >
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00aeef] transition-colors"
                  >
                    Web Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-semibold mb-4">Find Us</h4>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Digital Spinner Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center animate-on-scroll">
            <p className="text-gray-300">
              © 2024 Digital Spinner. All rights reserved. | Spinning success
              since 2020
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
