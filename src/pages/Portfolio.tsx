import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type PortfolioItem = {
  id: string;
  title: string;
  category: "Digital Media Marketing" | "Logos";
  subcategory: string;
  src: string;
};

const buildItem = (
  title: string,
  category: PortfolioItem["category"],
  subcategory: string,
  path: string
): PortfolioItem => ({
  id: `${category}-${subcategory}-${title}`.replace(/\s+/g, "-"),
  title,
  category,
  subcategory,
  src: encodeURI(path),
});

const Portfolio = () => {
  const items: PortfolioItem[] = useMemo(
    () => [
      // Digital Media Marketing → GWERU CITY PARKING
      buildItem(
        "Gweru City Parking 1",
        "Digital Media Marketing",
        "GWERU CITY PARKING",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/GWERU CITY PARKING/1.jpg"
      ),
      buildItem(
        "Gweru City Parking 2",
        "Digital Media Marketing",
        "GWERU CITY PARKING",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/GWERU CITY PARKING/2.jpg"
      ),
      buildItem(
        "Gweru City Parking 3",
        "Digital Media Marketing",
        "GWERU CITY PARKING",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/GWERU CITY PARKING/3.jpg"
      ),

      // Digital Media Marketing → HAWKER SIDDELEY
      buildItem(
        "Hawker Siddeley MacBook Air",
        "Digital Media Marketing",
        "HAWKER SIDDELEY",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/HAWKER SIDDELEY/Industrial MacBook Air Mockup.jpg"
      ),
      buildItem(
        "Hawker Siddeley MacBook Pro",
        "Digital Media Marketing",
        "HAWKER SIDDELEY",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/HAWKER SIDDELEY/Macbook Pro Mockup.jpg"
      ),

      // Digital Media Marketing → MSU
      buildItem(
        "MSU iPhone & MacBook Pro",
        "Digital Media Marketing",
        "MSU",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/MSU/Free_iPhone_&_MacBook_Pro_PSD_Mockup_2.jpg"
      ),
      buildItem(
        "MSU Industrial MacBook Air",
        "Digital Media Marketing",
        "MSU",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/MSU/Industrial MacBook Air Mockup.jpg"
      ),

      // LOGOS → CITY SPACE BRAND (7 files)
      buildItem(
        "City Space Logo 1",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO.jpg"
      ),
      buildItem(
        "City Space Logo 2",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO2.jpg"
      ),
      buildItem(
        "City Space Logo 3",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO3.jpg"
      ),
      buildItem(
        "City Space Logo 4",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO4.jpg"
      ),
      buildItem(
        "City Space Logo 5",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO5.jpg"
      ),
      buildItem(
        "City Space Logo 6",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO6.jpg"
      ),
      buildItem(
        "City Space Logo 7",
        "Logos",
        "CITY SPACE BRAND",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO7.jpg"
      ),

      // LOGOS → TUNVIC BRAND (multiple files)
      buildItem(
        "TUNVIC Branding Guide 1",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 2",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE2.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 3",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE3.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 4",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE4.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 5",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE5.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 6",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE6.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 7",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE7.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 8",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE8.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 9",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE9.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 10",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE10.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 11",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE11.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 12",
        "Logos",
        "TUNVIC BRAND",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE12.jpg"
      ),
    ],
    []
  );

  const categories: ("All" | PortfolioItem["category"])[] = [
    "All",
    "Digital Media Marketing",
    "Logos",
  ];

  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const subcategories = useMemo(() => {
    const set = new Set<string>();
    items
      .filter((i) => (category === "All" ? true : i.category === category))
      .forEach((i) => set.add(i.subcategory));
    return ["All", ...Array.from(set).sort()];
  }, [items, category]);
  const [subcategory, setSubcategory] = useState<string>("All");

  useEffect(() => {
    setSubcategory("All");
  }, [category]);

  const filtered = items.filter((i) => {
    const byCat = category === "All" || i.category === category;
    const bySub = subcategory === "All" || i.subcategory === subcategory;
    return byCat && bySub;
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % filtered.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, filtered.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-3">
              Portfolio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore selected works across Digital Media Marketing and Logo
              design.
            </p>
          </div>

          <div className="mb-6 -mx-4 px-4 overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3 w-max">
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={category === c ? "default" : "outline"}
                  onClick={() => setCategory(c)}
                  className="shrink-0"
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-10 -mx-4 px-4 overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3 w-max">
              {subcategories.map((s) => (
                <Button
                  key={s}
                  variant={subcategory === s ? "secondary" : "outline"}
                  onClick={() => setSubcategory(s)}
                  className="h-9 shrink-0"
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filtered.map((item, idx) => (
              <Card
                key={item.id}
                className="group overflow-hidden border hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => openAt(idx)}
                  className="relative block w-full"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </button>
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge variant="outline">{item.subcategory}</Badge>
                  </div>
                  <h3 className="font-semibold text-primary line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="w-screen sm:w-[90vw] h-[100dvh] sm:h-auto max-w-none max-h-none rounded-none sm:rounded-lg p-2 sm:p-4 overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-base">
              {filtered[activeIndex]?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative flex items-center justify-center">
            <img
              src={filtered[activeIndex]?.src}
              alt={filtered[activeIndex]?.title}
              className="max-w-full w-auto h-auto object-contain rounded-md max-h-[calc(100dvh-140px)] sm:max-h-[80vh]"
            />
            {filtered.length > 1 && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="pointer-events-auto opacity-90 h-12 w-12 sm:h-10 sm:w-10"
                  onClick={() =>
                    setActiveIndex(
                      (i) => (i - 1 + filtered.length) % filtered.length
                    )
                  }
                  aria-label="Previous"
                >
                  ‹
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="pointer-events-auto opacity-90 h-12 w-12 sm:h-10 sm:w-10"
                  onClick={() =>
                    setActiveIndex((i) => (i + 1) % filtered.length)
                  }
                  aria-label="Next"
                >
                  ›
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
