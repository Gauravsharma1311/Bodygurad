import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Eye, Zap, Users, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Threat Detection",
    description: "AI-powered real-time monitoring to detect risks early.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Military-grade encryption for sensitive data security.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 monitoring with immediate response to threats.",
  },
  {
    icon: Zap,
    title: "Incident Response",
    description: "Rapid breach containment with minimal disruption.",
  },
  {
    icon: Users,
    title: "Access Management",
    description: "Identity and access solutions to secure systems.",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessment",
    description: "Regular testing to find and fix weaknesses.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Protect your business with our suite of solutions designed for
            modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
