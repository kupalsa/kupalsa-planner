const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');

// A fresh or deleted planner must not show a fictional template plan.
assert.doesNotMatch(html, /goal:\s*'Build my focused plan'/, 'the template plan title must be removed');
assert.doesNotMatch(html, /<h1 id="goalTitle">Build my focused plan<\/h1>/, 'the template title must not be in the page markup');

// The empty state must guide the user to create a real remote plan.
assert.match(html, /function renderEmptyPlanner\(\)/, 'renderEmptyPlanner must exist');
assert.match(html, /Create your first plan/, 'empty state must offer a create-plan action');

// Removing a plan must preserve the private-data connection so My plans can still load.
const deleteStart = html.indexOf('async function deleteCurrentPlanner()');
assert.notEqual(deleteStart, -1, 'deleteCurrentPlanner must exist');
const deleteBody = html.slice(deleteStart, html.indexOf('\n    function applyTheme()', deleteStart));
assert.doesNotMatch(deleteBody, /localStorage\.removeItem\(connectionKey\)/, 'deleting a plan must not remove the data connection');
assert.match(deleteBody, /data\s*=\s*null/, 'deleting a plan must switch to the empty state');

console.log('Empty planner state tests passed.');
