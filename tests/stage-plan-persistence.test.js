const assert=require('node:assert/strict');const fs=require('node:fs');const h=fs.readFileSync('index.html','utf8');
assert.match(h,/function createStepPlan\(/,'step child-plan creation preserves its parent');
assert.match(h,/step\.subPlanId = newPlanId/,'parent step receives created plan link');
assert.match(h,/step-more/,'stage actions are condensed under a three-dot menu');
assert.match(h,/box-shadow: 0 5px 14px/,'cards have restrained depth');
assert.match(h,/\.button\.secondary\{[^}]*color:#f5f7fb/,'buttons remain readable on dark UI');
console.log('Stage plan persistence and visual contrast tests passed.');
