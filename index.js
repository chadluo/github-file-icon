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
    'bat': wrapDevicons('terminal_badge'),
    'clj': wrapDevicons('clojure'),
    'css': wrapDevicons('css3_full'),
    'exe': wrapDevicons('windows'),
    'hs': wrapDevicons('haskell'),
    'html': wrapDevicons('html5'),
    'js': wrapDevicons('javascript'),
    'json': wrapDevicons('database'),
    'less': wrapDevicons('less'),
    'markdown': wrapDevicons('markdown'),
    'md': wrapDevicons('markdown'),
    'mdown': wrapDevicons('markdown'),
    'php': wrapDevicons('php'),
    'plist': wrapDevicons('apple'),
    'py': wrapDevicons('python'),
    'rb': wrapDevicons('ruby_rough'),
    'scss': wrapDevicons('sass'),
    'sh': wrapDevicons('terminal'),
    'swift': wrapDevicons('swift'),
    'yaml': wrapDevicons('database'),
    'yml': wrapDevicons('database')
  };

  [].slice.call(document.querySelectorAll('tr.js-navigation-item')).forEach(function (tr) {
    var icon = tr.querySelector('.icon');
    var content = tr.querySelector('.content a');
    if (!content) {
      return;
    }
    var fn = content.innerText.trim();

    if (fn.toLowerCase() === 'license') {
      icon.innerHTML = wrapFontAwesome('certificate');
    } else if (fn === 'configure') {
      icon.innerHTML = wrapFontAwesome('cog');
    } else if (fn === 'manifest.json') {
      icon.innerHTML = wrapDevicons('chrome');
    } else if (fn === 'CNAME') {
      icon.innerHTML = wrapFontAwesome('globe');
    } else if (fn.startsWith('.git')) {
      icon.innerHTML = wrapDevicons('git');
    } else if (fn.startsWith('.vim')) {
      icon.innerHTML = wrapDevicons('vim');
    } else if (fn.startsWith('.npm') || fn.toLowerCase() === 'package.json') {
      icon.innerHTML = wrapDevicons('npm');
    } else if (fn.startsWith('.travis')) {
      icon.innerHTML = wrapDevicons('travis');
    } else if (fn.startsWith('.docker') || fn === 'Dockerfile') {
      icon.innerHTML = wrapDevicons('docker');
    } else if (fn === 'gulpfile.js') {
      icon.innerHTML = wrapDevicons('gulp');
    } else if (fn.includes('.')) {
      icon.innerHTML = icons[fn.split('.').slice(-1)[0]] || icon.innerHTML;
    }

  });
})();
