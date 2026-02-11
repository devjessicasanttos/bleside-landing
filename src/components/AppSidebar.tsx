import { Home, ShoppingBag, Info, Phone, MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/bleside-logo.jpeg";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Vim pelo site da Bleside e gostaria de saber mais!";
const INSTAGRAM_URL = "https://instagram.com/bleside";

const navItems = [
  { title: "Início", href: "#inicio", icon: Home },
  { title: "Coleções", href: "#categorias", icon: ShoppingBag },
  { title: "Sobre", href: "#sobre", icon: Info },
  { title: "Contato", href: "#contato", icon: Phone },
];

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <div className="flex items-center gap-3 px-4 py-5">
          <img src={logo} alt="Bleside Outlet" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-display text-lg font-bold text-foreground leading-tight">BLESIDE</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Atacado &amp; Varejo</p>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      onClick={() => setOpenMobile(false)}
                      className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Redes Sociais</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
