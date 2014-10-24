(function() {
  'use strict';

  var parts = window.location.pathname.split('/'),
      store = chrome.storage.local,
      options,
      orgAndRepo;

  if (parts.length > 2) {
    orgAndRepo = parts.slice(1, 3).join('/');
    store.get(null, function(val) {
      options = val;
      load(orgAndRepo);
    });
  }

  function updateUI(payload) {
    var html, el;
    if (!payload.results.length) {
      return;
    }

    html =  '<div class="porthole-notice">';
    html += '<h1>Attention: Real customers have issues here!</h1>';
    html += '<ul>';

    payload.results.forEach(function(val) {
      var issues = val.custom_fields.filter(function(cf) {
        return cf.value.indexOf(orgAndRepo) !== -1;
      })
      .map(function(iss) {
        return ' <a target="_blank" href="'+iss.value+'">'+iss.value+'</a>';
      });

      html += '<li>';
      html += 'ticket: <a target="_blank" href="'+val.url+'" title="'+val.subject+'">#' + val.id + '</a> ';
      html += 'issues: ' + issues.join('');
      html += '</li>';
    });
    html += '</ul></div>';

    el = document.querySelectorAll('.repo-container')[0];
    el.insertAdjacentHTML('afterbegin', html)
  }

  function load(query) {
    var url, xhr;
    url = 'https://'+options.subdomain+'.zendesk.com/api/v2/search.json?query=status<solved|+fieldvalue:' + query;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        updateUI(JSON.parse(xhr.responseText));
      }
    }
    xhr.open('GET', url, true, options.username, options.password);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(null);
  }

}());
