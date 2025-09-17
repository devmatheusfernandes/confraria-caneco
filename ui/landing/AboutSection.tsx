import { ImageWithFallback } from "../../ui/figma/ImageWithFallback";
import { Heart, Users, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa História
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de sabores que começou com a paixão pela culinária e o
            sonho de criar um espaço único
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Nascida da Paixão
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A Confraria nasceu em 2018 do sonho de um grupo de amigos
              apaixonados pela gastronomia. Começamos pequenos, em uma cozinha
              apertada, mas com grandes ambições e receitas que vinham sendo
              aperfeiçoadas há anos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa filosofia sempre foi simples: usar apenas ingredientes
              frescos e de qualidade, preparar cada prato com carinho e oferecer
              um ambiente onde as pessoas se sintam verdadeiramente em casa.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">2018</div>
                <div className="text-sm text-muted-foreground">
                  Ano de fundação
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Clientes felizes
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1681073302782-10f85371deb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1NzkwMDA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Interior aconchegante da Confraria"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Feito com Amor
            </h3>
            <p className="text-muted-foreground">
              Cada prato é preparado com dedicação e carinho, usando receitas
              desenvolvidas ao longo dos anos com muito cuidado e atenção aos
              detalhes.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ambiente Familiar
            </h3>
            <p className="text-muted-foreground">
              Criamos um espaço onde famílias e amigos podem se reunir,
              compartilhar momentos especiais e criar memórias inesquecíveis.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Qualidade Premium
            </h3>
            <p className="text-muted-foreground">
              Selecionamos cuidadosamente nossos fornecedores e ingredientes
              para garantir que cada experiência na Confraria seja excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
