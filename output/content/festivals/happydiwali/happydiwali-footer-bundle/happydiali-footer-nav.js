(function(){
  function injectFooter(){
    var footer = document.querySelector('footer');
    if(!footer){
      footer = document.createElement('footer');
      document.body.appendChild(footer);
    }
    if(footer.querySelector('.festival-footer-nav')) return;
    fetch('footer-links.html', {cache:'no-store'})
      .then(function(r){return r.text();})
      .then(function(html){
        var wrap = document.createElement('div');
        wrap.className = 'festival-footer-wrap';
        wrap.innerHTML = html;
        footer.appendChild(wrap);
      })
      .catch(function(){
        // Fallback inline if fetching fails
        var nav = document.createElement('nav');
        nav.className = 'festival-footer-nav';
        nav.style.marginTop = '20px';
        nav.style.fontSize = '13px';
        nav.innerHTML = 'अन्य पर्वों की शुभकामनाएँ देखें: \
        <a href=\"diwali-indian-languages-nobuttons.html\">दीवाली</a> | \
        <a href=\"makar-sankranti-indian-languages.html\">मकर संक्रांति</a> | \
        <a href=\"lohri-indian-languages.html\">लोहड़ी</a> | \
        <a href=\"bihu-indian-languages.html\">बीहू</a> | \
        <a href=\"chhath-puja-indian-languages.html\">छठ पूजा</a> | \
        <a href=\"maha-shivratri-indian-languages.html\">महाशिवरात्रि</a> | \
        <a href=\"janmashtami-indian-languages.html\">जन्माष्टमी</a> | \
        <a href=\"navratri-indian-languages.html\">नवरात्रि</a> | \
        <a href=\"dussehra-indian-languages.html\">दशहरा</a> | \
        <a href=\"guru-nanak-jayanti-indian-languages.html\">गुरु नानक जयंती</a> | \
        <a href=\"baisakhi-indian-languages.html\">बैसाखी</a> | \
        <a href=\"raksha-bandhan-indian-languages.html\">रक्षाबंधन</a> | \
        <a href=\"christmas-indian-languages.html\">क्रिसमस</a> | \
        <a href=\"new-year-indian-languages.html\">नया साल</a> | \
        <a href=\"onam-indian-languages.html\">ओणम</a> | \
        <a href=\"pongal-indian-languages.html\">पोंगल</a> | \
        <a href=\"thanksgiving-indian-languages.html\">थैंक्सगिविंग</a> | \
        <a href=\"holi-indian-languages.html\">होली</a>';
        footer.appendChild(nav);
      });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', injectFooter);
  }else{
    injectFooter();
  }
})();