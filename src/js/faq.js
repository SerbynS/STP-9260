import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export default function initFaq() {
  document.addEventListener('DOMContentLoaded', function () {
    new Accordion('.faq-list', {
      duration: 400,
      //   openOnInit: [0],
      showMultiple: true,
      elementClass: 'faq-item',
      triggerClass: 'title',
      panelClass: 'faq-ac-panel',
      openOnInit: [0, 1, 2, 3, 4, 5],
      //   activeClass: 'is-active',
    });
  });
}
