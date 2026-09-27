// Industrial Contractors Insurance — heavy industrial contractors

export const SITE = {
  name: "Industrial Contractors Insurance",
  legalName: "Industrial Contractors Insurance (by Contractors Choice Agency)",
  domain: "industrialcontractorsinsurance.com",
  url: "https://industrialcontractorsinsurance.com",
  tagline: "Insurance for Heavy Industrial Contractors",
  description:
    "Specialty insurance for heavy industrial contractors — mechanical, electrical, civil, and process contractors working on refineries, chemical plants, power plants, and major industrial facilities. General liability, professional liability, workers compensation, commercial auto, and umbrella. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Industrial Contractors",
  brandSub: "Insurance",
  tagline: "Insurance for Heavy Industrial Contractors",
  subTagline: "GL, professional liability, workers comp, and umbrella for mechanical, electrical, civil, and process contractors",
  nicheShort: "industrial contractor",
  nicheShortCap: "Industrial Contractor",
  nichePlural: "industrial contractors",
  nichePluralCap: "Industrial Contractors",
  operator: "industrial contractor",
  operatorCap: "Industrial Contractor",
  industry: "heavy industrial contracting",
  industryCap: "Heavy Industrial Contracting",
  audience: "industrial contractors",
  audienceCap: "Industrial Contractors",
  ownerTitle: "industrial contractor",
  regionPill: "Refineries · Power Plants · Nationwide",
  ctaMain: "Get an Industrial Contractor Quote",
  ctaSecondary: "Talk to an Agent",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    description:
      "Core protection for heavy industrial contractors — covering third-party bodily injury and property damage arising from your contracting operations in refineries, chemical plants, power plants, and major industrial facilities.",
    icon: "ShieldCheck",
  },
  {
    slug: "professional-liability",
    title: "Professional Liability (E&O)",
    description:
      "Coverage for design-build contractors, mechanical and process engineers, and industrial contractors who provide professional services. Covers claims alleging errors in specifications, design, or professional recommendations.",
    icon: "FileSignature",
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    description:
      "Coverage for the specific injury patterns of heavy industrial contractor crews — process chemical exposure, falls from elevated structures, electrical injuries, confined space incidents, and heavy equipment injuries on industrial project sites.",
    icon: "HardHat",
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    description:
      "Fleet coverage for heavy industrial contractors — service trucks, equipment transporters, and vehicles carrying tools and materials to refinery, chemical plant, and power plant project sites across multiple states.",
    icon: "Truck",
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella / Excess Liability",
    description:
      "Heavy industrial project owners — refineries, chemical plants, petrochemical operators — routinely require $5M to $25M in total liability capacity. Umbrella coverage provides those limits above your primary GL and auto cost-effectively.",
    icon: "Umbrella",
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    description:
      "Industrial contractors working in chemical, petrochemical, and process environments face pollution conditions from the facility itself and from contractor operations. CPL covers pollution-related third-party claims that GL excludes.",
    icon: "Droplets",
  },
  {
    slug: "inland-marine",
    title: "Inland Marine / Equipment Floater",
    description:
      "Covers your heavy industrial contractor tools, equipment, and materials at project sites, in transit, and at your yard. Protects against theft, damage, and loss of equipment deployed across multiple active industrial project sites.",
    icon: "Wrench",
  },
  {
    slug: "builders-risk",
    title: "Builders Risk / Installation Floater",
    description:
      "Covers industrial construction work in progress, installed materials and equipment, and staged materials at project sites for major industrial construction and turnaround projects until project completion and owner acceptance.",
    icon: "Building2",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Houston · Beaumont · Corpus Christi",
    metaTitle: "Industrial Contractors Insurance Texas | TX Heavy Industrial Programs",
    metaDescription: "Industrial contractor insurance in Texas — GL, workers comp, and umbrella for TX mechanical, electrical, civil, and process contractors on refineries and chemical plants.",
    h1: "Industrial Contractors Insurance in Texas",
    intro: "Texas is the largest market for heavy industrial contractors in the country — the Gulf Coast petrochemical corridor includes some of the largest refinery and chemical plant complexes in the world. Industrial contractors throughout Texas need insurance programs built for the specific liability, workers comp, and pollution exposures of petrochemical facility work.",
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    state: "LA",
    region: "Baton Rouge · Lake Charles · New Orleans",
    metaTitle: "Industrial Contractors Insurance Louisiana | LA Petrochemical Contractor Programs",
    metaDescription: "Louisiana industrial contractor insurance — GL, CPL, and workers comp for LA mechanical, electrical, and civil contractors on refineries and chemical plants.",
    h1: "Industrial Contractors Insurance in Louisiana",
    intro: "Louisiana's concentration of petrochemical refineries, LNG facilities, and chemical plants along the Mississippi River and Gulf Coast creates sustained demand for heavy industrial contractors. We write specialty programs for Louisiana industrial contractors that address the specific liability and pollution exposures of petrochemical facility work.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    state: "OH",
    region: "Cleveland · Columbus · Toledo",
    metaTitle: "Industrial Contractors Insurance Ohio | OH Industrial Contractor Coverage",
    metaDescription: "Ohio industrial contractor insurance — GL, workers comp, and umbrella for OH mechanical, electrical, and civil contractors on industrial facilities and power plants.",
    h1: "Industrial Contractors Insurance in Ohio",
    intro: "Ohio's heavy industrial base — steel, chemical, automotive, and power generation — creates significant demand for industrial contractors. We write programs for Ohio industrial contractors working on facility construction, maintenance turnarounds, and major industrial infrastructure projects throughout the state.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    state: "PA",
    region: "Philadelphia · Pittsburgh · Allentown",
    metaTitle: "Industrial Contractors Insurance Pennsylvania | PA Industrial Programs",
    metaDescription: "Pennsylvania industrial contractor insurance — heavy industrial contractor GL, workers comp, and professional liability for PA contractors on industrial facilities.",
    h1: "Industrial Contractors Insurance in Pennsylvania",
    intro: "Pennsylvania's industrial heritage — steel, chemicals, pharmaceuticals, and power generation — continues to generate significant work for heavy industrial contractors. We write specialty programs for PA industrial contractors working on facility maintenance, construction, and major industrial project work.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    state: "MI",
    region: "Detroit · Grand Rapids · Flint",
    metaTitle: "Industrial Contractors Insurance Michigan | MI Industrial Contractor Programs",
    metaDescription: "Michigan industrial contractor insurance — automotive manufacturing facility, power plant, and industrial contractor programs for MI contractors. GL, workers comp, and umbrella.",
    h1: "Industrial Contractors Insurance in Michigan",
    intro: "Michigan's automotive manufacturing base requires heavy industrial contractors for facility construction, maintenance, and process modifications. We write programs for Michigan industrial contractors working in automotive plants, power generation facilities, and major manufacturing operations.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    state: "IL",
    region: "Chicago · Joliet · Rockford",
    metaTitle: "Industrial Contractors Insurance Illinois | IL Industrial Contractor Coverage",
    metaDescription: "Illinois industrial contractor insurance — Chicago-area refinery, chemical plant, and industrial facility programs for IL contractors. GL, workers comp, and CPL.",
    h1: "Industrial Contractors Insurance in Illinois",
    intro: "Illinois industrial contractors work on a dense concentration of refineries, chemical facilities, and major manufacturing plants — particularly in the Chicago metro and Illinois River corridor. We write specialty programs for IL industrial contractors that address the liability and workers comp exposures of heavy industrial project work.",
  },
  {
    slug: "indiana",
    name: "Indiana",
    state: "IN",
    region: "Indianapolis · Gary · Fort Wayne",
    metaTitle: "Industrial Contractors Insurance Indiana | IN Industrial Contractor Programs",
    metaDescription: "Indiana industrial contractor insurance — steel, chemical, and manufacturing facility programs for IN contractors. GL, workers comp, and umbrella.",
    h1: "Industrial Contractors Insurance in Indiana",
    intro: "Indiana's industrial base — steel production, chemical manufacturing, pharmaceutical, and automotive facilities — creates consistent demand for heavy industrial contractors. We write programs for Indiana industrial contractors on major industrial construction, maintenance, and turnaround work.",
  },
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Los Angeles · San Francisco Bay · Central Valley",
    metaTitle: "Industrial Contractors Insurance California | CA Industrial Programs",
    metaDescription: "California industrial contractor insurance — refinery, power plant, and industrial facility programs for CA contractors. GL, CPL, professional liability, and workers comp.",
    h1: "Industrial Contractors Insurance in California",
    intro: "California's industrial contractors work in one of the most regulated operating environments in the country — California refinery rules, SCAQMD requirements, Cal/OSHA standards, and strict environmental regulations. We write programs for CA industrial contractors that address the specific compliance and liability requirements of California heavy industrial work.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Heavy industrial specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = { facebook: "", instagram: "", linkedin: "", twitter: "" } as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Industrial contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS: { quote: string; name: string; role: string; location: string }[] = [];
