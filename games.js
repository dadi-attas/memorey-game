// Registry of all games, grouped by category.
// Add/remove games here to update the menu.
window.GAMES = [
  {
    id: 'memory',
    title: 'זיכרון כרטיסים',
    category: 'memory',
    emoji: '🧠',
    file: 'memory.html',
    desc: 'מצא זוגות כרטיסים זהים'
  },
  {
    id: 'spot',
    title: 'מה השתנה',
    category: 'memory',
    emoji: '🔍',
    file: 'spot.html',
    desc: 'זכור את התמונה ומצא את ההבדל'
  },
  {
    id: 'proverbs',
    title: 'פתגמים',
    category: 'memory',
    emoji: '📜',
    file: 'proverbs.html',
    desc: 'השלם את הפתגם החסר'
  },

  {
    id: 'odd',
    title: 'היוצא דופן',
    category: 'logic',
    emoji: '🎯',
    file: 'odd.html',
    desc: 'מצא את מה שלא שייך'
  },
  {
    id: 'connection',
    title: 'חיבורים',
    category: 'logic',
    emoji: '🔗',
    file: 'connection.html',
    desc: 'חבר בין זוגות מתאימים'
  },
  {
    id: 'sequence',
    title: 'רצפים',
    category: 'logic',
    emoji: '📊',
    file: 'sequence.html',
    desc: 'השלם את הרצף'
  },
  {
    id: 'sort',
    title: 'מיון לסלים',
    category: 'logic',
    emoji: '🗂️',
    file: 'sort.html',
    desc: 'מיין פריטים לקטגוריות'
  },
  {
    id: 'belong',
    title: 'מה שייך',
    category: 'logic',
    emoji: '✅',
    file: 'belong.html',
    desc: 'בחר רק את הפריטים השייכים'
  },

  {
    id: 'shadow',
    title: 'צללים',
    category: 'visual',
    emoji: '👥',
    file: 'shadow.html',
    desc: 'זהה את הצל הנכון'
  },
  {
    id: 'blur',
    title: 'תמונה מטושטשת',
    category: 'visual',
    emoji: '🔎',
    file: 'blur.html',
    desc: 'זהה את התמונה המתקרבת'
  },
  {
    id: 'shapes',
    title: 'צורות',
    category: 'visual',
    emoji: '🔷',
    file: 'shapes.html',
    desc: 'זהה צורות בתוך צורה'
  },
  {
    id: 'puzzle',
    title: 'פאזל',
    category: 'visual',
    emoji: '🧩',
    file: 'puzzle.html',
    desc: 'הרכב את התמונה'
  },

  {
    id: 'simon',
    title: 'סיימון',
    category: 'reaction',
    emoji: '🎹',
    file: 'simon.html',
    desc: 'חזור על רצף הצבעים'
  },
  {
    id: 'bubbles',
    title: 'בועות סבון',
    category: 'reaction',
    emoji: '🫧',
    file: 'bubbles.html',
    desc: 'פוצץ את הבועות'
  },
  {
    id: 'stop',
    title: 'עצור בזמן',
    category: 'reaction',
    emoji: '⏱️',
    file: 'stop.html',
    desc: 'עצור בזמן הנכון'
  },
  {
    id: 'maze',
    title: 'מבוך',
    category: 'reaction',
    emoji: '🐭',
    file: 'maze.html',
    desc: 'הובל את העכבר לגבינה'
  },

  {
    id: 'math',
    title: 'חשבון',
    category: 'knowledge',
    emoji: '🔢',
    file: 'math.html',
    desc: 'תרגילי חיבור וחיסור'
  },
  {
    id: 'wordcomplete',
    title: 'השלם מילה',
    category: 'knowledge',
    emoji: '📝',
    file: 'wordcomplete.html',
    desc: 'השלם את האות החסרה'
  },
  {
    id: 'heavier',
    title: 'מה כבד יותר',
    category: 'knowledge',
    emoji: '⚖️',
    file: 'heavier.html',
    desc: 'מצא את הכבד יותר'
  },
  {
    id: 'clock',
    title: 'שעון',
    category: 'knowledge',
    emoji: '🕐',
    file: 'clock.html',
    desc: 'הצב את המספרים על השעון'
  },

  {
    id: 'coloring',
    title: 'צביעה',
    category: 'creative',
    emoji: '🎨',
    file: 'coloring.html',
    desc: 'צבע את התמונה'
  }
];

window.CATEGORIES = [
  { id: 'memory',    title: 'זיכרון',          color: '#f0c94a', textColor: '#5a4200' },
  { id: 'logic',     title: 'חשיבה ולוגיקה',    color: '#7dc9e8', textColor: '#0a3f55' },
  { id: 'visual',    title: 'תפיסה חזותית',    color: '#c59bd8', textColor: '#3a1850' },
  { id: 'reaction',  title: 'קשב ותגובה',       color: '#8dd38d', textColor: '#0f3f10' },
  { id: 'knowledge', title: 'ידע וכישורים',     color: '#f5a85a', textColor: '#5a2a00' },
  { id: 'creative',  title: 'יצירה',            color: '#f5a8c9', textColor: '#5a1f3c' }
];
