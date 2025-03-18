"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-workspace-gray pt-20 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f080_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="relative section-container">
        <div className="absolute -right-44 -top-20 w-[300px] h-[300px] bg-workspace-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-44 top-40 w-[300px] h-[300px] bg-workspace-green/10 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          <div className="space-y-4 animate-fadeIn opacity-0" style={{ animationDelay: "100ms" }}>
            <div className="inline-flex items-center rounded-full border border-workspace-blue/20 bg-workspace-blue/5 px-3 py-1 text-sm font-medium text-workspace-blue mb-6">
              <span>Introducing our new workspace experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-workspace-dark">
              A better way to work <span className="text-workspace-blue">together</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Get more done with our integrated workspace. Connect, create, and collaborate seamlessly in one secure platform designed for the modern workplace.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center animate-slideUp opacity-0" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="bg-workspace-blue hover:bg-workspace-blue/90 text-white rounded-full px-8">
              Start for free
              <ChevronRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Watch demo
            </Button>
          </div>
          
          <div className="relative w-full max-w-5xl mt-16 rounded-2xl border shadow-2xl overflow-hidden animate-slideUp opacity-0" style={{ animationDelay: "500ms" }}>
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-workspace-red/10 via-workspace-blue/10 to-workspace-green/10 backdrop-blur-sm flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-workspace-red/80"></div>
                <div className="w-3 h-3 rounded-full bg-workspace-yellow/80"></div>
                <div className="w-3 h-3 rounded-full bg-workspace-green/80"></div>
              </div>
            </div>
            <div className="pt-10">
              <img 
                src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Workspace_002.max-1000x1000.jpg" 
                alt="Workspace Dashboard" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
