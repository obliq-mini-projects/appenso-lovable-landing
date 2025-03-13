
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does your product integrate with Google Workspace?",
    answer: "Our products work seamlessly with Google Workspace applications. Using OAuth 2.0, they securely connect to your Google account with minimal setup. All integrations respect Google's security protocols and can be managed through your Google Workspace admin console."
  },
  {
    question: "Is my data secure when using your applications?",
    answer: "Absolutely. We prioritize security across all our applications. We use industry-standard encryption for data in transit and at rest, implement strict access controls, and never store your credentials. Our applications undergo regular security audits, and we maintain compliance with relevant data protection regulations."
  },
  {
    question: "Can I use your products with a personal Google account?",
    answer: "Yes, most of our applications work with both personal Google accounts and Google Workspace accounts. However, some advanced features may require a Google Workspace account. Each product page specifies any account type limitations."
  },
  {
    question: "How do I get support if I encounter issues?",
    answer: "We offer multiple support channels for your convenience. You can reach our support team via email, chat on our website, or consult our comprehensive knowledge base. Premium support options with dedicated account managers are available for enterprise customers."
  },
  {
    question: "Do you offer discounts for educational institutions or nonprofits?",
    answer: "Yes, we provide special pricing for educational institutions, nonprofits, and charitable organizations. Please contact our sales team with relevant documentation to learn more about our discount programs."
  },
];

const FAQSection = () => {
  return (
    <section id="faq-section" className="bg-workspace-gray/50 py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-workspace-dark sm:text-4xl mb-6 font-poppins">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="bg-white rounded-xl p-6 shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-lg font-medium py-4 font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-poppins pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
