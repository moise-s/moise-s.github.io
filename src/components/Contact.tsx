import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? 
            I'm always open to new challenges and collaborations.
          </p>

          {/* Contact options */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-primary-foreground font-medium">Email</p>
              <p className="text-primary-foreground/50 text-sm mt-1">Send a message</p>
            </a>

            <a
              href="https://www.linkedin.com/in/moisesn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-primary-foreground font-medium">LinkedIn</p>
              <p className="text-primary-foreground/50 text-sm mt-1">Let's connect</p>
            </a>

            <a
              href="https://github.com/moise-s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <Github className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-primary-foreground font-medium">GitHub</p>
              <p className="text-primary-foreground/50 text-sm mt-1">Check my code</p>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/50">
            <MapPin size={16} />
            <span>Florianópolis, Brazil</span>
          </div>
        </div>
      </div>
    </section>
  );
};
