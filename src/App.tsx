import React from 'react';
import Header from './components/Header';
import ChatDemo from './components/ChatDemo';
import ContactForm from './components/ContactForm';
import { Brain, Cpu, Globe, Zap, Code, MessageSquare } from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for human-like conversations'
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: 'Multilingual Support',
      description: 'Seamless communication in multiple languages including Tamil'
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: 'Real-time Responses',
      description: 'Lightning-fast processing for immediate assistance'
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      title: 'Context Awareness',
      description: 'Maintains context throughout conversations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Next-Generation AI Chatbot
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Experience the future of conversation with our intelligent AI assistant,
            designed to understand and respond naturally in multiple languages.
          </p>
          <a
            href="#demo"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Try It Yourself
          </h2>
          <ChatDemo />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technology Stack
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <Code className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold">Python</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <Brain className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold">TensorFlow</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <MessageSquare className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold">NLP Libraries</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} AIChat Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;