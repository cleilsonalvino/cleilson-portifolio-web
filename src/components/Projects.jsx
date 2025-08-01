import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Palette,
  Database,
  ClipboardPenLine,
} from "lucide-react";
import Slider from "react-slick";

import appImage from "../assets/app.png";
import controleEstoque1 from "../assets/controle-estoque1.png";
import designer from "../assets/camisas/1.png";
import producao from "../assets/controledeproducao/2.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const projects = [
    {
      id: 1,
      title: "EstudeLab Quiz",
      description:
        "Aplicativo móvel de quiz multiplayer desenvolvido com React Native.",
      image: appImage,
      technologies: ["React Native", "Node.js", "Socket.IO", "JavaScript"],
      category: "Mobile",
      icon: Smartphone,
      features: [
        "Multiplayer 1v1 em tempo real",
        "Salas personalizadas com senha",
        "Ranking global e histórico",
        "Múltiplas categorias de quiz",
      ],
      links: {
        playStore:
          "https://play.google.com/store/apps/details?id=com.cleilsonalvino.quiz",
        github: "",
      },
    },
    {
      id: 2,
      title: "Sistema de Controle de Estoque",
      description:
        "Sistema web completo para gerenciamento de estoque com interface intuitiva.",
      image: controleEstoque1,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web",
      icon: Database,
      features: [
        "Gestão completa de produtos",
        "Relatórios e dashboards",
        "Controle de usuários",
        "Interface responsiva",
        "Empresa",
        "Dr Fardamentos",
      ],
      links: {
        demo: "",
        github: "",
      },
    },
    {
      id: 3,
      title: "Design Gráfico",
      description:
        "Coleção de trabalhos gráficos incluindo camisetas personalizadas, logos e materiais promocionais.",
      images: [designer],
      technologies: ["CorelDRAW", "Design Gráfico", "Branding"],
      category: "Design",
      icon: Palette,
      features: [
        "Camisetas personalizadas",
        "Identidade visual",
        "Material promocional",
        "Mockups profissionais",
      ],
      links: {
        portfolio: "",
        behance: "",
      },
    },
    {
      id: 4,
      title: "Controle de Produção",
      description: "Controle total de pedidos durante o processo de produção",
      images: [producao],
      technologies: ["Postgres", "Javascript", "React"],
      category: "Design",
      icon: ClipboardPenLine,
      features: [
        "Processo Produtivo",
        "Análise de Dados",
        "Gerenciamento de Pedidos",
        "Controle de Funcionários",
        "Empresa",
        "Dr Fardamentos",
      ],
      links: {
        portfolio: "",
        behance: "",
      },
    },
  ];

  const categories = ["Todos", "Mobile", "Web", "Design"];
  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meus <span className="text-purple-600">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando
            habilidades em desenvolvimento e design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4 bg-gray-500 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${
                    selectedCategory === category
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-500 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500`}
              >
                {/* Project Image or Carousel */}
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl overflow-hidden">
                    <img
                      src={project.images ? project.images[0] : project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Principais Funcionalidades:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.links.playStore && (
                      <motion.a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver no Google Play"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        <Smartphone size={18} />
                        Google Play
                      </motion.a>
                    )}
                    {project.links.demo && project.links.demo !== "#" && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver Demo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        Ver Demo
                      </motion.a>
                    )}
                    {project.links.github && project.links.github !== "#" && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver Código no GitHub"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
                      >
                        <Github size={18} />
                        Código
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              E muito mais...!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Acesse meu github para mais projetos
            </p>
            <motion.button
            
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 m-auto"
            >
              <motion.a
                href="https://github.com/cleilsonalvino"
                target="_blank"
              >

                <Github/>
                
              </motion.a>
              

            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
