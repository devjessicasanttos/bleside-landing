import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/bleside-logo.jpeg";

const WHATSAPP_URL = "https://wa.me/5511973366889?text=Olá! Vim pelo site da Bleside!";
const INSTAGRAM_URL = "https://www.instagram.com/bleside_outlet_moda_feminina?igsh=MXVrZzRqd3ZsaHVzeA==";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Bleside" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-xl font-bold">BLESIDE</span>
            </div>
            <p className="text-background/60 text-sm">
              Moda feminina com estilo e preço justo. Outlet com descontos reais todos os dias.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-lg font-semibold">Links Rápidos</h3>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <a href="#inicio" className="hover:text-background transition-colors">Início</a>
              <a href="#categorias" className="hover:text-background transition-colors">Coleções</a>
              <a href="#sobre" className="hover:text-background transition-colors">Sobre</a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-lg font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href={"https://wa.me/5511973366889?text=Olá! Vim pelo site da Bleside!"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={"https://www.instagram.com/bleside_outlet_moda_feminina?igsh=MXVrZzRqd3ZsaHVzeA=="}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Bleside Outlet. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
