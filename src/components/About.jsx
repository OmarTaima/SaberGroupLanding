// components/About.jsx
import React from "react";
import { useTranslation } from "../i18n/hooks/useTranslation";

const About = () => {
  const { t, isArabic } = useTranslation();

  const stats = [
    { value: "18", label: t("about:stats.developments") || "Completed Developments", icon: "🏗️" },
    { value: "4,200+", label: t("about:stats.units") || "Residential Units Built", icon: "🏘️" },
    { value: "12", label: t("about:stats.years") || "Years in Operation", icon: "📆" },
    { value: "45+", label: t("about:stats.awards") || "Industry Awards", icon: "🏆" },
    { value: "8", label: t("about:stats.cities") || "Cities Served", icon: "🌆" },
    { value: ">30%", label: t("about:stats.valueGrowth") || "Avg. Property Value Growth", icon: "📈" },
  ];

  const values = [
    {
      title: t("about:values.craftsmanship.title") || "Craftsmanship",
      description: t("about:values.craftsmanship.description") || "We obsess over details — from material selection to finishing — to create places people are proud to call home.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v4M6 7v10a2 2 0 002 2h8a2 2 0 002-2V7M4 7h16" />
        </svg>
      ),
    },
    {
      title: t("about:values.sustainability.title") || "Sustainability",
      description: t("about:values.sustainability.description") || "We design and build with the future in mind — reducing waste, improving efficiency, and creating healthier spaces.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6m0 0l3-3m-3 3L9 5M5 20a7 7 0 0014 0H5z" />
        </svg>
      ),
    },
    {
      title: t("about:values.community.title") || "Community",
      description: t("about:values.community.description") || "We create neighborhoods, not just buildings — fostering connection, safety, and long-term value.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3M3 21h18M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12" />
        </svg>
      ),
    },
    {
      title: t("about:values.transparency.title") || "Transparency",
      description: t("about:values.transparency.description") || "Clear communication and straightforward contracts — so partners and buyers always know what to expect.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: t("about:team.ahmed.name") || "Ahmed Saber",
      role: t("about:team.ahmed.role") || "Founder & CEO",
      bio: t("about:team.ahmed.bio") || "Founder with a vision to create enduring, community-focused developments across Egypt.",
      image: "👨‍💼",
      social: { linkedin: "#" },
    },
    {
      name: t("about:team.mona.name") || "Mona El-Banna",
      role: t("about:team.mona.role") || "Head of Development",
      bio: t("about:team.mona.bio") || "Leads project delivery and construction excellence to ensure timelines and quality are met.",
      image: "👩‍💼",
      social: { linkedin: "#" },
    },
    {
      name: t("about:team.samir.name") || "Samir Khaled",
      role: t("about:team.samir.role") || "Chief Architect",
      bio: t("about:team.samir.bio") || "Designs human-centered buildings that balance aesthetics, function, and sustainability.",
      image: "👨‍🎨",
      social: { linkedin: "#" },
    },
    {
      name: t("about:team.noha.name") || "Noha Ibrahim",
      role: t("about:team.noha.role") || "Sales & Customer Experience",
      bio: t("about:team.noha.bio") || "Ensures homebuyers have a smooth experience from inquiry through handover.",
      image: "👩‍💼",
      social: { linkedin: "#" },
    },
  ];

  const journey = [
    { year: "2014", title: t("about:journey.founded.title") || "Founded", description: t("about:journey.founded.description") || "Saber Group started with a small team and a big ambition: craft quality developments that uplift communities." },
    { year: "2016", title: t("about:journey.firstProject.title") || "First Development", description: t("about:journey.firstProject.description") || "Delivered our first residential project with 120 units, setting our standard for quality and finish." },
    { year: "2019", title: t("about:journey.masterplan.title") || "Masterplan Projects", description: t("about:journey.masterplan.description") || "Launched mixed-use masterplan projects focusing on connectivity, green spaces, and local commerce." },
    { year: "2021", title: t("about:journey.recognition.title") || "Industry Recognition", description: t("about:journey.recognition.description") || "Earned awards for design excellence and sustainable building practices." },
    { year: "2023", title: t("about:journey.expansion.title") || "Regional Growth", description: t("about:journey.expansion.description") || "Expanded to new cities and increased our pipeline of developments across the region." },
  ];

  const partners = [
    { name: "Tanta Club", type: "Local Partner" },
    { name: "Banafseg Investments", type: "Investor" },
    { name: "Delta Contractors", type: "Construction" },
    { name: "GreenPlan", type: "Landscape" },
  ];

  return (
    <section id="about" className="bg-light-50 dark:bg-dark-900 relative overflow-hidden py-20 -mt-5">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", opacity: 0.2 }} />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isArabic ? "rtl" : ""} animate-fade-in`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 backdrop-blur-sm mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {t("about:badge") || "Who We Are"}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {t("about:title") || "Saber Group — Building Places, Creating Value"}
            </span>
          </h1>

          <p className="text-lg text-light-600 dark:text-light-300 leading-relaxed max-w-3xl mx-auto">
            {t("about:subtitle") || "We design and deliver premium residential and mixed‑use developments that enrich communities and drive long-term value for buyers and partners."}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-20 blur" />
            <div className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-light-200/50 dark:border-dark-700/50 text-center">
              <p className="text-2xl md:text-3xl font-medium text-light-900 dark:text-white leading-relaxed">
                "{t("about:mission") || "To raise the standard of living by creating well-crafted developments that combine timeless design, sustainable practices, and meaningful urban experiences."}"
              </p>
              <div className="mt-6 flex justify-center gap-2 text-primary-500">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                <span className="w-2 h-2 rounded-full bg-secondary-500" />
                <span className="w-2 h-2 rounded-full bg-primary-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 border border-light-200/50 dark:border-dark-700/50 text-center hover:border-primary-500/50 transition-all duration-300">
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-light-600 dark:text-light-400 mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

       

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-light-900 dark:text-white mb-4">
              {t("about:values.title") || "What We Stand For"}
            </h2>
            <p className="text-xl text-light-600 dark:text-light-300 max-w-3xl mx-auto">
              {t("about:values.subtitle") || "Our values guide everything we do—from how we work with clients to how we build our team."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative h-full bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-8 border border-light-200/50 dark:border-dark-700/50 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-light-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-light-600 dark:text-light-400">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      

        {/* Team Section */}
        {/* <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-light-900 dark:text-white mb-4">
              {t("about:team.title") || "Meet the Experts"}
            </h2>
            <p className="text-xl text-light-600 dark:text-light-300 max-w-3xl mx-auto">
              {t("about:team.subtitle") || "Passionate professionals dedicated to your success."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 border border-light-200/50 dark:border-dark-700/50 hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-4xl">
                      {member.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-light-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-primary-500 font-medium text-sm mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-light-600 dark:text-light-400">
                        {member.bio}
                      </p>
                      <div className="flex gap-2 mt-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-light-400 hover:text-primary-500 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-light-400 hover:text-primary-500 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.745-3.332A13.94 13.94 0 0024 5.565a9.9 9.9 0 01-2.047.005z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} className="text-light-400 hover:text-primary-500 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        

        {/* Partners */}
        {/* <div className="mb-20">
          <h3 className="text-2xl font-bold text-light-900 dark:text-white text-center mb-8">
            {t("about:partners.title") || "Selected Partners & Contractors"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <div key={i} className="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-light-200/50 dark:border-dark-700/50 text-center hover:border-primary-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-2xl">
                  {p.name.charAt(0)}
                </div>
                <h4 className="font-semibold text-light-900 dark:text-white">{p.name}</h4>
                <p className="text-xs text-light-500 dark:text-light-400">{p.type}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-10 blur-3xl" />
          <div className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-3xl p-12 border border-light-200/50 dark:border-dark-700/50 text-center">
            <h2 className="text-4xl font-bold text-light-900 dark:text-white mb-4">
              {t("about:cta.title") || "Ready to Write Your Success Story?"}
            </h2>
            <p className="text-xl text-light-600 dark:text-light-300 mb-8 max-w-2xl mx-auto">
              {t("about:cta.subtitle") || "Let's collaborate to create something amazing for your brand."}
            </p>
            <a
              href="#contact-section"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 group"
            >
              {t("about:cta.button") || "Start a Conversation"}
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;