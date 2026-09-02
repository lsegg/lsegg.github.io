/**
 * Sections that are built but not being shown yet.
 *
 * Each flag drives every place the section appears — the section itself, its
 * nav entry, and its route — so bringing one back is a one-line change here
 * rather than a hunt through three files.
 */
type Features = {
  blog: boolean;
  subscriptionPlans: boolean;
};

export const FEATURES: Features = {
  blog: false,
  subscriptionPlans: false,
};
