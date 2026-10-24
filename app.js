const items=[
{src:"assets/aurora.svg",title:"オーロラ",desc:"同梱アセットの表示テスト"},
{src:"assets/mountains.svg",title:"山並み",desc:"サムネイルと画像切り替え"},
{src:"assets/sunset.svg",title:"夕暮れ",desc:"相対パスでの画像読み込み"},
{src:"assets/ocean.svg",title:"深い海",desc:"一覧表示と選択状態のテスト"}];
let index=0, favs=new Set(JSON.parse(localStorage.getItem("gallery-favs")||"[]")), onlyFav=false;
const $=s=>document.querySelector(s);
function render(){
 const item=items[index];$("#hero").src=item.src;$("#hero").alt=item.title;$("#title").textContent=item.title;$("#desc").textContent=item.desc;$("#count").textContent=`${index+1} / ${items.length}`;$("#fav").textContent=favs.has(item.src)?"★":"☆";$("#fav").setAttribute("aria-pressed",String(favs.has(item.src)));$("#filter").textContent=onlyFav?"★ お気に入り表示中":"☆ お気に入り";
 const shown=items.filter(x=>!onlyFav||favs.has(x.src));$("#total").textContent=`${shown.length} 枚`;$("#grid").replaceChildren();
 shown.forEach(x=>{const i=items.indexOf(x),b=document.createElement("button");b.className="tile"+(i===index?" active":"");b.innerHTML=`<img src="${x.src}" alt=""><span>${x.title}${favs.has(x.src)?" ★":""}</span>`;b.addEventListener("click",()=>{index=i;render()});$("#grid").append(b)});
}
function move(n){index=(index+n+items.length)%items.length;render()}
$("#prev").addEventListener("click",()=>move(-1));$("#next").addEventListener("click",()=>move(1));
$("#fav").addEventListener("click",()=>{const key=items[index].src;favs.has(key)?favs.delete(key):favs.add(key);localStorage.setItem("gallery-favs",JSON.stringify([...favs]));render()});
$("#filter").addEventListener("click",()=>{onlyFav=!onlyFav;if(onlyFav&&!favs.has(items[index].src)){const i=items.findIndex(x=>favs.has(x.src));if(i>=0)index=i}render()});
render();
