import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Palette, Brain, Users, Zap, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 90, icon: Code2, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 85, icon: Code2, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 80, icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 75, icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'React Native', level: 70, icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { name: 'CorelDRAW', level: 85, icon: Palette, color: 'from-pink-500 to-rose-500' }
  ];

  const softSkills = [
    { name: 'Resolução de Problemas', icon: Brain, description: 'Gosto de entender conceitos e resolver desafios técnicos' },
    { name: 'Trabalho em Equipe', icon: Users, description: 'Colaboração efetiva e comunicação clara' },
    { name: 'Adaptabilidade', icon: Zap, description: 'Flexibilidade para aprender novas tecnologias' },
    { name: 'Foco em Resultados', icon: Target, description: 'Orientado a entregar soluções de qualidade' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Minhas <span className="text-purple-600">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinando habilidades técnicas sólidas com soft skills essenciais para criar soluções completas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Habilidades Técnicas
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                        <skill.icon className="text-white" size={20} />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.2 * index }}
                      viewport={{ once: true }}
                      className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Soft Skills
            </h3>
            <div className="grid gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tecnologias que Utilizo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'React Native',
              'Git', 'Bootstrap', 'Tailwind', 'Socket.IO', 'CorelDRAW', 'Figma'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-sm font-medium text-gray-900">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

