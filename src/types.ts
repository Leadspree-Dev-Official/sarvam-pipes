export interface ProductItem {
  id: string;
  name: string;
  category: 'upvc' | 'cpvc' | 'swr' | 'casing' | 'agri';
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge?: string;
  standards: string[];
  sizes: string[];
  pressureRatings: string[];
  keyFeatures: string[];
  applications: string[];
  specsTable: {
    property: string;
    value: string;
    testMethod: string;
  }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  iconName: 'plumbing' | 'agriculture' | 'industrial' | 'telecom' | 'sewerage';
  details: string;
  recommendedPipes: string[];
  benefits: string[];
}

export interface QuoteRequest {
  id: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  deliveryLocation: string;
  productCategory: string;
  pipeSize: string;
  quantityUnits: number;
  unitType: 'meters' | 'bundles' | 'metric-tons';
  urgency: 'immediate' | 'within-15-days' | 'planning';
  notes?: string;
  status: 'submitted' | 'processing';
  createdAt: string;
}
