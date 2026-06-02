import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import duckies from "@/assets/duckies.png";

type ArtTab = "cosplay" | "digital-art" | "misc";

type ArtPhoto = {
  src: string;
  alt: string;
};

type ArtItem = {
  photos: ArtPhoto[];
  detail: string;
};


const artItems: Record<ArtTab, ArtItem[]> = {
  cosplay: [
    {
      photos: [
        { src: "miyabi1.png", alt: "miyabi preview 1" },
        { src: "miyabi2.png", alt: "miyabi preview 2" },
        { src: "miyabi3.png", alt: "miyabi preview 3" },
      ],
      detail: "Miyabi Hoshimi from Zenless Zone Zero",
    },
    {
      photos: [
        { src: "fern1.JPG", alt: "fern preview 1" },
        { src: "fern2.png", alt: "fern preview 2" },
        { src: "fern3.png", alt: "fern preview 3" },
      ],
      detail: "Fern from Frieren: Beyond Journey's End",
    },
    {
      photos: [
        { src: "agalea1.png", alt: "agalea preview 1" },
        { src: "agalea2.png", alt: "agalea preview 2" },
        { src: "agalea3.png", alt: "agalea preview 3" },
      ],
      detail: "Agalea from Honkai: Starrail",
    },
  ],
  "digital-art": [
    {
      photos: [{ src: "venti.PNG", alt: "venti art preview" }],
      detail:
        "Barbatos (Venti) from Genshin Impact",
    },
    {
      photos: [{ src: "9S.PNG", alt: "9S art preview" }],
      detail: "9S from NieR:Automata",
    },
    {
      photos: [{ src: "vazl2.jpg", alt: "zhongli art preview 3" }],
      detail: "Morax (Zhongli) from Genshin Impact",
    },
    {
      photos: [{ src: "jin.PNG", alt: "jin art preview" }],
      detail: "Singer Kim Seokjin (Jin) from kpop group BTS",
    },
    {
      photos: [
        { src: "ayaya.PNG", alt: "Ayaka art preview" }
      ],
      detail: "Kamisato Ayaka from Genshin Impact",
    },
    {
      photos: [{ src: "wrio.jpg", alt: "Wriothesley art preview" }],
      detail: "Wriothesley from Genshin Impact",
    },
  ],
  "misc": [
      {
        photos: [
        { src: "lucky.PNG", alt: "lucky art preview" },
        { src: "miso.PNG", alt: "miso art preview" },
        { src: "luci.PNG", alt: "luci art preview" },
        { src: "gandalf.PNG", alt: "gandalf art preview" },
        { src: "galadriel.PNG", alt: "galadriel art preview" },
        { src: "annaKitty.PNG", alt: "annaKitty art preview" },
        { src: "addyKitty1.PNG", alt: "addyKitty1 art preview" },
        { src: "addyKitty2.PNG", alt: "addyKitty2 art preview" },
        { src: "addyKitty3.PNG", alt: "addyKitty3 art preview" },
        { src: "sunny.PNG", alt: "sunny art preview" },
        { src: "4th.PNG", alt: "4th cat art preview" },
      ],
      detail: "Cat Sticker Commissions -- All proceeds donated towards Breast Cancer Awareness",
    },
    {
      photos: [
        { src: "snowmanQuack.png", alt: "snowmanQuack art preview" },
        { src: "iceQuack.png", alt: "iceQuack art preview" },
        { src: "movieQuack.png", alt: "movieQuack art preview" },
        { src: "loveQuack.png", alt: "loveQuack art preview" },
        { src: "cutieQuack.png", alt: "cutieQuack art preview" },
        { src: "singQuack.png", alt: "singQuack art preview" },
        { src: "eatQuack.png", alt: "eatQuack art preview" },
        { src: "blushieQuackHoldSparkler.png", alt: "blushieQuackHoldSparkler art preview"},
      ],
      detail: "Quack -- Mascot of the Johns Hopkins Creative Media Center: Stickers used for event promotion and merchandise",
    },
    {
      photos: [
        { src: "sewingQuack.png", alt: "sewingQuack art preview" },
        { src: "headphonesQuack5.png", alt: "headphonesQuack art preview" },
        { src: "gameQuack3.png", alt: "gameQuack art preview" },
        { src: "printerQuack2.png", alt: "printerQuack art preview" },
        { src: "angryQuack.png", alt: "angryQuack art preview" },
        { src: "3DprinterQuack2.png", alt: "3DprinterQuack art preview" },
      ],
      detail: "3D Models of Quack used for the Johns Hopkins Creative Media Center 2025 - 2026 website: made with Blender",
    },
  ],
};

const initialSlides: Record<ArtTab, number[]> = {
  cosplay: [0, 0, 0],
  "digital-art": [0, 0, 0, 0, 0, 0],
  "misc": [0, 0, 0],
};

const ArtPage = () => {
  const [activeTab, setActiveTab] = useState<ArtTab>("cosplay");
  const [currentSlides, setCurrentSlides] = useState(initialSlides);

  const items = artItems[activeTab];
  const isCosplay = activeTab === "cosplay";

  const changeSlide = (itemIndex: number, direction: "next" | "prev") => {
    const photos = items[itemIndex].photos;
    const activeIndex = currentSlides[activeTab][itemIndex];
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % photos.length
        : (activeIndex - 1 + photos.length) % photos.length;

    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((slide, index) =>
        index === itemIndex ? nextIndex : slide,
      ),
    }));
  };

  const jumpToSlide = (itemIndex: number, slideIndex: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((slide, index) =>
        index === itemIndex ? slideIndex : slide,
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="art" className="scroll-mt-20 pb-24 md:pb-32">
        <div className="relative w-full overflow-hidden">
          <img
            src={duckies}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover blur-xl scale-105"
          />
          <div className="absolute inset-0 bg-background/65" aria-hidden />
          <div className="relative z-10 container px-6 max-w-4xl mx-auto pt-20 pb-12 md:pb-16">
            <BackButton className="mb-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" />
            <div className="text-center">
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">Art</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Creative endeavors showcasing quick ability to learn a variety of hands-on skills.
              </p >
              <p className="text-muted-foreground text-md max-w-2xl mx-auto">
                All art is <u><b>original</b></u>; any discrepancies in styles are due to 4+ years of learning and practice.
                </p>
            </div>
          </div>
        </div>

        <div className="container px-6 max-w-4xl pt-16">
          <div className="mb-6 flex flex-wrap gap-3">
            <div
              className="flex rounded-md border border-border overflow-hidden"
              role="tablist"
              aria-label="Art categories"
            >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "cosplay"}
              onClick={() => setActiveTab("cosplay")}
              className={`px-5 py-2.5 text-sm font-medium transition-colors border-r border-border ${
                activeTab === "cosplay"
                  ? "bg-primary text-white"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Cosplay
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "digital-art"}
              onClick={() => setActiveTab("digital-art")}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "digital-art"
                  ? "bg-primary text-white"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Digital Art
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "misc"}
              onClick={() => setActiveTab("misc")}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "misc"
                  ? "bg-primary text-white"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Misc.
            </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {items.map((item, itemIndex) => {
              const activeIndex = currentSlides[activeTab][itemIndex];
              const photo = item.photos[activeIndex];
              const showCarousel = item.photos.length > 1;

              return (
                <div
                  key={`${activeTab}-${itemIndex}`}
                  className="w-full min-w-0 rounded-xl bg-background/70 p-4 md:p-5"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="relative w-full rounded-lg overflow-hidden border border-border bg-background aspect-[4/5]">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                        />
                        {showCarousel && (
                          <>
                            <button
                              type="button"
                              onClick={() => changeSlide(itemIndex, "prev")}
                              className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-primary/80"
                              aria-label="Previous slide"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => changeSlide(itemIndex, "next")}
                              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-primary/80"
                              aria-label="Next slide"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                      {showCarousel && (
                        <div className="flex items-center justify-center gap-2 mt-2">
                          {/* {item.photos.map((itemPhoto, slideIndex) => (
                            <button
                              key={itemPhoto.alt}
                              type="button"
                              onClick={() => jumpToSlide(itemIndex, slideIndex)}
                              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                activeIndex === slideIndex
                                  ? "bg-primary"
                                  : "bg-muted-foreground/30"
                              }`}
                              aria-label={`Go to slide ${slideIndex + 1}`}
                            />
                          ))} */}
                          {activeIndex + 1} / {item.photos.length}
                        </div>
                      )}
                    </div>

                    <div className="w-full">
                      <h3 className="font-semibold mb-2">{item.detail}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArtPage;
