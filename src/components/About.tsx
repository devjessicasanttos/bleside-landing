import { Heart, Shield, Sparkles } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Estilo", desc: "Peças selecionadas seguindo as últimas tendências da moda." },
  { icon: Shield, title: "Qualidade", desc: "Tecidos premium e acabamento impecável em cada detalhe." },
  { icon: Heart, title: "Preço Justo", desc: "Moda acessível sem abrir mão da sofisticação." },
];

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Sobre a <span className="text-primary">Bleside</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            A Bleside nasceu com o propósito de democratizar a moda feminina. Acreditamos que toda mulher merece se vestir bem, com peças de qualidade e preços que cabem no bolso. Nosso outlet traz as melhores marcas com descontos reais, com vendas no <strong className="text-primary">atacado e varejo</strong>.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center space-y-4 p-6 rounded-xl bg-secondary/50">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
