import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterProjects,
  filterSkills,
  calculatePortfolioStats,
} from './portfolioUtils';
import { PROJECTS, SKILLS } from '../data/portfolioData';

test('validateContactForm - rejects empty fields', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validateContactForm - detects invalid email formatting', () => {
  const result = validateContactForm({
    name: 'Aditya Swain',
    email: 'not-an-email',
    subject: 'Project inquiry',
    message: 'Hello Aditya, we would love to collaborate on a new project.',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.email?.includes('valid email'));
});

test('validateContactForm - accepts valid inputs', () => {
  const result = validateContactForm({
    name: 'Alex Mercer',
    email: 'alex.mercer@example.com',
    subject: 'Senior Full Stack Role at VeloTech',
    message: 'Hi Aditya, we reviewed your portfolio and would like to discuss a senior engineering opportunity with our team.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterProjects - filters by category and search query correctly', () => {
  const allProjects = filterProjects(PROJECTS, 'All', '');
  assert.equal(allProjects.length, PROJECTS.length);

  const fullStackProjects = filterProjects(PROJECTS, 'Full Stack', '');
  assert.ok(fullStackProjects.length > 0);
  assert.ok(fullStackProjects.every((p) => p.category === 'Full Stack'));

  const searchResults = filterProjects(PROJECTS, 'All', 'OpenCV');
  assert.equal(searchResults.length, 1);
  assert.equal(searchResults[0].id, 'ai-proctoring-system');

  const emptyResults = filterProjects(PROJECTS, 'All', 'nonexistentquery123');
  assert.equal(emptyResults.length, 0);
});

test('filterSkills - filters by category and search term correctly', () => {
  const frontendSkills = filterSkills(SKILLS, 'Frontend', '');
  assert.ok(frontendSkills.length > 0);
  assert.ok(frontendSkills.every((s) => s.category === 'Frontend'));

  const reactSkill = filterSkills(SKILLS, 'All', 'React');
  assert.ok(reactSkill.length >= 1);
  assert.ok(reactSkill[0].name.includes('React'));
});

test('calculatePortfolioStats - computes correct counts', () => {
  const stats = calculatePortfolioStats(PROJECTS);
  assert.equal(stats.totalProjects, PROJECTS.length);
  assert.ok(stats.totalCategories >= 2);
  assert.ok(stats.featuredCount >= 1);
  assert.ok(stats.uniqueTagsCount > 10);
});
