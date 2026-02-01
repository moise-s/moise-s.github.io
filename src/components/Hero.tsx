import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up">
            <MapPin size={16} />
            <span className="text-sm font-medium">Florianópolis, Brazil</span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="text-gradient">Moisés</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Software Engineer & Python Specialist
          </p>

          <p className="text-lg text-primary-foreground/50 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Building data-driven solutions and automation tools. 
            Passionate about clean code, data engineering, and creating tools that make a difference.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/moise-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/moisesn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary-foreground/30 hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
