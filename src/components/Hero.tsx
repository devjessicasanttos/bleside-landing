import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fashion.jpg";

const WHATSAPP_URL = "https://wa.me/5511973366889?text=Olá! Vim pelo site da Bleside e gostaria de saber mais!";
const INSTAGRAM_URL = "https://instagram.com/bleside";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary">
      <div className="container grid gap-8 py-16 md:py-24 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Atacado &amp; Varejo
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Moda Feminina com{" "}
            <span className="text-primary">Estilo</span> e Preço Justo
          </h1>
          <p className="max-w-md mx-auto lg:mx-0 text-muted-foreground text-lg">
            Vendas no <strong className="text-primary">atacado e varejo</strong>. Qualidade, tendência e preços que cabem no seu bolso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="gap-2 text-base">
              <a href={"https://wa.me/5511973366889?text=Olá! Vim pelo site da Bleside e gostaria de saber mais!"} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Compre pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href={"https://www.instagram.com/bleside_outlet_moda_feminina?igsh=MXVrZzRqd3ZsaHVzeA=="} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" /> Siga no Instagram
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-72 md:w-80 lg:w-96 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImg}
              alt="Moda feminina Bleside Outlet"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
