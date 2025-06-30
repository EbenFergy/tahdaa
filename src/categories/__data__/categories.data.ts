import { Category } from '../types/categories.types';
import {
  CleaningIcon,
  PlumbingIcon,
  CarpentryIcon,
  ConstructionIcon,
  ElectricalIcon,
  InteriorDesignIcon,
  PaintingIcon,
  RepairIcon,
  SmartHomeIcon,
  MowerIcon,
  AutoRepairIcon,
  RemovalIcon,
} from '@/components/ui/icons';

// "#111827"
export const iconComponentMap: Partial<Record<Category, React.ComponentType<React.SVGProps<SVGSVGElement>>>> = {
  [Category.ELECTRICAL]: ElectricalIcon, // 1. High-skill & licensed
  [Category.APPLIANCES]: RepairIcon, // 2. Urgent, popular, recurring
  [Category.CLEANING]: CleaningIcon, // 3. High volume, fast job matching
  [Category.SMART_HOME]: SmartHomeIcon, // 4. Perceived as premium tech service

  [Category.PLUMBING]: PlumbingIcon, // 5. Useful post-licensing launch
  [Category.PAINTING]: PaintingIcon, // 6. Visual upgrade + high demand
  [Category.INTERIOR_DESIGN]: InteriorDesignIcon, // 7. TV mounting, assembly, curtains
  [Category.CARPENTRY]: CarpentryIcon, // 8. Shelf installs, storage solutions

  [Category.LANDSCAPING]: MowerIcon, // 9. Outdoor upkeep
  [Category.AUTO]: AutoRepairIcon, // 10. Mobile mechanic, oil, jumpstart
  [Category.JUNK_REMOVAL]: RemovalIcon, // 11. Post-move & tenant cleanup
  [Category.CONSTRUCTION]: ConstructionIcon, // 12. Reserved for larger projects
};

// Start with Residential + Light Commercial

// Apartment unit repairs

// Deep cleans

// Smart home installs

// TV mounting

// Move-in prep
//  👉 These are fast-moving, build trust, and show traction quickly.
