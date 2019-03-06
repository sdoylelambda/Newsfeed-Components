// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.menu-button'); 
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.classList.text = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.panelButtons.addEventListener('hover', () => this.togglePanel());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
this.expandButton.classList.toggle
this.expandButton.classList.toggle('expandButton')
  }
}

const articles = document.querySelector('.article');

articles.forEach(function(article){
  return new Article(article);
});

