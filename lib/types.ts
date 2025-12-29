/**
 * Type definitions for the Planter app
 * Defines core types and interfaces used throughout the application
 */

/**
 * Represents a plant species with its characteristics and care requirements
 */
export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  description?: string;
  imageUrl?: string;
  category: PlantCategory;
  difficulty: DifficultyLevel;
  wateringFrequency: WateringSchedule;
  lightRequirement: LightLevel;
  temperature: TemperatureRange;
  humidity: HumidityLevel;
  soilType: SoilType;
  fertilizer?: FertilizerInfo;
  growthRate: GrowthRate;
  matureHeight?: {
    min: number;
    max: number;
    unit: 'cm' | 'inches';
  };
  matureWidth?: {
    min: number;
    max: number;
    unit: 'cm' | 'inches';
  };
  bloomSeason?: string;
  bloomColor?: string[];
  toxicity?: ToxicityLevel;
  petFriendly: boolean;
  childFriendly: boolean;
  commonProblems?: string[];
  propagationMethods?: PropagationMethod[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Represents a user's plant instance (a specific plant they own)
 */
export interface UserPlant {
  id: string;
  userId: string;
  plantId: string;
  plant: Plant;
  nickname?: string;
  location?: string;
  acquiredDate: Date;
  lastWateredDate?: Date;
  lastFertilizedDate?: Date;
  notes?: string;
  photos: PlantPhoto[];
  health: HealthStatus;
  wateringReminder: ReminderSchedule;
  fertilizingReminder?: ReminderSchedule;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Represents a care activity performed on a plant
 */
export interface CareLog {
  id: string;
  userPlantId: string;
  activityType: CareActivityType;
  date: Date;
  notes?: string;
  photos?: string[];
  nextScheduledDate?: Date;
  createdAt: Date;
}

/**
 * Represents a photo of a user's plant
 */
export interface PlantPhoto {
  id: string;
  userPlantId: string;
  url: string;
  caption?: string;
  takenAt: Date;
  createdAt: Date;
}

/**
 * Reminder configuration for plant care activities
 */
export interface ReminderSchedule {
  enabled: boolean;
  frequency: ReminderFrequency;
  dayOfWeek?: number; // 0-6 (Sunday-Saturday)
  time?: string; // HH:MM format
  notificationMethod: NotificationMethod;
}

/**
 * User profile and preferences
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  location?: string;
  timezone?: string;
  preferences: UserPreferences;
  plants: UserPlant[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User preferences and settings
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  defaultReminderTime?: string;
}

/**
 * Enums and Constants
 */

export enum PlantCategory {
  SUCCULENT = 'succulent',
  HERBS = 'herbs',
  VEGETABLES = 'vegetables',
  FLOWERS = 'flowers',
  FOLIAGE = 'foliage',
  CACTI = 'cacti',
  ORCHIDS = 'orchids',
  FERNS = 'ferns',
  TREES = 'trees',
  SHRUBS = 'shrubs',
  VINES = 'vines',
  MOSS = 'moss',
  OTHER = 'other',
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export enum WateringSchedule {
  DAILY = 'daily',
  EVERY_2_DAYS = 'every_2_days',
  EVERY_3_DAYS = 'every_3_days',
  WEEKLY = 'weekly',
  EVERY_2_WEEKS = 'every_2_weeks',
  MONTHLY = 'monthly',
  AS_NEEDED = 'as_needed',
}

export enum LightLevel {
  FULL_SUN = 'full_sun',
  PARTIAL_SUN = 'partial_sun',
  PARTIAL_SHADE = 'partial_shade',
  FULL_SHADE = 'full_shade',
  INDIRECT = 'indirect',
}

export enum HumidityLevel {
  LOW = 'low',
  MODERATE = 'moderate',
  HIGH = 'high',
  VERY_HIGH = 'very_high',
}

export enum SoilType {
  POTTING_MIX = 'potting_mix',
  CACTUS_SOIL = 'cactus_soil',
  PEAT_MOSS = 'peat_moss',
  LOAMY = 'loamy',
  SANDY = 'sandy',
  CLAY = 'clay',
  WELL_DRAINING = 'well_draining',
}

export enum GrowthRate {
  SLOW = 'slow',
  MODERATE = 'moderate',
  FAST = 'fast',
  VERY_FAST = 'very_fast',
}

export enum ToxicityLevel {
  NON_TOXIC = 'non_toxic',
  MILDLY_TOXIC = 'mildly_toxic',
  TOXIC = 'toxic',
  HIGHLY_TOXIC = 'highly_toxic',
}

export enum HealthStatus {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  FAIR = 'fair',
  POOR = 'poor',
  CRITICAL = 'critical',
}

export enum CareActivityType {
  WATERING = 'watering',
  FERTILIZING = 'fertilizing',
  PRUNING = 'pruning',
  REPOTTING = 'repotting',
  PROPAGATION = 'propagation',
  PEST_TREATMENT = 'pest_treatment',
  DISEASE_TREATMENT = 'disease_treatment',
  INSPECTION = 'inspection',
}

export enum ReminderFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  BIWEEKLY = 'biweekly',
  MONTHLY = 'monthly',
  CUSTOM = 'custom',
}

export enum NotificationMethod {
  IN_APP = 'in_app',
  EMAIL = 'email',
  PUSH = 'push',
  SMS = 'sms',
}

export enum PropagationMethod {
  SEEDS = 'seeds',
  CUTTINGS = 'cuttings',
  DIVISION = 'division',
  LAYERING = 'layering',
  OFFSETS = 'offsets',
  SPORES = 'spores',
}

/**
 * Temperature range with min and max values
 */
export interface TemperatureRange {
  min: number;
  max: number;
  unit: 'celsius' | 'fahrenheit';
}

/**
 * Fertilizer information
 */
export interface FertilizerInfo {
  type: string;
  npkRatio: string; // e.g., "10-10-10"
  frequency: WateringSchedule;
  notes?: string;
}

/**
 * API Response types
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
