import {
  Anton, Arimo, Assistant, Astloch, Barlow, Bebas_Neue,
  Bitter, Cabin, Cairo, Crimson_Text, Dosis, Exo_2, Fira_Sans, Heebo, Hind, IBM_Plex_Sans,
  Inconsolata, Indie_Flower, Inter, Josefin_Sans, Karla,
  Lato, Libre_Baskerville, Lora, Manrope, Merriweather, Montserrat, Mukta,
  Noto_Sans, Nunito, Open_Sans, Oswald, Oxygen, Playfair_Display,
  Poppins, PT_Sans, Quicksand, Raleway,
  Roboto, Roboto_Condensed, Rubik, Slabo_27px, Source_Sans_3, Tajawal, Teko, Titillium_Web,
  Ubuntu, Varela_Round, Work_Sans, Zilla_Slab, Bubblegum_Sans, Bubbler_One
} from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import config from "@/settings.json";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: "300", subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: "300", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const ptSans = PT_Sans({ weight: "400", subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });
const firaSans = Fira_Sans({ weight: "300", subsets: ["latin"] });
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const mukta = Mukta({ weight: "300", subsets: ["latin"] });
const karla = Karla({ subsets: ["latin"] });
const hind = Hind({ weight: "300", subsets: ["latin"] });
const arimo = Arimo({ subsets: ["latin"] });
const titilliumWeb = Titillium_Web({ weight: "300", subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });
const zillaSlab = Zilla_Slab({ weight: "300", subsets: ["latin"] });
const ibmPlexSans = IBM_Plex_Sans({ weight: "300", subsets: ["latin"] });
const slabo27px = Slabo_27px({ weight: "400", subsets: ["latin"] });
const oxygen = Oxygen({ weight: "300", subsets: ["latin"] });
const exo2 = Exo_2({ subsets: ["latin"] });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });
const varelaRound = Varela_Round({ weight: "400", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const barlow = Barlow({ weight: "300", subsets: ["latin"] });
const tajawal = Tajawal({ weight: "300", subsets: ["latin"] });
const heebo = Heebo({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const crimsonText = Crimson_Text({ weight: "400", subsets: ["latin"] });
const teko = Teko({ weight: "300", subsets: ["latin"] });
const cairo = Cairo({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ["latin"] });
const astloch = Astloch({ weight: "400", subsets: ["latin"] });
const bubblegumSans = Bubblegum_Sans({ weight: "400", subsets: ["latin"] });
const bubblerOne = Bubbler_One({ weight: "400", subsets: ["latin"] });


const fontMap: Record<string, NextFont> = {
  Inter: inter,
  Lato: lato,
  Nunito: nunito,
  OpenSans: openSans,
  Roboto: roboto,
  Montserrat: montserrat,
  Oswald: oswald,
  Raleway: raleway,
  Merriweather: merriweather,
  Poppins: poppins,
  Ubuntu: ubuntu,
  PlayfairDisplay: playfairDisplay,
  NotoSans: notoSans,
  RobotoCondensed: robotoCondensed,
  Rubik: rubik,
  Quicksand: quicksand,
  SourceSan3: sourceSans3,
  Inconsolata: inconsolata,
  PTSans: ptSans,
  Dosis: dosis,
  Cabin: cabin,
  FiraSans: firaSans,
  JosefinSans: josefinSans,
  Bitter: bitter,
  LibreBaskerville: libreBaskerville,
  Mukta: mukta,
  Karla: karla,
  Hind: hind,
  Arimo: arimo,
  TitilliumWeb: titilliumWeb,
  WorkSans: workSans,
  ZillaSlab: zillaSlab,
  IBMPlexSans: ibmPlexSans,
  Slabo27px: slabo27px,
  Oxygen: oxygen,
  Exo2: exo2,
  IndieFlower: indieFlower,
  Anton: anton,
  VarelaRound: varelaRound,
  BebasNeue: bebasNeue,
  Lora: lora,
  Barlow: barlow,
  Tajawal: tajawal,
  Heebo: heebo,
  Manrope: manrope,
  CrimsonText: crimsonText,
  Teko: teko,
  Cairo: cairo,
  Assistant: assistant,
  Astloch: astloch,
  BubblegumSans: bubblegumSans,
  BubblerOne: bubblerOne
};

const useFont = (): NextFont => {
  return fontMap[config.font || "Inter"] ?? inter;
};

export default useFont;
