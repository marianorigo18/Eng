function TiemposVerbales(pronombre, time, verb, trad, form){
    this.pronombre = pronombre;
    this.time = time;
    this.verb = verb;
    this.trad = trad;
    this.form = form;
}

const simple1 = new TiemposVerbales('i', '', 'learn', 'yo aprendo', 'presente');
const simple2 = new TiemposVerbales('i', '', 'learned', 'yo aprendi', 'pasado');
const simple3 = new TiemposVerbales('i', 'will', 'learn', 'yo aprendere', 'futuro');
const simple4 = new TiemposVerbales('you', 'will', 'learn', 'tu aprenderas', 'futuro');
const simple5 = new TiemposVerbales('he', 'will', 'learn', 'el aprendera', 'futuro');
const simple6 = new TiemposVerbales('she', 'will', 'learn', 'el aprendera', 'futuro');
const simple7 = new TiemposVerbales('i', 'would', 'learn if i studied', 'yo aprenderia si yo estudiara', 'condicional');
const simple8 = new TiemposVerbales('i', 'should', 'learn', 'yo deberia aprender', '');
const simple9 = new TiemposVerbales('i', 'can', 'learn', 'yo puedo aprender', '');
const simple10 = new TiemposVerbales('i', 'mast', 'learn', 'yo tengo aprender', '');
const simple11 = new TiemposVerbales('i', 'may', 'learn', 'yo de pronto aprenda', '');


console.log(simple7 )
