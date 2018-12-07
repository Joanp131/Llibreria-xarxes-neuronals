document.getElementById('catBtn').addEventListener('click', _=> loadLanguage('cat') );
document.getElementById('casBtn').addEventListener('click', _=> loadLanguage('cas') );
document.getElementById('enBtn').addEventListener('click', _=> loadLanguage('en') );

function loadLanguage(lang){
    fetch(`scripts/json/text_${lang}.json`)
        .then(res=>res.json())
        .then(locals=>{
            Object.entries(locals).forEach(([id,val])=>{
                document.getElementById(id).innerHTML = val;
            });
        });
}
