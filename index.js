;
(function () {
  function wrap(classes) {
    return '<i class="extfont ' + classes + '"></i>';
  }

  function wrapDevicons(ext) {
    return wrap('devicons devicons-' + ext);
  }

  function wrapFontAwesome(ext) {
    return wrap('fa fa-' + ext);
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
    'plist': wrapDevicons('apple'),
    'sh': wrapDevicons('terminal'),
    'exe': wrapDevicons('windows')
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
      icon.innerHTML = wrapFontAwesome('certificate');
    } else if (fn.startsWith('.git')) {
      icon.innerHTML = wrapDevicons('git');
    } else if (fn.startsWith('.npm')) {
      icon.innerHTML = wrapDevicons('npm');
    } else if (fn.includes('.')) {
      icon.innerHTML = icons[fn.split('.').slice(-1)[0]] || icon.innerHTML;
    }

  });
})();
