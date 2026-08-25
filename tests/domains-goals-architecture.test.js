const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');

assert.match(html, /const defaultDomains\s*=\s*\[/, 'life domains must be defined');
assert.match(html, /function normalizeGoalTree\(/, 'goal tree normalization must exist');
assert.match(html, /function renderGoalTree\(/, 'inline goal hierarchy renderer must exist');
assert.match(html, /function createSubGoal\(/, 'goals must support child goals');
assert.match(html, /function createGoalPlan\(/, 'goals must support action plans');
assert.match(html, /goal-card/, 'goals need their own rich visual cards');
assert.match(html, /gold/, 'goal styling must include gold palette semantics');
assert.match(html, /estimatedAt/, 'sub-goals must support estimated completion time');
assert.match(html, /completedAt/, 'sub-goals must support actual completion time');
assert.match(html, /parentGoalId/, 'plans created from goals must record their goal parent');
assert.match(html, /parentStepId/, 'plans must continue supporting recursive step plans');

console.log('Domains and goals architecture tests passed.');
