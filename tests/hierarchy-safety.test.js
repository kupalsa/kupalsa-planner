const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');

assert.match(html, /data = await fetchRemotePlan\(config\);\s*normalizeLoadedPlan\(data\);/, 'remote life goals must be normalized before rendering');
assert.match(html, /function normalizeLoadedPlan\(/, 'normalization helper must exist');
assert.match(html, /function canCreateTopGoal\(/, 'one-top-goal-per-domain guard must exist');
assert.match(html, /function hasPlanDescendants\(/, 'deletion must detect child action plans');
assert.match(html, /Block deletion/, 'deletion protection must state its intent');
assert.match(html, /textContent = item\.title/, 'library must use textContent for remote titles');
assert.match(html, /parentId: null, parentStepId: null/, 'unlink migration must preserve standalone plans');

console.log('Hierarchy safety regression tests passed.');
