
import { 
  Layers, Activity, MapPin, Award, Cpu, Database, Globe, 
  Shield, Zap, History, Target, Eye, Lightbulb, Headset, 
  Rocket, Briefcase, Factory, Users, Truck, HardHat, Calculator,
  LucideIcon 
} from 'lucide-react';
import { SlideData, IconName } from './types';

export const THALES_BLUE = '#0055A4';
export const THALES_YELLOW = '#FFC107';

export const DEFAULT_SLIDE_DATA: SlideData = {
  companyName: 'THALES INFORMATIQUE',
  mainTitle: "PRÉSENTATION DE L'ENTREPRISE",
  
  historyTitle: 'Historique',
  historyText: "Intégrateur de solutions de gestion de référence à Casablanca. Depuis notre création, nous accompagnons la croissance des PME et ETI marocaines avec une expertise reconnue.",
  
  missionTitle: 'Mission',
  missionText: "« Accompagner les entreprises dans leur transformation digitale grâce à des solutions ERP complètes et performantes. »",
  
  visionTitle: 'Vision',
  visionText: "Démocratiser la performance opérationnelle par des ERP modernes, agiles et orientés Cloud pour l'Afrique.",
  
  valuesTitle: 'NOS VALEURS CLÉS',
  values: [
    { title: 'Innovation', icon: 'Lightbulb' },
    { title: 'Fiabilité', icon: 'Shield' },
    { title: 'Service Client', icon: 'Headset' },
    { title: 'Excellence', icon: 'Rocket' },
  ],
  
  sectorsTitle: "SECTEURS D'ACTIVITÉ",
  sectors: [
    'Industrie & Manufacturing', 'Finance & Comptabilité', 'Ressources Humaines',
    'Gestion de Projets', 'Distribution & Logistique', 'BTP & Construction'
  ],

  stats: [
    { value: '+150', label: 'CLIENTS SATISFAITS' },
    { value: '+200', label: 'PROJETS ERP RÉALISÉS' },
    { value: '100%', label: 'CERTIFIÉ SAGE / ERP' },
  ],

  accentColor: THALES_YELLOW, // Based on screenshot, but user can change to Blue
  backgroundColor: '#0a0e14',
  cardColor: '#161b22',
  
  logoIcon: 'Layers',
  historyIcon: 'History',
  missionIcon: 'Target',
  visionIcon: 'Eye',
};

export const ICON_MAP: Record<IconName, LucideIcon> = {
  Layers, Activity, MapPin, Award, Cpu, Database, Globe, 
  Shield, Zap, History, Target, Eye, Lightbulb, Headset, 
  Rocket, Briefcase, Factory, Users, Truck, HardHat, Calculator
};

export const AVAILABLE_ICONS: IconName[] = Object.keys(ICON_MAP) as IconName[];
