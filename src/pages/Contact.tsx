
import React, { useState } from 'react';
import { toast } from "sonner";
import { z } from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов' }),
  email: z.string().email({ message: 'Введите корректный email адрес' }),
  subject: z.string().min(5, { message: 'Тема должна содержать не менее 5 символов' }),
  message: z.string().min(10, { message: 'Сообщение должно содержать не менее 10 символов' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Валидация формы
      contactFormSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Сообщение успешно отправлено!");
      
      // Сброс формы
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Преобразуем ошибки Zod в удобный формат
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        err.errors.forEach(error => {
          const field = error.path[0] as keyof ContactFormData;
          fieldErrors[field] = error.message;
        });
        
        setErrors(fieldErrors);
        toast.error("Проверьте правильность заполнения формы");
      } else {
        toast.error("Произошла ошибка при отправке формы");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-gray-300">
              Свяжитесь со мной для обсуждения вашего проекта или предложения о сотрудничестве
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Контактная информация */}
            <div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 font-mono neon-text-blue">Контактная информация</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-neon-blue/10 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contact@example.com" className="text-neon-blue hover:underline">contact@example.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-neon-blue/10 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Телефон</h3>
                      <a href="tel:+79991234567" className="hover:text-neon-blue transition-colors">+7 (999) 123-45-67</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-neon-blue/10 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                        <path d="M15 21v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
                        <path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                        <path d="M7 2h10" />
                        <path d="M5 5a2 2 0 0 1 2-3h10a2 2 0 0 1 2 3v2H5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Адрес</h3>
                      <p className="text-gray-300">Москва, Россия</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 font-mono neon-text-blue">Социальные сети</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  >
                    <div className="bg-white/10 p-3 rounded-full mr-3 group-hover:bg-neon-blue/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-neon-blue">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  >
                    <div className="bg-white/10 p-3 rounded-full mr-3 group-hover:bg-neon-blue/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-neon-blue">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  >
                    <div className="bg-white/10 p-3 rounded-full mr-3 group-hover:bg-neon-blue/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-neon-blue">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <span>Twitter</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  >
                    <div className="bg-white/10 p-3 rounded-full mr-3 group-hover:bg-neon-blue/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-neon-blue">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span>StackOverflow</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Контактная форма */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 font-mono neon-text-blue">Отправьте сообщение</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Тема
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Тема сообщения"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ваше сообщение..."
                    rows={6}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
