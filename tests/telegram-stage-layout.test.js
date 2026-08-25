const assert=require('node:assert/strict');const fs=require('node:fs');const h=fs.readFileSync('index.html','utf8');
assert.match(h,/--tg-bg/,'Telegram-style color tokens exist');
assert.match(h,/telegram-header/,'Telegram-style compact header exists');
assert.match(h,/renderLifeGoalStages/,'life goals render stages as steps');
assert.match(h,/type: 'life-goal'/,'life goal data remains supported');
console.log('Telegram layout and stage architecture tests passed.');
