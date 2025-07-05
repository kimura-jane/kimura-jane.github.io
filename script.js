// --- 設問 --------------------------------------------------------------
const QUESTIONS = [
  { q: "いまの気分は？", a: ["がっつり‼", "さっぱり♪"] },
  { q: "どちらかと言えば？", a: ["お肉派", "魚派"] },
  { q: "海苔は…",           a: ["パリッ！", "しっとり◎"] },
  { q: "いま食べたい具は？", a: ["王道",   "変わり種"] },
  { q: "ひと言で言えば？",   a: ["元気いっぱい", "やさしい気分"] }
];

// --- 結果 6 タイプ ------------------------------------------------------
const TYPES = [
  { n:"小松菜と炙り鮭チーズ", img:"01_komatsuna_aburishake_cheese.jpg",
    msg:"香ばしチーズでご褒美気分！", luck:"★★★", taste:"チーズ",
    act:"とろける系フードを試す" },

  { n:"山わさびとクリームチーズ", img:"02_yamawasabi_creamcheese.jpg",
    msg:"ツン！ なのにクリーミー", luck:"★★", taste:"わさび",
    act:"新しいスパイスに挑戦" },

  { n:"ダブル昆布", img:"03_double_konbu.jpg",
    msg:"ほっと落ち着く海の旨み", luck:"★★★★★", taste:"塩こんぶ",
    act:"お茶タイムで一息" },

  { n:"梅きんぴらごぼう", img:"04_umekin_gobo.jpg",
    msg:"酸っぱ旨〜！メリハリ派", luck:"★★", taste:"梅",
    act:"散歩でリフレッシュ" },

  { n:"大葉みそ", img:"05_ohba_miso.jpg",
    msg:"みそのコクと大葉のさわやかさ", luck:"★★★", taste:"みそ",
    act:"グリーン系を取り入れる" },

  { n:"じゃがいもとカレーそぼろ", img:"06_jagaimo_curry_soboro.jpg",
    msg:"ボリューム満点、元気全開！", luck:"★", taste:"しょうゆ",
    act:"ちょい辛フードを試す" }
];

// --- 質問フォーム生成 ----------------------------------------------------
function makeQuiz () {
  const sec = document.getElementById('app');
  sec.innerHTML = QUESTIONS.map((q,i)=>`
    <div class="qbox">
      <p>${q.q}</p>
      ${q.a.map((v,j)=>`
        <label><input type="radio" name="q${i}" value="${j}" required> ${v}</label>
      `).join('<br>')}
    </div>
  `).join('') + `<button id="submitBtn">占う ▶</button>`;
  document.getElementById('submitBtn').onclick = submitQuiz;
}

// --- 回答 → 集計 → 結果表示 ------------------------------------------
function submitQuiz () {
  let score = 0;
  QUESTIONS.forEach((_,i)=>{
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if(val) score += Number(val.value);
  });
  const idx = Math.round( score / (QUESTIONS.length-1) * (TYPES.length-1) );
  showResult(TYPES[idx]);
}

function showResult(t){
  const sec = document.getElementById('app');
  sec.innerHTML = `
    <div class="card">
      <img src="${t.img}" alt="${t.n}">
      <h2>あなたは『${t.n}』タイプ！</h2>
      <p>${t.msg}</p>
      <hr>
      <p><strong>今日の運勢：</strong>${t.luck}</p>
      <p><strong>ラッキー味：</strong>${t.taste}</p>
      <p><strong>ラッキー行動：</strong>${t.act}</p>
    </div>
    <button id="againBtn">もう一度占う</button>`;
  document.getElementById('againBtn').onclick = makeQuiz;
}

// --- 最初の画面 ---------------------------------------------------------
document.getElementById('startBtn').onclick = makeQuiz;
