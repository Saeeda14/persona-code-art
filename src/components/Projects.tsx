import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and implemented a production-grade Kubernetes platform spanning AWS, Azure, and GCP with automated CI/CD pipelines and comprehensive monitoring.",
      tags: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Multi-Cloud"],
      highlights: ["99.99% uptime", "Auto-scaling", "Zero-downtime deployments"],
      image: "gradient-to-br from-blue-600 to-purple-700"
    },
    {
      title: "Infrastructure Automation Pipeline",
      description: "Built a complete infrastructure-as-code solution using Terraform and Ansible, reducing deployment time by 80% and eliminating configuration drift.",
      tags: ["Terraform", "Ansible", "GitLab CI", "AWS", "Infrastructure"],
      highlights: ["80% faster deployments", "Zero configuration drift", "Automated compliance"],
      image: "gradient-to-br from-green-600 to-teal-700"
    },
    {
      title: "Observability & Monitoring Stack",
      description: "Implemented comprehensive observability solution with Prometheus, Grafana, and ELK stack, providing real-time insights into system performance.",
      tags: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "Monitoring"],
      highlights: ["Real-time alerts", "Custom dashboards", "Performance insights"],
      image: "gradient-to-br from-orange-600 to-red-700"
    },
    {
      title: "Security & Compliance Framework",
      description: "Developed automated security scanning and compliance framework integrated into CI/CD pipelines, achieving SOC2 compliance.",
      tags: ["Security", "Compliance", "SAST/DAST", "HashiCorp Vault", "SOC2"],
      highlights: ["SOC2 compliant", "Automated scanning", "Zero security incidents"],
      image: "gradient-to-br from-purple-600 to-indigo-700"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions that drive business value through robust infrastructure and automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:card-glow transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-48 bg-${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge 
                        key={highlight}
                        className="bg-primary/90 text-primary-foreground"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary/10 hover:border-primary/50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-accent/10 hover:border-accent/50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;