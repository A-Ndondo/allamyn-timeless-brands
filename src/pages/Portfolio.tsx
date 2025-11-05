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
import { Skeleton } from "@/components/ui/skeleton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type PortfolioItem = {
  id: string;
  title: string;
  category:
    | "Gweru City Parking"
    | "Hawker Siddeley"
    | "MSU"
    | "City Space"
    | "Tunvic";
  src: string;
};

const buildItem = (
  title: string,
  category: PortfolioItem["category"],
  path: string
): PortfolioItem => ({
  id: `${category}-${title}`.replace(/\s+/g, "-"),
  title,
  category,
  src: encodeURI(path),
});

const Portfolio = () => {
  const items: PortfolioItem[] = useMemo(
    () => [
      // Gweru City Parking
      buildItem(
        "Gweru City Parking 1",
        "Gweru City Parking",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/GWERU CITY PARKING/1.jpg"
      ),
      buildItem(
        "Gweru City Parking 2",
        "Gweru City Parking",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/GWERU CITY PARKING/2.jpg"
      ),
      buildItem(
        "Gweru City Parking 3",
        "Gweru City Parking",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/GWERU CITY PARKING/3.jpg"
      ),

      // Hawker Siddeley
      buildItem(
        "Hawker Siddeley MacBook Air",
        "Hawker Siddeley",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/HAWKER SIDDELEY/Industrial MacBook Air Mockup.jpg"
      ),
      buildItem(
        "Hawker Siddeley MacBook Pro",
        "Hawker Siddeley",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/HAWKER SIDDELEY/Macbook Pro Mockup.jpg"
      ),

      // MSU
      buildItem(
        "MSU iPhone & MacBook Pro",
        "MSU",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/MSU/Free_iPhone_&_MacBook_Pro_PSD_Mockup_2.jpg"
      ),
      buildItem(
        "MSU Industrial MacBook Air",
        "MSU",
        "/PORTFOLIO/DIGITAL MEDIA MARKETING/MSU/Industrial MacBook Air Mockup.jpg"
      ),

      // City Space
      buildItem(
        "City Space Logo 1",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO.jpg"
      ),
      buildItem(
        "City Space Logo 2",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO2.jpg"
      ),
      buildItem(
        "City Space Logo 3",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO3.jpg"
      ),
      buildItem(
        "City Space Logo 4",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO4.jpg"
      ),
      buildItem(
        "City Space Logo 5",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO5.jpg"
      ),
      buildItem(
        "City Space Logo 6",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO6.jpg"
      ),
      buildItem(
        "City Space Logo 7",
        "City Space",
        "/PORTFOLIO/LOGOS/CITY SPACE BRAND/THE CITY SPACE LOGO7.jpg"
      ),

      // Tunvic
      buildItem(
        "TUNVIC Branding Guide 1",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 2",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE2.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 3",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE3.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 4",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE4.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 5",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE5.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 6",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE6.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 7",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE7.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 8",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE8.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 9",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE9.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 10",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE10.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 11",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE11.jpg"
      ),
      buildItem(
        "TUNVIC Branding Guide 12",
        "Tunvic",
        "/PORTFOLIO/LOGOS/TUNVIC BRAND/TUNVIC INVESTMENTS BRANDING GUIDE12.jpg"
      ),
    ],
    []
  );

  const categories: ("All" | PortfolioItem["category"])[] = [
    "All",
    "Gweru City Parking",
    "Hawker Siddeley",
    "MSU",
    "City Space",
    "Tunvic",
  ];

  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = items.filter((i) => {
    return category === "All" || i.category === category;
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  const handleImageError = (src: string) => {
    setImageErrors((prev) => new Set(prev).add(src));
  };

  const openAt = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    // Preload adjacent images for smooth navigation
    const nextIndex = (index + 1) % filtered.length;
    const prevIndex = (index - 1 + filtered.length) % filtered.length;
    [nextIndex, prevIndex].forEach((idx) => {
      const item = filtered[idx];
      if (item && !loadedImages.has(item.src)) {
        const img = new Image();
        img.src = item.src;
      }
    });
  };

  // Preload first few images for faster initial load
  useEffect(() => {
    const imagesToPreload = filtered.slice(0, 6);
    imagesToPreload.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      img.onload = () => handleImageLoad(item.src);
      img.onerror = () => handleImageError(item.src);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

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
              Explore our portfolio of brand identity, digital media marketing,
              and logo design work.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filtered.map((item, idx) => {
              const isLoaded = loadedImages.has(item.src);
              const hasError = imageErrors.has(item.src);
              const isAboveFold = idx < 6; // First 6 images are above the fold

              return (
                <Card
                  key={item.id}
                  className="group overflow-hidden border hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => openAt(idx)}
                    className="relative block w-full"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                      {!isLoaded && !hasError && (
                        <Skeleton className="absolute inset-0 w-full h-full" />
                      )}
                      {hasError ? (
                        <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
                          <span className="text-sm">Image not available</span>
                        </div>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          loading={isAboveFold ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={isAboveFold ? "high" : "auto"}
                          onLoad={() => handleImageLoad(item.src)}
                          onError={() => handleImageError(item.src)}
                          className={`h-full w-full object-cover transition-opacity duration-300 group-hover:scale-105 ${
                            isLoaded ? "opacity-100" : "opacity-0"
                          }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors pointer-events-none" />
                  </button>
                  <div className="p-4">
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-primary line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              );
            })}
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
            {filtered[activeIndex] && (
              <>
                {!loadedImages.has(filtered[activeIndex].src) && (
                  <Skeleton className="w-full h-[60vh] sm:h-[70vh]" />
                )}
                <img
                  src={filtered[activeIndex].src}
                  alt={filtered[activeIndex].title}
                  onLoad={() => handleImageLoad(filtered[activeIndex].src)}
                  onError={() => handleImageError(filtered[activeIndex].src)}
                  className={`max-w-full w-auto h-auto object-contain rounded-md max-h-[calc(100dvh-140px)] sm:max-h-[80vh] transition-opacity duration-300 ${
                    loadedImages.has(filtered[activeIndex].src)
                      ? "opacity-100"
                      : "opacity-0 absolute"
                  }`}
                  loading="eager"
                  decoding="async"
                />
              </>
            )}
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
