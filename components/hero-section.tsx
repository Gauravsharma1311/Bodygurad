import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden p-0 m-0 pt-24">
      <div className="absolute inset-x-0 top-0 bottom-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-6xl pl-6 sm:pl-10 lg:pl-20 p-0 m-0">
        <div className="pb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-12 max-w-4xl leading-snug">
            Personal Protection by the
            <br />
            Nation’s Most Elite Operators.
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl">
            <div>
              <p className="text-white text-base md:text-lg">
                Let's talk about your security.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-base md:text-lg">
                Download our app to book short-term security.
              </p>
              <p className="text-gray-400 text-base md:text-lg">
                Immediate Protection with No Commitment.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            {/* Anchor link = no JS, no errors */}
            <Button
              asChild
              size="lg"
              className="flex-1 bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 text-base font-medium"
            >
              <a href="#contact">Request Consultation</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="flex-1 bg-gray-800 text-white border-gray-700 hover:bg-gray-700 rounded-full px-6 py-3 text-base font-medium flex items-center justify-center"
            >
              <Apple className="mr-2 h-5 w-5" />
              Get the App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
