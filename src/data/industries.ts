import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'plumbing-construction',
    name: 'Plumbing & Construction',
    shortDesc: 'High-durability uPVC & CPVC systems for residential towers, commercial complexes, and hospitality.',
    iconName: 'plumbing',
    details: 'From single-family homes to 50-storey high-rise residential towers across Maharashtra and India, Sarvam Pipes delivers leak-proof, lead-free potable water distribution and quiet drainage systems that outlast traditional plumbing materials by decades.',
    recommendedPipes: ['uPVC Plumbing Pipes (Lead-Free)', 'CPVC Hot & Cold Water Systems', 'SWR Acoustic Soil & Waste Pipes'],
    benefits: [
      '100% lead-free certification compliant with international drinking water safety',
      'Zero corrosion, zero scaling, and zero metallic taste degradation',
      '50+ years design life with minimal structural maintenance',
      'Lightweight composition reduces building dead load significantly'
    ]
  },
  {
    id: 'agriculture-irrigation',
    name: 'Agriculture & Irrigation',
    shortDesc: 'High-pressure agricultural pipes, borewell casings, and drip irrigation feeder mains for Indian farmers.',
    iconName: 'agriculture',
    details: 'Powering green revolutions across Maharashtra, Gujarat, and central India. Our IS 4985 certified agricultural pipes and IS 12818 deep casing systems deliver higher flow rates under low pump energy, ensuring every drop reaches the roots.',
    recommendedPipes: ['Agri Pressure Pipes (Class 1-5)', 'Deep Well Casing & Screen Pipes', 'Column Pipes for Submersible Pumps'],
    benefits: [
      'Up to 30% higher water velocity due to smooth Hazen-Williams C-value of 150',
      '20-25% electricity savings for agricultural electric water pump sets',
      'High toughness against tractor vibrations and soil compaction',
      'Quick-Fit rubber ring socket jointing for swift field assembly'
    ]
  },
  {
    id: 'industrial-applications',
    name: 'Industrial Applications',
    shortDesc: 'Chemical-resistant piping networks for chemical processing, electroplating, water treatment, and manufacturing.',
    iconName: 'industrial',
    details: 'Modern manufacturing plants in MIDC Pune, Bhosari, Chakan, and Talegaon trust Sarvam industrial grade PVC and CPVC pipes for transferring acids, alkalis, brine, effluent fluids, and demineralized water safely under high pressures.',
    recommendedPipes: ['Schedule 80 Heavy Wall uPVC', 'High-Temp CPVC Industrial Piping', 'Effluent SWR Heavy-Duty Lines'],
    benefits: [
      'Exceptional resistance against inorganic acids, bases, salts, and paraffinic hydrocarbons',
      'Non-conductive material eliminates stray current and galvanic electrochemical decay',
      'Low thermal conductivity prevents sweating and minimizes line insulation costs',
      'Precision solvent weld joints withstand continuous pneumatic and hydraulic cycles'
    ]
  },
  {
    id: 'electrical-telecom',
    name: 'Electrical & Telecom',
    shortDesc: 'Flame-retardant rigid PVC electrical conduits and optical fiber cable protection ducts.',
    iconName: 'telecom',
    details: 'Designed to protect vital power wiring and optical fiber networks from moisture, fire, rodents, and mechanical impacts in industrial substations, commercial buildings, and infrastructure projects.',
    recommendedPipes: ['Rigid PVC Electrical Conduit (LMS & HMS)', 'FRLS (Flame Retardant Low Smoke) Conduits', 'Telecom Underground Cable Ducts'],
    benefits: [
      'High dielectric strength ensures complete insulation and electrocution protection',
      'Self-extinguishing formula prevents flame propagation in electrical short circuits',
      'High impact resistance against crushing during concrete slab casting',
      'Frictionless inner wall makes cable pulling fast and snag-free'
    ]
  },
  {
    id: 'sewerage-drainage',
    name: 'Sewerage & Drainage',
    shortDesc: 'Zero-leakage underground gravity sewers, stormwater channels, and municipal drainage.',
    iconName: 'sewerage',
    details: 'Engineered for municipal and township infrastructure, Sarvam SWR and underground drainage pipes handle municipal wastewater, rainwater harvesting channels, and industrial effluents with zero groundwater contamination.',
    recommendedPipes: ['SWR Type B Underground Drainage', 'Ring-Fit Soil & Waste Pipes', 'Perforated Sub-Surface Drainage Pipes'],
    benefits: [
      'Flexible elastomeric ring seals absorb ground settlement and seismic tremors',
      'Smooth hydraulic interior prevents silt deposition and grease blockages',
      'Resistant to aggressive sewer hydrogen sulfide gas and microbial corrosive attack',
      '100% water tightness protects surrounding groundwater aquifers from sewage contamination'
    ]
  }
];
