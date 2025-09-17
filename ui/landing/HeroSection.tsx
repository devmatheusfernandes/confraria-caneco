import { ChefHat, Star, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "@/components/ui/button";
import LandingBackground from "../../public/images/landing-background.jpg";
import Image from "next/image";

interface HeroSectionProps {
  onMenuClick: () => void;
}

export function HeroSection({ onMenuClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={LandingBackground}
          alt="Interior aconchegante do restaurante Confraria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <ChefHat className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold text-lg">
              Bem-vindos à
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Confraria do Caneco
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Um lugar onde a tradição encontra o sabor moderno. Descubra nossas
            pizzas artesanais, hambúrgueres gourmet e porções especiais em um
            ambiente aconchegante e acolhedor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={onMenuClick}
            >
              Ver Cardápio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-white/40 px-8 py-3"
            >
              Fazer Reserva
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Ingredientes Premium</h3>
                <p className="text-sm text-gray-300">
                  Sempre frescos e selecionados
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Preparo Artesanal</h3>
                <p className="text-sm text-gray-300">
                  Feito com cuidado e carinho
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Ambiente Acolhedor</h3>
                <p className="text-sm text-gray-300">
                  Perfeito para qualquer ocasião
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
