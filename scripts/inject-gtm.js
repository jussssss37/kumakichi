const fs = require('fs');
const path = require('path');

const GTM_HEAD_SCRIPT = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKP36CQQ');</script>
<!-- End Google Tag Manager -->`;

const GTM_BODY_NOSCRIPT = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKP36CQQ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

function injectGTM(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // <head>タグの直後にGTMスクリプトを挿入
  if (!html.includes('GTM-KKP36CQQ')) {
    html = html.replace(/<head>/, `<head>${GTM_HEAD_SCRIPT}`);
    html = html.replace(/<body([^>]*)>/, `<body$1>${GTM_BODY_NOSCRIPT}`);

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ GTM injected into ${filePath}`);
  } else {
    console.log(`- GTM already exists in ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name === 'index.html') {
      injectGTM(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      injectGTM(fullPath);
    }
  }
}

// Process the out directory
const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  console.log('Injecting GTM into HTML files...');
  processDirectory(outDir);
  console.log('Done!');
} else {
  console.error('Error: out directory not found. Please run "npm run build" first.');
  process.exit(1);
}
