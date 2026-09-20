(() => {
  const w = 'https://wa.me/5551995765088';
  const faq = document.querySelector('#faq');
  const addBeforeFaq = (id, className, html) => {
    if (!faq || document.getElementById(id)) return;
    const section = document.createElement('section');
    section.id = id;
    section.className = className;
    section.innerHTML = html;
    faq.before(section);
  };
  addBeforeFaq('diferenciais', 'showcase-dark', '<div class="wrap"><div class="showcase-grid"><article><i>&#128197;</i><h3>Prazo Combinado</h3><p>O prazo &eacute; informado antes da confirma&ccedil;&atilde;o, conforme produto e quantidade.</p></article><article><i>&#127912;</i><h3>Personaliza&ccedil;&atilde;o Total</h3><p>Voc&ecirc; participa de todas as etapas da cria&ccedil;&atilde;o.</p></article><article><i>&#11088;</i><h3>Desde 2015</h3><p>Experi&ecirc;ncia na cria&ccedil;&atilde;o de produtos personalizados.</p></article><article><i>&#128172;</i><h3>Atendimento Direto</h3><p>Or&ccedil;amento e detalhes do pedido tratados diretamente pelo WhatsApp.</p></article></div></div>');
  addBeforeFaq('como-funciona', 'showcase-dark process', '<div class="wrap"><div class="showcase-title"><h2>Como <em>funciona</em></h2><p>Um processo simples e transparente, do pedido &agrave; entrega.</p></div><div class="process-grid"><article><b>01</b><i>&#128717;&#65039;</i><h3>Escolha o produto</h3><p>Navegue pelo cat&aacute;logo e escolha o que mais combina com voc&ecirc;.</p></article><article><b>02</b><i>&#127912;</i><h3>Envie sua ideia</h3><p>Fale com a Renata pelo WhatsApp e envie foto, nome ou frase.</p></article><article><b>03</b><i>&#128179;</i><h3>Confirme o pedido</h3><p>Voc&ecirc; recebe o or&ccedil;amento e combina todos os detalhes.</p></article><article><b>04</b><i>&#128230;</i><h3>Receba ou retire</h3><p>Produ&ccedil;&atilde;o com carinho, entrega ou retirada em Cap&atilde;o da Canoa.</p></article></div></div>');
  addBeforeFaq('depoimentos', 'showcase-dark testimonials', '<div class="wrap"><div class="showcase-title"><h2>Pedido claro e <em>sem surpresa</em></h2><p>Antes de produzir, alinhamos com voc&ecirc; os principais detalhes.</p></div><div class="testimonial-grid"><article><b>1</b><div><h3>Or&ccedil;amento individual</h3><p>O valor &eacute; informado conforme produto, quantidade e tipo de personaliza&ccedil;&atilde;o.</p></div></article><article><b>2</b><div><h3>Arte combinada</h3><p>Envie foto, nome, frase ou ideia para avaliarmos a melhor composi&ccedil;&atilde;o.</p></div></article><article><b>3</b><div><h3>Prazo confirmado</h3><p>A previs&atilde;o de produ&ccedil;&atilde;o &eacute; combinada antes da confirma&ccedil;&atilde;o do pedido.</p></div></article><article><b>4</b><div><h3>Pagamento facilitado</h3><p>Consulte as op&ccedil;&otilde;es dispon&iacute;veis e escolha a melhor para voc&ecirc;.</p></div></article><article><b>5</b><div><h3>Entrega ou retirada</h3><p>Consulte envio para sua cidade ou retirada em Cap&atilde;o da Canoa.</p></div></article><article><b>6</b><div><h3>Atendimento humano</h3><p>Fale diretamente com a Renata para tirar d&uacute;vidas sobre o seu pedido.</p></div></article></div></div>');

  document.querySelectorAll('.shirt-photo img').forEach(image => {
    image.addEventListener('error', () => {
      image.style.display = 'none';
      const area = image.closest('.shirt-photo');
      if (area && !area.querySelector('.image-unavailable')) {
        const notice = document.createElement('div');
        notice.className = 'image-unavailable';
        notice.setAttribute('role', 'img');
        notice.setAttribute('aria-label', image.alt || 'Imagem temporariamente indisponível');
        notice.innerHTML = '<span>&#128247;</span><strong>Imagem temporariamente indispon&iacute;vel</strong><small>Pe&ccedil;a fotos pelo WhatsApp</small>';
        area.appendChild(notice);
      }
    });
  });
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const price = card.querySelector('.price');
    if (!title || !price || card.querySelector('.product-whatsapp')) return;
    const hasDefinedPrice = /R\$\s*\d/.test(price.textContent || '');
    price.hidden = !price.classList.contains('product-price-visible') && !hasDefinedPrice;
    const button = document.createElement('a');
    button.className = 'product-whatsapp';
    button.href = w + '?text=' + encodeURIComponent('Olá, quero pedir um orçamento para: ' + title);
    button.target = '_blank';
    button.rel = 'noopener';
    button.textContent = 'Pedir orçamento no WhatsApp';
    price.after(button);
  });

  const catalog = document.querySelector('#camisetas');
  const categoryGroups = catalog?.querySelector('.catalog-groups');
  if (catalog && categoryGroups && !catalog.querySelector('.catalog-filters')) {
    const categoryMap = {
      'Camisetas': 'camisetas',
      'Bonés': 'bones',
      'Canecas e xícaras': 'canecas',
      'Chaveiros e enfeites': 'chaveiros',
      'Body de bebê': 'body',
      'Almofadas': 'almofadas',
      'Azulejos': 'azulejos',
      'Squeezes': 'squeezes',
      'Outros produtos': 'outros'
    };
    [...categoryGroups.querySelectorAll('.product-category')].forEach(group => {
      const title = group.querySelector('.product-category__head h3')?.textContent?.trim();
      group.dataset.category = categoryMap[title] || 'outros';
    });

    const filters = [
      ['all', 'Todos'], ['camisetas', 'Camisetas'], ['bones', 'Bonés'], ['canecas', 'Canecas'],
      ['almofadas', 'Almofadas'], ['azulejos', 'Azulejos'], ['body', 'Body bebê'],
      ['chaveiros', 'Chaveiros'], ['squeezes', 'Squeezes']
    ];
    const controls = document.createElement('div');
    controls.className = 'catalog-filters';
    controls.setAttribute('aria-label', 'Filtrar produtos por categoria');
    controls.innerHTML = '<span>Filtrar por categoria:</span>' + filters.map(([value, label], index) =>
      `<button type="button" class="catalog-filter${index === 0 ? ' is-active' : ''}" data-filter="${value}" aria-pressed="${index === 0}">${label}</button>`
    ).join('');
    catalog.querySelector('.heading')?.after(controls);

    controls.addEventListener('click', event => {
      const button = event.target.closest('.catalog-filter');
      if (!button) return;
      const selected = button.dataset.filter;
      controls.querySelectorAll('.catalog-filter').forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      categoryGroups.querySelectorAll('.product-category').forEach(group => {
        group.hidden = selected !== 'all' && group.dataset.category !== selected;
      });
    });
  }
})();
