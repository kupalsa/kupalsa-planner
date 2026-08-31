const assert=require('node:assert/strict');const fs=require('node:fs');const h=fs.readFileSync('index.html','utf8');
for(const token of ['--paper:','--ink:','id="calendarView"','data-view="today"','data-view="day"','data-view="week"','function normalizeStep(','function saveRoutineSchedule(','function calendarOccurrences(','function renderCalendar(','function createChildPlan(','function toggleInlinePlan(','function returnToParent(','min-width:900px','max-width:640px']) assert.ok(h.includes(token),`missing ${token}`);
assert.doesNotMatch(h,/--tg-bg|goal-card|renderGoalTree/,'legacy conflicting UI architecture must be removed');
console.log('Replacement planner architecture contract passed.');
