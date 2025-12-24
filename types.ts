
export interface StatItem {
  value: string;
  label: string;
}

export interface ValueItem {
  title: string;
  icon: string;
}

export interface SlideData {
  companyName: string;
  mainTitle: string;
  
  // Left Sidebar
  historyTitle: string;
  historyText: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;

  // Main Content
  valuesTitle: string;
  values: ValueItem[];
  
  sectorsTitle: string;
  sectors: string[];

  // Footer Stats
  stats: StatItem[];

  // Style
  accentColor: string;
  backgroundColor: string;
  cardColor: string;
  
  // Icons
  logoIcon: string;
  historyIcon: string;
  missionIcon: string;
  visionIcon: string;
}

export type IconName = 'Layers' | 'Activity' | 'MapPin' | 'Award' | 'Cpu' | 'Database' | 'Globe' | 'Shield' | 'Zap' | 'History' | 'Target' | 'Eye' | 'Lightbulb' | 'Headset' | 'Rocket' | 'Briefcase' | 'Factory' | 'Users' | 'Truck' | 'HardHat' | 'Calculator';
