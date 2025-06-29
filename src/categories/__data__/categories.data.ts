import { Category } from '../types/categories.types';
import {
  CleaningIcon,
  PlumbingIcon,
  CarpentryIcon,
  ComputerIcon,
  ConstructionIcon,
  ElectricalIcon,
  InteriorDesignIcon,
  LegalIcon,
  MedicalIcon,
  PaintingIcon,
  PetsIcon,
  RemovalsIcon,
  RepairIcon,
} from '@/components/ui/icons';

export const featuredCategoryIcons: Partial<Record<Category, string>> = {
  [Category.CONSTRUCTION]: '/categories/construction.svg',
  [Category.REMOVAL]: '/categories/removals.svg',
  [Category.CLEANING]: '/categories/cleaning.svg',
  [Category.COMPUTER]: '/categories/computer.svg',
  [Category.ELECTRICAL]: '/categories/electrical.svg',
  [Category.PLUMBING]: '/categories/plumbing.svg',
  [Category.REPAIR]: '/categories/repair.svg',
  [Category.PAINTING]: '/categories/painting.svg',
  [Category.CARPENTRY]: '/categories/carpentry.svg',
  [Category.INTERIOR_DESIGN]: '/categories/interior_design.svg',
  [Category.MEDICAL]: '/categories/medical.svg',
  [Category.LEGAL]: '/categories/legal.svg',
  [Category.GARDENING]: '/categories/gardening.svg',
  [Category.ROOFING]: '/categories/roofing.svg',
  [Category.HVAC]: '/categories/hvac.svg',
  [Category.FLOORING]: '/categories/flooring.svg',
  [Category.HANDYMAN]: '/categories/handyman.svg',
  [Category.MOVING]: '/categories/moving.svg',
  [Category.SECURITY]: '/categories/security.svg',
  [Category.FITNESS]: '/categories/fitness.svg',
  [Category.BEAUTY]: '/categories/beauty.svg',
  [Category.AUTOMOTIVE]: '/categories/automotive.svg',
  [Category.PETS]: '/categories/pets.svg',
  [Category.EVENT_PLANNING]: '/categories/event-planning.svg',
};

// "#111827"
export const iconComponentMap: Partial<Record<Category, React.ComponentType<React.SVGProps<SVGSVGElement>>>> = {
  [Category.CONSTRUCTION]: ConstructionIcon,
  [Category.REMOVAL]: RemovalsIcon,
  [Category.CLEANING]: CleaningIcon,
  [Category.COMPUTER]: ComputerIcon,
  [Category.ELECTRICAL]: ElectricalIcon,
  [Category.PLUMBING]: PlumbingIcon,
  [Category.REPAIR]: RepairIcon,
  [Category.PAINTING]: PaintingIcon,
  [Category.CARPENTRY]: CarpentryIcon,
  [Category.INTERIOR_DESIGN]: InteriorDesignIcon,
  [Category.MEDICAL]: MedicalIcon,
  [Category.LEGAL]: LegalIcon,
  [Category.PETS]: PetsIcon,

  // Add more here
};
