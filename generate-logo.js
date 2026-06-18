const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'sk-73c6886b82a64d00adf44d147b2dcf63';
const API_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation';

// New refined logo prompt
const logoPrompt = `Design a premium luxury brand logo mark for "Woven Plateau" — a high-end handwoven Tibetan carpet brand. 

Requirements:
- Abstract geometric mark combining a stylized mountain peak (3 peaks, Tibetan plateau) with subtle woven textile thread lines
- The mountain shape should be formed by parallel diagonal lines suggesting warp threads on a loom
- Color: single color deep warm brown (#5C4033) on transparent/white background
- Ultra minimalist, flat vector style
- No text, no letters, icon only
- Clean, sophisticated, museum-quality — think MOMA Store or Hermès aesthetic
- The mark should work at very small sizes (favicon) and large sizes (storefront)
- Symmetrical, balanced, timeless design
- Avoid: cartoon style, gradients, shadows, 3D effects, complex details`;

function callAPI(prompt, size) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'z-image-turbo',
      input: {
        messages: [{
          role: 'user',
          content: [{ text: prompt }]
        }]
      },
      parameters: {
        prompt_extend: false,
        size: size
      }
    });

    const req = https.request(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 120000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); }
        catch (e) { reject(new Error('Parse error: ' + body.slice(0, 200))); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    req.write(data);
    req.end();
  });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const doGet = (u) => {
      https.get(u, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          doGet(res.headers.location);
        } else {
          const file = fs.createWriteStream(filepath);
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
          file.on('error', reject);
        }
      }).on('error', reject);
    };
    doGet(url);
  });
}

async function main() {
  console.log('=== Generating New Logo ===');
  
  const outDir = path.join(__dirname, 'public/images/logo');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Try 3 variations
  for (let i = 0; i < 3; i++) {
    console.log(`\nVariation ${i + 1}...`);
    try {
      const result = await callAPI(logoPrompt, '1024*1024');
      
      if (result.code) {
        console.log(`FAIL: ${result.code} - ${result.message}`);
        continue;
      }

      const imgUrl = result.output?.choices?.[0]?.message?.content?.find(c => c.image)?.image;
      if (!imgUrl) {
        console.log('FAIL: No image URL in response');
        console.log(JSON.stringify(result, null, 2).slice(0, 500));
        continue;
      }

      const filepath = path.join(outDir, `logo-mark-v${i + 1}.png`);
      await downloadImage(imgUrl, filepath);
      console.log(`OK -> ${filepath}`);
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
    }
    
    if (i < 2) await new Promise(r => setTimeout(r, 3000));
  }

  console.log('\n=== Done ===');
}

main().catch(console.error);
