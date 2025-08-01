import { motion } from 'framer-motion';
import { Code, Target, Heart, Lightbulb } from 'lucide-react';
import GoogleAd from './GoogleAd';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Desenvolvimento Full Stack',
      description: 'Experiência em front-end e back-end, criando soluções completas e eficientes.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Sempre buscando entregar projetos que realmente fazem a diferença na vida das pessoas.'
    },
    {
      icon: Heart,
      title: 'Paixão por Tecnologia',
      description: 'Apaixonado por resolver problemas complexos através de soluções tecnológicas inovadoras.'
    },
    {
      icon: Lightbulb,
      title: 'Aprendizado Contínuo',
      description: 'Sempre em busca de novas tecnologias e melhores práticas de desenvolvimento.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-purple-600">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <GoogleAd/>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Desenvolvedor apaixonado por criar soluções que importam
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou um estudante de programação com uma paixão especial em resolver problemas 
              que ajudem na vida das pessoas. Tenho especial interesse em desenvolvimento web, 
              especialmente na construção de interfaces intuitivas e responsivas utilizando 
              HTML, CSS e JavaScript.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Meu objetivo é me tornar um desenvolvedor full-stack, combinando minhas 
              habilidades de front-end com um conhecimento sólido de back-end para criar 
              soluções completas e eficientes.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Minha Missão</h4>
              <p className="text-gray-700">
                Transformar ideias em realidade através do código, criando experiências 
                digitais que fazem a diferença na vida das pessoas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '2+', label: 'Anos de Experiência' },
            { number: '15+', label: 'Projetos Concluídos' },
            { number: '5+', label: 'Tecnologias' },
            { number: '100%', label: 'Dedicação' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

