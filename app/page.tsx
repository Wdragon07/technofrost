import type { Metadata } from "next";
import {
  CheckCircle2,
  MessageCircle,
  Navigation,
  Phone,
  Quote,
  Star,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TrustBadge from "@/components/TrustBadge";
import { iconMap } from "@/components/icon-map";
import { seoKeywords, site } from "@/data/site";
import {
  brandsServiced,
  processSteps,
  serviceDeals,
  services,
  testimonials,
  trustBenefits,
} from "@/data/services";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description:
    "TECHNOFROST provides premium A/C service, refrigeration repair, washing machine repair, auto A/C repair, motor rewinding, and spare parts support in Kalpitiya.",
  keywords: seoKeywords,
  openGraph: {
    title: "TECHNOFROST | A/C, Refrigeration & Appliance Repair in Kalpitiya",
    description: site.description,
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="w-full bg-white text-brand-foreground">
      <Hero />

      <section className="relative z-10 mt-10 px-4 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-420 gap-4 rounded-lg sm:grid-cols-2 lg:grid-cols-4">
          {trustBenefits.map((benefit) => (
            <TrustBadge key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Service Categories"
            title="Choose the repair or cooling service you need"
            description="A premium service catalog with fast booking paths for home appliances, refrigeration systems, auto A/C, and spare parts support."
            actionLabel="View All Services"
            actionHref="/services"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Service Deals"
            title="Popular service requests"
            description="Ecommerce-style service bundles that make it easier to request the right visit. Final cost depends on inspection and parts."
            actionLabel="Request Service"
            actionHref="/contact"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {serviceDeals.map((deal) => {
              const Icon = iconMap[deal.icon];
              return (
                <article
                  key={deal.title}
                  className="group flex h-full flex-col rounded-lg bg-white p-5 shadow-[0_18px_52px_rgba(4,20,43,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(4,20,43,0.13)]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-md bg-brand-navy text-brand-ice">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-brand-ice-light px-3 py-1 text-xs font-black text-brand-deep">
                      {deal.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-brand-title">{deal.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{deal.details}</p>
                  <div className="mt-auto pt-6">
                    <CTAButton href="/contact" variant="outline" className="w-full">
                      Request Service
                    </CTAButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/banner1.webp"
              alt="Cooling, refrigeration, and appliance service visual"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Why Choose TECHNOFROST"
              title="Technical service with clear communication"
              description="A clean, trustworthy repair experience for customers who need cooling systems and appliances back in working condition."
              className="mb-6"
            />
            <div className="grid gap-3">
              {[
                "Experienced refrigeration and appliance technicians",
                "Reliable repair and maintenance for daily-use equipment",
                "Support for home and business customers",
                "Clean, professional service visits",
                "Quick contact through call or WhatsApp",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md bg-brand-light px-4 py-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={site.primaryPhoneHref} variant="red" icon={<Phone className="size-4" />}>
                Call {site.phones[0]}
              </CTAButton>
              <CTAButton
                href={site.whatsappHref}
                variant="navy"
                external
                icon={<MessageCircle className="size-4" />}
              >
                WhatsApp Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="How It Works"
            title="A simple repair process from first message to completion"
            description="No confusing steps. Share the issue, arrange a visit, and get practical service guidance."
            align="center"
            className="[&_h2]:text-white [&_p]:text-brand-ice-light [&_.text-brand-blue]:text-brand-ice"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-lg bg-white/8 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/12"
                >
                  <div className="absolute right-4 top-2 text-7xl font-black leading-none text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative grid size-12 place-items-center rounded-md bg-brand-ice text-brand-navy">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-black">{step.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-brand-muted">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="rounded-lg bg-brand-light p-6 shadow-inner lg:p-8">
            <p className="text-sm font-black uppercase tracking-normal text-brand-blue">
              Service Area
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-title">
              Main Street, Kurakkanhena, Kalpitiya
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Book service support around Kalpitiya and nearby areas for A/C, refrigeration,
              washing machine, auto A/C, motor rewinding, and spare parts needs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CTAButton href={site.primaryPhoneHref} variant="red" icon={<Phone className="size-4" />}>
                Call Now
              </CTAButton>
              <CTAButton
                href={site.whatsappHref}
                variant="navy"
                external
                icon={<MessageCircle className="size-4" />}
              >
                WhatsApp
              </CTAButton>
              <CTAButton
                href={site.directionsHref}
                variant="outline"
                external
                icon={<Navigation className="size-4" />}
              >
                Get Directions
              </CTAButton>
            </div>
          </div>

          <div className="relative min-h-96 overflow-hidden rounded-lg bg-brand-navy p-6 shadow-[0_24px_80px_rgba(4,20,43,0.18)]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(133,217,255,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(133,217,255,0.12)_1px,transparent_1px)] bg-size-[34px_34px]" />
            <div className="relative flex h-full min-h-80 flex-col justify-between rounded-md bg-white/92 p-6">
              <div>
                <p className="text-sm font-black uppercase tracking-normal text-brand-blue">
                  Map preview placeholder
                </p>
                <h3 className="mt-3 text-2xl font-black text-brand-title">{site.address}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                  Replace this block with your final Google Map embed when the listing URL is ready.
                </p>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["A/C", "Fridge", "Freezer"].map((item) => (
                  <div key={item} className="rounded-md bg-brand-light px-4 py-3 text-center">
                    <p className="text-sm font-black text-brand-title">{item}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">service zone</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Top Brands"
            title="Appliance brands and types serviced"
            description="Brand support depends on model condition and parts availability. TECHNOFROST can guide the best next step after inspection."
            actionLabel="Ask About Your Brand"
            actionHref="/contact"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {brandsServiced.map((brand) => (
              <div
                key={brand}
                className="grid min-h-20 place-items-center rounded-lg bg-white px-4 text-center text-sm font-black text-brand-title shadow-[0_14px_40px_rgba(4,20,43,0.07)] transition hover:-translate-y-0.5 hover:text-brand-blue"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 rounded-lg bg-brand-navy p-6 text-white shadow-[0_24px_90px_rgba(4,20,43,0.18)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-brand-ice">
              About TECHNOFROST
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black sm:text-4xl">
              Premium service support for homes and businesses around Kalpitiya.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-brand-ice-light">
              {site.description}
            </p>
          </div>
          <CTAButton href="/about" variant="white" className="w-full sm:w-max">
            Learn More About Us
          </CTAButton>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Customer Trust"
            title="Straightforward reviews from common service situations"
            description="Short, realistic notes from the kinds of customers TECHNOFROST supports."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-lg bg-white p-6 shadow-[0_18px_55px_rgba(4,20,43,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Quote className="size-7 text-brand-blue" aria-hidden="true" />
                  <div className="flex gap-1 text-brand-red-dark" aria-label="Five star review">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">&quot;{testimonial.text}&quot;</p>
                <p className="mt-5 font-black text-brand-title">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-22">
        <div className="mx-auto overflow-hidden rounded-lg bg-brand-bg shadow-[0_28px_100px_rgba(4,20,43,0.25)] lg:max-w-420">
          <div className="relative isolate grid gap-8 px-6 py-10 text-white sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-brand-bg via-brand-navy to-brand-deep" />
            <div className="absolute inset-x-0 top-0 -z-10 h-1 bg-linear-to-r from-brand-ice via-brand-blue to-brand-red" />
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-brand-ice">
                Fast Service CTA
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Need fast cooling or appliance repair support?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-ice-light">
                Call, WhatsApp, or send the contact form with your issue and location.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-140">
              <CTAButton href={site.primaryPhoneHref} variant="red" icon={<Phone className="size-4" />}>
                Call {site.phones[0]}
              </CTAButton>
              <CTAButton
                href={site.whatsappHref}
                variant="white"
                external
                icon={<MessageCircle className="size-4" />}
              >
                WhatsApp Us
              </CTAButton>
              <CTAButton href="/contact" variant="ice">
                Contact Form
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
