const assert=require('node:assert/strict'); const fs=require('node:fs'); const html=fs.readFileSync('index.html','utf8');
assert.match(html,/id="menuToggle"/,'hamburger menu toggle exists');
assert.match(html,/id="sideMenu"/,'collapsible side menu exists');
assert.match(html,/function setupSidebar\(/,'toolbar actions are moved into sidebar');
assert.match(html,/goal-more/,'sub-goal actions are condensed into a three-dot menu');
assert.match(html,/function findParentGoalPlan\(/,'action plans can find their parent goal');
assert.match(html,/Вернуться к цели/,'action plans show a return-to-goal control');
console.log('Navigation and menu tests passed.');
