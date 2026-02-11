import catVestidos from "@/assets/cat-vestido.jpg";
import catConjuntos from "@/assets/cat-conjunto.jpg";
import catCalcas from "@/assets/cat-calca.jpg";
import catCroppeds from "@/assets/cat-cropped.jpg";
import catMacacao from "@/assets/cat-macacao.jpg";
import catShorts from "@/assets/cat-short.jpg";

const categories = [
  { name: "Vestidos", image: catVestidos },
  { name: "Conjuntos", image: catConjuntos },
  { name: "Calças", image: catCalcas },
  { name: "Croppeds", image: catCroppeds },
  { name: "Macacão", image: catMacacao },
  { name: "Shorts", image: catShorts },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nossas <span className="text-primary">Coleções</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Encontre o look perfeito para cada ocasião</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end p-4">
                <h3 className="font-display text-lg md:text-xl font-semibold text-background">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
