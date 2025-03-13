
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "Workspace has transformed how our team collaborates. The seamless integration between all the apps has boosted our productivity by 30%.",
    author: "Sarah Johnson",
    role: "CTO at TechVision",
    companyLogo: "https://images.unsplash.com/photo-1603731618092-b0b6881726e4?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    quote: "The security features give us peace of mind, and the intuitive interface means minimal training for new team members.",
    author: "Michael Chen",
    role: "Director of Operations at GrowthWorks",
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    quote: "We've cut meeting times in half thanks to the collaborative editing features. Everyone stays on the same page, literally.",
    author: "Elena Rodriguez",
    role: "Project Manager at BuildCo",
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-workspace-gray/50 py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-workspace-dark sm:text-4xl mb-6">
            Trusted by innovative teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See how organizations are transforming their workflow with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-lg animate-slideUp opacity-0 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <QuoteIcon className="h-8 w-8 text-workspace-blue/30 mb-4" />
                <p className="text-workspace-dark mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-workspace-gray mr-4">
                    <img 
                      src={testimonial.companyLogo} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
