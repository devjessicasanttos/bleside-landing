import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-50 h-14 flex items-center border-b border-border bg-background/90 backdrop-blur-md px-4">
            <SidebarTrigger />
            <span className="ml-3 font-display text-lg font-bold text-foreground">BLESIDE</span>
          </header>
          <main className="flex-1">
            <Hero />
            <Categories />
            <Products />
            <About />
          </main>
          <Footer />
          <WhatsAppFAB />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
