const GuideBook = require('guide-book-generator');

const settings = {
  style: 'build/style.css',
  source: 'source',
  output: 'guidebook.html'
};

const guideBook = new GuideBook();
guideBook.generate(settings);