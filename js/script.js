// 文章はすべてHTML側に書いてあります。このファイルは「動き」だけを担当します。

document.addEventListener("click", function (e) {
  // 商品一覧の横スクロール（▶ボタン）
  var next = e.target.closest("button[data-target]");
  if (next) {
    var list = document.getElementById(next.dataset.target);
    list.scrollBy({ left: list.clientWidth * 0.8 });
  }

  // トップ画像の前へ／次へ
  var hero = e.target.closest("button[data-hero]");
  if (hero) {
    var track = document.getElementById("hero");
    track.scrollBy({ left: track.clientWidth * 0.8 * Number(hero.dataset.hero) });
  }

  // 商品詳細：サムネイルを押すとメイン画像を切り替え
  var thumb = e.target.closest(".thumbs button");
  if (thumb) {
    document.querySelectorAll(".thumbs button").forEach(function (b) {
      b.removeAttribute("aria-current");
    });
    thumb.setAttribute("aria-current", "true");
    document.getElementById("main-image").src = thumb.querySelector("img").src;
  }
});
