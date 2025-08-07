"use client";
import { useState } from "react";
import TextType from "../../app/components/TextType/TextType";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Data profil - ganti sesuai data Anda
  const profileData = {
    name: "Vina Qhurotu Aini",
    title: "Software Developer",
    description: "Selamat datang di personal web saya!👋",
    email: "vinaaini70@gmail.com",
    phone: "082254561528",
    location: "Yogyakarta, Indonesia",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "PHP", "MySQL"],
    birthplace: "Bontang",
    birthdate: "22 November 2003",
    projects: [
      {
        title: "Personal Portfolio Website",
        description: "Website portofolio pribadi yang menampilkan informasi tentang saya, proyek-proyek yang pernah saya buat, dan kontak.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
        image: "image.png",
        demoUrl: "#",
        codeUrl: "#",
        status: "Completed",
      },
      {
        title: "Task Management App",
        description: "Aplikasi manajemen tugas dengan fitur drag & drop, deadline tracking, dan kolaborasi tim.",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        image: "https://via.placeholder.com/400x250/2C2C2C/F5F5DC?text=Task+Manager",
        demoUrl: "#",
        codeUrl: "#",
        status: "Completed",
      },
      {
        title: "Portfolio Website",
        description: "Website portfolio responsive dengan animasi yang smooth dan design modern.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "https://via.placeholder.com/400x250/1C1C1C/F5F5DC?text=Portfolio",
        demoUrl: "#",
        codeUrl: "#",
        status: "Completed",
      },
      {
        title: "Weather App",
        description: "Aplikasi cuaca dengan API integration, menampilkan prediksi cuaca 7 hari ke depan.",
        technologies: ["React", "OpenWeather API"],
        image: "https://via.placeholder.com/400x250/2C2C2C/F5F5DC?text=Weather+App",
        demoUrl: "#",
        codeUrl: "#",
        status: "Completed",
      },
      {
        title: "Blog Platform",
        description: "Platform blog dengan fitur CMS, komentar, dan sistem user management.",
        technologies: ["Next.js", "Prisma", "PostgreSQL"],
        image: "https://via.placeholder.com/400x250/1C1C1C/F5F5DC?text=Blog+Platform",
        demoUrl: "#",
        codeUrl: "#",
        status: "In Progress",
      },
      {
        title: "Mobile App UI",
        description: "Design UI/UX untuk aplikasi mobile e-learning dengan interface yang user-friendly.",
        technologies: ["Figma", "React Native"],
        image: "https://via.placeholder.com/400x250/2C2C2C/F5F5DC?text=Mobile+UI",
        demoUrl: "#",
        codeUrl: "#",
        status: "Design Phase",
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 border-b border-amber-100 border-opacity-20">
        <div className="max-w-6xl mx-auto px-4">
          <table className="w-full h-16">
            <tr>
              <td className="w-1/3">
                {/* Logo */}
                <div className="text-amber-100 font-bold text-xl">{profileData.name}</div>
              </td>

              <td className="w-1/3 text-center">
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 justify-center">
                  {items.map((item, index) => (
                    <a key={index} href={item.href} className="text-amber-100 hover:text-amber-200 transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              </td>

              <td className="w-1/3 text-right">
                {/* Mobile Menu Button */}
                <button className="md:hidden text-amber-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1 ml-auto">
                    <div className="w-full h-0.5 bg-amber-100"></div>
                    <div className="w-full h-0.5 bg-amber-100"></div>
                    <div className="w-full h-0.5 bg-amber-100"></div>
                  </div>
                </button>
              </td>
            </tr>
          </table>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-95 py-4 border-t border-amber-100 border-opacity-20">
              {items.map((item, index) => (
                <a key={index} href={item.href} className="block text-amber-100 hover:text-amber-200 py-2 px-4" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pt-16">
        {/* Section: Home */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="w-1/2 align-top pr-8">
                    {/* Text Content */}
                    <div className="text-amber-100">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ minHeight: "4rem" }}>
                        <TextType text={`Halo, Saya ${profileData.name}`} />
                      </h1>
                      <h2 className="text-xl md:text-2xl text-amber-200 mb-6">{profileData.title}</h2>
                      <p className="text-amber-200 mb-8 leading-relaxed">{profileData.description}</p>
                      <div className="flex space-x-4">
                        <a href="#contact" className="bg-amber-100 hover:bg-amber-200 text-black px-6 py-3 rounded-lg transition-colors font-medium">
                          Hubungi Saya
                        </a>
                        <a href="#about" className="border border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-black px-6 py-3 rounded-lg transition-colors">
                          Pelajari Lebih
                        </a>
                      </div>
                    </div>
                  </td>

                  <td className="w-1/2 align-middle text-center">
                    {/* Profile Image with Glow Effect */}
                    <div className="flex justify-center">
                      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-100 shadow-2xl relative">
                        <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(245,245,220,0.6)] animate-pulse"></div>
                        <img src="/IMG_5802.jpg" alt="Foto Profil" className="w-full h-full object-cover relative z-10" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: About */}
        <section id="about" className="min-h-screen flex items-center bg-amber-50 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">Tentang Saya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Siapa Saya?</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Saya adalah mahasiswa Program Studi Informatika di Universitas Atma Jaya Yogyakarta yang memiliki ketertarikan besar pada pengembangan perangkat lunak, terutama aplikasi web dan mobile. Saya senang mempelajari teknologi
                  baru seperti React, Next.js, dan Flutter, serta aktif mengembangkan keterampilan melalui proyek pribadi maupun kerja tim.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                  Di luar kegiatan perkuliahan, saya juga mengikuti beberapa kursus online untuk memperdalam pemahaman mengenai front-end, back-end, serta praktik terbaik dalam pengembangan perangkat lunak.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">Saya memiliki motivasi tinggi untuk terus belajar dan berkembang, serta semangat untuk memberikan kontribusi nyata di dunia teknologi.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-black">Info Personal</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-black">Nama:</span>
                    <span className="ml-2 text-gray-700">{profileData.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-black">Tempat, Tanggal Lahir:</span>
                    <span className="ml-2 text-gray-700">Yogyakarta, 5 Desember 2003</span>
                  </div>
                  <div>
                    <span className="font-medium text-black">Email:</span>
                    <span className="ml-2 text-gray-700">{profileData.email}</span>
                  </div>
                  <div>
                    <span className="font-medium text-black">Lokasi:</span>
                    <span className="ml-2 text-gray-700">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section id="skills" className="min-h-screen flex items-center bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-100">Keahlian Saya</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {profileData.skills.map((skill, index) => (
                <div key={index} className="bg-black border border-amber-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-100/20 transition-all duration-300 text-center">
                  <h3 className="text-lg font-semibold text-amber-100">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="min-h-screen bg-amber-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Project Saya</h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">Berikut adalah beberapa project yang pernah saya kerjakan. Setiap project dibuat dengan teknologi terkini dan mengutamakan user experience yang baik.</p>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {profileData.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-200">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-100">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === "Completed" ? "bg-green-100 text-green-800" : project.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-amber-100 text-black text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a href={project.demoUrl} className="flex-1 bg-black hover:bg-gray-800 text-amber-100 text-center py-2 px-4 rounded text-sm transition-colors">
                        Live Demo
                      </a>
                      <a href={project.codeUrl} className="flex-1 border border-black hover:bg-black hover:text-amber-100 text-black text-center py-2 px-4 rounded text-sm transition-colors">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="min-h-screen flex items-center bg-black py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-100">Hubungi Saya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="text-amber-100">
                <h3 className="text-2xl font-semibold mb-6">Mari Berkolaborasi!</h3>
                <p className="text-amber-200 mb-8">Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi proyek baru atau kesempatan kerja.</p>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900 p-6 rounded-lg border border-amber-100">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center text-amber-100">
                      <div className="w-5 h-5 bg-amber-100 rounded mr-3"></div>
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center text-amber-100">
                      <div className="w-5 h-5 bg-amber-200 rounded mr-3"></div>
                      <span>{profileData.phone}</span>
                    </div>
                    <div className="flex items-center text-amber-100">
                      <div className="w-5 h-5 bg-amber-300 rounded mr-3"></div>
                      <span>{profileData.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-100 border-opacity-20 text-amber-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 {profileData.name}. Semua hak dilindungi.</p>
        </div>
      </footer>

      {/* CSS untuk smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
