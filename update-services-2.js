const fs = require('fs');
let content = fs.readFileSync('src/data/servicesData.js', 'utf8');

const updates = {
  'Ayur Signature Massage': {
    slug: 'ayur-signature-massage-cagayan-de-oro',
    heroTitle: 'Ayur signature massage CDO',
    metaKeywords: 'Ayurvedic massage Cagayan de Oro, signature massage CDO, warm oil massage near me, best massage in CDO',
    accordionTitle: 'Book your Ayur Signature Massage today and discover why Kagay-anons call it the best massage in CDO.',
    accordionText: [
      "After a long week of Cagayan de Oro traffic, deadlines, and the tropical heat, your body deserves more than an ordinary rubdown — it deserves a ritual. Our Ayur Signature Massage is our house specialty, a warm-oil Ayurvedic-inspired treatment created for Kagay-anons who want real, lasting relief and not just a quick foot soak.",
      "Using warmed herbal oils and slow, rhythmic strokes rooted in traditional Ayurvedic bodywork, our trained therapists work along your body's natural energy lines to release tension held in the shoulders, neck, and lower back — the areas most affected by hours at a desk, on a habal-habal, or standing behind a counter. This is more than a generic \"best massage in CDO\" search result; it's a signature experience you won't find in every ordinary spa near you.",
      "Each session begins with a short consultation so our therapist can adjust pressure and oil blend to your needs, whether you're looking for deep relaxation, better sleep, or relief from chronic stiffness. The warm oil is gently massaged into the skin to improve circulation, calm the nervous system, and leave you feeling lighter, both physically and mentally.",
      "Guests consistently tell us this is the massage spa in CDO they return to for special occasions, birthdays, or simply a well-earned treat. If you've been searching for an affordable yet premium massage near me that goes beyond the basics, the Ayur Signature Massage is where your search should end."
    ],
    accordionBenefits: [
      "Deep relaxation using warm, herb-infused oils",
      "Improves blood circulation and eases muscle stiffness",
      "Calms the nervous system and reduces everyday stress",
      "Personalized pressure based on your body's needs",
      "A true signature experience, only at Ayurveda Massage Spa CDO"
    ]
  },
  'Hawaiian Veda Massage': {
    slug: 'hawaiian-veda-massage-cagayan-de-oro',
    heroTitle: 'Hawaiian Veda massage CDO',
    metaKeywords: 'Lomi Lomi inspired massage Cagayan de Oro, full body massage near me, relaxation massage CDO, spa near me',
    accordionTitle: 'Treat yourself to an island-inspired escape — book the Hawaiian Veda Massage at Ayurveda Massage Spa CDO today.',
    accordionText: [
      "Close your eyes, and let the long, flowing strokes of our Hawaiian Veda Massage carry the tension right out of your body. Inspired by the graceful, wave-like movements of traditional Hawaiian bodywork, this treatment is one of the most requested spa services near you in Cagayan de Oro — and once you try it, you'll understand why.",
      "Unlike a typical body massage near me that focuses only on isolated sore spots, the Hawaiian Veda technique treats your whole body as one connected system. Our therapists use forearms and palms in continuous, rhythmic motions that mimic ocean waves, helping to release tension from your shoulders down to your calves in one smooth sequence. It's a full body massage experience designed to quiet a racing mind as much as it relieves a tired body.",
      "This treatment is especially loved by guests who split their time between Cagayan de Oro and nearby resorts in Camiguin or Bukidnon and want that same island-spa feeling without leaving the city. Whether you're recovering from a stressful work week, jet lag, or you simply want a spa near me that feels like a mini vacation, the Hawaiian Veda Massage delivers that resort-quality escape.",
      "Paired with soothing music and calming aromatic oils, this is one of the most relaxing massage spa treatments in CDO — perfect for guests who want to unwind completely, both mind and body."
    ],
    accordionBenefits: [
      "Long, flowing strokes that release full-body tension",
      "Resort-style relaxation experience in the heart of CDO",
      "Calms the mind while easing physical fatigue",
      "Great for stress, mild anxiety, and poor sleep",
      "Ideal pre- or post-travel treatment"
    ]
  },
  'Classic Swedish Massage': {
    slug: 'classic-swedish-massage-cagayan-de-oro',
    heroTitle: 'Swedish massage near me CDO',
    metaKeywords: 'classic Swedish massage Cagayan de Oro, relaxation massage near me, full body massage CDO, best massage spa near me',
    accordionTitle: 'Ready to relax? Book a Classic Swedish Massage at Ayurveda Massage Spa CDO, one of Cagayan de Oro\'s most trusted spas.',
    accordionText: [
      "If this is your first time booking a massage spa near you, the Classic Swedish Massage is the perfect place to start. It's the gold standard of relaxation massages — gentle, gliding strokes combined with light kneading that ease everyday muscle tension without deep, intense pressure.",
      "Our therapists use long effortless strokes along the back, arms, legs, and shoulders to boost blood circulation, loosen tight muscles, and calm an overworked nervous system. It's an excellent choice for guests who spend long hours commuting through CDO traffic, sitting at a desk in Cogon or Carmen, or simply want a gentle full body massage after a busy week.",
      "Many of our regular guests describe this as the best massage near me for pure relaxation — not too intense, yet effective enough to leave you feeling noticeably lighter and more at ease. It also pairs beautifully as an introduction before trying our deeper treatments like the Deep Tissue or Hot Stone Massage.",
      "Whether you're new to massage spas in Cagayan de Oro or a long-time spa-goer who simply wants a classic, no-fuss relaxation session, our Classic Swedish Massage delivers consistent, feel-good results every time."
    ],
    accordionBenefits: [
      "Gentile, relaxing pressure suitable for all ages",
      "Improves circulation and eases everyday tension",
      "Perfect introduction to massage therapy",
      "Reduces stress and promotes better sleep",
      "A trusted classic at our CDO massage spa"
    ]
  },
  'Royal Thai Massage': {
    slug: 'royal-thai-massage-cagayan-de-oro',
    heroTitle: 'Thai massage near me CDO',
    metaKeywords: 'Royal Thai massage Cagayan de Oro, authentic Thai spa CDO, full body Thai massage near me, Thai massage spa near me',
    accordionTitle: 'Feel the difference of authentic technique — book your Royal Thai Massage at Ayurveda Massage Spa CDO today.',
    accordionText: [
      "For guests searching for an authentic Thai massage near me, our Royal Thai Massage brings centuries-old technique to the heart of Cagayan de Oro. Unlike a typical oil massage, this treatment combines acupressure, assisted stretching, and rhythmic compression — performed on a comfortable mat, fully clothed — to release deep tension and restore flexibility.",
      "Our therapists are trained in traditional Thai bodywork, applying firm palm and thumb pressure along the body's energy lines while gently guiding your limbs through yoga-like stretches. It's an active, invigorating treatment, very different from a passive spa massage — which is exactly why athletes, gym-goers, and anyone with stiff joints in CDO request it by name.",
      "This full body Thai massage is especially effective for tight hips, stiff shoulders, and lower back tension caused by long hours of sitting, driving, or physical labor. Many guests say they leave feeling taller, looser, and noticeably more energized — a completely different sensation from a standard relaxation massage.",
      "If you've been looking for a Thai spa near you that stays true to the traditional technique rather than a watered-down version, our Royal Thai Massage delivers the real thing, right here in Cagayan de Oro."
    ],
    accordionBenefits: [
      "Authentic stretch-and-pressure Thai technique",
      "Improves flexibility and joint mobility",
      "Relieves deep muscular and postural tension",
      "Boosts energy — great before or after workouts",
      "Performed fully clothed on a comfortable mat"
    ]
  },
  'Deep Tissue Massage': {
    slug: 'deep-tissue-massage-cagayan-de-oro',
    heroTitle: 'Deep tissue massage near me CDO',
    metaKeywords: 'deep tissue massage Cagayan de Oro, deep tissue massage for back pain, deep tissue massage therapist near me, best deep tissue massage CDO',
    accordionTitle: 'Don\'t let tight muscles slow you down — book a Deep Tissue Massage at Ayurveda Massage Spa CDO in CDO today.',
    accordionText: [
      "When a regular massage just isn't enough, our Deep Tissue Massage goes further. Using slow, firm strokes and targeted pressure, our licensed therapists work into the deeper layers of muscle and connective tissue to release chronic tension — the kind that builds up from years of desk work, physical labor, or an old injury that never quite healed.",
      "This is the treatment our guests search for when a light massage near them just doesn't cut it. If you've been dealing with a stiff neck from hours on your phone, nagging lower back pain, or tight shoulders that never seem to loosen no matter how much you stretch, our deep tissue massage therapists in CDO know exactly how to find and release that tension.",
      "We use firm, focused pressure combined with cross-fiber friction techniques, concentrating on problem areas like the neck, shoulders, upper back, and legs. It's a more intense session than a Swedish massage, so we always check in with you throughout to keep the pressure at a level that's therapeutic, not painful.",
      "Many of our guests book this as a deep tissue massage for back pain relief, while others use it as regular maintenance after gym sessions or physically demanding work. Either way, it's consistently rated among the best deep tissue massage services in Cagayan de Oro."
    ],
    accordionBenefits: [
      "Targets chronic muscle tension and knots",
      "Effective for back, neck, and shoulder pain",
      "Improves mobility and reduces stiffness over time",
      "Performed by trained, experienced therapists",
      "Customized pressure based on your comfort level"
    ]
  },
  'Lymphatic Massage': {
    slug: 'lymphatic-massage-cagayan-de-oro',
    heroTitle: 'Lymphatic massage CDO',
    metaKeywords: 'lymphatic drainage massage Cagayan de Oro, detox massage near me, anti bloating massage CDO, massage spa near me',
    accordionTitle: 'Feel lighter and refreshed — book a Lymphatic Massage at Ayurveda Massage Spa CDO in Cagayan de Oro.',
    accordionText: [
      "Feeling puffy, sluggish, or bloated after a season of fiestas, travel, or simply too many late nights? Our Lymphatic Massage uses gentle, rhythmic strokes to support your body's natural lymphatic drainage system — helping to reduce fluid retention, ease puffiness, and leave your body feeling lighter.",
      "Unlike deep tissue work, this treatment relies on light, precise pressure applied in specific directions to encourage lymph flow and support your body's own detoxification process. It's a favorite among guests preparing for a big event, recovering from a minor procedure, or simply wanting to feel de-bloated and refreshed — a gentler alternative to our more intense massage spa treatments in CDO.",
      "Our therapists are trained in proper lymphatic drainage technique, working along the neck, underarms, abdomen, and legs where lymph nodes are concentrated. Many guests notice visibly reduced puffiness in the face and limbs, along with an overall feeling of lightness after just one session.",
      "If you're searching for a massage spa near you that offers something beyond the usual relaxation or deep tissue options, our Lymphatic Massage is a wellness-focused choice worth adding to your routine — especially here in humid Cagayan de Oro, where fluid retention is common."
    ],
    accordionBenefits: [
      "Gentle technique to support natural detoxification",
      "Reduces bloating and fluid retention",
      "Improves circulation and skin appearance",
      "A soothing, low-pressure alternative to deep tissue",
      "Great before events or after travel"
    ]
  },
  'Herbal Ayurvedic Massage': {
    slug: 'herbal-ayurvedic-massage-cagayan-de-oro',
    heroTitle: 'Ayurvedic massage near me CDO',
    metaKeywords: 'herbal massage Cagayan de Oro, herbal compress massage CDO, ayurvedic spa near me, traditional herbal massage',
    accordionTitle: 'Experience traditional healing — book your Herbal Ayurvedic Massage at Ayurveda Massage Spa CDO today.',
    accordionText: [
      "Rooted in centuries-old healing tradition, our Herbal Ayurvedic Massage combines warm herbal oils with traditional herbal compresses to relieve pain, ease inflammation, and restore balance to both body and mind. It's one of the most sought-after Ayurvedic spa treatments for guests in Cagayan de Oro looking for something deeper than a standard oil massage.",
      "During the treatment, our therapists apply warm herbal-infused oil using firm, rhythmic strokes, often paired with heated herbal compresses pressed gently into tired, aching muscles. The natural warmth and herbal properties work together to soothe joint pain, ease muscle stiffness, and calm the nervous system — making it especially popular among guests dealing with arthritis-like discomfort or chronic tension.",
      "This treatment draws on the same traditional Ayurvedic principles used across Southeast Asia for generations, adapted here in CDO with locally-sourced herbs and oils suited to our tropical climate. It's a favorite among guests who want a massage near them that feels genuinely therapeutic, not just relaxing.",
      "If your body has been asking for something more restorative than your usual spa visit, our Herbal Ayurvedic Massage offers a grounded, traditional approach to healing — right here in the heart of Cagayan de Oro."
    ],
    accordionBenefits: [
      "Warm herbal oils and compresses for deep relief",
      "Eases joint pain and chronic muscle stiffness",
      "Rooted in traditional Ayurvedic healing practices",
      "Calms the mind while restoring physical balance",
      "Ideal for guests seeking therapeutic, not just relaxing, treatment"
    ]
  },
  'Hot Stone Massage': {
    slug: 'hot-stone-massage-cagayan-de-oro',
    heroTitle: 'Hot stone massage near me CDO',
    metaKeywords: 'hot stone massage Cagayan de Oro, hot stone spa near me, relaxing massage CDO, best massage spa Cagayan de Oro',
    accordionTitle: 'Let the warmth work its magic — book a Hot Stone Massage at Ayurveda Massage Spa CDO in Cagayan de Oro.',
    accordionText: [
      "There's something instantly calming about the warmth of smooth heated stones gliding across tense muscles. Our Hot Stone Massage uses that gentle, penetrating heat to relax muscle fibers faster than hands alone — letting our therapists work deeper with less discomfort, for a session that feels both indulgent and genuinely therapeutic.",
      "Smooth basalt stones are heated to a soothing, safe temperature and placed on key points along your back, palms, and feet, while our therapist uses additional heated stones to massage tight areas like the shoulders, neck, and lower back. The heat helps loosen stiff muscles, improve blood flow, and melt away stress in a way that a standard massage sometimes can't.",
      "This is one of the most requested treatments among guests searching for a hot stone massage near them in CDO, especially those with chronic muscle tightness or guests who simply love the deep, cozy warmth of the stones. It's also a wonderful treat during Cagayan de Oro's cooler evenings or rainy season, when that soothing heat feels especially comforting.",
      "If you're looking for a massage spa near you that combines relaxation with real therapeutic value, our Hot Stone Massage is a guest favorite worth experiencing for yourself."
    ],
    accordionBenefits: [
      "Heated stones relax muscles faster and deeper",
      "Soothing warmth ideal for chronic tension",
      "Improves circulation and eases stiffness",
      "A cozy, indulgent spa experience",
      "Great year-round, especially during rainy season"
    ]
  },
  'Cupping / Ventosa Massage': {
    slug: 'cupping-ventosa-massage-cagayan-de-oro',
    heroTitle: 'Ventosa massage CDO',
    metaKeywords: 'cupping massage Cagayan de Oro, ventosa near me, cupping therapy CDO, traditional cupping spa near me',
    accordionTitle: 'Rediscover a trusted Filipino tradition — book a Cupping (Ventosa) Massage at Ayurveda Massage Spa CDO today.',
    accordionText: [
      "A long-time Filipino favorite, Ventosa — or cupping therapy — uses suction cups placed along tense muscle areas to draw blood flow to the surface, release deep-seated tension, and relieve that heavy, achy feeling many of us know all too well after a long week of work or travel around CDO.",
      "Our therapists apply specially designed cups to the back, shoulders, and neck, creating gentle suction that lifts tissue and encourages circulation in a way that hands-only massage cannot replicate. Many guests describe an immediate feeling of lightness and looseness after their ventosa session, especially in areas where tension has been trapped for a long time.",
      "This treatment is especially popular among guests dealing with muscle stiffness from physical labor, sports, or simply the wear and tear of daily life in Cagayan de Oro. It's often combined with our Deep Tissue Massage for guests who want the best of both traditional and modern techniques in one session.",
      "If you grew up knowing ventosa as a trusted home remedy for body pain, you'll appreciate how our licensed therapists bring that same traditional practice into a clean, professional spa setting — safe, effective, and deeply relieving."
    ],
    accordionBenefits: [
      "Traditional suction therapy trusted by generations of Filipinos",
      "Relieves deep muscle tension and stiffness",
      "Improves blood circulation to sore areas",
      "Pairs well with Deep Tissue Massage",
      "Performed by trained, licensed therapists"
    ]
  },
  'Foot, Hand & Back Massage': {
    slug: 'foot-hand-back-massage-cagayan-de-oro',
    heroTitle: 'Foot massage near me CDO',
    metaKeywords: 'hand and back massage Cagayan de Oro, foot spa near me, foot hand back massage CDO, quick massage near me',
    accordionTitle: 'Short on time, not on tension — book a Foot, Hand & Back Massage at Ayurveda Massage Spa CDO today.',
    accordionText: [
      "Not every visit needs a full two-hour session. Our Foot, Hand & Back Massage is designed for guests who want fast, focused relief exactly where they need it most — perfect for a lunch break escape, a quick stop before running more errands around CDO, or simply when time is tight but your body still needs attention.",
      "This treatment concentrates on the three areas that carry the most daily strain: tired feet from walking or standing all day, stiff hands from typing or manual work, and a tense back from hours of sitting or carrying bags around the city. Our therapists use focused pressure-point techniques on the feet, combined with kneading on the hands and back, to release tension efficiently without needing a full-body session.",
      "It's one of our most popular quick treatments among guests searching for a foot massage near them who want real results in a shorter amount of time. Many guests also choose it as an add-on before a big event, after a long flight, or simply as a regular mid-week reset.",
      "If you've been putting off self-care because you think you don't have time for a full spa visit, this treatment proves that even a short session at Ayurveda Massage Spa CDO can leave you feeling significantly more relaxed and refreshed."
    ],
    accordionBenefits: [
      "Fast, focused relief in a shorter session",
      "Targets feet, hands, and back — your most tired areas",
      "Perfect for lunch breaks or quick stops",
      "Great as a regular mid-week reset",
      "Combines well with other treatments as an add-on"
    ]
  },
  'Home & Hotel Services': {
    slug: 'home-hotel-massage-cagayan-de-oro',
    heroTitle: 'Home service massage CDO',
    metaKeywords: 'hotel massage Cagayan de Oro, massage at home CDO, mobile massage therapist Cagayan de Oro, in-room massage service',
    accordionTitle: 'Let us come to you — book a Home or Hotel Massage Service in Cagayan de Oro with Ayurveda Massage Spa CDO today.',
    accordionText: [
      "Why fight traffic or plan your day around a spa visit when the spa can come to you? Our Home & Hotel Massage Service brings the same trained therapists and quality treatments you'd get at Ayurveda Massage Spa CDO straight to your doorstep, condo, or hotel room anywhere in Cagayan de Oro.",
      "Whether you're a busy professional who wants a massage at home after work, a family hosting visiting relatives who'd love a relaxing treatment without leaving the house, or a traveler staying at a hotel in CDO who wants an in-room massage after a long day of meetings or sightseeing, our mobile therapists bring everything needed — portable table, oils, and clean linens — for a full professional experience wherever you are.",
      "We offer the same range of treatments available in our spa, from the Classic Swedish Massage to our signature Ayur Massage, all performed with the same care and hygiene standards you'd expect from a trusted massage spa near you. Simply book your preferred time, share your location, and our therapist will arrive ready to help you relax.",
      "It's the most convenient way to enjoy a home massage in Cagayan de Oro or a reliable hotel massage in CDO — no commute, no waiting room, just genuine relaxation on your own schedule."
    ],
    accordionBenefits: [
      "Professional massage delivered to your home or hotel",
      "Full range of treatments available, just like in-spa",
      "Ideal for busy professionals, families, and travelers",
      "Trained therapists bring all necessary equipment",
      "Book flexible times that fit your schedule"
    ]
  }
};

for (const [title, data] of Object.entries(updates)) {
  // Update slug and inject heroTitle, metaKeywords, and accordion content
  const blockRegex = new RegExp(`slug:\\s*["'][^"']+["'],\\s*title:\\s*["']${title}["']`);
  
  const injectString = `slug: "${data.slug}",
    title: "${title}",
    heroTitle: "${data.heroTitle}",
    metaKeywords: "${data.metaKeywords}",
    accordion: {
      title: \`${data.accordionTitle}\`,
      text: ${JSON.stringify(data.accordionText)},
      benefits: ${JSON.stringify(data.accordionBenefits)}
    }`;
    
  content = content.replace(blockRegex, injectString);
}

fs.writeFileSync('src/data/servicesData.js', content);
console.log('Updated servicesData.js with new slugs, hero titles, keywords, and accordions.');
