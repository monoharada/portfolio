console.log("init?")
const osDark = window.matchMedia("(prefers-color-scheme: dark)")
const themeSwitch = document.getElementById("themeSwitch")
// ダークモードがオンの時に実行する処理
function darkModeOn() {
  document.documentElement.dataset.theme = "dark" // ルート要素<html>にクラスを追加
}
// ダークモードがオフの時に実行する処理
function darkModeOff() {
  document.documentElement.classList.remove("darkmode") // クラスの削除
  document.documentElement.dataset.theme = "light" // ルート要素<html>にクラスを追加
}

// イベントリスナー
const listener = (event) => {
  if (event.matches) {
    darkModeOn()
  } else {
    darkModeOff()
  }
}
// リスナー登録
osDark.addEventListener("change", listener)
themeSwitch.checked = osDark
// 初期化処理
listener(osDark)

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    darkModeOn()
  } else {
    darkModeOff()
  }
})
