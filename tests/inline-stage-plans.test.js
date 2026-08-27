const assert=require('node:assert/strict');const fs=require('node:fs');const h=fs.readFileSync('index.html','utf8');
assert.match(h,/function toggleInlineStepPlan\(/,'linked stage plans expand inline');
assert.match(h,/subplanBtn\.textContent = 'Создать план'/,'unlinked stages show only Create plan');
assert.match(h,/subplanBtn\.textContent = 'План'/,'linked stages show one Plan control');
assert.match(h,/stepMenu\.append\(actionGroup\)/,'only secondary actions live in overflow menu');
console.log('Inline stage plan controls tests passed.');
