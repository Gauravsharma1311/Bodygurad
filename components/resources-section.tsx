import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Security Whitepaper",
    description:
      "Comprehensive guide to modern cybersecurity threats and protection strategies.",
    type: "PDF Guide",
  },
  {
    icon: Video,
    title: "Webinar Series",
    description:
      "Expert-led sessions on the latest security trends and best practices.",
    type: "Video Content",
  },
  {
    icon: BookOpen,
    title: "Security Blog",
    description:
      "Regular insights and updates on cybersecurity news and threat intelligence.",
    type: "Articles",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security Resources & Insights
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay informed with our latest security research, guides, and
            industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">{resource.type}</span>
                </div>
                <CardTitle className="text-xl text-white">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base mb-4">
                  {resource.description}
                </CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-gray-700 text-white hover:bg-gray-800"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-medium"
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
