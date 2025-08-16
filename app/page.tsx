"use client";
import { useState } from "react";
import TextType from "./components/TextType/TextType";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
    linkedin: "www.linkedin.com/in/vina-qhurotu-aini",
    location: "Yogyakarta, Indonesia",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "PHP", "MySQL"],
    projects: [
      {
        title: "Personal Portfolio Website",
        description: "Website portofolio pribadi yang menampilkan informasi tentang saya, proyek-proyek yang pernah saya buat, dan kontak.",
        technologies: ["React", "Tailwind CSS", "Next.js"],
        image: "image1.png",
        codeUrl: "https://github.com/VinaQhurotuAini/personal-portofolio.git",
      },
      {
        title: "Website Jadwal Karyawan - Atma Kitchen",
        description: "Website sederhana untuk mengelola jadwal kerja karyawan berdasarkan jenis pekerjaan (Full-Time, Part-Time, dan Daily Worker). Data disimpan sementara menggunakan session PHP tanpa database.",
        technologies: ["PHP", "HTML", "CSS", "Bootstrap 5"],
        image: "image2.png",
        codeUrl: "https://github.com/VinaQhurotuAini/PW3_B_11673.git",
      },
      {
        title: "Website Pelelangan Sepatu Bekas",
        description:
          "Aplikasi web berbasis Laravel untuk sistem pelelangan sepatu bekas. Memiliki dua peran pengguna: admin dan pembeli. Saya berkontribusi dalam pengembangan sisi pembeli, termasuk fitur melihat katalog, melakukan bid, dan proses checkout.",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "XAMPP"],
        image: "image3.png",
        codeUrl: "https://github.com/Jonathann288/PW_B_5_Laravel.git",
      },
    ],
  };

  return (
    <div className={`${sourceCodePro.className} min-h-screen overflow-x-hidden bg-black font-sans`}>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-amber-100/20">
        <div className="max-w-6xl mx-auto px-4">
          <table className="w-full h-16">
            <tbody>
              <tr>
                <td className="w-1/3">
                  {/* Logo */}
                  <div className="text-amber-100 font-bold text-xl tracking-wide">Vina</div>
                </td>

                <td className="w-1/3 text-center">
                  {/* Desktop Menu */}
                  <div className="hidden md:flex space-x-8 justify-center">
                    {items.map((item, index) => (
                      <a key={index} href={item.href} className="text-amber-100 hover:text-amber-300 transition-all duration-300 relative group font-medium">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ))}
                  </div>
                </td>

                <td className="w-1/3 text-right">
                  {/* Mobile Menu Button */}
                  <button className="md:hidden text-amber-100 hover:text-amber-300 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1 ml-auto">
                      <div className="w-full h-0.5 bg-current transition-all"></div>
                      <div className="w-full h-0.5 bg-current transition-all"></div>
                      <div className="w-full h-0.5 bg-current transition-all"></div>
                    </div>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-sm py-4 border-t border-amber-100/20">
              {items.map((item, index) => (
                <a key={index} href={item.href} className="block text-amber-100 hover:text-amber-300 hover:bg-amber-100/10 py-3 px-4 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pt-16">
        {/* Section: Home */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/5 to-transparent"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-100/5 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
            <table className="w-full table-fixed border-separate border-spacing-0 md:table">
              <tbody className="block md:table-row-group">
                <tr className="block md:table-row">
                  <td className="block md:table-cell w-full md:w-1/2 align-middle pr-0 md:pr-8">
                    {/* Text Content */}
                    <div className="text-amber-100">
                      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ minHeight: "4rem" }}>
                        <TextType text={`Halo, Saya ${profileData.name}`} />
                      </h1>

                      <h2 className="text-2xl md:text-3xl text-amber-200 mb-6 font-light">{profileData.title}</h2>

                      <p className="text-amber-200/90 mb-8 leading-relaxed text-lg max-w-lg">{profileData.description}</p>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://drive.google.com/drive/folders/1_FZSFcCCmedYEvQv4zCRiribME-_jZ8_?usp=sharing"
                          className="bg-amber-100 hover:bg-amber-200 text-black px-8 py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-amber-100/25 hover:scale-105"
                        >
                          CV
                        </a>
                        <a
                          href="https://drive.google.com/drive/folders/15veIW5LcupB4zk0Yg_wyvu3H-Mq_3IF-?usp=sharing"
                          className="border border-amber-100/50 text-amber-100 hover:bg-amber-100/10 hover:border-amber-100 px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
                        >
                          Transkip Nilai
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: About */}
        <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-amber-100/50 py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-black mb-4">Tentang Saya</h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-black mb-6">Siapa Saya?</h3>

                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    Saya adalah mahasiswa Program Studi <strong>Informatika</strong> di Universitas Atma Jaya Yogyakarta yang memiliki ketertarikan besar pada pengembangan perangkat lunak, terutama aplikasi web dan mobile.
                  </p>

                  <p className="leading-relaxed">
                    Saya senang mempelajari teknologi baru seperti <strong>React, Next.js, dan Laravel</strong>, serta aktif mengembangkan keterampilan melalui proyek pribadi maupun kerja tim.
                  </p>

                  <p className="leading-relaxed">Saya memiliki motivasi tinggi untuk terus belajar dan berkembang, serta semangat untuk memberikan kontribusi nyata di dunia teknologi.</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-xl">
                <h4 className="text-2xl font-semibold mb-6 text-black flex items-center">👤 Info Personal</h4>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="font-semibold text-black min-w-[120px]">Nama:</span>
                    <span className="text-gray-700 font-medium">{profileData.name}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-black min-w-[120px]">Lahir:</span>
                    <span className="text-gray-700">Yogyakarta, 5 Desember 2003</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-black min-w-[120px]">Email:</span>
                    <a href={`mailto:${profileData.email}`} className="text-gray-700 hover:text-black transition-colors">
                      {profileData.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-black min-w-[120px]">Lokasi:</span>
                    <span className="text-gray-700">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/5 to-transparent"></div>

          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-100 mb-4">Keahlian Saya</h2>
              <div className="w-24 h-1 bg-amber-100 mx-auto mb-6"></div>
              <p className="text-amber-200/80 text-lg max-w-2xl mx-auto">Teknologi dan tools yang saya kuasai dalam pengembangan perangkat lunak</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {profileData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-black/50 backdrop-blur-sm border border-amber-100/30 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-300 text-center hover:scale-105 hover:bg-black/70"
                >
                  <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-200 transition-colors">{skill}</h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-amber-200/70 max-w-3xl mx-auto text-lg leading-relaxed">
                💡 Saya terus belajar dan mengembangkan keahlian untuk mengikuti perkembangan teknologi terbaru dalam dunia web development dan siap menghadapi tantangan proyek yang kompleks.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="bg-gradient-to-br from-amber-50 to-amber-100/50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-black mb-4">Project Saya</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">🚀 Berikut adalah beberapa project yang pernah saya kerjakan. Setiap project dibuat dengan teknologi terkini dan mengutamakan user experience yang baik.</p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {profileData.projects.map((project, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-200/50 hover:scale-105 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-800 transition-colors">{project.title}</h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-6 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-amber-100 text-black text-xs rounded-full font-medium hover:bg-amber-200 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-black hover:bg-gray-800 text-amber-100 text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        🔗 View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/5 to-transparent"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-100/5 rounded-full blur-3xl"></div>

          <div className="max-w-3xl w-full mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-100 mb-4">Hubungi Saya</h2>
              <div className="w-24 h-1 bg-amber-100 mx-auto"></div>
            </div>

            {/* Contact Card di tengah */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-amber-100/30 shadow-2xl text-center">
              <h4 className="text-2xl font-semibold mb-6 text-amber-100">📞 Kontak Langsung</h4>

              <div className="space-y-6">
                <div className="text-amber-100 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300">
                  <div className="text-sm text-amber-200">Email</div>
                  <a href={`mailto:${profileData.email}`} className="font-medium hover:text-amber-200">
                    {profileData.email}
                  </a>
                </div>

                <div className="text-amber-100 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300">
                  <div className="text-sm text-amber-200">WhatsApp</div>
                  <a href={`tel:${profileData.phone}`} className="font-medium hover:text-amber-200">
                    {profileData.phone}
                  </a>
                </div>

                <div className="text-amber-100 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300">
                  <div className="text-sm text-amber-200">LinkedIn</div>
                  <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-amber-200">
                    {profileData.linkedin}
                  </a>
                </div>

                <div className="text-amber-100 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300">
                  <div className="text-sm text-amber-200">Lokasi</div>
                  <span className="font-medium">{profileData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-100/20 text-amber-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-amber-100 mb-2">{profileData.name}</h3>
              <p className="text-amber-200/70">Software Developer | Mahasiswa Informatika</p>
            </div>

            <div className="border-t border-amber-100/20 pt-6">
              <p className="text-amber-200/60">&copy; 2025 {profileData.name}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS untuk smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
