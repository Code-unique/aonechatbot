
// Australian Real Estate Knowledge Base
const realEstateKnowledgeBase = {
  // Adelaide Market Overview
  adelaideMarket: {
    overview: "Adelaide's property market has shown strong resilience and growth in 2023-2024, with median house prices reaching approximately $750,000 across the metropolitan area. The market is characterized by steady demand, especially in eastern and coastal suburbs, with limited housing supply putting upward pressure on prices.",
    trends: "Current trends in Adelaide show a 5-8% annual growth rate in property values, with particularly strong performance in middle-ring suburbs. The rental market remains tight with vacancy rates below 1%, leading to increased rental yields averaging around 4.2%.",
    forecast: "Market forecasts suggest continued steady growth in Adelaide property values throughout 2025, albeit at a more moderate pace of 3-5%. The city continues to attract interstate migration due to relative affordability compared to Sydney and Melbourne.",
    recentSales: "Recent notable sales in Adelaide include a waterfront property in Glenelg North for $3.8 million, a character villa in Unley for $2.1 million, and a modern family home in Prospect for $1.3 million, all indicating strong premium market activity.",
    comparison: "Adelaide continues to offer relative affordability compared to eastern capitals, with median prices 42% below Sydney and 22% below Melbourne, while delivering comparable rental yields and stronger recent growth rates.",
    seasonality: "The Adelaide market typically shows seasonal patterns with spring (September-November) being the most active selling period. Winter months tend to see reduced listings but often attract more serious buyers, resulting in faster sales."
  },
  
  // Adelaide Suburbs Information
  adelaideSuburbs: {
    premium: {
      northAdelaide: {
        profile: "North Adelaide is an upscale suburb just north of the CBD offering historic character homes and luxury apartments. Popular with professionals and affluent families.",
        medianPrice: "$1.2M",
        growth: "6.5% annual growth",
        highlights: "Prestigious location, heritage architecture, proximity to Adelaide Oval and parklands.",
        schoolZones: "Within zones for Adelaide Botanic High School and Adelaide High School.",
        propertyTypes: "Heritage-listed Victorian and Edwardian villas, modern luxury apartments, and townhouses.",
        transport: "Excellent public transport with multiple bus routes and free city connector service.",
        restaurants: "Home to O'Connell Street dining precinct with premium restaurants like Ruby Red Flamingo and The Lion Hotel.",
        parks: "Adjacent to Adelaide Parklands offering extensive recreational spaces and walking trails."
      },
      unley: {
        profile: "Unley is a sought-after eastern suburb with tree-lined streets and a blend of historic villas and modern developments.",
        medianPrice: "$1.15M",
        growth: "7.2% annual growth",
        highlights: "Excellent schools, boutique shopping on Unley Road, leafy streets, and period homes.",
        schoolZones: "Unley High School and several prestigious private schools including Walford and Concordia.",
        propertyTypes: "Character villas, renovated cottages, and high-end townhouse developments.",
        transport: "Well-serviced by public transport and excellent cycling infrastructure.",
        restaurants: "Renowned for upscale dining options including A Mother's Milk and Vino Ristorante.",
        parks: "Access to Ridge Park and Heywood Park offering quality recreational spaces."
      },
      glenelg: {
        profile: "Glenelg is Adelaide's premier beachside suburb, offering coastal living with excellent amenities and transport links.",
        medianPrice: "$1.05M",
        growth: "8.1% annual growth",
        highlights: "Beach lifestyle, Jetty Road shopping precinct, tourism appeal, strong rental market.",
        schoolZones: "Includes Brighton Secondary School zone, one of Adelaide's top public schools.",
        propertyTypes: "Luxury beachfront apartments, character homes, and modern townhouses.",
        transport: "Serviced by the Glenelg tram providing direct access to the CBD.",
        restaurants: "Vibrant dining scene with beachfront restaurants like Stamford Grand and The Moseley.",
        events: "Hosts major events including the annual Christmas Pageant and New Year's Eve celebrations."
      },
      burnside: {
        profile: "Burnside is an established eastern suburb known for its tree-lined streets, large blocks and proximity to the CBD.",
        medianPrice: "$1.35M",
        growth: "5.8% annual growth",
        highlights: "Prestigious address, excellent amenities, and proximity to parks and reserves.",
        schoolZones: "Zoned for top-rated Glenunga International High School.",
        propertyTypes: "Large family homes on generous blocks, heritage properties, and quality apartments.",
        transport: "Multiple bus routes to the city and easy access to the South Eastern Freeway.",
        shopping: "Close to Burnside Village, one of Adelaide's premier shopping destinations.",
        demographics: "Predominantly affluent families and established professionals, with 38% of households earning over $2,500 weekly."
      },
      walkerville: {
        profile: "Walkerville is a prestigious inner-northeastern suburb with a village atmosphere and excellent amenities.",
        medianPrice: "$1.28M",
        growth: "6.2% annual growth",
        highlights: "Premium location, upscale shopping, and excellent parks.",
        schoolZones: "Within the zone for sought-after Walkerville Primary and Adelaide High School.",
        propertyTypes: "Character homes, luxury renovated villas, and high-end apartments.",
        transport: "Multiple bus routes and close proximity to the CBD.",
        history: "One of Adelaide's oldest suburbs with significant heritage conservation zones.",
        community: "Strong community engagement with active residents' association and regular events."
      }
    },
    growth: {
      prospect: {
        profile: "Prospect is a rapidly gentrifying northern suburb with character homes being renovated and a vibrant cafe culture developing.",
        medianPrice: "$850K",
        growth: "9.3% annual growth",
        highlights: "Up-and-coming area, good value compared to eastern suburbs, strong community feel.",
        propertyTypes: "Character bungalows, villas, and new townhouse developments.",
        amenities: "Vibrant Prospect Road cafe and shopping strip, art galleries, and community events.",
        investment: "Strong rental demand due to proximity to CBD and North Adelaide.",
        infrastructure: "Benefiting from recent urban renewal projects and improved public spaces.",
        development: "Subject to multiple medium-density residential developments, particularly near Churchill Road corridor."
      },
      marion: {
        profile: "Marion offers family-friendly living in the southern suburbs with good amenities and transport options.",
        medianPrice: "$680K",
        growth: "6.8% annual growth",
        highlights: "Large Westfield shopping center, close to Flinders University, family-oriented.",
        propertyTypes: "Mix of older homes on larger blocks and newer medium-density developments.",
        amenities: "Major shopping center, aquatic center, and excellent sporting facilities.",
        investment: "Steady rental demand from students and healthcare workers.",
        education: "Close to both Flinders University and TAFE SA Marion campus.",
        recreation: "Home to Marion Cultural Centre and Oaklands Recreation Plaza."
      },
      salisbury: {
        profile: "Salisbury in the northern suburbs offers affordable housing with significant infrastructure investment.",
        medianPrice: "$420K", 
        growth: "5.4% annual growth",
        highlights: "Affordability, improving infrastructure, good rental yields, first home buyer friendly.",
        propertyTypes: "Traditional family homes, newer estates, and affordable units.",
        amenities: "Shopping centers, parks, recreation facilities and strong community services.",
        investment: "High rental yields averaging 5.2-5.8% with strong tenant demand.",
        development: "Ongoing urban renewal programs and commercial development.",
        employment: "Close to major industrial hubs and Edinburgh Defence Precinct."
      },
      lightsview: {
        profile: "Lightsview is a newer master-planned community in the northeastern suburbs offering modern living and amenities.",
        medianPrice: "$580K",
        growth: "7.5% annual growth",
        highlights: "Modern homes, parklands, community facilities, and planned layout.",
        propertyTypes: "Contemporary homes, townhouses, and apartments with modern designs.",
        amenities: "Parks, playgrounds, walking trails, and community facilities.",
        investment: "Popular with young families and professionals, good rental demand.",
        sustainability: "Designed with sustainability principles featuring water-sensitive urban design.",
        connectivity: "Just 8km from Adelaide CBD with excellent transport links."
      },
      mawson_lakes: {
        profile: "Mawson Lakes is a planned community with a mix of residential, commercial, and educational facilities.",
        medianPrice: "$510K",
        growth: "6.3% annual growth",
        highlights: "Lakeside living, university campus, tech businesses, and modern infrastructure.",
        propertyTypes: "Modern homes, townhouses, and apartments, many with lake views.",
        amenities: "Shopping precinct, restaurants, University of South Australia campus.",
        investment: "Strong rental demand from students and professionals.",
        technology: "Home to Technology Park Adelaide, hosting numerous high-tech companies.",
        lifestyle: "Built around artificial lakes with extensive walking trails and recreational spaces."
      },
      mile_end: {
        profile: "Mile End is an inner-western suburb undergoing gentrification with a mix of residential and commercial spaces.",
        medianPrice: "$740K",
        growth: "8.5% annual growth",
        highlights: "Close to CBD, character homes, emerging cafe scene, and transport links.",
        propertyTypes: "Character cottages, renovated villas, and warehouse conversions.",
        amenities: "Local cafes, shopping options, and recreational facilities.",
        investment: "Increasing popularity with young professionals and downsizers.",
        accessibility: "Just 2km west of the CBD with excellent transport connections.",
        future: "Targeted for further urban renewal and mixed-use development over the next decade."
      }
    },
    emerging: {
      kilburn: {
        profile: "Kilburn is a northern suburb experiencing revitalization with new developments and changing demographics.",
        medianPrice: "$460K",
        growth: "10.2% annual growth",
        highlights: "Affordable entry point, close to city, undergoing significant change.",
        investment: "High rental yields and strong capital growth potential.",
        development: "Multiple development applications for medium-density housing.",
        future: "Strategic location for urban infill with rezoning potential.",
        demographics: "Increasingly diverse population with growing professional presence."
      },
      woodville: {
        profile: "Woodville in the western suburbs offers value with good transport links and improving amenities.",
        medianPrice: "$520K",
        growth: "8.7% annual growth",
        highlights: "Established area with renovation opportunities and good block sizes.",
        investment: "Growing popularity with families priced out of inner suburbs.",
        healthcare: "Close to Queen Elizabeth Hospital providing employment opportunities.",
        education: "Within zone for underrated Woodville High School with strong academic results.",
        transport: "Well-serviced by train line to CBD and coastal areas."
      },
      morphettville: {
        profile: "Morphettville in the south offers affordability with proximity to Marion and the beach.",
        medianPrice: "$590K",
        growth: "7.9% annual growth",
        highlights: "Racing precinct, parklands, and convenient location between city and beach.",
        investment: "Steady tenant demand and potential for rezoning in some areas.",
        recreation: "Home to Morphettville Racecourse, South Australia's premier racing venue.",
        opportunity: "Areas adjacent to the racecourse identified for potential future development.",
        transport: "Good bus connections and accessible to Glenelg tram extension."
      },
      modbury: {
        profile: "Modbury offers excellent value in Adelaide's north-eastern suburbs with substantial infrastructure.",
        medianPrice: "$480K",
        growth: "6.9% annual growth",
        highlights: "Major shopping center, hospital, and good public transport links.",
        investment: "Solid rental returns with low vacancy rates and diverse tenant pool.",
        healthcare: "Home to Modbury Hospital providing stable employment.",
        education: "Several well-regarded schools within the suburb boundaries.",
        future: "Identified in Greater Adelaide Plan as a key growth area."
      },
      paradise: {
        profile: "Paradise in the north-eastern suburbs offers excellent value and lifestyle with increasing gentrification.",
        medianPrice: "$520K",
        growth: "7.5% annual growth",
        highlights: "Leafy streets, good schools, and developing cafe culture.",
        investment: "Attracting young families and professionals seeking value.",
        recreation: "Proximity to Linear Park trail system and multiple sporting facilities.",
        development: "Increasing number of knockdown-rebuild projects upgrading housing stock.",
        accessibility: "Well-connected to CBD via O-Bahn guided busway with 15-minute commute times."
      }
    },
    coastal: {
      henley_beach: {
        profile: "Henley Beach offers premium coastal living with vibrant dining and recreational options.",
        medianPrice: "$920K",
        growth: "7.8% annual growth",
        highlights: "Beachfront lifestyle, popular square with restaurants, family-friendly.",
        schoolZones: "Within zone for sought-after Henley High School.",
        propertyTypes: "Mix of beachfront apartments, modern rebuilds, and character homes.",
        lifestyle: "Outdoor lifestyle with popular foreshore, weekly markets, and community events."
      },
      semaphore: {
        profile: "Semaphore provides character homes and a relaxed beachside atmosphere at relatively accessible prices.",
        medianPrice: "$730K",
        growth: "8.2% annual growth",
        highlights: "Historic architecture, wide beaches, and community-oriented lifestyle.",
        propertyTypes: "Heritage cottages, Victorian-era homes, and some beachfront apartments.",
        amenities: "Vibrant Semaphore Road shopping and dining precinct, historic cinema.",
        culture: "Regular festivals, outdoor cinema, and strong arts community."
      },
      hallett_cove: {
        profile: "Hallett Cove offers affordable coastal living with spectacular views and natural attractions.",
        medianPrice: "$550K",
        growth: "6.1% annual growth",
        highlights: "Geological park, coastal walking trails, and family-oriented community.",
        propertyTypes: "Mostly detached houses on varied blocks, many with ocean views.",
        transport: "Serviced by train line providing direct access to the CBD.",
        education: "Hallett Cove School (R-12) offering continuous education pathways."
      }
    }
  },
  
  // Investment Information
  investment: {
    strategy: "The Adelaide market offers strong investment opportunities, particularly in middle-ring suburbs undergoing gentrification. Buy-and-hold strategies are favored due to the steady growth profile and strong rental demand.",
    hotspots: "Current investment hotspots include Prospect, Stepney, Torrensville and Findon, where infrastructure improvements and changing demographics are driving price growth.",
    rental: "The rental market in Adelaide remains tight with vacancy rates below 1% in most suburbs. This has led to rental increases of 8-12% in the past year, with yields averaging 4-5.5% depending on location.",
    tips: "When investing in Adelaide, consider properties near transport corridors, areas with rezoning potential, and suburbs adjacent to already-gentrified locations for the best capital growth prospects.",
    propertyTypes: {
      houses: "Detached houses typically offer lower yields (3.5-4.5%) but stronger capital growth, particularly in established suburbs with character homes and larger land parcels.",
      units: "Units and apartments provide higher yields (4.5-5.8%) especially near universities, hospitals, and employment centers, though capital growth can be slower.",
      townhouses: "Townhouses offer a balanced investment option with moderate yields (4.0-5.0%) and solid capital growth prospects, particularly appealing to young professional tenants.",
      development: "Development sites in areas with favorable zoning changes can provide exceptional returns but require greater expertise and capital.",
      commercial: "Commercial properties in Adelaide are yielding 5.5-7.5%, with neighborhood retail and medical precincts showing particular strength post-pandemic."
    },
    advice: {
      beginners: "First-time investors should focus on properties within 15km of the CBD with strong rental appeal and minimal maintenance requirements. Established areas like Prospect, Norwood, and West Beach balance growth with rental security.",
      experienced: "Seasoned investors may explore value-add opportunities in transitioning suburbs like Torrensville and Kilburn where cosmetic renovations can substantially boost equity and rental returns.",
      cashflow: "For cashflow-focused strategies, consider multi-income properties (main house with granny flat) or small unit blocks in areas like Modbury and Marion with strong rental demand and higher yields.",
      growth: "For capital growth focus, target suburbs at the beginning of gentrification cycles like Findon, where demographic shifts indicate upcoming value increases."
    },
    taxation: {
      depreciation: "Adelaide's housing stock offers strong depreciation benefits, particularly for pre-1987 character homes with recent renovations or extensions that can be depreciated at accelerated rates.",
      landTax: "South Australia's land tax is calculated on a progressive scale from 0.4% to 2.4% for property portfolios valued over $1.3 million, making portfolio structure important for investors.",
      councilRates: "Council rates in Adelaide average 0.25-0.35% of capital value annually, with variations between council areas. Eastern suburbs typically have lower rate percentages due to higher property values.",
      negativeGearing: "Adelaide's moderate property prices relative to rental returns create more sustainable negative gearing positions compared to eastern capital cities."
    }
  },
  
  // Australian Property Market
  australianMarket: {
    overview: "The Australian property market continues to demonstrate resilience despite interest rate challenges. Capital cities show varied performance with Sydney and Melbourne experiencing moderate growth after a correction period, while Brisbane and Perth lead with stronger price increases.",
    interestRates: "Current home loan interest rates range from 5.5% to 7.2% for owner-occupiers, with the Reserve Bank maintaining a cautious approach to future rate movements. Fixed-rate loans are becoming increasingly popular as buyers seek certainty.",
    marketTrends: "National trends include increasing apartment demand in inner-city areas, strong performance in regional lifestyle locations, and renewed investor activity as rental yields improve with tight vacancy rates across most major cities.",
    comparison: {
      sydney: "Sydney remains Australia's most expensive market with a median house price of $1.3 million, experiencing moderate 3.2% annual growth with rental yields around 3.0%.",
      melbourne: "Melbourne has a median house price of $960,000 with relatively flat 2.1% annual growth and rental yields of about 3.2%.",
      brisbane: "Brisbane shows strong performance with a median house price of $820,000, annual growth of 8.4%, and rental yields around 4.1%.",
      perth: "Perth continues its recovery with a median house price of $650,000, leading the capitals with 9.7% annual growth and rental yields of 4.5%.",
      adelaide: "Adelaide offers outstanding value with a median house price of $750,000, steady 6.8% annual growth, and healthy rental yields of 4.2%.",
      hobart: "Hobart's market has cooled after significant growth, with median house price at $720,000, current growth of 2.3%, and yields of 4.0%.",
      darwin: "Darwin continues its recovery with a median of $580,000, showing 5.4% growth and market-leading rental yields of 5.8%.",
      canberra: "Canberra remains stable with median house price of $895,000, modest 2.8% growth, and balanced yields of 4.0%."
    },
    forecast: "Industry forecasts suggest Australian property values will continue their upward trajectory over the medium term, with Adelaide and Perth expected to outperform eastern capitals due to relative affordability and strong local economies.",
    propertyTrends: {
      housing: "National housing shortages continue to underpin prices with Australia facing an estimated deficit of 200,000 dwellings over the next three years according to the National Housing Finance and Investment Corporation.",
      construction: "Rising construction costs (up 20-25% since 2021) are limiting new supply and pushing up values of established properties across all capital cities.",
      migration: "Post-pandemic migration patterns show increased movement to lifestyle regions and smaller capitals like Adelaide, with net interstate migration to Queensland and South Australia at record levels.",
      sustainability: "Growing premium (8-15%) for energy-efficient homes with solar systems, battery storage, and high insulation ratings, particularly in Adelaide's eastern and southern suburbs.",
      floorplans: "Strong preference shift toward homes with dedicated office spaces and outdoor entertainment areas, reflecting post-pandemic lifestyle changes."
    }
  },
  
  // Property Buying Process
  buyingProcess: {
    steps: "The process for buying property in South Australia typically involves: property search, arranging finance pre-approval, property inspections, making an offer or attending auction, contract exchange, settlement period (usually 30-90 days), and final settlement when ownership transfers.",
    costs: "Additional costs when buying in South Australia include: stamp duty (approximately 4-5% of purchase price), conveyancing fees ($1,200-$2,500), building and pest inspections ($400-$800), mortgage registration ($300), and potential LMI for loans over 80% LVR.",
    contracts: "In South Australia, most residential properties are sold using the standard Real Estate Institute of SA contract. Unlike some other states, cooling-off periods in SA are 2 business days, with a termination fee of 0.25% of the purchase price if exercised.",
    auctions: "Approximately 15-20% of Adelaide properties sell via auction, with higher percentages in premium eastern and coastal suburbs. Auction clearance rates currently average 65-70%, significantly higher than during the 2018-2019 market correction.",
    inspections: "South Australian property transactions typically involve three key inspections: building inspection, pest inspection, and a statutory search of the Property Interest Report (PIR) that discloses government interests affecting the property.",
    foreignBuyers: "Foreign buyers face additional restrictions and fees when purchasing Australian property, including FIRB approval ($4,000-$13,200 application fee), vacant land tax surcharges, and limitations on purchasing established dwellings.",
    propertySearch: {
      bestPractices: "Begin your property search by clearly defining non-negotiable requirements versus preferences, researching sold prices in target suburbs over 6-12 months, and establishing relationships with local agents for off-market opportunities.",
      resources: "Key resources for Adelaide property searches include realestate.com.au, domain.com.au, SA.Gov Property Location Browser for zoning information, and SAILIS for title searches and property history.",
      buyersAgents: "Buyers' agents in Adelaide typically charge 1.5-2.5% of the purchase price or a flat fee of $8,000-$15,000 depending on price bracket and service level.",
      redFlags: "Common property red flags in Adelaide include cracking in footings (particularly in areas with reactive clay soils), evidence of water damage, properties within character overlay zones with limited development potential, and proximity to main roads in eastern suburbs prone to bushfire risk."
    }
  },
  
  // Property Selling Process
  sellingProcess: {
    methods: "Properties in Adelaide are typically sold via private treaty (85% of sales) or auction (15% of sales, more common in premium suburbs). The auction clearance rate in Adelaide currently averages 65-70%.",
    agentFees: "Real estate agent commissions in Adelaide typically range from 1.8% to 2.5% of the sale price, with marketing costs additional ($2,000-$8,000 depending on the marketing package).",
    preparation: "To maximize sale price in the Adelaide market, focus on street appeal, minor renovations to kitchens and bathrooms if dated, professional styling ($2,500-$5,000), and thorough professional cleaning.",
    marketing: "Effective marketing strategies in Adelaide include professional photography ($350-$500), floor plans ($150-$300), video tours for premium properties ($500-$1,500), featured listings on major portals ($500-$2,000), and social media campaigns.",
    timing: "The optimal selling seasons in Adelaide are spring (September-November) and autumn (March-May), with February typically showing the highest median prices. December and January often see reduced buyer activity except in coastal suburbs.",
    presentation: "Property presentation statistics show that professionally styled homes in Adelaide sell for 7.5-12% more than unstaged equivalents and typically sell 28 days faster than unstaged properties.",
    negotiations: "When evaluating offers, consider not only price but also settlement terms, deposit size, finance approval status, and any special conditions that may affect certainty of completion.",
    offMarket: "Off-market sales account for approximately 15% of Adelaide transactions, typically occurring through agent databases targeting specific buyer requirements or in premium suburbs where privacy is valued."
  },
  
  // First Home Buyers
  firstHomeBuyers: {
    grants: "First home buyers in South Australia may be eligible for the First Home Owner Grant of $15,000 for new builds valued up to $575,000. Stamp duty concessions are also available for first-time buyers of new properties.",
    suburbs: "Affordable suburbs recommended for first home buyers include Salisbury, Elizabeth, Hackham, and Morphett Vale in the outer rings, or apartments in suburbs like Prospect and Norwood for those wanting to be closer to the city.",
    tips: "First home buyers should consider: getting finance pre-approval, understanding all government incentives, being realistic about needs vs. wants, and potentially looking at house and land packages to maximize grants and tax benefits.",
    loanSchemes: "The First Home Loan Deposit Scheme allows eligible buyers to purchase with just 5% deposit without paying Lender's Mortgage Insurance. Places are limited and property price caps apply ($600,000 for Adelaide).",
    hiddenCosts: "Beyond the deposit and stamp duty, first-time buyers should budget for conveyancing ($1,200-$2,000), building and pest inspections ($400-$800), mortgage registration ($300), transfer fees ($4,500+), moving costs ($600-$3,000), and immediate repairs or improvements.",
    negotiationTips: "For first home buyers, key negotiation strategies include demonstrating finance readiness, offering flexibility on settlement dates, using a buyer's agent in competitive markets, and considering properties that have been listed for over 30 days where vendors may be more motivated.",
    mortgageAdvice: {
      loanTypes: "First-time buyers typically choose between variable rate loans (currently 5.5-6.8%) offering flexibility, fixed-rate loans (currently 5.7-7.1%) providing certainty, or split loans combining both approaches.",
      loanFeatures: "Valuable loan features for first home buyers include offset accounts to reduce interest, redraw facilities for accessing additional payments, and portability options for future moves.",
      preApproval: "Finance pre-approval is typically valid for 90 days and provides a clear budget ceiling, stronger negotiating position, and faster ability to act when the right property is found.",
      brokerValue: "Mortgage brokers can be particularly valuable for first-time buyers, providing access to multiple lenders, guidance through application processes, and often securing more favorable rates than direct applications."
    }
  },
  
  // Property Management
  propertyManagement: {
    fees: "Property management fees in Adelaide typically range from 7-9.5% of the weekly rent, with additional fees for leasing (1-2 weeks rent) and routine inspections.",
    laws: "Important landlord responsibilities in South Australia include maintaining the property in good repair, ensuring safety compliance, providing minimum 24 hours notice for inspections, and adhering to strict rules regarding bond handling through the Residential Tenancies Bond Authority.",
    tenantRights: "Tenant rights in South Australia include minimum notice periods for end of tenancy (28 days for fixed term, 60-90 days for periodic), rent increase limitations (once per 12 months with 60 days notice), and right to quiet enjoyment of the property.",
    maintenance: "Landlords in South Australia must address urgent repairs within 48 hours and non-urgent repairs within 14 days. Failure to do so can result in tenants applying to SACAT for resolution and potential compensation.",
    insurance: "Comprehensive landlord insurance in Adelaide costs approximately $1,000-$1,800 annually depending on property value and coverage options. Key coverage should include malicious damage, rent default, and liability protection.",
    inspections: "Property managers typically conduct quarterly inspections, providing detailed reports with photos and maintenance recommendations. These inspections are crucial for early identification of lease violations or maintenance issues.",
    tenantSelection: "Professional tenant screening typically includes verification of employment and income (seeking income at least 2.5x the weekly rent), rental history checks, national tenancy database searches, and personal references.",
    returns: {
      gross: "Gross rental yields in Adelaide currently average 4.2% for houses and 5.1% for units, with higher yields of 5.5-6.5% available in northern suburbs like Salisbury and Elizabeth.",
      net: "Net rental yields (after expenses) typically run 1-1.5% lower than gross yields, with management fees, council rates, insurance, and maintenance consuming 30-40% of rental income.",
      capital: "Five-year capital growth rates vary significantly by suburb, from 15-20% in emerging areas to 35-45% in premium suburbs, with the Adelaide average at 28.5% over five years."
    }
  },
  
  // South Australian Market Specifics
  saMarket: {
    regional: {
      victorHarbor: "Victor Harbor on the Fleurieu Peninsula has seen 11.3% annual price growth with median house price of $490,000, driven by sea-change buyers and retirees seeking coastal lifestyle.",
      mtGambier: "Mount Gambier offers exceptional affordability with median house price of $320,000 and rental yields of 6.1%, attracting investors seeking cash flow and regional growth.",
      portLincoln: "Port Lincoln combines coastal appeal with strong local economy, showing 8.7% annual growth and median price of $385,000, with premium waterfront properties achieving significant premiums.",
      portAugusta: "Port Augusta offers Australia's highest rental yields at 8.5-10.5%, with median house price of just $180,000, though higher vacancy rates and maintenance costs should be factored into investment decisions."
    },
    wineries: {
      barossaValley: "Barossa Valley properties command premium prices (median $650,000) with lifestyle appeal, tourism potential, and proximity to Adelaide contributing to 7.8% annual growth.",
      mcLarenVale: "McLaren Vale combines coastal proximity with winery lifestyle, with median house prices of $680,000 and above-average 8.3% annual growth.",
      adelaideHills: "Adelaide Hills offers premium lifestyle properties with median price of $750,000, strong 7.6% annual growth, and increasing appeal to work-from-home professionals seeking tree-change lifestyle."
    },
    infrastructure: {
      northSouth: "The North-South Corridor upgrade is Adelaide's largest infrastructure project, with properties within 5km of completed sections showing 2-3% higher capital growth than the broader market.",
      lotFourteen: "The Lot Fourteen innovation precinct is driving demand in adjacent eastern suburbs, with rental demand from tech workers boosting yields in Norwood and Kent Town.",
      renewableZones: "South Australia's renewable energy zones are creating regional property growth hubs, with towns supporting large solar and wind projects seeing increased demand and rental growth."
    },
    economic: {
      defence: "Defence industry expansion around Edinburgh is driving house price growth in northern suburbs, with defence contractors seeking proximity to aerospace and naval facilities.",
      healthcare: "Medical precincts around Royal Adelaide Hospital and Flinders Medical Centre create rental demand hotspots for healthcare professionals, with premium rents achieved for quality apartments and townhouses.",
      education: "International education is returning as a market driver, with inner suburbs near the University of Adelaide, UniSA, and Flinders University showing reduced vacancy rates and increasing rental pressure."
    }
  }
};

// Function to find relevant information from the knowledge base based on user query
function findRelevantInformation(query: string): string[] {
  const queryLower = query.toLowerCase();
  let relevantInfo: string[] = [];
  
  // Extract key concepts/keywords from user query
  const keywordGroups = {
    suburb: ['suburb', 'neighborhood', 'area', 'location', 'where', 'live', 'move'],
    premium: ['premium', 'luxury', 'high end', 'expensive', 'prestigious', 'best', 'top', 'nice', 'good'],
    affordable: ['affordable', 'cheap', 'budget', 'reasonable', 'inexpensive', 'value', 'first home', 'starter'],
    investment: ['invest', 'investment', 'return', 'yield', 'capital', 'growth', 'rental', 'income', 'cash flow'],
    market: ['market', 'trend', 'price', 'growth', 'value', 'appreciation', 'increase', 'decrease', 'median'],
    buy: ['buy', 'buying', 'purchase', 'acquire', 'offer', 'negotiation', 'inspection'],
    sell: ['sell', 'selling', 'market', 'list', 'agent', 'commission', 'preparation', 'staging'],
    rent: ['rent', 'rental', 'lease', 'tenant', 'landlord', 'property management'],
    school: ['school', 'education', 'zone', 'catchment', 'children', 'family', 'kids'],
    transport: ['transport', 'commute', 'train', 'bus', 'tram', 'traffic', 'distance'],
    regional: ['regional', 'country', 'rural', 'outside adelaide', 'barossa', 'hills', 'fleurieu']
  };
  
  // Identify which concepts are present in the query
  const identifiedConcepts: string[] = [];
  for (const [concept, keywords] of Object.entries(keywordGroups)) {
    if (keywords.some(keyword => queryLower.includes(keyword))) {
      identifiedConcepts.push(concept);
    }
  }

  // Adelaide market and suburbs
  if (queryLower.includes('adelaide market') || queryLower.includes('adelaide property') || queryLower.includes('south australia market')) {
    relevantInfo.push(realEstateKnowledgeBase.adelaideMarket.overview);
    relevantInfo.push(realEstateKnowledgeBase.adelaideMarket.trends);
  }

  // Specific Adelaide suburbs
  if (queryLower.includes('north adelaide')) {
    relevantInfo.push(`North Adelaide: ${realEstateKnowledgeBase.adelaideSuburbs.premium.northAdelaide.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.premium.northAdelaide.medianPrice} with ${realEstateKnowledgeBase.adelaideSuburbs.premium.northAdelaide.growth}. Highlights include ${realEstateKnowledgeBase.adelaideSuburbs.premium.northAdelaide.highlights}`);
  }
  
  if (queryLower.includes('unley')) {
    relevantInfo.push(`Unley: ${realEstateKnowledgeBase.adelaideSuburbs.premium.unley.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.premium.unley.medianPrice} with ${realEstateKnowledgeBase.adelaideSuburbs.premium.unley.growth}. Highlights include ${realEstateKnowledgeBase.adelaideSuburbs.premium.unley.highlights}`);
  }
  
  if (queryLower.includes('glenelg')) {
    relevantInfo.push(`Glenelg: ${realEstateKnowledgeBase.adelaideSuburbs.premium.glenelg.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.premium.glenelg.medianPrice} with ${realEstateKnowledgeBase.adelaideSuburbs.premium.glenelg.growth}. Highlights include ${realEstateKnowledgeBase.adelaideSuburbs.premium.glenelg.highlights}`);
  }
  
  if (queryLower.includes('prospect')) {
    relevantInfo.push(`Prospect: ${realEstateKnowledgeBase.adelaideSuburbs.growth.prospect.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.growth.prospect.medianPrice} with ${realEstateKnowledgeBase.adelaideSuburbs.growth.prospect.growth}. Highlights include ${realEstateKnowledgeBase.adelaideSuburbs.growth.prospect.highlights}`);
  }

  if (queryLower.includes('suburb') && (queryLower.includes('best') || queryLower.includes('top') || queryLower.includes('premium'))) {
    relevantInfo.push(`The premium suburbs in Adelaide include North Adelaide, Unley, and Glenelg.`);
    relevantInfo.push(`North Adelaide: ${realEstateKnowledgeBase.adelaideSuburbs.premium.northAdelaide.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.premium.northAdelaide.medianPrice}.`);
    relevantInfo.push(`Unley: ${realEstateKnowledgeBase.adelaideSuburbs.premium.unley.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.premium.unley.medianPrice}.`);
    relevantInfo.push(`Glenelg: ${realEstateKnowledgeBase.adelaideSuburbs.premium.glenelg.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.premium.glenelg.medianPrice}.`);
  }

  if (queryLower.includes('suburb') && (queryLower.includes('affordable') || queryLower.includes('cheap') || queryLower.includes('first home'))) {
    relevantInfo.push(`More affordable suburbs in Adelaide include Salisbury, Morphett Vale, and Elizabeth.`);
    relevantInfo.push(`Salisbury: ${realEstateKnowledgeBase.adelaideSuburbs.growth.salisbury.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.growth.salisbury.medianPrice}.`);
    relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.suburbs);
  }
  
  if (queryLower.includes('coastal') || queryLower.includes('beach') || queryLower.includes('waterfront')) {
    relevantInfo.push(`Adelaide's coastal suburbs include Glenelg, Henley Beach, and Semaphore.`);
    if (!queryLower.includes('glenelg')) {
      relevantInfo.push(`Henley Beach: ${realEstateKnowledgeBase.adelaideSuburbs.coastal.henley_beach.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.coastal.henley_beach.medianPrice}.`);
      relevantInfo.push(`Semaphore: ${realEstateKnowledgeBase.adelaideSuburbs.coastal.semaphore.profile} The median price is ${realEstateKnowledgeBase.adelaideSuburbs.coastal.semaphore.medianPrice}.`);
    }
  }

  // Regional South Australia
  if (identifiedConcepts.includes('regional')) {
    if (queryLower.includes('victor') || queryLower.includes('harbor') || queryLower.includes('harbour')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.regional.victorHarbor);
    }
    if (queryLower.includes('barossa') || queryLower.includes('wine') || queryLower.includes('vineyard')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.wineries.barossaValley);
    }
    if (queryLower.includes('mclaren') || queryLower.includes('vale')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.wineries.mcLarenVale);
    }
    if (queryLower.includes('hills') || queryLower.includes('adelaide hills')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.wineries.adelaideHills);
    }
    // If no specific regional area mentioned, provide general regional information
    if (relevantInfo.length === 0) {
      relevantInfo.push(`South Australia offers diverse regional property markets, from coastal locations like Victor Harbor to wine regions like the Barossa Valley and Adelaide Hills.`);
      relevantInfo.push(realEstateKnowledgeBase.saMarket.regional.victorHarbor);
      relevantInfo.push(realEstateKnowledgeBase.saMarket.wineries.barossaValley);
    }
  }

  // Investment information
  if (queryLower.includes('invest') || queryLower.includes('investment') || queryLower.includes('return') || queryLower.includes('yield')) {
    relevantInfo.push(realEstateKnowledgeBase.investment.strategy);
    relevantInfo.push(realEstateKnowledgeBase.investment.hotspots);
    relevantInfo.push(realEstateKnowledgeBase.investment.rental);
    
    // Add property type specific advice
    if (queryLower.includes('house') || queryLower.includes('home')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.propertyTypes.houses);
    } else if (queryLower.includes('unit') || queryLower.includes('apartment')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.propertyTypes.units);
    } else if (queryLower.includes('townhouse')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.propertyTypes.townhouses);
    } else if (queryLower.includes('develop')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.propertyTypes.development);
    } else if (queryLower.includes('commercial') || queryLower.includes('shop') || queryLower.includes('office')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.propertyTypes.commercial);
    }
    
    // Add investor experience specific advice
    if (queryLower.includes('beginner') || queryLower.includes('start') || queryLower.includes('new to')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.advice.beginners);
    } else if (queryLower.includes('experienced') || queryLower.includes('advanced')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.advice.experienced);
    } else if (queryLower.includes('cash flow') || queryLower.includes('income')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.advice.cashflow);
    } else if (queryLower.includes('growth') || queryLower.includes('capital')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.advice.growth);
    }
    
    // Add tax information for investors
    if (queryLower.includes('tax') || queryLower.includes('depreciation') || queryLower.includes('deduction')) {
      relevantInfo.push(realEstateKnowledgeBase.investment.taxation.depreciation);
      relevantInfo.push(realEstateKnowledgeBase.investment.taxation.landTax);
    }
  }

  // Australian market and trends
  if (queryLower.includes('australia') || queryLower.includes('national') || queryLower.includes('country')) {
    relevantInfo.push(realEstateKnowledgeBase.australianMarket.overview);
    
    // Add interest rate info if relevant
    if (queryLower.includes('interest') || queryLower.includes('loan') || queryLower.includes('mortgage') || queryLower.includes('rate')) {
      relevantInfo.push(realEstateKnowledgeBase.australianMarket.interestRates);
    }
    
    // Add general trends
    relevantInfo.push(realEstateKnowledgeBase.australianMarket.propertyTrends.housing);
    relevantInfo.push(realEstateKnowledgeBase.australianMarket.propertyTrends.migration);
    
    // Add city comparisons if asked specifically
    if (queryLower.includes('compare') || queryLower.includes('comparison') || queryLower.includes('versus') || queryLower.includes('vs')) {
      if (queryLower.includes('sydney')) {
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.sydney);
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.adelaide);
      } else if (queryLower.includes('melbourne')) {
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.melbourne);
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.adelaide);
      } else if (queryLower.includes('brisbane')) {
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.brisbane);
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.adelaide);
      } else if (queryLower.includes('perth')) {
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.perth);
        relevantInfo.push(realEstateKnowledgeBase.australianMarket.comparison.adelaide);
      } else {
        // Give overall comparison if no specific city mentioned
        relevantInfo.push(realEstateKnowledgeBase.adelaideMarket.comparison);
      }
    }
    
    // Add forecast information
    if (queryLower.includes('future') || queryLower.includes('forecast') || queryLower.includes('predict') || queryLower.includes('outlook')) {
      relevantInfo.push(realEstateKnowledgeBase.australianMarket.forecast);
    }
  }

  // Buying process
  if (queryLower.includes('buy') || queryLower.includes('buying') || queryLower.includes('purchase')) {
    relevantInfo.push(realEstateKnowledgeBase.buyingProcess.steps);
    if (queryLower.includes('cost') || queryLower.includes('expense') || queryLower.includes('fee')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.costs);
    }
    if (queryLower.includes('contract') || queryLower.includes('legal') || queryLower.includes('agreement')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.contracts);
    }
    if (queryLower.includes('auction')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.auctions);
    }
    if (queryLower.includes('inspect') || queryLower.includes('check')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.inspections);
    }
    if (queryLower.includes('foreign') || queryLower.includes('overseas') || queryLower.includes('international')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.foreignBuyers);
    }
    if (queryLower.includes('search') || queryLower.includes('find') || queryLower.includes('look')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.propertySearch.bestPractices);
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.propertySearch.resources);
    }
    if (queryLower.includes('agent') || queryLower.includes('buyer agent') || queryLower.includes('buyers agent')) {
      relevantInfo.push(realEstateKnowledgeBase.buyingProcess.propertySearch.buyersAgents);
    }
  }

  // Selling process
  if (queryLower.includes('sell') || queryLower.includes('selling')) {
    relevantInfo.push(realEstateKnowledgeBase.sellingProcess.methods);
    if (queryLower.includes('agent') || queryLower.includes('commission') || queryLower.includes('fee')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.agentFees);
    }
    if (queryLower.includes('prepare') || queryLower.includes('ready') || queryLower.includes('maximize')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.preparation);
    }
    if (queryLower.includes('advertis') || queryLower.includes('market') || queryLower.includes('promot')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.marketing);
    }
    if (queryLower.includes('time') || queryLower.includes('when') || queryLower.includes('season')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.timing);
    }
    if (queryLower.includes('stage') || queryLower.includes('present') || queryLower.includes('style')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.presentation);
    }
    if (queryLower.includes('negotiate') || queryLower.includes('offer') || queryLower.includes('accept')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.negotiations);
    }
    if (queryLower.includes('off market') || queryLower.includes('private') || queryLower.includes('without advertising')) {
      relevantInfo.push(realEstateKnowledgeBase.sellingProcess.offMarket);
    }
  }

  // First home buyers
  if (queryLower.includes('first home') || queryLower.includes('first time') || queryLower.includes('new buyer')) {
    relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.grants);
    relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.suburbs);
    relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.tips);
    
    if (queryLower.includes('loan') || queryLower.includes('deposit') || queryLower.includes('finance')) {
      relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.loanSchemes);
      relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.mortgageAdvice.loanTypes);
      relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.mortgageAdvice.preApproval);
    }
    
    if (queryLower.includes('cost') || queryLower.includes('afford') || queryLower.includes('expense')) {
      relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.hiddenCosts);
    }
    
    if (queryLower.includes('negotiate') || queryLower.includes('offer')) {
      relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.negotiationTips);
    }
    
    if (queryLower.includes('mortgage') || queryLower.includes('broker')) {
      relevantInfo.push(realEstateKnowledgeBase.firstHomeBuyers.mortgageAdvice.brokerValue);
    }
  }

  // Property management
  if (queryLower.includes('property manage') || queryLower.includes('landlord') || queryLower.includes('tenant') || queryLower.includes('rent')) {
    relevantInfo.push(realEstateKnowledgeBase.propertyManagement.fees);
    if (queryLower.includes('law') || queryLower.includes('legal') || queryLower.includes('rule') || queryLower.includes('requirement')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.laws);
    }
    if (queryLower.includes('tenant') || queryLower.includes('renter') || queryLower.includes('right')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.tenantRights);
    }
    if (queryLower.includes('maintain') || queryLower.includes('repair') || queryLower.includes('fix')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.maintenance);
    }
    if (queryLower.includes('insur') || queryLower.includes('protect') || queryLower.includes('damage')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.insurance);
    }
    if (queryLower.includes('inspect') || queryLower.includes('check') || queryLower.includes('visit')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.inspections);
    }
    if (queryLower.includes('screen') || queryLower.includes('find tenant') || queryLower.includes('selecting tenant')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.tenantSelection);
    }
    if (queryLower.includes('yield') || queryLower.includes('return')) {
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.returns.gross);
      relevantInfo.push(realEstateKnowledgeBase.propertyManagement.returns.net);
    }
  }

  // Infrastructure and economic impacts
  if (queryLower.includes('infrastructure') || queryLower.includes('development') || queryLower.includes('project')) {
    relevantInfo.push(realEstateKnowledgeBase.saMarket.infrastructure.northSouth);
    relevantInfo.push(realEstateKnowledgeBase.saMarket.infrastructure.lotFourteen);
  }
  
  if (queryLower.includes('economic') || queryLower.includes('economy') || queryLower.includes('industry')) {
    if (queryLower.includes('defence') || queryLower.includes('defense') || queryLower.includes('military')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.economic.defence);
    } else if (queryLower.includes('health') || queryLower.includes('medical') || queryLower.includes('hospital')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.economic.healthcare);
    } else if (queryLower.includes('education') || queryLower.includes('school') || queryLower.includes('university')) {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.economic.education);
    } else {
      relevantInfo.push(realEstateKnowledgeBase.saMarket.economic.defence);
      relevantInfo.push(realEstateKnowledgeBase.saMarket.economic.healthcare);
      relevantInfo.push(realEstateKnowledgeBase.saMarket.economic.education);
    }
  }

  // If no specific information found, return general overview
  if (relevantInfo.length === 0) {
    relevantInfo.push(realEstateKnowledgeBase.adelaideMarket.overview);
    relevantInfo.push("I specialize in Adelaide and South Australian real estate information. You can ask me about specific suburbs, market trends, buying or selling processes, investment strategies, or first home buyer advice.");
  }

  return relevantInfo;
}

// Generate conversation openers based on user intent
function generateDynamicOpener(identifiedConcepts: string[], queryLower: string): string {
  // Time-aware greeting
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  
  if (identifiedConcepts.includes('suburb') && identifiedConcepts.includes('premium')) {
    return "I'd be delighted to guide you through Adelaide's premium suburbs, each with its unique advantages. ";
  }
  
  if (identifiedConcepts.includes('suburb') && identifiedConcepts.includes('affordable')) {
    return "Looking for affordable areas in Adelaide? I've got some great suggestions for you. ";
  }
  
  if (identifiedConcepts.includes('investment')) {
    return "Interested in property investment? That's a smart move in the current Adelaide market. ";
  }
  
  if (identifiedConcepts.includes('buy')) {
    return "So you're thinking about buying property in Adelaide? Let me share some helpful information. ";
  }
  
  if (identifiedConcepts.includes('sell')) {
    return "Looking to sell your property? I've got some insights that might help with your decision. ";
  }
  
  if (identifiedConcepts.includes('rent')) {
    return "Regarding the rental market in Adelaide, here's what you should know. ";
  }
  
  if (identifiedConcepts.includes('regional')) {
    return "South Australia offers diverse regional property markets with their own unique advantages. ";
  }
  
  if (identifiedConcepts.includes('school')) {
    return "School zones are definitely important when choosing where to live in Adelaide. ";
  }
  
  if (identifiedConcepts.includes('transport')) {
    return "Transport and commuting is a key consideration when choosing a suburb in Adelaide. ";
  }
  
  // Default opener for other topics
  return "Here's what I know about your question regarding Adelaide real estate. ";
}

// Generate personalized conversation closers
function generateConversationCloser(identifiedConcepts: string[]): string {
  const closers = [
    "Is there anything specific you'd like me to elaborate on?",
    "Would you like more detailed information on any part of this?",
    "Does that help with what you were looking for?",
    "Did that answer your question, or would you like to know more?",
    "Is there any particular aspect you'd like more insights on?"
  ];
  
  if (identifiedConcepts.includes('suburb')) {
    return "Would you like to know more about any specific suburbs I mentioned?";
  }
  
  if (identifiedConcepts.includes('investment')) {
    return "Are you looking for investment opportunities in any particular area of Adelaide?";
  }
  
  if (identifiedConcepts.includes('buy')) {
    return "Where are you in your buying journey? I can provide more specific advice based on your situation.";
  }
  
  if (identifiedConcepts.includes('sell')) {
    return "Are you planning to sell soon, or just researching the market for now?";
  }
  
  // Return a random closer for other topics
  return closers[Math.floor(Math.random() * closers.length)];
}

// Create a more natural-sounding response by adding transition phrases
function createNaturalResponse(infoArray: string[]): string {
  if (infoArray.length <= 1) {
    return infoArray[0];
  }
  
  const transitions = [
    "Additionally, ",
    "I should also mention that ",
    "What's also worth noting is that ",
    "It's also important to know that ",
    "Another key point is that ",
    "To add to that, ",
    "On a related note, ",
    "Interestingly, ",
  ];
  
  let response = infoArray[0];
  
  for (let i = 1; i < Math.min(infoArray.length, 3); i++) {
    const transition = transitions[Math.floor(Math.random() * transitions.length)];
    response += " " + transition + infoArray[i].charAt(0).toLowerCase() + infoArray[i].slice(1);
  }
  
  return response;
}

export async function generateChatResponse(userMessage: string): Promise<string> {
  // Store conversation history in localStorage for context
  try {
    // Extract key concepts from user query
    const keywordGroups = {
      suburb: ['suburb', 'neighborhood', 'area', 'location', 'where', 'live', 'move'],
      premium: ['premium', 'luxury', 'high end', 'expensive', 'prestigious', 'best', 'top', 'nice', 'good'],
      affordable: ['affordable', 'cheap', 'budget', 'reasonable', 'inexpensive', 'value', 'first home', 'starter'],
      investment: ['invest', 'investment', 'return', 'yield', 'capital', 'growth', 'rental', 'income', 'cash flow'],
      market: ['market', 'trend', 'price', 'growth', 'value', 'appreciation', 'increase', 'decrease', 'median'],
      buy: ['buy', 'buying', 'purchase', 'acquire', 'offer', 'negotiation', 'inspection'],
      sell: ['sell', 'selling', 'market', 'list', 'agent', 'commission', 'preparation', 'staging'],
      rent: ['rent', 'rental', 'lease', 'tenant', 'landlord', 'property management'],
      school: ['school', 'education', 'zone', 'catchment', 'children', 'family', 'kids'],
      transport: ['transport', 'commute', 'train', 'bus', 'tram', 'traffic', 'distance'],
      regional: ['regional', 'country', 'rural', 'outside adelaide', 'barossa', 'hills', 'fleurieu']
    };
    
    const queryLower = userMessage.toLowerCase();
    const identifiedConcepts: string[] = [];
    
    for (const [concept, keywords] of Object.entries(keywordGroups)) {
      if (keywords.some(keyword => queryLower.includes(keyword))) {
        identifiedConcepts.push(concept);
      }
    }
    
    // Get relevant information from knowledge base
    const relevantInfo = findRelevantInformation(userMessage);
    
    // Craft a conversational response using the relevant information
    let response = "";
    
    // Add a personalized opener based on identified concepts
    response += generateDynamicOpener(identifiedConcepts, queryLower);
    
    // Create a natural-sounding response from the relevant information
    response += createNaturalResponse(relevantInfo);
    
    // Add follow-up question based on identified concepts
    response += "\n\n" + generateConversationCloser(identifiedConcepts);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return response;
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm currently experiencing some technical difficulties. As an A ONE Real Estate assistant, I'd be happy to help with your Adelaide property questions once we resolve this. Please try again in a moment.";
  }
}
