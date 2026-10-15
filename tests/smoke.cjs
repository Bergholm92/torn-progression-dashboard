const fs=require('node:fs');const assert=require('node:assert/strict');
const s=fs.readFileSync('index.html','utf8');
const tests=[
 ['no hardcoded Manager advice',()=>assert(!s.includes('Keep Manager while evidence builds'))],
 ['current role conflict guard',()=>assert(s.includes('workConflict'))],
 ['pub unlock guard',()=>assert(s.includes('milestoneConflict'))],
 ['review crime is not presented as optimal',()=>assert(s.includes('"REVIEW_CRIME_TARGET"].includes'))],
 ['merit optimizer V3',()=>assert(s.includes('Merit Optimizer V3'))],
 ['no hardcoded next education course',()=>assert(!/next education[^\n]{0,120}Intermediate Programming/i.test(s))],
 ['render error diagnostics',()=>assert(s.includes('Dashboard render failed'))]
];
let failed=0;for(const [name,fn] of tests){try{fn();console.log('PASS',name)}catch(e){failed++;console.error('FAIL',name,e.message)}}if(failed)process.exitCode=1;
