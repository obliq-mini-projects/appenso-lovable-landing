
import React from "react";
import { CheckCircle, MessageSquare, Calendar, Lock, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-workspace-blue" />,
    title: "Real-time collaboration",
    description: "Work on documents simultaneously with teammates, seeing changes as they happen."
  },
  {
    icon: <Calendar className="h-10 w-10 text-workspace-green" />,
    title: "Smart scheduling",
    description: "AI-powered calendar that finds the perfect meeting time for everyone involved."
  },
  {
    icon: <Lock className="h-10 w-10 text-workspace-red" />,
    title: "Enterprise-grade security",
    description: "Advanced security controls, encryption, and compliance certifications."
  },
  {
    icon: <Zap className="h-10 w-10 text-workspace-yellow" />,
    title: "AI-powered assistance",
    description: "Smart suggestions and automations that help you work more efficiently."
  },
  {
    icon: <Globe className="h-10 w-10 text-workspace-blue" />,
    title: "Work from anywhere",
    description: "Access your workspace from any device, anywhere in the world."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-workspace-green" />,
    title: "Simplified administration",
    description: "Powerful admin console with single dashboard for managing users and settings."
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-workspace-dark sm:text-4xl mb-6">
            Everything you need to get work done
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform brings together all the tools your team needs in one place, allowing you to work more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all-300 animate-slideInFromRight opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
