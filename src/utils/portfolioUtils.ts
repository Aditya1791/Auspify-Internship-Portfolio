import { Project, Skill, ContactFormData, ContactFormErrors } from '../types/portfolio';

/**
 * Validates the contact form fields according to professional UX rules.
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (trimmedName.length > 80) {
    errors.name = 'Name must be under 80 characters.';
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Please enter a subject.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject should be at least 3 characters.';
  } else if (trimmedSubject.length > 120) {
    errors.subject = 'Subject cannot exceed 120 characters.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please write a message describing your inquiry.';
  } else if (trimmedMessage.length < 15) {
    errors.message = 'Please provide a bit more detail (minimum 15 characters).';
  } else if (trimmedMessage.length > 2000) {
    errors.message = 'Message must be within 2,000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters and searches project catalog by category and freeform query.
 */
export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' || project.category === category;

    if (!matchesCategory) return false;
    if (!query) return true;

    const inTitle = project.title.toLowerCase().includes(query);
    const inTagline = project.tagline.toLowerCase().includes(query);
    const inDesc = project.description.toLowerCase().includes(query);
    const inTags = project.tags.some((tag) => tag.toLowerCase().includes(query));

    return inTitle || inTagline || inDesc || inTags;
  });
}

/**
 * Filters skills list by category and search term.
 */
export function filterSkills(
  skills: Skill[],
  category: string,
  searchQuery: string
): Skill[] {
  const query = searchQuery.trim().toLowerCase();

  return skills.filter((skill) => {
    const matchesCategory =
      category === 'All' || skill.category === category;

    if (!matchesCategory) return false;
    if (!query) return true;

    return skill.name.toLowerCase().includes(query);
  });
}

/**
 * Calculates aggregate stats from project collection.
 */
export function calculatePortfolioStats(projects: Project[]) {
  const categories = new Set(projects.map((p) => p.category));
  const featured = projects.filter((p) => p.featured);
  const tagSet = new Set<string>();

  projects.forEach((p) => {
    p.tags.forEach((tag) => tagSet.add(tag));
  });

  return {
    totalProjects: projects.length,
    totalCategories: categories.size,
    featuredCount: featured.length,
    uniqueTagsCount: tagSet.size,
    allTags: Array.from(tagSet).sort(),
  };
}
