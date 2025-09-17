import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visite-nos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos esperando por você! Venha conhecer nosso ambiente
            aconchegante e experimentar nossos sabores únicos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Rua dos Sabores, 123
                      <br />
                      Vila Gourmet - São Paulo, SP
                      <br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">
                      (11) 9999-9999
                      <br />
                      WhatsApp: (11) 9999-9999
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Segunda a Quinta:</span>
                        <span>18h às 23h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sexta e Sábado:</span>
                        <span>18h às 00h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span>18h às 22h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@confraria_restaurante</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Confraria</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="h-80 bg-muted flex items-center justify-center relative">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="font-bold text-lg text-foreground">
                    Localização
                  </h3>
                  <p className="text-muted-foreground">
                    Clique aqui para ver no Google Maps
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-4">
                  Entre em contato
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Sua mensagem..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
