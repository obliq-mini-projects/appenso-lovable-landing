
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-workspace-blue to-workspace-blue/80 text-white overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -right-44 -bottom-20 w-[300px] h-[300px] bg-workspace-green/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-44 top-20 w-[300px] h-[300px] bg-workspace-yellow/20 rounded-full blur-3xl"></div>
      
      <div className="relative section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "100ms" }}>
            Ready to transform your team's workflow?
          </h2>
          <p className="text-lg opacity-90 mb-10 animate-fadeIn opacity-0" style={{ animationDelay: "200ms" }}>
            Join thousands of companies that are working smarter, not harder, with our integrated workspace solution. Try it free for 14 days, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp opacity-0" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="bg-white text-workspace-blue hover:bg-white/90 rounded-full px-8">
              Start your free trial
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/30 px-8 text-white hover:bg-white/10 hover:border-white/40">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
