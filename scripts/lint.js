#!/usr/bin/env node
/**
 * Lightweight Linter & Validator for ADK lab Repository
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const filesToCheck = ['index.html', 'mobile.html', 'package.json'];

console.log('--- Running ADK lab Code & Format Lint ---');
let errors = 0;

filesToCheck.forEach(file => {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`  ✗ Missing file: ${file}`);
    errors++;
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  
  // Check for trailing whitespace issues or invalid characters
  if (content.includes('\r\n')) {
    console.warn(`  ⚠ Warning: ${file} contains CRLF line endings (recommend LF)`);
  }

  // Check JSON format
  if (file.endsWith('.json')) {
    try {
      JSON.parse(content);
      console.log(`  ✓ ${file}: Valid JSON`);
    } catch (e) {
      console.error(`  ✗ ${file}: Invalid JSON - ${e.message}`);
      errors++;
    }
  } else if (file.endsWith('.html')) {
    // Basic tag matching check
    const openTags = (content.match(/<html/g) || []).length;
    const closeTags = (content.match(/<\/html>/g) || []).length;
    if (openTags === closeTags && openTags === 1) {
      console.log(`  ✓ ${file}: Well-formed HTML container`);
    } else {
      console.error(`  ✗ ${file}: Mismatched <html> tags`);
      errors++;
    }
  }
});

if (errors > 0) {
  console.error(`\nLint failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('\nLint check passed cleanly! ✓\n');
  process.exit(0);
}
