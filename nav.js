// SPA 导航脚本 — 页面内容通过 fetch 动态加载，外壳 index.html 永不卸载
(function() {
  var currentPage = null;
  var currentStyles = [];

  // 保存首页初始内容（用于返回首页时恢复，避免 reload 销毁音乐）
  var indexHTML = null;
  (function saveIndex() {
    var container = document.getElementById('page-content');
    if (container) {
      indexHTML = container.innerHTML;
    }
  })();

  // 移除上一页注入的 style 标签
  function cleanupPage() {
    currentStyles.forEach(function(s) {
      if (s.parentNode) s.parentNode.removeChild(s);
    });
    currentStyles = [];
  }

  // 清空并重置 page-content 容器
  function clearContainer() {
    var container = document.getElementById('page-content');
    if (!container) return;
    container.innerHTML = '';
    // 重置滚动状态（非滚动页默认，子页面 resize() 会按需启用）
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.minHeight = '';
    container.style.overflow = '';
  }

  // 执行容器内的 script 标签
  function executeScripts(container) {
    var scripts = container.querySelectorAll('script');
    scripts.forEach(function(oldScript) {
      var newScript = document.createElement('script');
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      if (oldScript.parentNode) {
        oldScript.parentNode.replaceChild(newScript, oldScript);
      }
    });
  }

  // 注入 body 的 class/id 到 page-content
  function applyBodyAttrs(bodyStr) {
    var container = document.getElementById('page-content');
    if (!container) return;
    var m = bodyStr.match(/<body([^>]*)>/i);
    if (m) {
      var attrs = m[1];
      var classMatch = attrs.match(/class\s*=\s*["']([^"']*)["']/i);
      var idMatch = attrs.match(/id\s*=\s*["']([^"']*)["']/i);
      if (classMatch) container.className = classMatch[1];
      if (idMatch) container.id = idMatch[1];
    }
  }

  // 核心：导航到指定页面
  window.navigateTo = function(pageName) {
    // 返回首页：恢复初始 HTML，不刷新页面（音乐不中断）
    if (pageName === 'index') {
      cleanupPage();
      var container = document.getElementById('page-content');
      if (container && indexHTML) {
        container.className = '';
        container.id = 'page-content';
        container.innerHTML = indexHTML;
        executeScripts(container);
        var c1 = container;
        setTimeout(function() {
          c1.scrollTo(0, 0);
          window.scrollTo(0, 0);
        }, 0);
      }
      currentPage = 'index';
      history.pushState({page: 'index'}, '', 'index.html');
      return;
    }

    cleanupPage();
    clearContainer();

    // file:// 协议下 fetch/XHR 相对路径不可用，必须走 HTTP 服务
    if (window.location.protocol === 'file:') {
      showError(pageName, 'SPA 导航需要 HTTP 服务，请通过 http://127.0.0.1:8899/index.html 访问');
      return;
    }

    fetch(pageName + '.frag')
      .then(function(r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function(html) {
        var styleRegex = /<style[^>]*>[\s\S]*?<\/style>/gi;
        var styleMatches = html.match(styleRegex) || [];
        styleMatches.forEach(function(s) {
          var el = document.createElement('style');
          el.setAttribute('data-page', pageName);
          el.textContent = s.replace(/<\/?style[^>]*>/gi, '');
          document.head.appendChild(el);
          currentStyles.push(el);
        });

        var bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        var content;
        if (bodyMatch) {
          content = bodyMatch[1];
          applyBodyAttrs(bodyMatch[0]);
        } else {
          content = html;
        }
        // 清除已注入到 head 的 style 标签，避免浏览器在 body 内容中解析异常
        content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

        var container = document.getElementById('page-content');
        console.log('[nav] page-content found:', !!container, '| content length:', content.length);
        if (container) {
          container.innerHTML = content;
          console.log('[nav] innerHTML done, child count:', container.children.length);
          try {
            executeScripts(container);
            console.log('[nav] scripts executed OK');
          } catch(e) {
            console.error('[nav] script execution error:', e);
          }
          var c2 = container;
          setTimeout(function() {
            c2.scrollTo(0, 0);
            window.scrollTo(0, 0);
          }, 0);
        } else {
          console.error('[nav] page-content NOT FOUND! Cannot inject ' + pageName);
        }
        currentPage = pageName;
        history.pushState({page: pageName}, '', pageName + '.html');
      })
      .catch(function(err) {
        showError(pageName, err.message);
      });
  };

  function showError(pageName, reason) {
    console.error('SPA navigateTo(' + pageName + ') failed: ' + reason);
    var container = document.getElementById('page-content');
    if (container) {
      container.innerHTML = '<div style="color:#493434;text-align:center;padding-top:40vh;font-size:24px;font-family:sans-serif;">' +
        pageName + '.html 加载失败<br><small>' + reason + '</small></div>';
    }
  }

  // 浏览器前进/后退
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page && e.state.page !== currentPage) {
      navigateTo(e.state.page);
    }
  });

  // 初始页面标记为 index
  currentPage = 'index';
  history.replaceState({page: 'index'}, '', 'index.html');
})();
