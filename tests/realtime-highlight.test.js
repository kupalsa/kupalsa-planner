const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');const h=fs.readFileSync('index.html','utf8');function fn(name){const s=h.indexOf(`function ${name}`);assert(s>=0);let b=0,on=false;for(let i=s;i<h.length;i++){if(h[i]==='{'){b++;on=true}else if(h[i]==='}'&&--b===0&&on)return h.slice(s,i+1)}throw Error(name)}
const c={dateKey:d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};vm.createContext(c);vm.runInContext(`
this.document = {
  querySelectorAll: (sel) => {
    return this.mockElements || [];
  }
};
this.Array = Array;
this.Date = Date;
this.String = String;
this.Number = Number;
${fn('updateActiveCalendarTasks')}
this.updateActiveCalendarTasks = updateActiveCalendarTasks;
`,c);

const mockElements = [
  {
    dataset: { date: '2026-08-31', time: '16:00', end: '19:00' },
    classList: {
      contains: () => false,
      remove: function(cls) { mockElements[0].active = false },
      toggle: function(cls, state) { if(cls==='occurrence-active') mockElements[0].active = state }
    }
  },
  {
    dataset: { date: '2026-08-31', time: '19:00', end: '' },
    classList: {
      contains: () => false,
      remove: function(cls) { mockElements[1].active = false },
      toggle: function(cls, state) { if(cls==='occurrence-active') mockElements[1].active = state }
    }
  }
];

c.mockElements = mockElements;
c.Date = class extends Date {
  constructor(...args) {
    if (args.length === 0) {
      super('2026-08-31T17:30:00'); // set custom mock now time
    } else {
      super(...args);
    }
  }
};

c.updateActiveCalendarTasks();
assert.equal(mockElements[0].active, true, '16:00-19:00 should be active at 17:30');
assert.equal(mockElements[1].active, false, '19:00 should not be active at 17:30');

c.Date = class extends Date {
  constructor(...args) {
    if (args.length === 0) {
      super('2026-08-31T19:15:00'); // set custom mock now time
    } else {
      super(...args);
    }
  }
};

c.updateActiveCalendarTasks();
assert.equal(mockElements[0].active, false, '16:00-19:00 should be inactive at 19:15');
assert.equal(mockElements[1].active, true, '19:00 should be active at 19:15');

console.log('Realtime calendar task highlight behavior passed.');
