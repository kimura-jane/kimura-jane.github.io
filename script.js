const QUESTIONS=[{q:"いまの気分は？",a:["元気","普通","のんびり"]},{q:"ご飯は？",a:["しっかり味","プレーン","ほんのり"]},{q:"食感は？",a:["もちもち","サクッ","しっとり"]},{q:"食べたい具は？",a:["魚介系","肉系","変わり種"]},{q:"甘い・辛い？",a:["甘め","中間","ピリ辛"]}];
const TYPES=[{n:"小松菜と炙り鮭チーズ",img:"01_komatsuna_aburishake_cheese.jpg",msg:"バランス派！"},
{n:"山わさびとクリームチーズ",img:"02_yamawasabi_creamcheese.jpg",msg:"刺激とまろやか。"},
{n:"ダブル昆布",img:"03_double_konbu.jpg",msg:"旨み二段重ね。"},
{n:"梅きんぴらごぼう",img:"04_umekin_gobo.jpg",msg:"さっぱり爽快。"},
{n:"大葉みそ",img:"05_ohba_miso.jpg",msg:"和の香り。"},
{n:"じゃがいもとカレーそぼろ",img:"06_jagaimo_curry_soboro.jpg",msg:"ボリューム満点！"}];
function makeQuiz(){const sec=document.getElementById('quizSection');QUESTIONS.forEach((q,i)=>{const d=document.createElement('div');d.className='q';d.innerHTML=`<p>${i+1}. ${q.q}</p>`;q.a.forEach((t,j)=>{d.innerHTML+=`<label><input type="radio" name="q${i}" value="${j+1}" required> ${t}</label>`});sec.appendChild(d)});const b=document.createElement('button');b.textContent='診断 ▶';b.onclick=submitQuiz;sec.appendChild(b)}
function submitQuiz(){let s=0;for(let i=0;i<QUESTIONS.length;i++){const el=document.querySelector(`input[name=q${i}]:checked`);if(!el){alert('全て回答してね');return;}s+=Number(el.value)}const idx=s<=6?0:s<=7?1:s<=8?2:s<=10?3:s<=12?4:5;const t=TYPES[idx];document.getElementById('resultTitle').textContent=`あなたは「${t.n}」タイプ！`;document.getElementById('resultImg').src=t.img;document.getElementById('resultMsg').textContent=t.msg;const star="★".repeat(1+Math.floor(Math.random()*5));document.getElementById('starLine').textContent=`今日の運勢: ${star}`;document.getElementById('luckyTaste').textContent=`ラッキー味: ${["しお","しょうゆ","みそ","ゆかり","ごま塩"][Math.floor(Math.random()*5)]}`;document.getElementById('luckyAction').textContent=`ラッキー行動: ${["深呼吸","散歩","ストレッチ","笑顔","新曲を聴く"][Math.floor(Math.random()*5)]}`;document.getElementById('quizSection').hidden=true;document.getElementById('resultSection').hidden=false}
document.getElementById('startBtn').onclick=()=>{makeQuiz();document.getElementById('startBtn').parentNode.hidden=true;document.getElementById('quizSection').hidden=false}
document.getElementById('againBtn').onclick=()=>location.reload();
