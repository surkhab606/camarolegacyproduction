const camaroData = [
    {
        year: 1967,
        description: "Chevrolet launched the Camaro in 1967 as a direct response to the Ford Mustang, " +
            "igniting one of the greatest rivalries in automotive history. The first-generation " +
            "Camaro was available as a coupe or convertible and offered a range of six-cylinder " +
            "and V8 engines.",
        image: "67camaro.png", //Credit: Steven Rupp, Hot Rod Magazine
        trims: "Sport Coupe, RS, SS, Z/28",
        horsepower: "Z/28: 375HP",
        zeroToSixty: "Z/28: 6.9s",
        MSRP: "Z/28: around $3300",
        forumLink: "http://www.camaros.org/geninfo.shtml",
    },
    {
        year: 1968,
        description: "The 1968 Camaro refined the original formula with a cleaner look, " +
            "eliminating side vent windows for a sleeker design. Safety improvements " +
            "included front shoulder belts and side marker lights.",
        image: "68camaro.jpg", //https://journal.classiccars.com/2023/10/01/autohunter-spotlight-1968-chevrolet-camaro-coupe/
        trims: "Sport Coupe, RS, SS, Z/28",
        horsepower: "Z/28: 375HP",
        zeroToSixty: "Z/28: 6.9s",
        MSRP: "Z/28: around $3200",
        forumLink: "http://www.camaros.org/model.shtml",
    },
    {
        year: 1969,
        description: "A landmark year for the Camaro, 1969 introduced a more aggressive, " +
            "chiseled design with revised body lines and an unmistakable presence. The Z/28 " +
            "remained a favorite among enthusiasts.",
        image: "69camaro.jpg", //https://www.sportscarmarket.com/profile/1969-chevrolet-camaro-z-28
        trims: "Sport Coupe, RS, SS, Z/28",
        horsepower: "Z/28: 375HP",
        zeroToSixty: "Z/28: 6.9s",
        MSRP: "Z/28: around $3200",
        forumLink: "http://www.camaros.org/model.shtml",
    },
    {
        year: 1970,
        description: "Marking the dawn of the second generation, the 1970 Camaro featured a " +
            "European-inspired design with a longer hood, a fastback profile, and an all-new " +
            "interior. ",
        image: "70camaro.jpg", //https://classiccarsltd.com/vehicles/1970-chevrolet-camaro-z28-rs/
        trims: "Sport Coupe, RS, SS, Z/28",
        horsepower: "Z/28: 360HP",
        zeroToSixty: "Z/28: 6.7s",
        MSRP: "Z/28: around $3400",
        forumLink: "https://nastyz28.com/camaro/camaro70.html",
    },
    {
        year: 1971,
        description: "Though visually similar to the 1970 model, the 1971 Camaro faced new emissions and " +
            "safety regulations. Engine compression ratios were lowered, slightly reducing power " +
            "outputs, but the big-block and small-block engines still offered impressive performance. ",
        image: "71camaro.jpeg", //https://www.gaaclassiccars.com/vehicles/35236/1971-chevrolet-camaro
        trims: "Sport Coupe, RS, SS, Z/28",
        horsepower: "Z/28: 330HP",
        zeroToSixty: "Z/28: 6.9s",
        MSRP: "Z/28: around $3600",
        forumLink: "https://nastyz28.com/camaro/camaro71.html",
    },
    {
        year: 1972,
        description: "Production challenges, including a UAW strike, limited Camaro output in 1972. " +
            "This was also the final year for the high-performance SS 396 package. " +
            "Stricter emissions and insurance premiums made high-performance muscle cars " +
            "less accessible, signaling an era of change for American performance cars.",
        image: "72camaro.JPG", //https://www.ebay.ca/itm/402338827079
        trims: "Sport Coupe, RS, SS, Z28",
        horsepower: "Z28: 255HP",
        zeroToSixty: "Z28: 7.2s",
        MSRP: "Z28: around $3600",
        forumLink: "https://nastyz28.com/camaro/camaro72.html",
    },
    {
        year: 1973,
        description: "Chevrolet adapted to new federal regulations by adding large rubber bumper guards " +
            "and reinforced structures for improved crash protection. The Z/28 remained a strong " +
            "performer, featuring the 350 cubic-inch LT-1 V8, while the RS package added unique " +
            "split bumpers that gave the Camaro a distinctive look. Despite industry changes, " +
            "the Camaro remained a favorite among enthusiasts.",
        image: "73camaro.jpeg", //https://www.classicautomall.com/vehicles/6165/1973-chevrolet-camaro-z28-tribute
        trims: "Sport Coupe, RS, Type LT, Z28",
        horsepower: "Z28: 245HP",
        zeroToSixty: "Z28: 7.2s",
        MSRP: "Z28: around $3500",
        forumLink: "https://nastyz28.com/camaro/camaro73.html",
    },
    {
        year: 1974,
        description: "A new, larger impact-absorbing front bumper dramatically " +
            "altered the Camaro’s appearance in 1974 to comply with federal regulations. " +
            "The rear taillights were also redesigned to wrap around the fenders. " +
            "While performance continued to decline due to emissions controls, " +
            "the Camaro still offered a powerful V8 sports car.",
        image: "74camaro.jpg", //https://www.hotrod.com/features/unrestored-original-1974-chevrolet-camaro-z28-proof-performance-didnt-die-early-1970s/
        trims: "Sport Coupe, Type LT, Z28",
        horsepower: "Z28: 245HP",
        zeroToSixty: "Z28: 7.2s",
        MSRP: "Z28: around $3600",
        forumLink: "https://nastyz28.com/camaro/camaro74.html",
    },
    {
        year: 1975,
        description: "The 1975 Camaro marked the introduction of catalytic converters and other " +
            "emissions-related changes, further impacting performance. Chevrolet discontinued " +
            "the Z/28 model this year, leaving the LT trim as the performance leader. ",
        image: "75camaro.jpg", //https://www.hotrod.com/features/1975-chevy-camaro-lsa-swapped/
        trims: "Sport Coupe, RS, Type LT",
        horsepower: "Type LT: 155HP",
        zeroToSixty: "Type LT: 11.0s",
        MSRP: "Type LT: around $4070",
        forumLink: "https://nastyz28.com/camaro/camaro75.html",
    },
    {
        year: 1976,
        description: "With minor styling changes, including a revised grille and new interior options, " +
            "the 1976 Camaro maintained its appeal. ",
        image: "",
        trims: "Sport Coupe, RS, Type LT",
        horsepower: "Type LT: 165HP",
        zeroToSixty: "Type LT: 10.5s",
        MSRP: "Type LT: around $4400",
        forumLink: "https://nastyz28.com/camaro/camaro76.html",
    },
    {
        year: 1977,
        description: "This year saw the Camaro surpass the Mustang in sales for the first time. " +
            "The Z/28 returned as a full-fledged model, featuring bold graphics and a 350 cubic-" +
            "inch V8. It emphasized handling and aggressive styling.",
        image: "",
        trims: "Sport Coupe, RS, Type LT, Z28",
        horsepower: "Z28: 185HP",
        zeroToSixty: "Z28: around 8.5s",
        MSRP: "Z28: around $5170",
        forumLink: "https://nastyz28.com/camaro/camaro77.html",
    },
    {
        year: 1978,
        description: "A major refresh brought a new front and rear design, with a body-colored " +
            "urethane bumper and wraparound taillights. The Z/28 received aerodynamic " +
            "enhancements and a new hood scoop. ",
        image: "",
        trims: "Sport Coupe, Rally Sport, Type LT, Z28",
        horsepower: "Z28: 185HP",
        zeroToSixty: "Z28: around 8.5s",
        MSRP: "Z28: around $5065",
        forumLink: "https://nastyz28.com/camaro/camaro78.html",
    },
    {
        year: 1979,
        description: "A record-breaking year, the 1979 Camaro saw the highest sales ever - to this day. " +
            "Styling tweaks included a revised interior and updated graphics for the Z/28. Power levels " +
            "remained modest, but the Camaro’s aggressive looks and solid handling kept it popular " +
            "among performance enthusiasts.",
        image: "",
        trims: "Sport Coupe, Rally Sport, Berlinetta, Z28",
        horsepower: "Z28: 175HP",
        zeroToSixty: "Z28: around 9.5s",
        MSRP: "Z28: around $6115",
        forumLink: "https://nastyz28.com/camaro/camaro79.html",
    },
    {
        year: 1980,
        description: "With new fuel economy concerns, Chevrolet introduced a 3.8L V6 as the base" +
            " engine, while the Z/28 gained functional hood scoops and improved aerodynamics. ",
        image: "",
        trims: "Sport Coupe, Rally Sport, Berlinetta, Z28",
        horsepower: "Z28: 190HP",
        zeroToSixty: "Z28: around 8.5s",
        MSRP: "Z28: around $7120",
        forumLink: "https://nastyz28.com/camaro/camaro80.html",
    },
    {
        year: 1981,
        description: "The final year of the legendary second generation featured minor refinements," +
            " including a new computer-controlled carburetor for better emissions compliance." +
            " While performance was far from the muscle car glory days, the Camaro’s aggressive " +
            " styling and loyal following ensured its continued success.",
        image: "",
        trims: "Sport Coupe, Berlinetta, Z28",
        horsepower: "Z28: 190HP",
        zeroToSixty: "Z28: around 8.5s",
        MSRP: "Z28: around $8000",
        forumLink: "https://nastyz28.com/camaro/camaro81.html",
    },
    {
        year: 1982,
        description: "The introduction of the third-generation Camaro in 1982 marked a radical departure " +
            "from its predecessors. Featuring a sleek, aerodynamic design with a hatchback rear, " +
            "the new Camaro was lighter and more efficient. Fuel injection was introduced, " +
            "and the Z/28 featured a unique ground effects package. The Berlinetta trim catered to " +
            "luxury-oriented buyers with an advanced digital dashboard.",
        image: "",
        trims: "Sport Coupe, Berlinetta, Z28",
        horsepower: "Z28: 165HP",
        zeroToSixty: "Z28: around 9.7s",
        MSRP: "$Z28: around $10,000",
        forumLink: "https://nastyz28.com/camaro/camaro82.html",
    },
    {
        year: 1983,
        description: "With minor updates, the 1983 Camaro refined its offerings. The Z/28 " +
            "continued to be the performance leader, and Chevrolet introduced the High-Output " +
            "(H.O.) 5.0L V8. The Berlinetta featured an innovative electronic instrument cluster " +
            "making it one of the most futuristic dashboards of its time.",
        image: "",
        trims: "Sport Coupe, Berlinetta, Z28",
        horsepower: "Z28: 190HP",
        zeroToSixty: "Z28: around 7.4s",
        MSRP: "Z28: around $10,000",
        forumLink: "https://nastyz28.com/camaro/camaro83.html",
    },
    {
        year: 1984,
        description: "Chevrolet refined the Camaro’s suspension for improved handling," +
            " and the Z28 was named Motor Trend’s Car of the Year. The performance-oriented " +
            "L69 5.0L H.O. V8 offered 190 horsepower, helping the Camaro regain some of its " +
            "muscle car roots.",
        image: "",
        trims: "Sport Coupe, Berlinetta, Z28",
        horsepower: "Z28: 190HP",
        zeroToSixty: "Z28: around 7.4s",
        MSRP: "Z28: around $10,000",
        forumLink: "https://nastyz28.com/camaro/camaro84.html",
    },
    {
        year: 1985,
        description: "A major refresh brought a more aggressive front fascia, improved aerodynamics, " +
            "and new taillights. The legendary IROC-Z debuted, featuring improved suspension, 16-inch " +
            "wheels, and a Tuned Port Injection (TPI) 5.0L V8, solidifying the Camaro’s return to " +
            "serious performance.",
        image: "",
        trims: "Sport Coupe, Berlinetta, Z28, IROC-Z (Z28 package)",
        horsepower: "IROC-Z: 215HP",
        zeroToSixty: "IROC-Z: around 7.0s",
        MSRP: "IROC-Z: around $11,600",
        forumLink: "https://nastyz28.com/camaro/camaro85.html",
    },
    {
        year: 1986,
        description: "The Camaro gained a center high-mounted stop light as required by new safety regulations. " +
            "The IROC-Z continued to impress with its handling capabilities, while Chevrolet introduced a " +
            "new 5-speed manual transmission for better driver engagement.",
        image: "",
        trims: "Sport Coupe, Berlinetta, Z28, IROC-Z (Z28 package)",
        horsepower: "IROC-Z: 220HP",
        zeroToSixty: "IROC-Z: around 7.0s",
        MSRP: "IROC-Z: around $12,300",
        forumLink: "https://nastyz28.com/camaro/camaro86.html",
    },
    {
        year: 1987,
        description: "The big news this year was the return of the convertible option for the first time since 1969. " +
            "Performance improved with a 5.7L TPI V8 available in the IROC-Z, offering 225 horsepower," +
            " making it one of the most powerful Camaros of the era.",
        image: "",
        trims: "Sport Coupe, LT, Z28, IROC-Z (Z28 package)",
        horsepower: "IROC-Z: 225HP",
        zeroToSixty: "IROC-Z: around 7.0s",
        MSRP: "IROC-Z: around $13,200",
        forumLink: "https://nastyz28.com/camaro/camaro87.html",
    },
    {
        year: 1988,
        description: "The Z28 nameplate was retired, leaving the IROC-Z as the top performance model. " +
            "Chevrolet continued refining the Camaro’s powertrain, with fuel-injected V8s " +
            "delivering improved drivability and performance.",
        image: "",
        trims: "Sport Coupe, IROC-Z",
        horsepower: "IROC-Z: 230HP",
        zeroToSixty: "IROC-Z: around 6.9s",
        MSRP: "IROC-Z: around $13,490",
        forumLink: "https://nastyz28.com/camaro/camaro88.html",
    },
    {
        year: 1989,
        description: "The RS model returned as a sporty entry-level Camaro, replacing the base model. " +
            "The IROC-Z remained at the top, with the 5.7L TPI V8 still providing impressive performance. ",
        image: "",
        trims: "RS, IROC-Z",
        horsepower: "IROC-Z: 240HP",
        zeroToSixty: "IROC-Z: around 6.7s",
        MSRP: "IROC-Z: around $14,100",
        forumLink: "https://nastyz28.com/camaro/camaro89.html",
    },
    {
        year: 1990,
        description: "A driver’s side airbag was added as a new safety feature, marking a first for the Camaro. " +
            "The IROC-Z was discontinued mid-year due to Chevrolet ending its sponsorship of the International Race" +
            " of Champions series. The Z28 name returned later in the model year with continued performance upgrades.",
        image: "",
        trims: "RS, IROC-Z",
        horsepower: "IROC-Z: 245HP",
        zeroToSixty: "IROC-Z: around 6.5s",
        MSRP: "IROC-Z: around $14,500",
        forumLink: "https://nastyz28.com/camaro/camaro90.html",
    },
    {
        year: 1991,
        description: "A facelift brought a more aggressive front fascia and updated aerodynamic enhancements. " +
            "The Z28 featured bold new graphics and a high-rise rear spoiler, emphasizing its performance-oriented nature.",
        image: "",
        trims: "RS, Z28",
        horsepower: "Z28: 245HP",
        zeroToSixty: "Z28: around 6.5s",
        MSRP: "Z28: around $15,400",
        forumLink: "https://nastyz28.com/camaro/camaro91.html",
    },
    {
        year: 1992,
        description: "The final year of the third-generation Camaro celebrated 25 years of production with a special Heritage Edition package. " +
            "Featuring classic rally stripes, this model paid homage to the Camaro’s storied past while paving the way for the upcoming fourth generation.",
        image: "",
        trims: "RS, Z28",
        horsepower: "Z28: 245HP",
        zeroToSixty: "Z28: around 6.5s",
        MSRP: "Z28: around $16,000",
        forumLink: "https://nastyz28.com/camaro/camaro92.html",
    },
    {
        year: 1993,
        description: "The fourth-generation Camaro debuted with a completely modernized design, featuring a rounded, aerodynamic body " +
            "and a composite front end. Under the hood, the LT1 5.7L V8—borrowed from the Corvette—delivered impressive power. ",
        image: "",
        trims: "Coupe, Z/28",
        horsepower: "Z/28: 275HP",
        zeroToSixty: "Z/28: 5.7s",
        MSRP: "Z/28: around $16,800",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 1994,
        description: "Minor refinements included an updated interior and improved safety features. " +
            "The convertible returned, offering enthusiasts an open-air driving experience. " +
            "Performance remained strong with the LT1 V8 continuing to impress.",
        image: "",
        trims: "Coupe, Z28",
        horsepower: "Z28: 275HP",
        zeroToSixty: "Z28: around 5.7s",
        MSRP: "Z28: around $17,000",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 1995,
        description: "Chevrolet introduced minor mechanical updates, including improvements to the automatic transmission for better drivability. " +
            "The Z28 continued to be the performance benchmark, while the base models received a 3.4L V6 as the standard engine.",
        image: "",
        trims: "Coupe, Z28",
        horsepower: "Z28: 275HP",
        zeroToSixty: "Z28: around 5.7s",
        MSRP: "Z28: around $17,900",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 1996,
        description: "A new 3.8L V6 replaced the older 3.4L, offering improved power and efficiency." +
            " The Z28 gained a one-year-only aftermarket SS package, featuring a functional hood scoop and a 305-horsepower LT1 V8, " +
            "making it the most powerful Camaro in years.",
        image: "",
        trims: "Coupe, RS, Z28, SS (Z28 package)",
        horsepower: "SS: 305HP",
        zeroToSixty: "SS: around 5.5s",
        MSRP: "SS: around $24,000",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 1997,
        description: "The 30th Anniversary Edition debuted, featuring Arctic White paint with Hugger Orange stripes. " +
            "The LT1-powered SS remained the pinnacle of Camaro performance.",
        image: "",
        trims: "Coupe, RS, Z28, SS (Z28 package)",
        horsepower: "SS: 305HP",
        zeroToSixty: "SS: around 5.5s",
        MSRP: "SS: around $24,000",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 1998,
        description: "A significant facelift included a new front fascia with integrated headlights, " +
            "giving the Camaro a modern look. More importantly, the LS1 5.7L V8 replaced the LT1, " +
            "delivering 305 horsepower and propelling the Camaro into a new performance era.",
        image: "",
        trims: "Coupe, Z28, SS (Z28 package)",
        horsepower: "SS: 320HP",
        zeroToSixty: "SS: around 5.2s",
        MSRP: "SS: around $24,500",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 1999,
        description: "The Camaro continued to refine its offerings, with minor updates to features and trim levels. " +
            "The SS remained a performance icon, while the V6 models provided a balance of power and efficiency.",
        image: "",
        trims: "Coupe, Z28, SS (Z28 package)",
        horsepower: "SS: 320HP",
        zeroToSixty: "SS: around 5.2s",
        MSRP: "SS: around $25,000",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 2000,
        description: "Chevrolet celebrated the new millennium with a well-equipped lineup. " +
            "The Camaro’s LS1 engine remained one of the most potent powerplants in its class, " +
            "while handling and braking improvements further refined the driving experience.",
        image: "",
        trims: "Coupe, Z28, SS (Z28 package)",
        horsepower: "SS: 320HP",
        zeroToSixty: "SS: around 5.2s",
        MSRP: "SS: around $25,750",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 2001,
        description: "Performance enhancements included a slight power bump for the LS1 engine, now producing 310 horsepower. " +
            "The Z28 and SS continued to offer serious muscle car performance in an era dominated by imports.",
        image: "",
        trims: "Coupe, Z28, SS (Z28 package)",
        horsepower: "SS: 325HP",
        zeroToSixty: "SS: around 5.2s",
        MSRP: "SS: around $26,000",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 2002,
        description: "The end of an era, as Chevrolet discontinued the Camaro after the 2002 model year. " +
            "The 35th Anniversary Edition featured special badging and unique styling elements, serving " +
            "as a fitting send-off for the fourth generation before its hiatus.",
        image: "",
        trims: "Coupe, Z28, SS (Z28 package)",
        horsepower: "SS: 325HP",
        zeroToSixty: "SS: around 5.2s",
        MSRP: "SS: around $26,400",
        forumLink: "https://camaroforums.com/forum/93-02-general-41/",
    },
    {
        year: 2010,
        description: "After an eight-year hiatus, the Camaro returned with a bold, retro-inspired design " +
            "paying tribute to the first generation. The SS featured a 6.2L LS3 V8, producing 426 horsepower, " +
            "while the V6 model delivered impressive power at 304 horsepower.",
        image: "",
        trims: "LS, 1LT, 2LT, 1SS, 2SS",
        horsepower: "2SS: 425HP",
        zeroToSixty: "2SS: around 4.6s",
        MSRP: "2SS: around $33,175",
        forumLink: "https://www.camaro5.com/forums/",
    },
    {
        year: 2011,
        description: "The Camaro received updates to its suspension and interior, improving ride quality and cabin refinement. " +
            "The SS model continued to feature the potent 6.2L V8, while a new convertible variant reintroduced open-air muscle car " +
            "thrills to the lineup.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS",
        horsepower: "2SS: 425HP",
        zeroToSixty: "2SS: around 4.6s",
        MSRP: "2SS: around $39,000",
        forumLink: "https://www.camaro5.com/forums/",
    },
    {
        year: 2012,
        description: "Celebrating 45 years of Camaro, this model introduced a 323-hp V6, while the " +
            "ZL1 debuted with a 580-hp supercharged V8, adaptive suspension, and track-ready " +
            "aerodynamics.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 580HP",
        zeroToSixty: "ZL1: around 4.1s",
        MSRP: "ZL1: around $55,000",
        forumLink: "https://www.camaro5.com/forums/",
    },
    {
        year: 2013,
        description: "Performance took center stage with the 1LE package, bringing track-focused upgrades to the SS. " +
            "Chevrolet also added MyLink infotainment, enhancing in-car tech.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 580HP",
        zeroToSixty: "ZL1: around 4.1s",
        MSRP: "ZL1: around $56,500",
        forumLink: "https://www.camaro5.com/forums/",
    },
    {
        year: 2014,
        description: "A facelift brought narrower headlights and a larger lower grille." +
            " The Z/28 returned, featuring a 7.0L LS7 V8 (505 hp), lightweight design, " +
            "and carbon-ceramic brakes for true track domination.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS, ZL1, Z/28",
        horsepower: "Z28: 505HP",
        zeroToSixty: "Z28: around 3.95s",
        MSRP: "Z28: around $75,000",
        forumLink: "https://www.camaro5.com/forums/",
    },
    {
        year: 2015,
        description: "As the last year of the fifth generation, the ZL1 and Z/28 remained icons, offering peak muscle car performance before Chevrolet unveiled the next evolution.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS, ZL1, Z/28",
        horsepower: "Z28: 505HP",
        zeroToSixty: "Z28: around 3.95s",
        MSRP: "Z28: around $75,000",
        forumLink: "https://www.camaro5.com/forums/",
    },
    {
        year: 2016,
        description: "A new Alpha platform shed 200 lbs, making the Camaro more agile than ever. The 455-hp SS became the fastest yet, while a 2.0L turbo-four (275 hp) was introduced for efficiency without sacrificing fun.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS",
        horsepower: "2SS: 455HP",
        zeroToSixty: "2SS: around 4.3s",
        MSRP: "2SS: around $43,000",
        forumLink: "",
    },
    {
        year: 2017,
        description: "The ZL1 roared back with a 650-hp supercharged V8, a 10-speed automatic, and a Nürburgring-tested 1LE package, making it the ultimate track-ready Camaro.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.5s",
        MSRP: "ZL1: around $67,000",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2018,
        description: "The ZL1 1LE arrived, featuring aerodynamic enhancements, Multimatic DSSV dampers, and aggressive weight savings, securing its place as the fastest Camaro ever.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.5s",
        MSRP: "ZL1: around $69,900",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2019,
        description: "A controversial facelift gave the SS a split-grille design, while the 'Turbo 1LE' debuted, turning the four-cylinder Camaro into a legit track performer.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 3LT, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.5s",
        MSRP: "ZL1: around $70,100",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2020,
        description: "Chevrolet revised the SS grille after mixed reactions, and the 10-speed automatic expanded to the V6, offering smoother shifts and better performance.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 3LT, LT1, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.5s",
        MSRP: "ZL1: around $70,600",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2021,
        description: "Wireless Apple CarPlay and Android Auto became standard, making the Camaro’s interior as advanced as its performance. The ZL1 1LE remained the king of the lineup.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 3LT, LT1, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.4s",
        MSRP: "ZL1: around $71,600",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2022,
        description: "With Camaro’s future uncertain, Rapid Blue paint and new styling packages kept the model fresh. Enthusiasts worried this might be one of the last V8 Camaros.",
        image: "",
        trims: "1LS, 1LT, 2LT, 3LT, LT1, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.4s",
        MSRP: "ZL1: around $71,800",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2023,
        description: "Chevrolet introduced special edition packages, paying tribute to Camaro’s legacy. Performance remained unchanged, but whispers of a discontinuation grew louder.",
        image: "",
        trims: "1LS, 1LT, 2LT, 3LT, LT1, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.4s",
        MSRP: "ZL1: around $75,600",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2024,
        description: "The Collector’s Edition released, featuring a Panther Black Matte finish—a nod to the Camaro’s original codename. This marked the end of an era for gas-powered Camaros.",
        image: "",
        trims: "1LS, 2LS, 1LT, 2LT, 3LT, LT1, 1SS, 2SS, ZL1",
        horsepower: "ZL1: 650HP",
        zeroToSixty: "ZL1: around 3.4s",
        MSRP: "ZL1: around $81,900",
        forumLink: "https://www.camaro6.com/forums/",
    },
    {
        year: 2025,
        description: "What's next? We wonder. An electric future has been teased by some, whereas others " +
            "are convinced of a Camaro SUV. No matter the future, it's clear that the Camaro will be a household" +
            "legend for generations to come.",
        image: "",
        trims: "???",
        horsepower: "???",
        zeroToSixty: "???",
        MSRP: "???",
        forumLink: "???",
    },

    {
        year: 1000,
        description: "Invalid year!",
        image: "",
        trims: "???",
        horsepower: "???",
        zeroToSixty: "???",
        MSRP: "???",
        forumLink: "???",
    },




];

export default camaroData;