import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Cloud, 
  GitBranch, 
  Container, 
  Shield, 
  Monitor,
  Database,
  Cpu,
  Network
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Containerization",
      icon: <Container className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes", "Helm", "Podman"],
      color: "from-primary to-accent"
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="w-8 h-8" />,
      skills: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-8 h-8" />,
      skills: ["HashiCorp Vault", "SAST/DAST", "Security Scanning", "Compliance"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set covering the entire DevOps lifecycle from development to production
          </p>
        </div>

        <div className="tech-grid">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:card-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-dark border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-muted-foreground">Projects Deployed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-muted-foreground">Uptime Achieved</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;