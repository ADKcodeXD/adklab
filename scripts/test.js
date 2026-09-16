#!/usr/bin/env node
/**
 * Lightweight CI Test Suite for ADK lab Portal
 * Follows AGENTS.md low-resource, targeted validation guidelines (< 2s execution).
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log('--- Running ADK lab Validation Tests ---');

// 1. Check core files existence
const indexFile = path.join(rootDir, 'index.html');
const mobileFile = path.join(rootDir, 'mobile.html');
assert(fs.existsSync(indexFile), 'index.html must exist');
assert(fs.existsSync(mobileFile), 'mobile.html must exist');

const indexHtml = fs.readFileSync(indexFile, 'utf8');
const mobileHtml = fs.readFileSync(mobileFile, 'utf8');

// 2. HTML syntax sanity
assert(indexHtml.includes('<!DOCTYPE html>'), 'index.html has valid DOCTYPE');
assert(indexHtml.includes('<title>') && indexHtml.includes('ADK lab'), 'index.html has valid title with ADK lab');
assert(mobileHtml.includes('<!DOCTYPE html>'), 'mobile.html has valid DOCTYPE');

// 3. Project data dictionary consistency in index.html
const expectedProjectKeys = [
  'quant',
  'dailynews',
  'notify',
  'traffic',
  'auth',
  'substore',
  'position',
  'cvranking',
  'myblog',
  'vue3-emoji',
  'mmgc',
  'adkblog-backend',
  'anime-audio',
  'easynote'
];

expectedProjectKeys.forEach(key => {
  const hasKeyInDict = indexHtml.includes(`'${key}': {`) || indexHtml.includes(`"${key}": {`);
  assert(hasKeyInDict, `projectData dictionary contains key: "${key}"`);
});

// 4. Modal button references match projectData
const buttonMatches = [...indexHtml.matchAll(/data-project="([^"]+)"/g)].map(m => m[1]);
assert(buttonMatches.length >= expectedProjectKeys.length, `Found ${buttonMatches.length} project trigger buttons`);

buttonMatches.forEach(key => {
  assert(expectedProjectKeys.includes(key), `Trigger button references valid project key: "${key}"`);
});

// 5. Cloud service domains check
const expectedDomains = [
  'quant.adkfintech.com',
  'dailynews.adkfintech.com',
  'notify.adkfintech.com',
  'traffic.adkfintech.com',
  'auth.adkfintech.com',
  'sub.adkproxy.top',
  'position.adkfintech.com',
  'cvranking.adkfintech.com'
];

expectedDomains.forEach(domain => {
  assert(indexHtml.includes(domain), `index.html includes cloud service domain: ${domain}`);
  assert(mobileHtml.includes(domain), `mobile.html includes cloud service domain: ${domain}`);
});

// 6. GitHub repos check
const expectedRepos = [
  'ADKcodeXD/Coordinate-based-Frame-Generator',
  'ADKcodeXD/japanese-voice-actor-ranking',
  'ADKcodeXD/MMGC-Project',
  'ADKcodeXD/Myblog-Vue3viteTs',
  'ADKcodeXD/Vue3-Emoji',
  'ADKcodeXD/ADKblog-backend',
  'ADKcodeXD/Anime-Audio-Dataset-Maker',
  'ADKcodeXD/EasyNote'
];

expectedRepos.forEach(repo => {
  assert(indexHtml.includes(repo), `index.html includes GitHub repository: ${repo}`);
  assert(mobileHtml.includes(repo), `mobile.html includes GitHub repository: ${repo}`);
});

// 7. No unreplaced placeholder strings or unwanted text
const forbiddenStrings = [
  'ADK Code Engine',
  'ADK Visual Lab',
  'projects/12559400244655682664',
  'FIXME',
  'TODO',
  'LIVE · PORT 8931',
  'LIVE PORTAL & ECOSYSTEM'
];
forbiddenStrings.forEach(str => {
  assert(!indexHtml.includes(str), `index.html should not contain forbidden string: "${str}"`);
  assert(!mobileHtml.includes(str), `mobile.html should not contain forbidden string: "${str}"`);
});

// 8. Screenshot assets check
const expectedScreenshots = [
  'quant.jpg',
  'dailynews.jpg',
  'notify.jpg',
  'traffic.jpg',
  'auth.jpg',
  'substore.jpg',
  'position.jpg',
  'cvranking.png',
  'myblog.png',
  'vue3-emoji.png',
  'mmgc.jpg',
  'adkblog-backend.jpg',
  'anime-audio.jpg',
  'easynote.jpg'
];

expectedScreenshots.forEach(imgName => {
  const imgPath = path.join(rootDir, 'assets', 'img', imgName);
  const exists = fs.existsSync(imgPath);
  assert(exists, `Screenshot asset exists: assets/img/${imgName}`);
  if (exists) {
    const stat = fs.statSync(imgPath);
    assert(stat.size > 10000, `Screenshot asset is non-empty (>10KB): ${imgName} (${Math.round(stat.size / 1024)}KB)`);
  }
});

console.log('\n--- Test Summary ---');
console.log(`Passed: ${passed}, Failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('All tests passed cleanly! ✓\n');
  process.exit(0);
}
