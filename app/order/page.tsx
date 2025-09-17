"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { ImageWithFallback } from "../../ui/figma/ImageWithFallback";
import { ShoppingCart, Plus, ArrowLeft } from "lucide-react";
import { CartModal } from "@/ui/cart/CartModa";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderPageProps {
  onBackToHome: () => void;
}

export default function OrderPage({ onBackToHome }: OrderPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("pizzas");
  const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const categories = [
    { id: "pizzas", name: "Pizzas", icon: "🍕", count: 6 },
    { id: "burgers", name: "Hambúrguers", icon: "🍔", count: 4 },
    { id: "portions", name: "Porções", icon: "🍟", count: 5 },
    { id: "drinks", name: "Bebidas", icon: "🥤", count: 8 },
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
    {
      id: "pizza-calabresa",
      name: "Pizza Calabresa",
      description: "Molho de tomate, mozzarella, calabresa defumada e cebola",
      price: 46.9,
      image:
        "https://images.unsplash.com/photo-1754799565126-fe1ad148db85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBpbmdyZWRpZW50cyUyMGZyZXNofGVufDF8fHx8MTc1NzkwMDA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "pizzas",
    },
    {
      id: "pizza-portuguesa",
      name: "Pizza Portuguesa",
      description:
        "Molho de tomate, mozzarella, presunto, ovos, cebola, azeitona e orégano",
      price: 52.9,
      image:
        "https://images.unsplash.com/photo-1754799565126-fe1ad148db85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGl6emElMjBpbmdyZWRpZW50cyUyMGZyZXNofGVufDF8fHx8MTc1NzkwMDA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "pizzas",
    },
    {
      id: "pizza-vegetariana",
      name: "Pizza Vegetariana",
      description:
        "Molho de tomate, mozzarella, abobrinha, berinjela, tomate cereja e rúcula",
      price: 49.9,
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
    {
      id: "burger-chicken",
      name: "Chicken Crispy",
      description:
        "Peito de frango empanado, queijo cheddar, alface americana e molho ranch",
      price: 34.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "burgers",
    },
    {
      id: "burger-veggie",
      name: "Veggie Burger",
      description:
        "Hambúrguer de grão-de-bico, queijo vegano, alface, tomate e molho especial",
      price: 32.9,
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
    {
      id: "portion-chicken-wings",
      name: "Asas de Frango",
      description:
        "12 asinhas temperadas e grelhadas, acompanha molho barbecue e ranch",
      price: 32.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "portions",
    },
    {
      id: "portion-onion-rings",
      name: "Anéis de Cebola",
      description: "Cebolas empanadas e fritas, servidas com molho agridoce",
      price: 22.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "portions",
    },
    {
      id: "portion-nachos",
      name: "Nachos Supremos",
      description:
        "Tortilhas crocantes, queijo derretido, guacamole, pico de gallo e jalapeños",
      price: 28.9,
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
      id: "drink-juice-orange",
      name: "Suco de Laranja",
      description: "Suco natural de laranja, feito na hora",
      price: 8.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-soda",
      name: "Refrigerante",
      description: "Coca-Cola, Guaraná, Fanta ou Sprite - Lata 350ml",
      price: 6.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-water",
      name: "Água Mineral",
      description: "Água mineral sem gás - 500ml",
      price: 4.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-coffee",
      name: "Café Expresso",
      description: "Café expresso tradicional, forte e aromático",
      price: 5.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-juice-acai",
      name: "Vitamina de Açaí",
      description: "Vitamina de açaí com banana e granola",
      price: 14.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-lemonade",
      name: "Limonada Suíça",
      description: "Limonada refrescante com leite condensado",
      price: 10.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
    {
      id: "drink-milkshake",
      name: "Milkshake",
      description: "Milkshake cremoso - Chocolate, morango ou baunilha",
      price: 16.9,
      image:
        "https://images.unsplash.com/photo-1634737119182-4d09e1305ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnVyZ2VyJTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzU3OTAwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "drinks",
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );
  const cartItemsArray = Object.values(cart);
  const cartItemsCount = cartItemsArray.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existingItem = prev[item.id];
      if (existingItem) {
        return {
          ...prev,
          [item.id]: {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          },
        };
      } else {
        return {
          ...prev,
          [item.id]: {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            image: item.image,
          },
        };
      }
    });
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity,
      },
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToHome}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-2xl font-bold text-foreground">
                Faça seu Pedido
              </h1>
            </div>

            {cartItemsCount > 0 && (
              <Button
                onClick={() => setIsCartModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground relative"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ver Pedido
                <Badge
                  variant="secondary"
                  className="ml-2 bg-accent-foreground/20 text-accent-foreground"
                >
                  {cartItemsCount}
                </Badge>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Categories */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-32">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <h2 className="font-bold text-lg text-foreground mb-4">
                    Categorias
                  </h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                          selectedCategory === category.id
                            ? "bg-primary text-primary-foreground border-primary shadow-md"
                            : "bg-card text-foreground border-border hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <span className="text-sm opacity-70">
                            {category.count}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {cartItemsCount > 0 && (
                    <>
                      <Separator className="my-6" />
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">
                          Resumo do Pedido
                        </h3>
                        <div className="space-y-2">
                          {cartItemsArray.slice(0, 3).map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between text-sm"
                            >
                              <span className="truncate pr-2">{item.name}</span>
                              <span className="text-muted-foreground">
                                x{item.quantity}
                              </span>
                            </div>
                          ))}
                          {cartItemsArray.length > 3 && (
                            <div className="text-sm text-muted-foreground">
                              +{cartItemsArray.length - 3} itens...
                            </div>
                          )}
                        </div>
                        <Button
                          onClick={() => setIsCartModalOpen(true)}
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          Ver Pedido Completo
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content - Menu Items */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                Escolha seus itens favoritos e adicione ao seu pedido
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-border"
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
                    {cart[item.id] && (
                      <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                        {cart[item.id].quantity}x no carrinho
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg text-foreground line-clamp-1">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <Button
                      onClick={() => addToCart(item)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar ao Pedido
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cartItems={cartItemsArray}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}
