document.getElementById('catBtn').addEventListener('click', _=> loadLanguage('cat') );
document.getElementById('casBtn').addEventListener('click', _=> loadLanguage('cas') );
document.getElementById('enBtn').addEventListener('click', _=> loadLanguage('en') );

function loadLanguage(lang){
    fetch(`scripts/json/text_${lang}.json`)
        .then(file => file.json())
        .then(json => {
            Object.entries(json).forEach(([id,text])=>{
                document.getElementById(id).innerText = text;
            });
        });
}
