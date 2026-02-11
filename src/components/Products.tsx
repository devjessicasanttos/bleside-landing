import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511973366889?text=Olá! Gostaria de comprar o look de Carnaval: ";

const carnivalProducts = [
  { 
    name: "Conjunto", 
    originalPrice: "R$ 99,90", 
    price: "R$ 46,90", 
    tag: "Oferta",
    videoUrl: "/public/conjunto.mp4"
  },
  { 
    name: "3 Shorts Plus", 
    originalPrice: "R$ 149,90", 
    price: "R$ 99,90", 
    tag: "Destaque",
    videoUrl: "/public/3shortsplus.mp4"
  },
  { 
    name: "Conjunto Short Saia com Colete", 
    originalPrice: "R$ 99,90", 
    price: "R$ 54,90", 
    tag: "Trend",
    videoUrl: "/public/conjshortsaia.mp4"
  },
];

const CarnivalSpecial = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-primary animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Edição Limitada</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground">
            Especial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Carnaval</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Brilhe nos blocos com nossos looks exclusivos. Confira os detalhes no vídeo!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carnivalProducts.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl bg-card border border-border overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Área do Vídeo */}
              <div className="relative aspect-[9/16] bg-black">
                <video
                  src={p.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {p.tag}
                </span>
              </div>

              {/* Detalhes do Produto */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-muted-foreground line-through">{p.originalPrice}</span>
                  <span className="text-2xl font-bold text-primary">{p.price}</span>
                </div>
                
                <Button asChild className="w-full py-6 text-md font-bold gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all">
                  <a 
                    href={`${WHATSAPP_URL}${p.name}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" /> Quero esse look
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarnivalSpecial;