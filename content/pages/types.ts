export type SeoCopy = {
  title: string
  description: string
  keywords?: string[]
  openGraphTitle?: string
  openGraphDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

export type TitleTextItem = {
  title: string
  text: string
}

export type LabelValueItem = {
  label: string
  value: string
  detail?: string
}

export type LinkPair = {
  primary: string
  secondary: string
}

export type TeamMemberCopy = {
  name: string
  role: string
  bio: string
}

export type ContactDetailCopy = {
  label: string
  values: string[]
}

export type PageUi = {
  common: {
    homeBreadcrumb: string
    overview: string
    highlights: string
    itinerary: string
    included: string
    bookNow: string
    learnMore: string
    duration: string
    region: string
    price: string
    startingFrom: string
    viewDetails: string
    viewAllFaqs: string
    included: string
    excluded: string
    accommodation: string
    bestTimeTravel: string
    bookingCtaTitle: string
    bookingCtaDescription: string
    requestQuote: string
    planWithExpert: string
  }
  safaris: {
    pageLabel: string
    metadata: SeoCopy
    schemaName: string
    schemaDescription: string
    heroBadge: string
    heroTitle: string
    heroDescription: string
    heroPrimaryCta: string
    heroSecondaryCta: string
    heroImageAlt: string
    highlightCards: TitleTextItem[]
    introEyebrow: string
    introTitle: string
    introDescription: string
    imageRegionSuffix: string
    overviewHeading: string
    highlightsHeading: string
    itineraryHeading: string
    includedHeading: string
    sidebarEyebrow: string
    sidebarDescription: string
    sidebarDurationLabel: string
    sidebarRegionLabel: string
    sidebarPriceLabel: string
    bookButton: string
    customButton: string
    ctaBadge: string
    ctaTitle: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
    detail: {
      notFoundTitle: string
      locationText: string
      itineraryHeading: string
      dayLabel: string
      priceLabel: string
      inquireNow: string
    }
  }
  treks: {
    pageLabel: string
    metadata: SeoCopy
    heroBadge: string
    heroTitle: string
    heroDescription: string
    heroImageAlt: string
    introTitle: string
    introDescription: string
    viewRoute: string
    comparisonTitle: string
    comparisonDescription: string
    comparisonPrimary: string
    comparisonSecondary: string
    detail: {
      notFoundTitle: string
      badge: string
      bestPrefix: string
      whyChooseHeading: string
      itineraryHeading: string
      planningNotesHeading: string
      bestTimeLabel: string
      permitsLabel: string
      sidebarEyebrow: string
      sidebarTitle: string
      enquireNow: string
      backToTreks: string
      sidebarNote: string
      moreTitle: string
      moreSubtitle: string
      viewDetails: string
      difficultyLabel: string
      elevationLabel: string
    }
  }
  dayTrips: {
    pageLabel: string
    metadata: SeoCopy
    schemaName: string
    schemaDescription: string
    pricingTiers: string[]
    heroBadge: string
    heroTitle: string
    heroTitleAccent: string
    heroDescription: string
    heroPrimary: string
    heroSecondary: string
    heroCards: TitleTextItem[]
    featureImageAlt: string
    featureBadge: string
    featureTitle: string
    featureDescription: string
    introEyebrow: string
    introTitle: string
    introTitleAccent: string
    introDescription: string
    cardBadge: string
    cardHighlightsHeading: string
    pricingEyebrow: string
    pricingTitle: string
    pricingGroupBadge: string
    viewExperience: string
    whyEyebrow: string
    whyTitle: string
    whyTitleAccent: string
    whyDescription: string
    whyItems: string[]
    ctaBadge: string
    ctaTitle: string
    ctaTitleAccent: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
    detail: {
      notFoundTitle: string
      highlightsHeading: string
      pricingHeading: string
      includedHeading: string
      bookButton: string
      galleryHeading: string
      questionsTitle: string
      questionsDescription: string
      contactButton: string
    }
  }
  destinations: {
    pageLabel: string
    metadata: SeoCopy
    heroBadge: string
    heroTitle: string
    heroDescription: string
    heroImageAlt: string
    introTitle: string
    introDescription: string
    viewDetails: string
    detail: {
      notFoundTitle: string
      heroBadge: string
      bestPrefix: string
      itineraryHeading: string
      notIncludedHeading: string
      sidebarEyebrow: string
      sidebarTitle: string
      bookButton: string
      customQuoteButton: string
      sidebarNote: string
      relatedTitle: string
      relatedSubtitle: string
      groupSizeLabel: string
      difficultyLabel: string
      bestTimeLabel: string
      viewDetails: string
    }
  }
  zanzibar: {
    pageLabel: string
    metadata: SeoCopy
    heroBadge: string
    heroTitle: string
    heroDescription: string
    heroImageAlt: string
    introTitle: string
    introDescription: string
    viewDetails: string
    packagesButton: string
    infoCards: TitleTextItem[]
    detail: {
      notFoundTitle: string
      heroBadge: string
      locationText: string
      howItWorksHeading: string
      fromLabel: string
      bookButton: string
      allButton: string
    }
  }
  about: {
    pageLabel: string
    metadata: SeoCopy
    heroBadge: string
    heroTitle: string
    heroDescription: string
    heroPrimary: string
    heroSecondary: string
    heroImageAlt: string
    stats: LabelValueItem[]
    storyEyebrow: string
    storyTitle: string
    storyParagraphs: string[]
    storyChecklist: string[]
    storyImageAlt: string
    valuesEyebrow: string
    valuesTitle: string
    valuesDescription: string
    values: TitleTextItem[]
    teamEyebrow: string
    teamTitle: string
    teamDescription: string
    teamMembers: TeamMemberCopy[]
    ctaTitle: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
  }
  contact: {
    pageLabel: string
    metadata: SeoCopy
    heroBadge: string
    heroTitle: string
    heroTitleAccent: string
    heroDescription: string
    heroPrimary: string
    heroSecondary: string
    formEyebrow: string
    formTitle: string
    formDescription: string
    infoTitle: string
    infoItems: ContactDetailCopy[]
    whyTitle: string
    whyItems: string[]
    mapEyebrow: string
    mapTitle: string
    mapDescription: string
  }
  gallery: {
    pageLabel: string
    metadata: SeoCopy
    schemaName: string
    schemaDescription: string
    heroBadge: string
    heroTitle: string
    heroDescription: string
    heroPrimary: string
    heroSecondary: string
    heroStats: LabelValueItem[]
    featureImageAlt: string
    featureBadge: string
    featureTitle: string
    storyEyebrow: string
    storyTitle: string
    storyDescription: string
    storyHighlights: TitleTextItem[]
    ctaBadge: string
    ctaTitle: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
  }
  adventures: {
    pageLabel: string
    metadata: SeoCopy
    heroBadge: string
    heroTitle: string
    heroTitleAccent: string
    heroDescription: string
    heroPrimary: string
    heroSecondary: string
    heroQuickHighlights: string[]
    introEyebrow: string
    introTitle: string
    introDescription: string
    overviewHeading: string
    highlightsHeading: string
    itineraryHeading: string
    packagesHeading: string
    ctaTitle: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
  }
  inquiry: {
    pageLabel: string
    metadata: SeoCopy
    heroTitle: string
    heroDescription: string
    receiveTitle: string
    receiveItems: string[]
    quickQuestionTitle: string
    quickQuestionDescription: string
  }
}
