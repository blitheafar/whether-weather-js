/* eslint-disable */

function enableFacebookPixel() {
  fbq('consent', 'grant');
}

function enableGoogleAnalytcs() {
  const region = window.location.hostname.split('.')[0];

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'DC-9563190');
  gtag('config', 'UA-82940910-8');

  switch (region) {
    case 'apac':
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-9563190/landi0/laria000+standard',
      });
      break;
    case 'eu':
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-9563190/landi0/laria00+standard',
      });
      break;
    default:
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-9563190/landi0/laria0+standard',
      });
  }

  enableFacebookPixel();
}



function removeCookies() {
  // const region = window.location.hostname.split('.')[0];

  // remove Google Analytcs cookies
  if (window.ga) window.ga('remove');
  Cookies.remove('_ga', { path: '/', domain: '.larian.com' });
  Cookies.remove('_gcl_au', { path: '/', domain: '.larian.com' });
  Cookies.remove('_gid', { path: '/', domain: '.larian.com' });
  Cookies.remove('_gat_gtag_UA_82940910_8', { path: '/', domain: '.larian.com' });

  // Revoke FB pixel;
  fbq('consent', 'revoke');
  Cookies.remove('_fbp', { path: '/', domain: '.larian.com' });
}

// currency modal

function displayCurrencyModal() {
  const currencyCookie = Cookies.get('currency-modal');
  if (!currencyCookie) {
    $('.modal-currency').addClass('active');
  }
}

function changeCurrency(value) {
  Cookies.set('currency-modal', true, { expires: 365 });
  window.location = value;
}

// continent modal

function displayContinentModal() {
  const continentModal = $('.modal-content');
  const continentCookie = Cookies.get('continent-modal');
  if (continentModal && !continentCookie) {
    $('.modal-continent').addClass('active');
  }
}

$(document).ready(() => {
  const cookie_accept = Cookies.get('cookie_accept');
  const cookie_analytcs = Cookies.get('cookie_analytcs');

  if (typeof cookie_accept === 'undefined' || cookie_accept === 'false') {
    $('.ciastko').removeClass('hide');
  }

  if (cookie_analytcs === 'true') {
    $('#analytcs').prop('checked', true);
    enableGoogleAnalytcs();
  }

  $('.ciastko-accept').on('click', (e) => {
    e.preventDefault();
    Cookies.set('cookie_accept', true);
    Cookies.set('cookie_analytcs', true);

    $('.ciastko').addClass('hide');
    $('#analytcs').prop('checked', true);

    enableGoogleAnalytcs();
  });

  $('.ciastko-confirm').on('click', (e) => {
    var analytcs = $('#analytcs').is(':checked');

    e.preventDefault();

    Cookies.set('cookie_accept', true);
    $('.ciastko').addClass('hide');

    if (analytcs) {
      Cookies.set('cookie_analytcs', true);
      enableGoogleAnalytcs();
    } else {
      Cookies.set('cookie_analytcs', false);
      removeCookies();
    }
  });

  $('.cookie-settings').on('click', (e) => {
    e.preventDefault();

    $('.ciastko').removeClass('hide');
  })

  displayCurrencyModal();
  displayContinentModal();

  // close currency modal
  $('#close-currency-modal').click((e) => {
    e.preventDefault();
    Cookies.set('currency-modal', true, { expires: 365 });
    $('.modal-currency').removeClass('active');
  });

  // close continent modal
  $('#close-continent-modal').click((e) => {
    e.preventDefault();
    Cookies.set('continent-modal', true);
    $('.modal-continent').removeClass('active');
  });

  $('#close-continent-modal-btn').click((e) => {
    e.preventDefault();
    Cookies.set('continent-modal', true);
    $('.modal-continent').removeClass('active');
  });
});
