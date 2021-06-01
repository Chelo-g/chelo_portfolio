var logoclass = ".logo";

/* make span for each character */
$(logoclass)
  .children()
  .addBack()
  .contents()
  .each(function () {
    if (this.nodeType == 3) {
      var $this = $(this);
      $this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
    }
  });
