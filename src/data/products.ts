import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'upvc-plumbing-pipes',
    name: 'uPVC Plumbing Pipes',
    category: 'upvc',
    shortDesc: 'Virgin raw materials ensuring durable long lasting pipes.',
    fullDesc: 'Sarvam uPVC (Unplasticized Polyvinyl Chloride) plumbing pipes are manufactured using 100% virgin grade resin compound. Specially formulated with non-toxic stabilizers, these pipes guarantee odorless, hygienic, and lead-free potable water conveyance for residential, commercial, and institutional architectures.',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    badge: 'Lead-Free Certified',
    standards: ['IS 4985:2000', 'ASTM D 1785', 'SCH 40 & SCH 80'],
    sizes: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")', '65 mm (2-1/2")', '80 mm (3")', '100 mm (4")'],
    pressureRatings: ['Class 1 (2.5 kgf/cm²)', 'Class 2 (4 kgf/cm²)', 'Class 3 (6 kgf/cm²)', 'SCH 40 (Up to 28 kgf/cm²)', 'SCH 80 (Up to 40 kgf/cm²)'],
    keyFeatures: [
      '100% Lead-Free & Heavy Metal Free for 100% Safe Drinking Water',
      'UV Stabilized to prevent degradation under direct Indian solar conditions',
      'Mirror-smooth internal bore minimizing friction loss & energy requirement',
      'High chemical and corrosion resistance against hard water & scaling',
      'Simple, permanent cold solvent cement jointing with zero leak risk'
    ],
    applications: [
      'Potable water distribution in high-rise apartments and townships',
      'Cold water supply lines in commercial complexes & hotels',
      'Industrial chemical fluid distribution lines',
      'RO water purification plant piping'
    ],
    specsTable: [
      { property: 'Density', value: '1.40 - 1.45 g/cm³', testMethod: 'IS 13360' },
      { property: 'Tensile Strength at Yield', value: '≥ 45 MPa', testMethod: 'ISO 6259' },
      { property: 'Vicat Softening Temperature', value: '≥ 80°C', testMethod: 'IS 13360 (Part 6)' },
      { property: 'Short Term Hydrostatic Pressure', value: 'No Bursting / Leaking at 4.2x rated pressure for 1 hour', testMethod: 'IS 4985' },
      { property: 'Impact Strength (TIR)', value: '≤ 10% failure rate at 0°C', testMethod: 'IS 12235' }
    ]
  },
  {
    id: 'cpvc-pipes-fittings',
    name: 'CPVC Pipes & Fittings',
    category: 'cpvc',
    shortDesc: 'State-of-the-art precision and matching technology.',
    fullDesc: 'Engineered for extreme temperature resistance, Sarvam CPVC (Chlorinated Polyvinyl Chloride) piping systems endure continuous hot water circulation up to 93°C. Formulated with high chlorine content polymer, Sarvam CPVC prevents bacterial colonization, biofilm formation, and thermal expansion fatigue in modern sanitary installations.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot & Cold Water up to 93°C',
    standards: ['IS 15778', 'ASTM D 2846', 'SDR 11 & SDR 13.5'],
    sizes: ['15 mm (1/2")', '20 mm (3/4")', '25 mm (1")', '32 mm (1-1/4")', '40 mm (1-1/2")', '50 mm (2")'],
    pressureRatings: ['SDR 11 (Class 1: 27.6 bar at 23°C / 6.8 bar at 82°C)', 'SDR 13.5 (Class 2: 21.8 bar at 23°C / 5.5 bar at 82°C)'],
    keyFeatures: [
      'Withstands high working temperatures up to 93°C continuous',
      'Exceptional fire retardancy (Flash Ignition Temp > 482°C, LOI 60)',
      'Lowest bacterial growth index among all plastic & metallic piping',
      'No calcification, zero galvanic corrosion, and minimal heat dissipation',
      'One-step fast cure solvent cement assembly with precision molded brass transition fittings'
    ],
    applications: [
      'Centralized solar water heater and boiler distribution lines',
      'Hot & cold potable water distribution in villas, hotels & hospitals',
      'Industrial electroplating & chemical acid wash lines',
      'Geothermal heating and cooling circuits'
    ],
    specsTable: [
      { property: 'Specific Gravity', value: '1.50 - 1.55 g/cm³', testMethod: 'ASTM D 792' },
      { property: 'Tensile Strength', value: '≥ 50 MPa', testMethod: 'ASTM D 638' },
      { property: 'Thermal Conductivity', value: '0.14 W/m·K', testMethod: 'ASTM C 177' },
      { property: 'Vicat Softening Point', value: '≥ 103°C', testMethod: 'IS 15778' },
      { property: 'Limiting Oxygen Index (LOI)', value: '60%', testMethod: 'ASTM D 2863' }
    ]
  },
  {
    id: 'swr-pipes-fittings',
    name: 'SWR Pipes & Fittings',
    category: 'swr',
    shortDesc: 'High class quality center resisting industry and environmental corrosion.',
    fullDesc: 'Sarvam Soil, Waste & Rainwater (SWR) drainage systems provide absolute security against sewage leakage, odors, and corrosive degradation. Available in both Ring-Fit (interlocking EPDM synthetic rubber ring) and Self-Fit (solvent cement) designs, these pipes handle high-velocity effluent discharge without blockage or encrustation.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    badge: '100% Odor & Leak Proof',
    standards: ['IS 13592 (Type A & Type B)', 'IS 14735 Fittings'],
    sizes: ['75 mm (2-1/2")', '90 mm (3")', '110 mm (4")', '160 mm (6")'],
    pressureRatings: ['Type A (Rainwater discharge & ventilation)', 'Type B (Soil & waste discharge in underground/vertical stacks)'],
    keyFeatures: [
      'Factory-fitted German EPDM elastomeric sealing ring for foolproof expansion absorption',
      'UV-resistant grey formulation formulated for external façade exposure',
      'High impact resistance against accidental knocks and trench settling',
      'Smooth hydraulic inner wall guarantees rapid clog-free gravity flow',
      'Complete range of aerodynamic swept tees, bends with inspection doors, and multi-floor traps'
    ],
    applications: [
      'Soil, waste, and rainwater drainage for multi-storey residential towers',
      'Industrial sanitary and effluent gravity conveyance',
      'Ventilation stacks in modern wastewater treatment infrastructure',
      'Downspout roof rainwater harvesting networks'
    ],
    specsTable: [
      { property: 'Density', value: '1.41 - 1.46 g/cm³', testMethod: 'IS 13360' },
      { property: 'Longitudinal Reversion', value: '< 5%', testMethod: 'IS 12235 (Part 5)' },
      { property: 'Impact Strength', value: 'TIR < 10% with 1.5kg drop hammer at 0°C', testMethod: 'IS 12235 (Part 9)' },
      { property: 'Water Tightness', value: 'No leakage at 0.5 bar for 15 minutes', testMethod: 'IS 13592' },
      { property: 'Stress Relief', value: 'Passes test without cracking or flaking', testMethod: 'IS 12235' }
    ]
  },
  {
    id: 'casing-pipes-borewell',
    name: 'Casing Pipes & Borewell Systems',
    category: 'casing',
    shortDesc: 'Optimum yield delivering non-toxic water safely.',
    fullDesc: 'Sarvam Casing and Screen Pipes are specially manufactured for tubewell and deep borewell installations up to depths of 1,000+ feet. Engineered with specialized trapezoidal Acme threads and precision ribbed slots, these pipes protect well walls from collapse while maximizing water ingress without silt contamination.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    badge: 'Heavy Duty Deep Well 1000+ ft',
    standards: ['IS 12818:2010', 'Ribbed Screen & Plain Casing'],
    sizes: ['100 mm (4")', '115 mm (4-1/2")', '125 mm (5")', '150 mm (6")', '175 mm (7")', '200 mm (8")'],
    pressureRatings: ['CS (Shallow Well up to 80m)', 'CM (Medium Well up to 250m)', 'CD (Deep Well up to 400m / 1300ft)'],
    keyFeatures: [
      'High collapse resistance against extreme subterranean hydrostatic and tectonic pressures',
      'Precision CNC-cut trapezoidal female/male threads for swift, rock-solid vertical jointing',
      'Precision slotted screens filter out sand particles while maximizing groundwater yield',
      'Completely impervious to electrolytic and galvanic soil corrosion',
      'Significantly lighter than cast iron or MS casing, reducing rig crane handling costs'
    ],
    applications: [
      'Agricultural and rural borewell development',
      'Municipal groundwater extraction wells',
      'Mining dewatering and geotechnical piezometer monitoring',
      'Deep artificial rainwater recharge shaft construction'
    ],
    specsTable: [
      { property: 'Compressive Strength', value: '≥ 60 MPa', testMethod: 'IS 12818' },
      { property: 'Bending Strength', value: '≥ 85 MPa', testMethod: 'IS 12818' },
      { property: 'Thread Pull-out Load', value: '> 25 kN at 100mm pipe diameter', testMethod: 'IS 12818' },
      { property: 'Extrusion Quality (Acetone Test)', value: 'No flaking or delamination after 2 hours immersion', testMethod: 'IS 12235' },
      { property: 'Effect on Water Quality', value: 'Lead < 0.01 mg/L, Cadmium < 0.003 mg/L (Safe Potable)', testMethod: 'IS 12818' }
    ]
  },
  {
    id: 'agri-pipes-fittings',
    name: 'Agri Pipes & Fittings',
    category: 'agri',
    shortDesc: 'Capacity for high flows and pressure with effortless installation.',
    fullDesc: 'Sarvam Agricultural Pressure Pipes are the lifeline of Indian farmers, engineered to withstand high water flow rates, rugged agricultural terrain, and erratic electric pump pressure surges. Designed with elastomeric ring joints (Quick-Fit) or plain solvent socketing, these pipes ensure maximum water conservation for irrigation.',
    image: 'https://images.unsplash.com/photo-1592985737300-1af4aa97435f?auto=format&fit=crop&w=800&q=80',
    badge: 'IS 4985 ISI Marked',
    standards: ['IS 4985:2000', 'Class 1 to Class 5'],
    sizes: ['20 mm', '25 mm', '32 mm', '40 mm', '50 mm', '63 mm', '75 mm', '90 mm', '110 mm', '140 mm', '160 mm', '200 mm'],
    pressureRatings: ['Class 1 (2.5 kgf/cm²)', 'Class 2 (4 kgf/cm²)', 'Class 3 (6 kgf/cm²)', 'Class 4 (8 kgf/cm²)', 'Class 5 (10 kgf/cm²)'],
    keyFeatures: [
      'Ultra-smooth internal mirror finish ensures 30% higher flow rate compared to metal pipes',
      'Substantial electricity savings due to minimized frictional pump head loss',
      'Tough, flexible formulation absorbs tractor wheels, soil compaction and ground shifting',
      'Seamless elastomeric ring jointing allows rapid laying in long agricultural trenches',
      'Complete agro-fittings inventory: Service saddles, irrigation reducers, foot valves, and tailpieces'
    ],
    applications: [
      'Sub-surface lift irrigation and canal water distribution',
      'Drip and micro-sprinkler main and sub-main lines',
      'Farm tubewell and open dug-well delivery lines',
      'Horticulture, greenhouse, and pesticide spraying pipeline networks'
    ],
    specsTable: [
      { property: 'Density', value: '1.40 - 1.45 g/cm³', testMethod: 'IS 13360' },
      { property: 'Hydraulic Bursting Pressure', value: 'Passes 3.6x rated class working pressure', testMethod: 'IS 4985' },
      { property: 'Tensile Strength at Yield', value: '≥ 45 MPa', testMethod: 'IS 12235' },
      { property: 'Resistance to Sulphuric Acid', value: 'Mass change < 0.1%', testMethod: 'IS 12235' },
      { property: 'Opacity', value: '< 0.2% light transmittance (prevents algae growth)', testMethod: 'IS 12235' }
    ]
  }
];
