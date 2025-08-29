import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to build something amazing? Let's discuss your next project.
          </p>
        </div>

        <Card className="bg-gradient-dark border-border/50 card-glow">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">saeeda.devops@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+1 (347) 777-2963</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Brooklyn, NY</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Availability</div>
                      <Badge variant="secondary" className="text-primary">
                        Available for new projects
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">What I Offer</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">Infrastructure Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Scalable, reliable infrastructure architecture for modern applications
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">CI/CD Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated pipelines that accelerate delivery and reduce risk
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">Cloud Migration</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless transition to cloud-native architectures
                    </p>
                  </div>

                  <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2">Monitoring & Observability</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete visibility into your systems and applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <Button 
                size="lg" 
                className="bg-gradient-tech hover:shadow-glow-cyan transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;