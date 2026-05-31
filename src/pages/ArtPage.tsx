import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import miyabi1 from "@/assets/miyabi1.png";
import miyabi2 from "@/assets/miyabi2.png";
import miyabi3 from "@/assets/miyabi3.png";

const artPhotos = {
  cosplay: [
    { src: "miyabi1.png", alt: "Cosplay preview 1" },
    { src: "miyab2.png", alt: "Cosplay preview 2" },
    { src: "miyabi3.png", alt: "Cosplay preview 3" },
  ],
  "digital-art": [
    { src: "miyabi1.png", alt: "Digital art preview 1" },
    { src: "miyabi2.png", alt: "Digital art preview 2" },
    { src: "miyabi3.png", alt: "Digital art preview 3" },
  ],
} as const;

const artContent = {
  cosplay: {
    detail:
      "Miyabi Hoshimi from Zenless Zone Zero",
  },
  "digital-art": {
    detail:
      "This section will highlight finished pieces, style studies, and process snapshots from draft to final render.",
  },
} as const;

const ArtPage = () => {
  const [activeTab, setActiveTab] = useState<"cosplay" | "digital-art">("cosplay");
  const [currentSlides, setCurrentSlides] = useState({ cosplay: 0, "digital-art": 0 });

  const photos = artPhotos[activeTab];
  const content = artContent[activeTab];
  const activeIndex = currentSlides[activeTab];
  const isCosplay = activeTab === "cosplay";

  const changeSlide = (direction: "next" | "prev") => {
    const total = photos.length;
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;

    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: nextIndex,
    }));
  };

  const jumpToSlide = (index: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: index,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="art" className="scroll-mt-20 py-24 md:py-32">
        <div className="container px-6 max-w-4xl">
          <div className="mb-8">
            <BackButton />
          </div>

          <span className="metric-badge mb-3">Creative Work</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">Art</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Creative endeavors showcasing quick ability to learn a variety of hands-on skills.
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("cosplay")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "cosplay"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Cosplay
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("digital-art")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "digital-art"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Digital Art
            </button>
          </div>

          <div className="inline-block rounded-xl bg-background/70 p-4 md:p-5">
            <div className="space-y-4">
              <div>
                <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-border bg-background aspect-[4/3]">
                  <img
                    src={photos[activeIndex].src}
                    alt={photos[activeIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  {isCosplay && (
                    <>
                      <button
                        type="button"
                        onClick={() => changeSlide("prev")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-background/80 text-foreground border border-border flex items-center justify-center hover:bg-background transition-colors"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => changeSlide("next")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-background/80 text-foreground border border-border flex items-center justify-center hover:bg-background transition-colors"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
                {isCosplay && (
                  <div className="flex items-center justify-center gap-2 mt-2">
                    {photos.map((photo, index) => (
                      <button
                        key={photo.alt}
                        type="button"
                        onClick={() => jumpToSlide(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          activeIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="max-w-sm">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{content.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-muted-foreground font-body border-t border-border">
        © {new Date().getFullYear()} Carly Wang. Built with care.
      </footer>
    </div>
  );
};

export default ArtPage;
