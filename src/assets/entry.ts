const osDark = window.matchMedia("(prefers-color-scheme: dark)")
const themeSwitch = document.getElementById("theme") as HTMLInputElement
// ダークモードがオンの時に実行する処理
function darkModeOn() {
  document.documentElement.dataset.theme = "dark"
}
// ダークモードがオフの時に実行する処理
function darkModeOff() {
  // クラスの削除
  document.documentElement.dataset.theme = "light"
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
themeSwitch.checked = osDark.matches
// 初期化処理
listener(osDark)

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    darkModeOn()
  } else {
    darkModeOff()
  }
})
