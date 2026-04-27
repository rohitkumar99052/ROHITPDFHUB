const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Hide the desktop Navbar
const nav_start = content.indexOf('<nav className="sticky top-0 z-50 bg-white border-b border-solid border-slate-200 px-4 py-2 flex items-center justify-between shadow-sm">');
if (nav_start === -1) { console.log("Nav start not found!"); process.exit(1); }

const new_nav_class = '<nav className="hidden md:flex sticky top-0 z-50 bg-white border-b border-solid border-slate-200 px-4 py-2 items-center justify-between shadow-sm">';
content = content.substring(0, nav_start) + new_nav_class + content.substring(nav_start + 138);

const nav_end_idx = content.indexOf('</nav>', nav_start);
if (nav_end_idx === -1) { console.log("nav end not found!"); process.exit(1); }

const mobile_nav_code = `
      {/* Mobile Navbar (WhatsApp Style) */}
      <div className="md:hidden sticky top-0 z-50 bg-[#075E54] text-white shadow-md">
        <div className="px-4 py-3 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => { setSelectedTool(null); setFiles([]); }}
          >
            <div className="bg-white/20 p-2 rounded-full">
              <FileStack className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">SmallPDF</span>
          </div>
          
          <div className="flex items-center gap-5">
            <button onClick={() => setShowLanguageMenu(!showLanguageMenu)} className="relative">
              <span className="font-bold text-sm uppercase tracking-widest">{currentLanguage.substring(0, 2)}</span>
            </button>
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <MoreVertical className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
`;

content = content.substring(0, nav_end_idx + 6) + mobile_nav_code + content.substring(nav_end_idx + 6);

// 2. Hero Section
const hero_start = content.indexOf('<div className="text-center space-y-6 md:mt-20 mt-10 mb-16 relative">');
const new_hero_class = '<div className="hidden md:block text-center space-y-6 md:mt-20 mt-10 mb-16 relative">';
if (hero_start !== -1) {
    content = content.substring(0, hero_start) + new_hero_class + content.substring(hero_start + 71);
} else {
    console.log("Hero start not found!");
}

// 3. Categories section
const cat_start = content.indexOf('<div className="flex flex-wrap justify-center gap-2">');
if (cat_start !== -1) {
    const new_cat_block_prefix = `
              {/* MOBILE HERO SUBTITLE */}
              <div className="md:hidden bg-[#075E54] px-4 pb-2 text-white/80 text-xs">
                everything you need to manage your documents
              </div>

              {/* MOBILE CATEGORIES (WhatsApp Tabs) */}
              <div className="md:hidden bg-[#075E54] flex overflow-x-auto gap-6 px-4 pt-1 font-semibold text-sm border-b-2 border-transparent shadow-sm relative no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{\`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                \`}</style>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "pb-3 whitespace-nowrap border-b-[3px] transition-colors",
                      activeCategory === cat ? "border-white text-white font-bold" : "border-transparent text-white/60 font-medium"
                    )}
                  >
                    {translateCategory(cat)}
                  </button>
                ))}
              </div>

              {/* Desktop Categories */}
`;
    content = content.substring(0, cat_start) + new_cat_block_prefix + '<div className="hidden md:flex flex-wrap justify-center gap-2">' + content.substring(cat_start + 55);
} else {
    console.log("Categories start not found!");
}

// 4. Tool Grid
const grid_start = content.indexOf('<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">');
if (grid_start !== -1) {
    const new_grid_class = '<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">';
    content = content.substring(0, grid_start) + new_grid_class + content.substring(grid_start + 85);
    
    // Find where the grid ends
    const grid_end_sentinel = '              </div>\\n            </motion.div>\\n          ) : (';
    // Actually the newline characters in indexOf might be tricky, let's just use regex or small search
    const end_idx = content.indexOf('</motion.div>', grid_start);
    if (end_idx !== -1) {
        // find the </div> right before </motion.div>
        const div_end_idx = content.lastIndexOf('</div>', end_idx);
        
        const mobile_chat_list = `
              {/* WhatsApp Chat List (Mobile) */}
              <div className="md:hidden flex flex-col bg-white min-h-[calc(100vh-140px)]">
                {filteredTools.map((tool) => {
                  const tTool = translateTool(tool);
                  return (
                    <div
                      key={tool.id}
                      onClick={() => setSelectedTool(tool)}
                      className="flex items-center gap-4 px-4 py-3 hover:bg-slate-50 cursor-pointer active:bg-slate-100 transition-colors"
                    >
                      {/* DP Profile */}
                      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm", tool.color)}>
                        <tool.icon className="w-6 h-6" />
                      </div>
                      
                      {/* Chat Details */}
                      <div className="flex-1 overflow-hidden border-b border-slate-100 pb-3 mt-3">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <h3 className="font-semibold text-slate-900 text-base">{tTool.title}</h3>
                          {tool.featured && (
                            <span className="text-[10px] text-[#075E54] font-bold">Featured</span>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm truncate">{tTool.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
`;
        content = content.substring(0, div_end_idx + 6) + mobile_chat_list + content.substring(div_end_idx + 6);
    } else {
        console.log("Grid end sentinel not found!");
    }
} else {
    console.log("Grid start not found!");
}

if (!content.includes('MoreVertical')) {
    content = content.replace('LucideProps,', 'LucideProps, MoreVertical,');
}

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log("Done");
