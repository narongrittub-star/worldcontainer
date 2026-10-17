import Image from "next/image";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";

const LINE_ID = "bossjivarah";
const LINE_URL = `https://line.me/R/ti/p/~${LINE_ID}`;
const PHONE = "0869695156";
const PHONE_DISPLAY = "086-969-5156";
const HOURS = "จันทร์–เสาร์ 08:00–17:00 น.";
const ADDRESS = "22/5 หมู่ 2 ต.ทรงคนอง อ.สามพราน จ.นครปฐม 73210";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "ทรงคนอง สามพราน นครปฐม 73210",
)}`;

/* ---------- Icons (inline, no external images) ---------- */

type IconProps = { className?: string };

function Icon({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const PrecisionIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </Icon>
);
const SpeedIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </Icon>
);
const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </Icon>
);
const MoldIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="6" rx="1" />
    <rect x="3" y="14" width="18" height="6" rx="1" />
    <path d="M9 10v4M15 10v4" />
  </Icon>
);
const AssemblyIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h7v7H4zM13 10h7v7h-7z" />
    <path d="M11 10.5h2" />
  </Icon>
);
const BottleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10 2h4v3h-4zM9 5h6l1 4v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l1-4Z" />
    <path d="M8 13h8" />
  </Icon>
);
const JarIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="3" width="14" height="4" rx="1" />
    <path d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Z" />
    <path d="M9 12h6" />
  </Icon>
);
const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12 4.5 4.5L19 7" />
  </Icon>
);
const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </Icon>
);
const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);
const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);
const ArrowIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

function LineLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 5.9-3.5 8-5.9C21.4 14.3 22 12.7 22 11c0-4.4-4.5-8-10-8Zm-3.8 10.4H6.3c-.3 0-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.3h1.4c.3 0 .5.2.5.5s-.2.5-.5.5Zm2-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.8Zm4.6 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2-2.7v2.4c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.1c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l2 2.7V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.8Zm3.1-2.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4Z" />
    </svg>
  );
}

/* ---------- Content ---------- */

const highlights = [
  {
    icon: PrecisionIcon,
    tag: "01 · High Precision Spec",
    title: "แม่นยำระดับสเปก",
    body: "ผลิตตรงตามแบบและสเปกที่ลูกค้ากำหนด ด้วยเครื่องฉีดพลาสติกมาตรฐานญี่ปุ่น ควบคุมขนาดและน้ำหนักชิ้นงานให้คงที่ทุกล็อต",
  },
  {
    icon: SpeedIcon,
    tag: "02 · Fast Delivery",
    title: "รวดเร็ว ส่งมอบตรงเวลา",
    body: "ทบทวนคำสั่งซื้อและวางแผนการผลิตทันทีที่ได้รับงาน ตอบกลับไว ผลิตต่อเนื่อง และส่งมอบตามกำหนดที่ตกลงกันไว้",
  },
  {
    icon: ShieldIcon,
    tag: "03 · Quality System",
    title: "ระบบคุณภาพ ISO 9001",
    body: "บริหารงานตามระบบคุณภาพ ISO 9001:2015 ดูแลเครื่องจักรแบบ TPM และตรวจสอบผลิตภัณฑ์ขั้นสุดท้ายก่อนปล่อยทุกครั้ง",
  },
];

const services = [
  {
    icon: MoldIcon,
    title: "ฉีดขึ้นรูปพลาสติก",
    en: "Plastic Injection Molding",
    body: "รับจ้างฉีดชิ้นงานพลาสติกตามแบบของลูกค้า (OEM) รองรับแม่พิมพ์ของลูกค้า พร้อมดูแลรักษาแม่พิมพ์ระหว่างผลิต",
  },
  {
    icon: AssemblyIcon,
    title: "ประกอบชิ้นส่วนพลาสติก",
    en: "Assembly of Plastic Parts",
    body: "ประกอบและเชื่อมชิ้นส่วนบรรจุภัณฑ์ให้พร้อมใช้งาน ลดขั้นตอนที่โรงงานของลูกค้า พร้อมแพ็กและส่งมอบ",
  },
  {
    icon: JarIcon,
    title: "บรรจุภัณฑ์เครื่องสำอาง",
    en: "Cosmetic Packaging",
    body: "ฝา ตลับ กระปุก และชิ้นส่วนบรรจุภัณฑ์เครื่องสำอาง ผิวงานสวย ขนาดเที่ยงตรง ประกอบเข้ากันได้พอดี",
  },
  {
    icon: BottleIcon,
    title: "บรรจุภัณฑ์น้ำดื่ม",
    en: "Drinking Water Packaging",
    body: "ฝาขวดและชิ้นส่วนบรรจุภัณฑ์สำหรับโรงงานน้ำดื่ม เน้นความแม่นยำของขนาด เพื่อการปิดสนิทบนสายบรรจุ",
  },
];

const stats = [
  { value: "ISO 9001", label: "บริหารงานตามระบบคุณภาพ" },
  { value: "OEM", label: "ผลิตตามแบบและสเปกลูกค้า" },
  { value: "6 วัน", label: "เปิดทำการ จันทร์–เสาร์" },
];

const steps = [
  { no: "01", title: "ส่งแบบ / ตัวอย่าง", body: "ทักไลน์ส่งแบบ สเปก จำนวน และกำหนดส่งที่ต้องการ" },
  { no: "02", title: "ทบทวน & เสนอราคา", body: "ทีมงานทบทวนความเป็นไปได้และเสนอราคาให้" },
  { no: "03", title: "วางแผนการผลิต", body: "จัดเตรียมวัตถุดิบ แม่พิมพ์ และเครื่องจักร" },
  { no: "04", title: "ฉีดขึ้นรูป & ประกอบ", body: "ผลิตพร้อมควบคุมกระบวนการตลอดสายการผลิต" },
  { no: "05", title: "ตรวจสอบขั้นสุดท้าย", body: "ตรวจคุณภาพตามสเปกก่อนปล่อยสินค้าทุกล็อต" },
  { no: "06", title: "ส่งมอบตรงเวลา", body: "แพ็กและจัดส่งตามแผนงานที่ตกลงกันไว้" },
];

const faqs = [
  {
    q: "ต้องมีแม่พิมพ์ของตัวเองไหม?",
    a: "โรงงานรับผลิตตามแบบของลูกค้า สามารถนำแม่พิมพ์ของท่านมาผลิตได้ และเราจะดูแลรักษาแม่พิมพ์ระหว่างการผลิตให้ หากยังไม่มีแม่พิมพ์ ทักไลน์มาปรึกษาเพื่อหาแนวทางที่เหมาะสมได้",
  },
  {
    q: "สั่งผลิตขั้นต่ำเท่าไร และราคาเท่าไร?",
    a: "ขั้นต่ำและราคาขึ้นอยู่กับขนาดชิ้นงาน วัสดุ และจำนวนที่สั่งผลิต ส่งแบบและจำนวนที่ต้องการทางไลน์ ทีมงานจะประเมินและเสนอราคาให้",
  },
  {
    q: "ใช้เวลาผลิตนานไหม?",
    a: "ระยะเวลาขึ้นอยู่กับจำนวนและความซับซ้อนของงาน เราวางแผนการผลิตทันทีหลังยืนยันคำสั่งซื้อ และแจ้งกำหนดส่งที่ชัดเจนให้ตั้งแต่ต้น",
  },
  {
    q: "มีระบบควบคุมคุณภาพอย่างไร?",
    a: "โรงงานบริหารงานตามระบบคุณภาพ ISO 9001:2015 ควบคุมกระบวนการผลิต ดูแลเครื่องจักรแบบ TPM สอบเทียบเครื่องมือวัด และตรวจสอบผลิตภัณฑ์ขั้นสุดท้ายก่อนส่งมอบ",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Worldcontainer Co., Ltd.",
    description: "โรงงานรับจ้างผลิตบรรจุภัณฑ์พลาสติก ฉีดขึ้นรูปและประกอบตามแบบลูกค้า",
    url: SITE_URL,
    image: `${SITE_URL}/images/factory-floor.jpg`,
    telephone: "+66869695156",
    address: {
      "@type": "PostalAddress",
      streetAddress: "22/5 หมู่ 2 ต.ทรงคนอง",
      addressLocality: "อ.สามพราน",
      addressRegion: "นครปฐม",
      postalCode: "73210",
      addressCountry: "TH",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

/* ---------- Small building blocks ---------- */

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-mono text-eyebrow uppercase ${dark ? "text-royal-bright" : "text-royal"} flex items-center gap-3`}
    >
      <span className={`h-px w-8 ${dark ? "bg-royal-bright" : "bg-royal"}`} />
      {children}
    </p>
  );
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-royal px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(47_90_224/0.9)] transition hover:bg-royal-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-bright ${className}`}
    >
      <LineLogo className="size-5" />
      ทักไลน์เลย
    </a>
  );
}

function PhoneButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${PHONE}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-ice/30 px-7 py-3.5 font-medium text-white transition hover:border-ice hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-bright ${className}`}
    >
      <PhoneIcon className="size-5" />
      โทร {PHONE_DISPLAY}
    </a>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-royal px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#main" aria-label="Worldcontainer หน้าแรก" className="flex items-center gap-2.5 text-white">
            <span className="grid size-9 place-items-center rounded-lg bg-royal font-serif text-lg font-bold">
              W
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-[0.14em]">
                WORLD<span className="text-royal-bright">CONTAINER</span>
              </span>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-ice/70">
                CO., LTD.
              </span>
            </span>
          </a>
          <nav aria-label="เมนูหลัก" className="hidden items-center gap-7 text-sm text-ice/80 md:flex">
            <a href="#highlights" className="hover:text-white">จุดเด่น</a>
            <a href="#services" className="hover:text-white">บริการ</a>
            <a href="#process" className="hover:text-white">ขั้นตอน</a>
            <a href="#faq" className="hover:text-white">คำถามที่พบบ่อย</a>
            <a href="#contact" className="hover:text-white">ติดต่อเรา</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-royal px-4 py-2 text-sm font-semibold text-white hover:bg-royal-bright"
          >
            <LineLogo className="size-4" />
            ทักไลน์เลย
          </a>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-ink pt-16">
          <Image
            src="/images/factory-floor.jpg"
            alt="สายการผลิตเครื่องฉีดพลาสติกภายในโรงงาน Worldcontainer"
            fill
            preload
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/75 via-navy/55 to-ink" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-navy/40 to-transparent mix-blend-multiply" />
          <div className="grid-lines absolute inset-0 -z-10" />

          <div className="mx-auto max-w-6xl px-4 pb-44 pt-16 sm:px-6 sm:pt-24 lg:pb-52 lg:pt-32">
            <Eyebrow dark>Plastic Injection Molding · OEM</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-display font-semibold text-white">
              บรรจุภัณฑ์พลาสติก
              <br />
              <span className="bg-gradient-to-r from-white via-ice to-royal-bright bg-clip-text text-transparent">
                แม่นยำระดับสเปก
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lead text-ice/90">
              โรงงานรับจ้างผลิตบรรจุภัณฑ์พลาสติก ฉีดขึ้นรูปและประกอบตามแบบของลูกค้า
              สำหรับโรงงานเครื่องสำอางและโรงงานน้ำดื่ม ส่งมอบรวดเร็ว ตรงเวลา
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LineButton />
              <PhoneButton />
            </div>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs tracking-wider text-ice/60">
              <ClockIcon className="size-4" />
              {HOURS}
            </p>
          </div>
        </section>

        {/* Highlights — glass cards overlapping hero */}
        <section id="highlights" className="relative z-10 -mt-32 px-4 sm:px-6 lg:-mt-40">
          <h2 className="sr-only">จุดเด่นของเรา</h2>
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            {highlights.map(({ icon: HighlightIcon, tag, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-ice/15 bg-gradient-to-br from-navy-2 to-navy p-6 text-white shadow-[0_30px_60px_-20px_rgb(5_11_31/0.7)] sm:p-8 md:glass"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-royal/30 text-royal-bright ring-1 ring-royal-bright/40">
                    <HighlightIcon className="size-6" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ice/60">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 text-h3 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ice/85">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Company overview */}
        <section className="bg-mist pb-20 pt-20 sm:pb-28 sm:pt-28 lg:-mt-24 lg:pt-44">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <Eyebrow>Company Overview</Eyebrow>
              <h2 className="mt-5 font-serif text-h2 font-semibold text-navy">
                พันธมิตรการผลิต
                <br />
                ที่ยึดมั่นในมาตรฐาน
              </h2>
              <p className="mt-5 text-steel">
                Worldcontainer เป็นโรงงานรับจ้างฉีดขึ้นรูปและประกอบชิ้นส่วนบรรจุภัณฑ์พลาสติก
                ตั้งอยู่ที่อำเภอสามพราน จังหวัดนครปฐม ด้วยนโยบาย{" "}
                <span className="font-semibold text-navy">
                  “บริการรวดเร็ว ส่งมอบตรงเวลา ยึดมั่นในมาตรฐาน พัฒนาอย่างต่อเนื่อง”
                </span>{" "}
                เราทำงานให้ถูกต้องตั้งแต่ครั้งแรก เพื่อคุณภาพที่ลูกค้าวางใจได้ทุกล็อต
              </p>
              <dl className="mt-10 grid grid-cols-3 divide-x divide-navy/10 border-y border-navy/10">
                {stats.map((s) => (
                  <div key={s.value} className="px-2 py-6 first:pl-0 sm:px-5">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="whitespace-nowrap font-mono text-stat font-medium text-royal">{s.value}</dd>
                    <dd className="mt-2 text-xs leading-5 text-steel sm:text-sm">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 -z-0 rounded-3xl bg-gradient-to-br from-royal/25 to-transparent" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-navy/20">
                <Image
                  src="/images/toyo-machines.jpg"
                  alt="เครื่องฉีดพลาสติกในสายการผลิต"
                  width={1400}
                  height={933}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="relative -mt-14 ml-auto w-[62%] overflow-hidden rounded-2xl border-4 border-mist shadow-xl sm:w-1/2">
                <Image
                  src="/images/team.jpg"
                  alt="ทีมงานโรงงาน Worldcontainer"
                  width={1600}
                  height={1067}
                  sizes="(min-width: 1024px) 280px, 60vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-royal-gradient relative overflow-hidden py-20 text-white sm:py-28">
          <div className="grid-lines absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <Eyebrow dark>Products & Services</Eyebrow>
              <h2 className="mt-5 font-serif text-h2 font-semibold">สินค้าและบริการ</h2>
              <p className="mt-4 text-ice/85">
                ผลิตตามแบบของลูกค้าทั้งหมด ราคาขึ้นอยู่กับแบบชิ้นงาน วัสดุ และจำนวนที่สั่งผลิต
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {services.map(({ icon: ServiceIcon, title, en, body }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-royal-bright/50 hover:bg-white/[0.07] sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal to-navy-2 text-white ring-1 ring-white/15">
                      <ServiceIcon className="size-6" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-royal-bright">
                        {en}
                      </p>
                      <h3 className="mt-1 text-h3 font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-ice/80">{body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pricing callout */}
            <div className="glass mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl p-6 sm:p-8 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-royal-bright">
                  Pricing
                </p>
                <p className="mt-1 text-h3 font-semibold">ราคาตามแบบและจำนวนผลิต</p>
                <p className="mt-1 text-sm text-ice/80">
                  ส่งแบบ สเปก และจำนวนที่ต้องการทางไลน์ รับใบเสนอราคาได้รวดเร็ว
                </p>
              </div>
              <LineButton className="w-full shrink-0 md:w-auto" />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
              <div>
                <Eyebrow>Process</Eyebrow>
                <h2 className="mt-5 font-serif text-h2 font-semibold text-navy">
                  ขั้นตอนการทำงาน
                  <br />
                  ชัดเจนทุกขั้น
                </h2>
                <p className="mt-4 text-steel">
                  ทุกคำสั่งผลิตผ่านกระบวนการตามระบบคุณภาพ ตั้งแต่รับแบบไปจนถึงส่งมอบ
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <Image
                    src="/images/injection-machine.jpg"
                    alt="เครื่องฉีดพลาสติกกำลังทำงาน"
                    width={800}
                    height={1200}
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="aspect-[4/5] h-auto w-full rounded-xl object-cover"
                  />
                  <Image
                    src="/images/quality-inspection.jpg"
                    alt="พนักงานตรวจสอบคุณภาพชิ้นงาน"
                    width={799}
                    height={1200}
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="aspect-[4/5] h-auto w-full rounded-xl object-cover"
                  />
                </div>
              </div>

              <ol className="relative grid gap-4 sm:grid-cols-2">
                {steps.map((s) => (
                  <li
                    key={s.no}
                    className="rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_10px_30px_-18px_rgb(10_26_74/0.35)]"
                  >
                    <span className="font-mono text-sm font-medium text-royal">{s.no}</span>
                    <h3 className="mt-2 text-h3 font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-steel">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Image band */}
        <section aria-label="ภาพบรรยากาศโรงงาน" className="relative h-72 overflow-hidden sm:h-96">
          <Image
            src="/images/assembly.jpg"
            alt="พนักงานประกอบชิ้นส่วนบรรจุภัณฑ์พลาสติก"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6">
            <p className="max-w-md font-serif text-h2 font-semibold leading-snug text-white">
              ทำให้ถูกต้อง
              <br />
              ตั้งแต่ครั้งแรก
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-ice">
              <CheckIcon className="size-4 text-royal-bright" />
              ตรวจสอบผลิตภัณฑ์ขั้นสุดท้ายก่อนส่งมอบทุกล็อต
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-mist py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <div className="flex justify-center">
                <Eyebrow>FAQ</Eyebrow>
              </div>
              <h2 className="mt-5 font-serif text-h2 font-semibold text-navy">คำถามที่พบบ่อย</h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-navy/10 bg-white px-6 open:shadow-[0_10px_30px_-18px_rgb(10_26_74/0.35)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-navy">
                    {f.q}
                    <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-royal/10 text-xl leading-none text-royal transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-sm leading-7 text-steel">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-royal-gradient relative overflow-hidden py-20 text-white sm:py-28">
          <div className="grid-lines absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow dark>Contact</Eyebrow>
              <h2 className="mt-5 font-serif text-h2 font-semibold">
                พร้อมเริ่มผลิต
                <br />
                บรรจุภัณฑ์ของคุณ
              </h2>
              <p className="mt-4 max-w-md text-ice/85">
                ส่งแบบหรือสเปกชิ้นงานมาทางไลน์ ทีมงานพร้อมตอบกลับในเวลาทำการ
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-royal-bright/50"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-line text-white">
                      <LineLogo className="size-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-ice/70">LINE ID</span>
                      <span className="block font-semibold">{LINE_ID}</span>
                    </span>
                    <ArrowIcon className="ml-auto size-5 shrink-0 text-ice/60" />
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-royal-bright/50"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-royal text-white">
                      <PhoneIcon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-ice/70">โทรศัพท์</span>
                      <span className="block font-semibold">{PHONE_DISPLAY}</span>
                    </span>
                    <ArrowIcon className="ml-auto size-5 shrink-0 text-ice/60" />
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy-2 text-royal-bright ring-1 ring-white/10">
                    <ClockIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-ice/70">เวลาทำการ</span>
                    <span className="block font-semibold">{HOURS}</span>
                  </span>
                </li>
                <li>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-royal-bright/50"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy-2 text-royal-bright ring-1 ring-white/10">
                      <PinIcon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-ice/70">ที่ตั้งโรงงาน</span>
                      <span className="block font-semibold">{ADDRESS}</span>
                    </span>
                    <ArrowIcon className="ml-auto size-5 shrink-0 text-ice/60" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src="/images/factory-building.jpg"
                  alt="อาคารโรงงาน Worldcontainer"
                  width={1600}
                  height={1066}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="glass relative z-10 -mt-10 mx-4 rounded-2xl p-6 sm:mx-8">
                <p className="font-serif text-h3 font-semibold">ขอใบเสนอราคาได้เลยวันนี้</p>
                <LineButton className="mt-4 w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink pb-24 pt-10 text-ice/60 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-[0.14em] text-white">
              WORLD<span className="text-royal-bright">CONTAINER</span> CO., LTD.
            </p>
            <p className="mt-1">โรงงานรับจ้างผลิตบรรจุภัณฑ์พลาสติก · {ADDRESS}</p>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-xs">© 2026 Worldcontainer Co., Ltd.</p>
            <p className="mt-1 text-xs">
              ความเป็นส่วนตัว (PDPA): เว็บไซต์นี้ไม่มีแบบฟอร์มและไม่เก็บข้อมูลส่วนบุคคลของผู้เข้าชม
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/90 p-3 backdrop-blur-md md:hidden">
        <div className="flex gap-2">
          <a
            href={`tel:${PHONE}`}
            aria-label={`โทร ${PHONE_DISPLAY}`}
            className="grid size-12 shrink-0 place-items-center rounded-full border border-ice/30 text-white"
          >
            <PhoneIcon className="size-5" />
          </a>
          <LineButton className="flex-1 py-3" />
        </div>
      </div>
    </>
  );
}
