import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "DevOps Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <Badge variant="outline" className="text-accent border-accent/50 px-4 py-2">
            Available for opportunities
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block mb-2">Hello, I'm</span>
            <span className="text-gradient">Saeeda Batool</span>
          </h1>

          <div className="text-2xl md:text-4xl font-mono text-muted-foreground">
            <span>{displayText}</span>
            <span className="animate-pulse border-r-2 border-primary ml-1" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about building robust, scalable infrastructure and automating
          everything. I bridge the gap between development and operations with modern
          tools and best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-tech hover:shadow-glow-green transition-all duration-300">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>

          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all">
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;