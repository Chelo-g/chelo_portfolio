var logoclass = ".logo";
var logoclass2 = ".top-view__ruby";
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

$(logoclass2)
  .children()
  .addBack()
  .contents()
  .each(function () {
    if (this.nodeType == 3) {
      var $this = $(this);
      $this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
    }
  });
/*  */
$(function () {
  var headerHeight = 100; //固定ヘッダーの高さを入れる
  $('[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html, body").animate({ scrollTop: position }, 500, "swing"); //200はスクロールの移動スピードです
    return false;
  });
});
