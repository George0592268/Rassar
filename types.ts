import { LucideIcon } from 'lucide-react';

export enum ModuleCategory {
  ENERGY = 'E',
  SAFETY = 'S',
  MANAGEMENT = 'M',
  PREDICTIVE = 'P',
  DIGITAL = 'D',
}

export enum ModuleLevel {
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  EXPERT = 'EXPERT',
}

export interface ModuleItem {
  id: string;
  code: string;
  name: string;
  category: ModuleCategory;
  level: ModuleLevel;
  costRange: string;
  paybackPeriod: string;
  description: string;
  impact: string[];
}

export interface CategoryConfig {
  label: string;
  color: string;
  bg: string;
  border: string;
  icon: LucideIcon;
}

export interface LevelConfig {
  label: string;
  color: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  description: string;
  result: string;
  iconName: 'metro' | 'oil' | 'factory' | 'server';
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProjectionData {
  year: string;
  cashflow: number;
  pureProfit: number;
}

export interface CalculatorResult {
  monthlyEnergySavings: number;
  monthlyMaintenanceSavings: number;
  annualSavings: number;
  implementationCost: number;
  roiMonths: number;
  co2Monthly: number;
  projectionData: ProjectionData[];
  weightedEnergySavingsPct: number;
}
