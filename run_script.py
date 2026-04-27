import re
import sys

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hide the desktop Navbar
nav_start = content.find('<nav className="sticky top-0 z-50 bg-white border-b border-solid border-slate-200 px-4 py-2 flex items-center justify-between shadow-sm">')
if nav_start == -1:
    print("Nav start not found!")
    sys.exit(1)

new_nav_class = '<nav className="hidden md:flex sticky top-0 z-50 bg-white border-b border-solid border-slate-200 px-4 py-2 items-center justify-between shadow-sm">'
content = content[:nav_start] + new_nav_class + content[nav_start + len('<nav className="sticky top-0 z-50 bg-white border-b border-solid border-slate-200 px-4 py-2 flex items-center justify-between shadow-sm">'):]

# In App.tsx, the <nav> element currently ends at </nav>. We want to add the Mobile nav right before </nav> ends or right after it.
# Let's insert the mobile nav right below the closing </nav> tag.
nav_end_idx = content.find('</nav>', nav_start)
if nav_end_idx == -1:
    print("nav end not found!")
    sys.exit(1)

mobile_nav_code = """
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
"""

content = content[:nav_end_idx + 6] + mobile_nav_code + content[nav_end_idx + 6:]

# 2. Hero Section
# Original starts with: <div className="text-center space-y-6 md:mt-20 mt-10 mb-16 relative">
hero_start = content.find('<div className="text-center space-y-6 md:mt-20 mt-10 mb-16 relative">')
new_hero_class = '<div className="hidden md:block text-center space-y-6 md:mt-20 mt-10 mb-16 relative">'
if hero_start != -1:
    content = content[:hero_start] + new_hero_class + content[hero_start + len('<div className="text-center space-y-6 md:mt-20 mt-10 mb-16 relative">'):]
else:
    print("Hero start not found!")

# 3. Categories section
cat_start = content.find('<div className="flex flex-wrap justify-center gap-2">')
if cat_start != -1:
    # Let's inject Mobile Hero Sub and Mobile Categories right before this Desktop category block.
    # And make the desktop categories hidden on mobile.
    new_cat_block_prefix = """
              {/* MOBILE HERO SUBTITLE */}
              <div className="md:hidden bg-[#075E54] px-4 pb-2 text-white/80 text-xs">
                everything you need to manage your documents
              </div>

              {/* MOBILE CATEGORIES (WhatsApp Tabs) */}
              <div className="md:hidden bg-[#075E54] flex overflow-x-auto gap-6 px-4 pt-1 font-semibold text-sm border-b-2 border-transparent shadow-sm relative no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
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
"""
    content = content[:cat_start] + new_cat_block_prefix + '<div className="hidden md:flex flex-wrap justify-center gap-2">' + content[cat_start + len('<div className="flex flex-wrap justify-center gap-2">'):]
else:
    print("Categories start not found!")

# 4. Tool Grid
grid_start = content.find('<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">')
grid_end_idx = content.find('</div>', content.find('});', grid_start)) + 6 # this might be tricky, let's use a simpler replace.
if grid_start != -1:
    new_grid_class = '<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">'
    content = content[:grid_start] + new_grid_class + content[grid_start + len('<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">'):]
    
    # Now find where the grid ends to append the mobile chat list
    # Let's search for "              </div>\n            </motion.div>\n          ) : ("
    grid_end_sentinel = '              </div>\n            </motion.div>\n          ) : ('
    end_sentinel_idx = content.find(grid_end_sentinel)
    if end_sentinel_idx != -1:
        # The actual </div> for the grid is right before </motion.div>
        
        mobile_chat_list = """
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
"""
        # Insert mobile_chat_list right after the desktop grid's closing </div
        # The `end_sentinel_idx` points to "              </div>\n            </motion.div>..."
        # So it's right at the end of the tool grid block.
        content = content[:end_sentinel_idx + 20] + mobile_chat_list + content[end_sentinel_idx + 20:]
    else:
        print("Grid end sentinel not found!")
else:
    print("Grid start not found!")

# Optional: Add `MoreVertical` to lucide-react imports if not there
if 'MoreVertical' not in content:
    content = content.replace('LucideProps,', 'LucideProps, MoreVertical,')

if 'Language' not in content:
     pass # Languages is already imported

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("done")
