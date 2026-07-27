import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StructuredData from "@/components/StructuredData";
import { seoKeywords, site } from "@/data/site";
import { getServiceBySlug, processSteps, services } from "@/data/services";
import { createBreadcrumbSchema, createPageMetadata, siteUrl } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: service.href,
    imageAlt: `${service.title} service support from TECHNOFROST in Kalpitiya`,
    keywords: [
      `${service.title} Kalpitiya`,
      ...seoKeywords,
    ],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const serviceUrl = `${siteUrl}${service.href}`;
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: service.href },
  ]);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    serviceType: service.title,
    url: serviceUrl,
    mainEntityOfPage: serviceUrl,
    description: service.description,
    image: `${siteUrl}${service.image}`,
    provider: {
      "@id": `${siteUrl}/#business`,
      "@type": "HVACBusiness",
      name: site.name,
      telephone: "+94 76 780 1583",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Kalpitiya and nearby areas, Sri Lanka",
    },
  };

  return (
    <main className="bg-white text-brand-foreground">
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />

      <PageHero
        currentPage={service.title}
        breadcrumbParent={{ label: "Services", href: "/services" }}
        eyebrow="Local Service Support"
        title={service.seoTitle}
        description={service.seoDescription}
        primaryLabel="Request This Service"
        primaryHref={site.whatsappHref}
        primaryExternal
        primaryIcon={<FaWhatsapp className="size-5" />}
        secondaryLabel="Call 076 780 1583"
        secondaryHref={site.primaryPhoneHref}
        secondaryIcon={<Phone className="size-4" />}
      />

      <section className="px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-420 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-brand-light shadow-[0_18px_55px_rgba(4,20,43,0.12)]">
            <Image
              src={service.image}
              alt={`${service.title} equipment service and repair support in Kalpitiya`}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.08em] text-brand-blue">
              {service.title}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-title sm:text-4xl">
              Practical service support for your equipment
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{service.description}</p>

            <h3 className="mt-7 text-xl font-black text-brand-title">Service can include</h3>
            <ul className="mt-4 grid gap-3">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={site.whatsappHref}
                variant="primary"
                external
                icon={<FaWhatsapp className="size-4" />}
              >
                Request on WhatsApp
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="secondary"
                icon={<Wrench className="size-4" />}
              >
                Send Service Details
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Common Service Needs"
            title={`When to request ${service.title.toLowerCase()}`}
            description="Share the equipment brand, model, symptoms, and location when you contact us. These details help with service planning."
          />

          <ul className="grid gap-5 md:grid-cols-2">
            {service.commonIssues.map((issue) => (
              <li
                key={issue}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(4,20,43,0.05)]"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy text-brand-ice">
                  <Wrench className="size-4.5" aria-hidden="true" />
                </span>
                <span className="font-black leading-6 text-brand-title">{issue}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-brand-navy p-6 text-white sm:p-8">
            <h2 className="text-2xl font-black">Equipment and customers we support</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {service.suitableFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 text-sm font-bold"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-brand-ice" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Booking Process"
            title="From first message to service completion"
            description="A clear process helps us understand the equipment and arrange the right next step."
          />
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 p-5">
                <span className="text-sm font-black text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-black text-brand-title">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-light px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Related Services"
            title="Other cooling and appliance support"
            description="Explore related TECHNOFROST services available around Kalpitiya."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <ServiceCard key={item.slug} service={item} compact />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={`Need ${service.title.toLowerCase()}?`}
        description="Send the equipment brand, model, issue, and location through WhatsApp for faster service coordination."
        href={site.whatsappHref}
      />
    </main>
  );
}
