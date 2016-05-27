;
(function () {
  function wrap(classes) {
    return '<i class="extfont ' + classes + '"></i>';
  }

  function wrapDevicons(ext) {
    return wrap('devicons devicons-' + ext);
  }

  var icons = {
    'js': wrapDevicons('javascript'),
    'css': wrapDevicons('css3_full'),
    'scss': wrapDevicons('sass'),
    'less': wrapDevicons('less'),
    'html': wrapDevicons('html5'),
    'md': wrapDevicons('markdown'),
    'hs': wrapDevicons('haskell'),
    'py': wrapDevicons('python'),
    'php': wrapDevicons('php'),
    'rb': wrapDevicons('ruby_rough'),
    'yml': wrapDevicons('database'),
    'yaml': wrapDevicons('database'),
    'json': wrapDevicons('database'),
    'swift': wrapDevicons('swift'),
    'plist': wrapDevicons('apple')
  };

  var f = document.querySelectorAll('tr.js-navigation-item');

  [].slice.call(f).forEach(function (tr) {
    var icon = tr.querySelector('.icon');
    var content = tr.querySelector('.content a');
    if (!content) {
      return;
    }
    var fn = content.innerText.trim();

    if (fn.toLowerCase() === 'license') {
      icon.innerHTML = '<i class="extfont fa fa-certificate"></i>';
    } else if (fn.startsWith('.git')) {
      icon.innerHTML = wrapDevicons('git');
    } else if (fn.startsWith('.npm')) {
      icon.innerHTML = wrapDevicons('npm');
    } else if (fn.endsWith('.sh')) {
      icon.innerHTML = '<i class="icon-script-alt"></i>';
    } else if (fn.includes('.')) {
      icon.innerHTML = icons[fn.split('.').slice(-1)[0]] || icon.innerHTML;
    }

  });
})();
