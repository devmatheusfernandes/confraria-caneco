import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ImageWithFallback } from "../../ui/figma/ImageWithFallback";
import { ShoppingCart, Plus } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("pizzas");
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const categories = [
    { id: "pizzas", name: "Pizzas", icon: "🍕" },
    { id: "burgers", name: "Hambúrguers", icon: "🍔" },
    { id: "portions", name: "Porções", icon: "🍟" },
    { id: "drinks", name: "Bebidas", icon: "🥤" },
  ];

  const menuItems: MenuItem[] = [
    // Pizzas
    {
      id: "pizza-margherita",
      name: "Pizza Margherita",
      description:
        "Molho de tomate, mozzarella de búfala, manjericão fresco e azeite extravirgem",
      price: 42.9,
      image:
        "https://images.unsplash.com/photo-1754799565126-fe1ad148db85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBpbmdyZWRpZW50cyUyMGZyZXNofGVufDF8fHx8MTc1NzkwMDA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "pizzas",
      popular: true,
    },
    {
      id: "pizza-pepperoni",
      name: "Pizza Pepperoni",
      description: "Molho de tomate, mozzarella, pepperoni italiano e orégano",
      price: 48.9,
      image:
        "https://images.unsplash.com/photo-1754799565126-fe1ad148db85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBpbmdyZWRpZW50cyUyMGZyZXNofGVufDF8fHx8MTc1NzkwMDA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "pizzas",
    },
    {
      id: "pizza-quattro-formaggi",
      name: "Pizza Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesão, provolone e mel",
      price: 54.9,
      image:
        "https://images.unsplash.com/photo-1754799565126-fe1ad148db85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBpbmdyZWRpZW50cyUyMGZyZXNofGVufDF8fHx8MTc1NzkwMDA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "pizzas",
    },

    // Burgers
    {
      id: "burger-classic",
      name: "Confraria Burger",
      description:
        "Blend de carnes nobres, queijo cheddar, alface, tomate, cebola caramelizada e molho especial",
      price: 36.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "burgers",
      popular: true,
    },
    {
      id: "burger-bacon",
      name: "Bacon Supreme",
      description:
        "Hambúrguer artesanal, bacon crocante, queijo suíço, cogumelos e molho barbecue",
      price: 42.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "burgers",
    },

    // Portions
    {
      id: "portion-fries",
      name: "Batata Rústica",
      description:
        "Batatas cortadas na casa, temperadas com ervas finas e servidas com molhos especiais",
      price: 18.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "portions",
    },
    {
      id: "portion-meat",
      name: "Picanha na Chapa",
      description:
        "Picanha grelhada na chapa, acompanha farofa, vinagrete e pão de alho",
      price: 65.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "portions",
    },

    // Drinks
    {
      id: "drink-beer",
      name: "Chopp Artesanal",
      description: "Chopp gelado da casa, sabor único e refrescante",
      price: 12.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-juice",
      name: "Suco Natural",
      description:
        "Suco natural da fruta, feito na hora. Sabores: laranja, limão, abacaxi",
      price: 8.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const cartItemsCount = Object.values(cart).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore nossa seleção de pratos artesanais, preparados com
            ingredientes frescos e muito carinho
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="lg"
              onClick={() => setSelectedCategory(category.id)}
              className="px-6 py-3"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    size="sm"
                    onClick={() => addToCart(item.id)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {cartItemsCount > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ver Pedido ({cartItemsCount})
            </Button>
          </div>
        )}

        {/* Order CTA */}
        <div className="text-center">
          <div className="bg-card p-8 rounded-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para fazer seu pedido?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco pelo WhatsApp ou visite nosso restaurante
              para uma experiência completa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Pedir pelo WhatsApp
              </Button>
              <Button variant="outline" size="lg">
                Ver Localização
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
