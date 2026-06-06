import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { seoKeywords, site } from "@/data/site";
import { MessageCircle, Navigation, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TECHNOFROST in Main Street, Kurakkanhena, Kalpitiya for A/C service, refrigerator repair, freezer repair, washing machine repair, auto A/C, and spare parts.",
  keywords: seoKeywords,
  openGraph: {
    title: "Contact TECHNOFROST",
    description: "Call, WhatsApp, or submit a service request to TECHNOFROST in Kalpitiya.",
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-brand-foreground">
      <PageHero
        eyebrow="Contact"
        title="Request service support from TECHNOFROST"
        description="Send your appliance issue, call directly, or use WhatsApp for fast coordination around Kalpitiya."
        primaryLabel="Call 0767801583"
        primaryHref={site.primaryPhoneHref}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Contact Options"
            title="Choose the fastest way to reach us"
            description="Use direct call or WhatsApp for urgent cooling problems. The form is ready for frontend capture and marked for API/email integration."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard
              title="Call"
              icon="phone"
              description={<span>{site.phones.join(" / ")}</span>}
              actionLabel="Call Now"
              actionHref={site.primaryPhoneHref}
            />
            <ContactCard
              title="WhatsApp"
              icon="message"
              description={<span>Send issue details, photos, and location for quick coordination.</span>}
              actionLabel="WhatsApp"
              actionHref={site.whatsappHref}
              external
            />
            <ContactCard
              title="Email"
              icon="mail"
              description={<span>{site.email}</span>}
              actionLabel="Send Email"
              actionHref={site.emailHref}
            />
            <ContactCard
              title="Location"
              icon="mapPin"
              description={<span>{site.address}</span>}
              actionLabel="Get Directions"
              actionHref={site.directionsHref}
              external
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Service Request"
              title="Tell us what needs repair"
              description="Submit the basic details. This form currently validates on the frontend and includes a code TODO for route handler or email integration."
              className="mb-6"
            />
            <ContactForm />
          </div>

          <aside className="rounded-md bg-brand-navy p-6 text-white shadow-[0_24px_80px_rgba(4,20,43,0.18)]">
            <p className="text-sm font-black uppercase tracking-normal text-brand-ice">Quick Actions</p>
            <h2 className="mt-3 text-3xl font-black">Need urgent support?</h2>
            <p className="mt-4 text-sm leading-7 text-brand-ice-light">
              For urgent cooling problems, calling or sending a WhatsApp message is usually the
              quickest way to share your issue and location.
            </p>
            <div className="mt-7 grid gap-3">
              <CTAButton href={site.primaryPhoneHref} variant="red" icon={<Phone className="size-4" />}>
                Call Now
              </CTAButton>
              <CTAButton
                href={site.whatsappHref}
                variant="white"
                external
                icon={<MessageCircle className="size-4" />}
              >
                WhatsApp
              </CTAButton>
              <CTAButton
                href={site.directionsHref}
                variant="ice"
                external
                icon={<Navigation className="size-4" />}
              >
                Get Directions
              </CTAButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-brand-blue">Map</p>
            <h2 className="mt-3 text-3xl font-black text-brand-title">Main Street, Kurakkanhena, Kalpitiya</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A styled map placeholder is used here so the exact Google listing can be embedded
              later without changing the page layout.
            </p>
          </div>
          <div className="relative min-h-96 overflow-hidden rounded-md bg-brand-light p-6 shadow-inner">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,127,193,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(12,127,193,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative flex h-full min-h-80 flex-col justify-between rounded-md bg-white/90 p-6 shadow-[0_16px_50px_rgba(4,20,43,0.08)]">
              <div>
                <p className="text-sm font-black uppercase tracking-normal text-brand-blue">
                  Google Map placeholder
                </p>
                <h3 className="mt-3 text-2xl font-black text-brand-title">{site.address}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Replace this area with an iframe embed once the final map URL is confirmed.
                </p>
              </div>
              <CTAButton
                href={site.directionsHref}
                variant="navy"
                external
                icon={<Navigation className="size-4" />}
                className="mt-8 w-full sm:w-max"
              >
                Open Google Maps
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
