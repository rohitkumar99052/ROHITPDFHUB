const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const fullDropStart = content.indexOf('{showMobileMenu && (');
const fullDropEnd = content.indexOf('</AnimatePresence>', fullDropStart) + 18;

const dropdownCode = content.substring(fullDropStart, fullDropEnd);
// Remove from old place
content = content.substring(0, fullDropStart - 17) + content.substring(fullDropEnd); // remove the block

// Put it in the new mobile nav
const mobileNavTarget = content.indexOf('</button>\n          </div>\n        </div>\n      </div>');

const modifiedDropdown = `
          {/* Mobile Dropdown Fixed to Top Right */}
          <div className="absolute right-4 top-14 z-[100] text-slate-900 pointer-events-none w-full">
            <div className="relative w-full h-full pointer-events-auto">
                ${dropdownCode}
            </div>
          </div>
`;

content = content.substring(0, mobileNavTarget + 10) + modifiedDropdown + content.substring(mobileNavTarget + 10);
fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log("Moved mobile dropdown successfully");
