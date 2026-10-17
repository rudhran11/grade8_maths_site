
document.addEventListener('DOMContentLoaded',()=>{
 const search=document.querySelector('[data-search]');
 if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('[data-search-card]').forEach(el=>{el.hidden=!el.innerText.toLowerCase().includes(q)})})}
 const zone=document.querySelector('[data-dropzone]'),input=document.querySelector('[data-file-input]');
 if(zone&&input){
  const result=document.querySelector('[data-file-result]'),nameEl=document.querySelector('[data-file-name]'),pathEl=document.querySelector('[data-file-path]'),titleEl=document.querySelector('[data-file-title]'),copyBtn=document.querySelector('[data-copy-path]');
  const slug=s=>s.toLowerCase().replace(/\.html?$/,'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'new-page';
  const handle=async files=>{const f=files&&files[0];if(!f)return;if(!/\.html?$/i.test(f.name)){alert('Please choose an .html file.');return}
   let content='';try{content=await f.text()}catch(e){}
   const title=(content.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]||f.name;
   const clean=title.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').trim();
   let folder='notes';if(/test|quiz|assessment/i.test(f.name+' '+clean))folder='upcoming-tests/test-02';else if(/session|lesson|class/i.test(f.name+' '+clean))folder='sessions/session-01';
   const finalName=slug(f.name).replace(/-html$/,'')+'.html';
   nameEl.textContent=f.name;titleEl.textContent=clean;pathEl.textContent=folder+'/'+finalName;result.classList.add('show');copyBtn.onclick=()=>{navigator.clipboard.writeText(pathEl.textContent).then(()=>{copyBtn.textContent='Copied!';setTimeout(()=>copyBtn.textContent='Copy path',1400)}).catch(()=>{const r=document.createRange();r.selectNodeContents(pathEl);window.getSelection().removeAllRanges();window.getSelection().addRange(r)})};
  };
  input.addEventListener('change',e=>handle(e.target.files));
  zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('dragover')});
  zone.addEventListener('dragleave',()=>zone.classList.remove('dragover'));
  zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('dragover');handle(e.dataTransfer.files)});
  zone.addEventListener('click',e=>{if(e.target.closest('label')||e.target.closest('button'))return;input.click()});
 }
 const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
});
