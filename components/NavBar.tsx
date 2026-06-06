import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  MapPin,
  MessageCircle,
  Phone,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BrandDropdown from "./BrandDropdown";
import { navLinks, site } from "@/data/site";

const secondaryLinks = [
  { label: "Spare Parts", href: "/services#spare-parts" },
  { label: "Repairs & Services", href: "/services" },
];

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <section className="mx-auto flex min-h-20 w-full max-w-420 items-center gap-2 px-4 py-2 sm:px-6 lg:gap-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={site.logo}
            alt="TECHNOFROST logo"
            width={64}
            height={64}
            priority
            className="size-12 rounded-lg object-contain sm:size-14"
          />
          <span className="hidden text-2xl font-extrabold tracking-normal text-brand-navy sm:inline lg:text-4xl uppercase font-bebas-neue">
            Techno<span className="text-brand-red-dark">Frost</span>
          </span>
        </Link>

        <form action="/services" className="flex min-w-0 flex-1 items-center overflow-hidden rounded-lg border bg-white">
          <label htmlFor="site-search" className="sr-only">
            Search products and services
          </label>
          <Input
            id="site-search"
            name="q"
            type="search"
            placeholder="Search services, parts, and repairs"
            className="h-10 flex-1 rounded-none border-0 bg-white px-4 text-sm text-slate-700 shadow-none focus-visible:ring-0 sm:h-10 sm:text-base"
          />
          <Button
            type="submit"
            size="icon-lg"
            aria-label="Search"
            className="h-10 w-12 border-0 cursor-pointer rounded-none bg-brand-red-dark text-white hover:bg-brand-red sm:h-10 sm:w-14"
          >
            <Search className="size-5" aria-hidden="true" />
          </Button>
        </form>

        <div className="hidden items-center gap-3 text-brand-navy lg:flex">
          <Link
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-md border border-brand-blue/15 px-3 text-sm font-bold transition hover:bg-brand-light"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            WhatsApp
          </Link>

          <Link
            href="/contact"
            className="flex min-h-11 items-center gap-2 rounded-md bg-brand-red-dark px-4 text-sm font-bold text-white shadow-lg shadow-brand-red/15 transition hover:bg-brand-red"
          >
            <CalendarCheck className="size-5" aria-hidden="true" />
            Book Service
          </Link>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="mx-auto flex min-h-10 w-full max-w-420 items-center gap-4 overflow-visible px-4 text-sm font-medium sm:px-6 lg:px-10">
          <BrandDropdown />

          <nav className="flex min-w-max items-center gap-6 lg:gap-10" aria-label="Primary navigation">
            {[...navLinks, ...secondaryLinks].map((item) => (
              <Link
                href={item.href}
                className="whitespace-nowrap transition-colors duration-200 ease-in-out hover:text-brand-ice"
                key={`${item.label}-${item.href}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-5 xl:flex">
            <Link href={site.directionsHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="size-5" aria-hidden="true" />
              {site.address}
            </Link>
            <span className="h-8 w-px bg-white/50" aria-hidden="true" />
            <Link href={site.primaryPhoneHref} className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="size-5 fill-white" aria-hidden="true" />
              {site.phones[0]}
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
