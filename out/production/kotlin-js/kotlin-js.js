if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js'.");
}
this['kotlin-js'] = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function getInfo$lambda(closure$callback, closure$xhr) {
    return function (it) {
      closure$callback(JSON.parse(closure$xhr.responseText));
    };
  }
  function getInfo(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = getInfo$lambda(callback, xhr);
    xhr.open('get', url);
    xhr.send();
  }
  function Info(id, name, description, owner, stargazers_count, open_issues, forks_count) {
    if (id === void 0)
      id = 0;
    if (name === void 0)
      name = '';
    if (description === void 0)
      description = '';
    if (owner === void 0)
      owner = new Owner();
    if (stargazers_count === void 0)
      stargazers_count = 0;
    if (open_issues === void 0)
      open_issues = 0;
    if (forks_count === void 0)
      forks_count = 0;
    this.id = id;
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.stargazers_count = stargazers_count;
    this.open_issues = open_issues;
    this.forks_count = forks_count;
  }
  Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  Info.prototype.component1 = function () {
    return this.id;
  };
  Info.prototype.component2 = function () {
    return this.name;
  };
  Info.prototype.component3 = function () {
    return this.description;
  };
  Info.prototype.component4 = function () {
    return this.owner;
  };
  Info.prototype.component5 = function () {
    return this.stargazers_count;
  };
  Info.prototype.component6 = function () {
    return this.open_issues;
  };
  Info.prototype.component7 = function () {
    return this.forks_count;
  };
  Info.prototype.copy_lmr8zb$ = function (id, name, description, owner, stargazers_count, open_issues, forks_count) {
    return new Info(id === void 0 ? this.id : id, name === void 0 ? this.name : name, description === void 0 ? this.description : description, owner === void 0 ? this.owner : owner, stargazers_count === void 0 ? this.stargazers_count : stargazers_count, open_issues === void 0 ? this.open_issues : open_issues, forks_count === void 0 ? this.forks_count : forks_count);
  };
  Info.prototype.toString = function () {
    return 'Info(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', description=' + Kotlin.toString(this.description)) + (', owner=' + Kotlin.toString(this.owner)) + (', stargazers_count=' + Kotlin.toString(this.stargazers_count)) + (', open_issues=' + Kotlin.toString(this.open_issues)) + (', forks_count=' + Kotlin.toString(this.forks_count)) + ')';
  };
  Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.stargazers_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.open_issues) | 0;
    result = result * 31 + Kotlin.hashCode(this.forks_count) | 0;
    return result;
  };
  Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.stargazers_count, other.stargazers_count) && Kotlin.equals(this.open_issues, other.open_issues) && Kotlin.equals(this.forks_count, other.forks_count)))));
  };
  function Owner(avatar_url) {
    if (avatar_url === void 0)
      avatar_url = '';
    this.avatar_url = avatar_url;
  }
  Owner.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Owner',
    interfaces: []
  };
  Owner.prototype.component1 = function () {
    return this.avatar_url;
  };
  Owner.prototype.copy_61zpoe$ = function (avatar_url) {
    return new Owner(avatar_url === void 0 ? this.avatar_url : avatar_url);
  };
  Owner.prototype.toString = function () {
    return 'Owner(avatar_url=' + Kotlin.toString(this.avatar_url) + ')';
  };
  Owner.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.avatar_url) | 0;
    return result;
  };
  Owner.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.avatar_url, other.avatar_url))));
  };
  var kotlinRepo;
  var reactRepo;
  var vueRepo;
  var angularRepo;
  var app;
  var kotlinBox;
  var reactBox;
  var vueBox;
  var angularBox;
  function main$lambda(info) {
    renderInfo(info, kotlinBox);
  }
  function main$lambda_0(info) {
    renderInfo(info, reactBox);
  }
  function main$lambda_1(info) {
    renderInfo(info, vueBox);
  }
  function main$lambda_2(info) {
    renderInfo(info, angularBox);
  }
  function main(args) {
    renderKotlinBox();
    getInfo(kotlinRepo, main$lambda);
    getInfo(reactRepo, main$lambda_0);
    getInfo(vueRepo, main$lambda_1);
    getInfo(angularRepo, main$lambda_2);
  }
  function renderKotlinBox() {
    var pageDiv = document.createElement('div');
    addClass(pageDiv, ['columns is-multiline is-tablet']);
    var $receiver = [kotlinBox, reactBox, vueBox, angularBox];
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var i = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      addClass(item, ['box']);
      var boxDiv = document.createElement('div');
      addClass(boxDiv, [i === 0 ? 'column is-12-tablet' : 'column is-4-tablet']);
      boxDiv.appendChild(item);
      pageDiv.appendChild(boxDiv);
    }
    var section = document.createElement('section');
    addClass(section, ['section']);
    section.appendChild(pageDiv);
    var container = document.createElement('div');
    addClass(container, ['container']);
    container.appendChild(section);
    app != null ? app.appendChild(container) : null;
  }
  function renderInfo(info, infoBox) {
    var $receiver = info.name;
    var name = p(document.createTextNode($receiver.length > 0 ? $receiver.substring(0, 1).toUpperCase() + $receiver.substring(1) : $receiver));
    var desc = p(document.createTextNode(info.description));
    var logoDiv = document.createElement('div');
    addClass(logoDiv, ['media-left']);
    logoDiv.appendChild(logo(info.owner.avatar_url));
    var contentDiv = document.createElement('div');
    addClass(contentDiv, ['media-content']);
    contentDiv.appendChild(name);
    contentDiv.appendChild(desc);
    var article = document.createElement('article');
    addClass(article, ['media']);
    article.appendChild(logoDiv);
    article.appendChild(contentDiv);
    var countBox = document.createElement('nav');
    addClass(countBox, ['level is-mobile']);
    countBox.appendChild(count('Stars', info.stargazers_count));
    countBox.appendChild(count('Open Issues', info.open_issues));
    countBox.appendChild(count('Forks', info.forks_count));
    infoBox.appendChild(article);
    infoBox.appendChild(document.createElement('hr'));
    infoBox.appendChild(countBox);
  }
  function p(child) {
    var p_0 = document.createElement('p');
    p_0.appendChild(child);
    return p_0;
  }
  function logo(src) {
    var logo_0 = document.createElement('img');
    logo_0.setAttribute('src', src);
    logo_0.setAttribute('width', '64px');
    logo_0.setAttribute('height', '64px');
    return logo_0;
  }
  function count(title, count_0) {
    var innerDiv = document.createElement('div');
    innerDiv.appendChild(p(document.createTextNode(title)));
    innerDiv.appendChild(p(document.createTextNode(count_0.toString())));
    var counterDiv = document.createElement('div');
    addClass(counterDiv, ['level-item has-text-centered']);
    counterDiv.appendChild(innerDiv);
    return counterDiv;
  }
  var package$com = _.com || (_.com = {});
  var package$babedev = package$com.babedev || (package$com.babedev = {});
  package$babedev.getInfo_lea0a5$ = getInfo;
  package$babedev.Info = Info;
  package$babedev.Owner = Owner;
  Object.defineProperty(package$babedev, 'kotlinRepo', {
    get: function () {
      return kotlinRepo;
    }
  });
  Object.defineProperty(package$babedev, 'reactRepo', {
    get: function () {
      return reactRepo;
    }
  });
  Object.defineProperty(package$babedev, 'vueRepo', {
    get: function () {
      return vueRepo;
    }
  });
  Object.defineProperty(package$babedev, 'angularRepo', {
    get: function () {
      return angularRepo;
    }
  });
  Object.defineProperty(package$babedev, 'app', {
    get: function () {
      return app;
    }
  });
  Object.defineProperty(package$babedev, 'kotlinBox', {
    get: function () {
      return kotlinBox;
    }
  });
  Object.defineProperty(package$babedev, 'reactBox', {
    get: function () {
      return reactBox;
    }
  });
  Object.defineProperty(package$babedev, 'vueBox', {
    get: function () {
      return vueBox;
    }
  });
  Object.defineProperty(package$babedev, 'angularBox', {
    get: function () {
      return angularBox;
    }
  });
  package$babedev.main_kand9s$ = main;
  package$babedev.renderKotlinBox = renderKotlinBox;
  package$babedev.renderInfo_nxr1cn$ = renderInfo;
  package$babedev.p_b3zqx6$ = p;
  package$babedev.logo_61zpoe$ = logo;
  package$babedev.count_bm4lxs$ = count;
  kotlinRepo = 'https://api.github.com/repos/jetbrains/kotlin';
  reactRepo = 'https://api.github.com/repos/facebook/react';
  vueRepo = 'https://api.github.com/repos/vuejs/vue';
  angularRepo = 'https://api.github.com/repos/angular/angular';
  app = document.getElementById('app');
  kotlinBox = document.createElement('div');
  reactBox = document.createElement('div');
  vueBox = document.createElement('div');
  angularBox = document.createElement('div');
  Kotlin.defineModule('kotlin-js', _);
  main([]);
  return _;
}(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js'], kotlin);
