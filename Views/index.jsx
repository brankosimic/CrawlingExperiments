var React = require('react');

var Index = React.createClass({
    propTypes: {
        articles: React.PropTypes.array
    },
    getInitialState: function() {
        return {
            articles: (this.props.articles || [])
        };
    },
    onArticle: function(article) {
        this.state.articles.push(article);

        this.setState({
            articles: this.state.articles
        });
    },
    render: function() {
        var articles = this.props.articles.map(function(article) {
            return <Article article={article}></Article>;
        });

        return (
        <html>
        <head>
        <meta charSet="utf-8" />
        <title>Klix.ba | Saznaj više</title>
        <meta name="robots" content="all" />
        <meta name="keywords" content="klix, klix.ba, sarajevo-x, sarajevo-x.com, internet, portal, vijesti, sport, magazin, bosna i hercegovina, bih, sarajevo" />
        <meta name="description" content="Klix.ba je najposjećeniji i najutjecajniji informativni portal u Bosni i Hercegovini. Najvažnije i najbrže vijesti iz Sarajeva, BiH i svijeta. Saznaj više" />
        <meta content="171222711838" property="fb:app_id" />
        <meta content="Klix.ba | Saznaj više" property="og:title" />
        <meta content="http://static.klix.ba/images/og/klix.jpg" property="og:image" />
        <meta content="http://www.klix.ba" property="og:url" />
        <meta content="Klix.ba je najposjećeniji i najutjecajniji informativni portal u Bosni i Hercegovini. Najvažnije i najbrže vijesti iz Sarajeva, BiH i svijeta. Saznaj više" property="og:description" />
        <link title="Klix.ba - Naslovnica" href="http://www.klix.ba/rss/naslovnica" rel="alternate" type="application/rss+xml" />
        <meta httpEquiv="refresh" content="600" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,400italic&subset=latin-ext,latin" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&subset=latin,latin-ext" rel="stylesheet" type="text/css" />
        <link href="/mainstyle/" rel="stylesheet" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <link href="/images/favicons/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="/images/favicons/apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="/images/favicons/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/images/favicons/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/images/favicons/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/images/favicons/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/images/favicons/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/images/favicons/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/images/favicons/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/images/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="/images/favicons/android-chrome-192x192.png" rel="icon" type="image/png" sizes="192x192" />
        <link href="/images/favicons/favicon-96x96.png" rel="icon" type="image/png" sizes="96x96" />
        <link href="/images/favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/images/favicons/manifest.json" rel="manifest" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-TileImage" content="/images/favicons/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        </head>
      <body id="kat_naslovnica">
        <header ng-controller="HeaderCtrl">
          <div className="header_container">
            <div className="burger_wrap" ng-click="expanded = !expanded;">
              <a className="burger pointer"><i className="burger icon_burger pointer" /></a>
            </div>
            <div className="logo_wrap">
              <a title="Klix.ba" className="logo" onclick="javascript:window.location = '/';ga('send', 'event', 'Logo', 'Click', '');" href="/"><span className="icon_kx_logo" /></a>
            </div>
            <div className="lsep" />
            <nav>
              <ul className="categories">
                <li className="li_pocetna visible-xs">
                  <div className="item"><a className="tch_klix" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/"><div className="kocka" /> Početna</a></div>
                </li>
                <li className="li_vijesti">
                  <div className="item"><a className="tch_vijesti" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti"><div className="kocka bg_vijesti" /> Vijesti</a> <i className="ng-cloak" ng-click="expandedData.vijesti = !expandedData.vijesti;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/najnovije">Najnovije</a></div></li>
                    <li>
                      <a href="http://www.klix.ba/lokalne-vijesti"><div className="item">Lokalne vijesti</div></a>
                      <ul className="nivo2">
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lokalne-vijesti/kanton-sarajevo">Kanton Sarajevo</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/hercegovacko-neretvanski-kanton">Hercegovačko-neretvanski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/unsko-sanski-kanton">Unsko-sanski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/posavski-kanton">Posavski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/tuzlanski-kanton">Tuzlanski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/zenicko-dobojski-kanton">Zeničko-dobojski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/bosansko-podrinjski-kanton">Bosansko-podrinjski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/srednjobosanski-kanton">Srednjobosanski kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/zapadnohercegovacki-kanton">Zapadnohercegovački kanton</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/kanton-10">Kanton 10</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/banjalucka-regija">Banjalučka regija</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/dobojsko-bijeljinska-regija">Dobojsko-bijeljinska regija</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/sarajevsko-zvornicka-regija">Sarajevsko-zvornička regija</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/trebinjsko-focanska-regija">Trebinjsko-fočanska regija</a></div></li>
                        <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://www.klix.ba/lokalne-vijesti/brcko-distrikt">Brčko Distrikt</a></div></li>
                      </ul>
                    </li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/bih">BiH</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/regija">Regija</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/svijet">Svijet</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/kultura">Kultura</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/crna-hronika">Crna hronika</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/eu-integracije">EU integracije</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vijesti/humanitarne-akcije">Humanitarne akcije</a></div></li>
                  </ul>
                </li>
                <li className="li_biznis">
                  <div className="item"><a className="tch_biznis" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis"><div className="kocka bg_biznis" /> Biznis</a> <i className="ng-cloak" ng-click="expandedData.biznis = !expandedData.biznis;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/privreda">Privreda</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/finansije">Finansije</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/investicije">Investicije</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/eurozona">Eurozona</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/berza">Berza</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/startupi">Startupi</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/biznis/posao">Posao</a></div></li>
                  </ul>
                </li>
                <li className="li_sport">
                  <div className="item"><a className="tch_sport" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport"><div className="kocka bg_sport" /> Sport</a> <i className="ng-cloak" ng-click="expandedData.sport = !expandedData.sport;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport/nogomet">Nogomet</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport/kosarka">Košarka</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport/tenis">Tenis</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport/rukomet">Rukomet</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport/formula1">Formula 1</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/sport/skijanje">Skijanje</a></div></li>
                  </ul>
                </li>
                <li className="li_magazin">
                  <div className="item"><a className="tch_magazin" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/magazin"><div className="kocka bg_magazin" /> Magazin</a> <i className="ng-cloak" ng-click="expandedData.magazin = !expandedData.magazin;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/magazin/muzika">Muzika</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/magazin/film-tv">Film/TV</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/magazin/showbiz">Showbiz</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/magazin/ljepotice">Ljepotice</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/magazin/zanimljivosti">Zanimljivosti</a></div></li>
                  </ul>
                </li>
                <li className="li_lifestyle">
                  <div className="item"><a className="tch_lifestyle" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle"><div className="kocka bg_lifestyle" /> Lifestyle</a> <i className="ng-cloak" ng-click="expandedData.lifestyle = !expandedData.lifestyle;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/modailjepota">Moda i ljepota</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/zdravlje">Zdravlje</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/vezeiseks">Veze i seks</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/hranaipice">Hrana i piće</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/kucaiured">Kuća i ured</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/putovanja">Putovanja</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/lifestyle/bebe">Bebe</a></div></li>
                  </ul>
                </li>
                <li className="li_scitech">
                  <div className="item"><a className="tch_scitech" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/scitech"><div className="kocka bg_scitech" /> Scitech</a> <i className="ng-cloak" ng-click="expandedData.scitech = !expandedData.scitech;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/scitech/nauka">Nauka</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/scitech/tehnologija">Tehnologija</a></div></li>
                  </ul>
                </li>
                <li className="li_auto">
                  <div className="item"><a className="tch_auto" onclick="ga('send', 'event', 'Header', 'Click', '');" href="/auto"><div className="kocka bg_auto" /> Auto</a> <i className="ng-cloak" ng-click="expandedData.auto = !expandedData.auto;" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/auto/testovi">Testovi</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/auto/noviteti">Noviteti</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/auto/koncepti">Koncepti</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/auto/tuning">Tuning</a></div></li>
                  </ul>
                </li>
              </ul>
              <div className="ulsep" />
              <ul className="more">
                <li className="li_forum"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://forum.klix.ba"><i className="icon_forum pointer" /> Forum</a></div></li>
                <li className="li_krizaljka"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/krizaljka"><i className="icon_krizaljka pointer" />Križaljka</a></div></li>
                <li className="li_nightlife"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/nightlife"><i className="icon_nightlife pointer" />Nightlife</a></div></li>
                <li className="li_info hidden-xs">
                  <div className="item"><a href="#"><div className="kocka bg_klix" />Više</a> <i className="more" ng-click="expandedData.info = !expandedData.info" /></div>
                  <ul className="nivo1">
                    <mark className="strelica" />
                    <li className="visible-md"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/krizaljka">Križaljka</a></div></li>
                    <li className="visible-md"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/forum">Forum</a></div></li>
                    <li className="visible-md"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/nightlife">Nightlife</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/dojavi-vijest">Dojavi vijest</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vrijeme">Vremenska prognoza</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/tv-program">TV program</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/stanje-na-putevima">Stanje na putevima</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/kursna-lista">Kursna lista</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://marketing.klix.ba">Marketing</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/impressum">Impressum</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/o-nama">O nama</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/kontakt">Kontakt</a></div></li>
                  </ul>
                </li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/krizaljka"><i className="icon_krizaljka pointer" /> Križaljka</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/forum"><i className="icon_forum pointer" /> Forum</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/nightlife"><i className="icon_nightlife pointer" /> Nightlife</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/dojavi-vijest"><i className="icon_posalji_vijest pointer" /> Dojavi vijest</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/tv-program"><i className="icon_tv pointer" /> TV program</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/vrijeme"><div className="kocka" /> Vremenska prognoza</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/stanje-na-putevima"><div className="kocka" /> Stanje na putevima</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/kursna-lista"><div className="kocka" /> Kursna lista</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="http://marketing.klix.ba"><div className="kocka" /> Marketing</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/impressum"><div className="kocka" /> Impressum</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/o-nama"><div className="kocka" /> O nama</a></div></li>
                <li className="visible-xs"><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/kontakt"><div className="kocka" /> Kontakt</a></div></li>
              </ul>
            </nav>
            <div className="buttons_wrap">
              <ul className="action_buttons">
                <div className="ulsep hidden-xs" />
                <li>
                  <div className="item pretraga-lupa"><a className="tch_klix pointer" onclick="ga('send', 'event', 'Header', 'Click', '');" ng-click="toggleSearch()"><i className="search_btn pointer" /></a></div>
                </li>
                <div className="ulsep" />
                <li>
                  <div className="item user-icon ng-cloak"><a className="pointer" onclick="ga('send', 'event', 'Header', 'Click', '');" ng-click="login();"><i className="icon_musko" ng-style="{backgroundColor: $root.currUser ? '#'+$root.currUser.avatar : 'transparent'}" /> <span className="notif-badge" ng-show="notificationLampica" /></a></div>
                  <ul className="nivo1" ng-if="$root.currUser">
                    <mark className="strelica" ng-style="{borderColor: $root.currUser ? 'transparent transparent #'+$root.currUser.avatar+' transparent' : 'transparent'}" />
                    <li className="li_user" ng-style="{backgroundColor: $root.currUser ? '#'+$root.currUser.avatar : 'transparent'}"><div className="item"><a className="username-link ellipsis" href="/mojprofil"><div className="kocka" /></a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/mojprofil/obavijesti"><i className="icon_obavijesti" /> Obavijesti <span className="notif-broj" ng-if="notifikacijeBroj > 0"></span></a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/mojprofil/komentari"><i className="icon_komentari" /> Moji komentari</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="/mojprofil/postavke"><i className="icon_postavke_profila" /> Postavke profila</a></div></li>
                    <li><div className="item"><a onclick="ga('send', 'event', 'Header', 'Click', '');" href="#" ng-click="logout();"><i className="icon_logout" /> Odjavi se</a></div></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="search_box">
            <div className="header_container">
              <i className="lupa icon_search" />
              <form action="/pretraga" method="GET">
                <input name="pojam" id="pojam" type="search" placeholder="upišite pojam pretrage..." />
                <a className="submitlink" onclick="$(this).closest('form').submit()"><i className="icon_enter pointer" /></a>
              </form>
            </div>
          </div>
        </header>
        <popup data-header-title="Prijava" data-show-footer="hidden" data-unique-id="prijava-box">
          <div className="prijava-popupbox col-xs-12" ng-controller="LoginCtrl">
            <div className="error" ng-show="error"></div>
            <div className="col-xs-8 no-padding">Korisničko ime ili e-mail</div>
            <div className="col-xs-4 no-padding" />
            <div className="col-xs-12 no-padding"><input className="col-xs-12" id="username" type="text" ng-model="user.username" ng-enter="login();" /></div>
            <div className="col-xs-8 no-padding">Lozinka</div>
            <div className="col-xs-12 no-padding"><input className="col-xs-12" id="password" type="password" ng-model="user.password" ng-enter="login()" /></div>
            <div className="col-xs-8 no-padding zapamti"><label><input type="checkbox" />Zapamti me</label></div>
            <div className="col-xs-4 no-padding"><button className="pull-right" id="prijava-req" type="button" ng-click="login();">Prijavi se</button></div>
            <div className="ili-separator col-xs-12 no-padding">
              <div className="lajna" />
              <div className="krug-ili">ili</div>
            </div>
            <div className="luser gumbi row">
              <div className="col-xs-12"><div className="gumb fb" ng-click="fbLogin();">Facebook prijava</div></div>
              <div className="col-xs-12 hidden"><div className="gumb gp">Google prijava</div></div>
              <div className="col-xs-12"><a className="gumb ws" href="/registracija" ng-click="closePopup();">Registruj se</a></div>
            </div>
            <br /><br />
          </div>
        </popup>
        <popup data-header-title="Zaboravljena šifra" data-show-footer="hidden" data-unique-id="zaboravljen-box">
          <div className="prijava-popupbox col-xs-12">
            <div className="col-xs-8 no-padding">Unesite e-mail:</div>
            <div className="col-xs-4 no-padding" />
            <div className="col-xs-12 no-padding"><input className="col-xs-12" id="email" type="text" ng-model="email" ng-enter="reqReset();" /></div>
            <div className="col-xs-8 no-padding" />
            <div className="col-xs-4 no-padding"><button className="pull-right" id="prijava-req" type="button" ng-click="reqReset();">Zatraži novu</button></div>
            <br /><br />
          </div>
        </popup>
        <div className="wallpaper_container">
          <div id="ads_wallpaper">
          </div>
        </div>
        <div className="takeover_container">
          <div id="ads_takeover">
          </div>
        </div>
        <div className="main-view">
          <div className="container">
            <div className="ads_leaderboard_container lc0">
              <div className="ads_leaderboard_inside">
                <div id="ads_leaderboard">
                </div>
              </div>
            </div>
          </div>
          <div className="container" ng-controller="PocetnaCtrl">
            <div className="block first struct">
              <div className="block-dyn">
                <div className="block-head main hidden-xs">
                  <div className="col-sm-4 col-md-4 logoHolder">
                    <div>
                      <a className="dan" href="/najnovije">
                          srijeda, 17.02.2016.
                      </a>
                    </div>
                    <div className="vremenska hidden-md hidden-sm hidden-xs">
                      <span className="pull-left ikonica vr vr-clear-dark vr-mini" />
                      <div className="grad_vr pull-left">
                        <a href="/vrijeme">Sarajevo</a><br />
                        <span>19 °C</span>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="col-md-8 col-sm-8 timeline">
                    <div className="keypoint active" onclick="ga('send', 'event', 'Timeline tacka', 'Click', '');" ng-click="loadDyn('16918');" data-id="16918">
                        Trenutno <div className="kruznitok">
                        <div className="thedot" />
                        </div>
                    </div>
                    <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka', 'Click', '');" ng-click="loadDyn('16910');" data-id="16910">
                        16:04 <div className="kruznitok">
                        <div className="thedot" />
                        </div>
                    </div>
                    <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka', 'Click', '');" ng-click="loadDyn('16897');" data-id="16897">
                        13:27 <div className="kruznitok">
                        <div className="thedot" />
                        </div>
                    </div>
                    <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka', 'Click', '');" ng-click="loadDyn('16890');" data-id="16890">
                        12:05 <div className="kruznitok">
                        <div className="thedot" />
                        </div>
                    </div>
                    <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka', 'Click', '');" ng-click="loadDyn('d20160216');" data-id="d20160216">
                        Jučer <div className="kruznitok">
                        <div className="thedot" />
                        </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="row block-head visible-xs timelinePicker" ng-click="timelineShow = !timelineShow">
                  <div className="col-xs-8 now">
                      srijeda, 17.02.2016.
                  </div>
                  <div className="col-xs-3 text-right" />
                  <div className="col-xs-1 text-right">
                    <div className="timelineArrow">
                      <i className="icon_chevron_" />
                    </div>
                  </div>
                </div>
                <div className="keypoints row">
                  <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka - mobile', 'Click', '');" ng-click="loadDyn('16918');" data-id="16918">
                      Trenutno
                  </div>
                  <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka - mobile', 'Click', '');" ng-click="loadDyn('16910');" data-id="16910">
                      16:04
                  </div>
                  <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka - mobile', 'Click', '');" ng-click="loadDyn('16897');" data-id="16897">
                      13:27
                  </div>
                  <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka - mobile', 'Click', '');" ng-click="loadDyn('16890');" data-id="16890">
                      12:05
                  </div>
                  <div className="keypoint" onclick="ga('send', 'event', 'Timeline tacka - mobile', 'Click', '');" ng-click="loadDyn('d20160216');" data-id="d20160216">
                      Jučer
                  </div>
                </div>
                <div className="block-news dyn">
                  <div className="news-line has_big">
                      { articles }
                  </div>
                    <div className="news-line has_four"><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/vijesti/bih/sda-ne-raspolaze-detaljima-u-vezi-s-radoncicevom-izjavom-o-podrsci-sda-za-njegovu-kandidaturu/160217027"><div className="above"><span className="kategorija tc_vijesti">BiH</span><span className="shareovi"><i className="icon_dijeljenja" /> 5</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217027.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">SDA ne raspolaže detaljima u vezi s Radončićevom izjavom o podršci SDA za njegovu kandidaturu</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 52 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 52 min</span><span className="comments"><i className="icon_komentari" /> 58</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/vijesti/bih/nakon-javnog-pisma-dodiku-visegradjanin-njegos-tomic-strajkovat-ce-gladju-pred-vladom-rs-a/160217116"><div className="above"><span className="kategorija tc_vijesti">BiH</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217116.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Nakon javnog pisma Dodiku, Višegrađanin Njegoš Tomić štrajkovat će glađu pred Vladom RS-a</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 18 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 18 min</span><span className="comments"><i className="icon_komentari" /> 19</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/magazin/muzika/bh-pjevacica-sheyla-na-muzickom-takmicenju-music-i-o/160217058"><div className="above"><span className="kategorija tc_magazin">Muzika<i className="mark icon_video" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 2</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217058.jpg?v=2" /><div className="overblack" /></div><h1 className="srednji">Bh. pjevačica Sheyla na muzičkom takmičenju Music I/O</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 10 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 10 min</span><span className="comments"><i className="icon_komentari" /> 13</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12 last"><div className="articleHolder"><article className="kartica velika obojena bg_magazin"><a href="/magazin/zanimljivosti/japan-majka-natjerala-kcerku-da-pojede-30-zlatnih-ribica/160217062"><div className="above"><span className="kategorija tc_magazin">Zanimljivosti</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217062.jpg?v=2" /><div className="overblack" /></div><h1 className="srednji">Japan: Majka natjerala kćerku da pojede 30 zlatnih ribica</h1><div className="below l0"><span className="hidden-md hidden-sm date"><i className="icon_popularno" /> prije 56 min</span><span className="visible-md-inline-block visible-sm-inline-block date"><i className="icon_popularno" /> prije 56 min</span><span className="comments"><i className="icon_komentari" /> 19</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div>
                </div>
              </div>
              <div className="hidden-xs block-side block-flex">
                <div className="block-tabs" ng-init="tab=1;"><div className="col-xs-4 active" ng-click="tab=1;"><div className="tab left">Najnovije</div></div><div className="col-xs-4" ng-click="tab=2;"><div className="tab middle">Najčitanije</div></div><div className="col-xs-4" ng-click="tab=3;"><div className="tab right">Preporuke</div></div><div className="clearfix" /></div><div className="block-flex-1" scrolltimer ng-scroll="scrollNajnovije(top);"><div className="row"><div className="clearfix" /><div className="articleList col-md-12 col-lg-12"><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/svijet/turska-velika-eksplozija-ispred-kasarne-u-ankari-nekoliko-osoba-povrijedjeno/160217117"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Turska: Velika eksplozija ispred kasarne u Ankari, nekoliko osoba povrijeđeno</div><div className="date bottom"><div className="pull-left">prije 5 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/svijet/velika-britanija-poslala-lovce-u-presretanje-ruskih-bombardera/160217119"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Velika Britanija poslala lovce u presretanje ruskih bombardera</div><div className="date bottom"><div className="pull-left">prije 10 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/nakon-javnog-pisma-dodiku-visegradjanin-njegos-tomic-strajkovat-ce-gladju-pred-vladom-rs-a/160217116"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Nakon javnog pisma Dodiku, Višegrađanin Njegoš Tomić štrajkovat će glađu pred Vladom RS-a</div><div className="date bottom"><div className="pull-left">prije 18 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 last-xs" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/washington-post-podsjetio-na-opsadu-sarajeva-330-granata-dnevno-je-padalo-na-grad/160217108"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Washington Post podsjetio na opsadu Sarajeva: 330 granata dnevno je padalo na grad</div><div className="date bottom"><div className="pull-left">prije 42 min</div><div className="icons"><i className="icon_foto" /></div><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 last-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/lifestyle/putovanja/emilija-iz-tesnja-i-adam-iz-juznoafricke-republike-zajedno-plove-kruzerom-i-kroz-bracne-vode/160217051"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Emilija iz Tešnja i Adam iz Južnoafričke Republike zajedno plove kruzerom i kroz bračne vode</div><div className="date bottom"><div className="pull-left">prije 46 min</div><div className="icons"><i className="icon_foto" /></div><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/svijet/austrija-ce-smanjiti-broj-dolazaka-izbjeglica-na-3-200-dnevno/160217114"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Austrija će smanjiti broj dolazaka izbjeglica na 3.200 dnevno</div><div className="date bottom"><div className="pull-left">prije 47 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/magazin/zanimljivosti/japan-majka-natjerala-kcerku-da-pojede-30-zlatnih-ribica/160217062"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Japan: Majka natjerala kćerku da pojede 30 zlatnih ribica</div><div className="date bottom"><div className="pull-left">prije 56 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/svijet/merkel-samit-eu-ce-odluciti-da-li-je-sporazum-s-turskom-vrijedan-truda/160217113"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Merkel: Samit EU će odlučiti da li je sporazum s Turskom vrijedan truda</div><div className="date bottom"><div className="pull-left">prije 57 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/biznis/mladi-poduzetnici-iz-regije-srebrenice-pokrecu-vlastiti-biznis/160217112"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Mladi poduzetnici iz regije Srebrenice pokreću vlastiti biznis</div><div className="date bottom"><div className="pull-left">prije 1h 1 min</div><div className="icons" /><div className="clearfix" /></div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/magazin/muzika/bh-pjevacica-sheyla-na-muzickom-takmicenju-music-i-o/160217058"><div className="row"><div className="col-xs-12 col-sm-12"><div className="title">Bh. pjevačica Sheyla na muzičkom takmičenju Music I/O</div><div className="date bottom"><div className="pull-left">prije 1h 10 min</div><div className="icons"><i className="icon_video" /></div><div className="clearfix" /></div></div><div className="clearfix" /></div></a></div></div><div className="row hidden"><div className="clearfix" /><div className="articleList col-md-12 col-lg-12"><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/fahrudin-radoncic-izasao-iz-pritvora/160217065"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Fahrudin Radončić izašao iz pritvora" src="http://static.klix.ba/media/images/vijesti/s11_160217065.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Fahrudin Radončić izašao iz pritvora</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/mehmedovic-porucio-vrhu-sda-dokle-vise-ponizavate-vlastiti-narod/160216167"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Mehmedović poručio vrhu SDA: Dokle više ponižavate vlastiti narod" src="http://static.klix.ba/media/images/vijesti/s11_160216167.jpg" /></div><div className="col-xs-9 col-sm-9"><div className="title">Mehmedović poručio vrhu SDA: Dokle više ponižavate vlastiti narod</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/pogledajte-kako-su-radoncica-docekali-ispred-avaz-twist-towera-fahro-legendo/160217092"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Pogledajte kako su Radončića dočekali ispred Avaz Twist Towera: Fahro, legendo" src="http://static.klix.ba/media/images/vijesti/s11_160217092.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Pogledajte kako su Radončića dočekali ispred Avaz Twist Towera: Fahro, legendo</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 last-xs" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/biznis/koliko-ce-cigarete-poskupjeti-u-narednim-godinama/160111016"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Koliko će cigarete poskupjeti u narednim godinama?" src="http://static.klix.ba/media/images/vijesti/s11_160111016.jpg" /></div><div className="col-xs-9 col-sm-9"><div className="title">Koliko će cigarete poskupjeti u narednim godinama?</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 last-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/fahrudinu-radoncicu-ukinut-pritvor-odredjene-mjere-zabrane/160216114"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Fahrudinu Radončiću ukinut pritvor, određene mjere zabrane" src="http://static.klix.ba/media/images/vijesti/s11_160216114.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Fahrudinu Radončiću ukinut pritvor, određene mjere zabrane</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/gorazde-fotografi-na-meti-trzisnih-inspektora-koji-kazu-da-samo-rade-svoj-posao/160216159"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Goražde: Fotografi na meti tržišnih inspektora koji kažu da samo rade svoj posao" src="http://static.klix.ba/media/images/vijesti/s11_160216159.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Goražde: Fotografi na meti tržišnih inspektora koji kažu da samo rade svoj posao</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/biznis/akcize-na-gorivo-vece-za-15-feninga-po-litru-prijevoznici-prijete-blokadama/160217016"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Akcize na gorivo veće za 15 feninga po litru, prijevoznici prijete blokadama" src="http://static.klix.ba/media/images/vijesti/s11_160217016.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Akcize na gorivo veće za 15 feninga po litru, prijevoznici prijete blokadama</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/radoncic-nakon-izlaska-iz-pritvora-nije-vrijeme-da-govorim-ko-mi-montira-koalicija-je-stabilna/160217068"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Radončić nakon izlaska iz pritvora: Nije vrijeme da govorim ko mi montira, koalicija je stabilna" src="http://static.klix.ba/media/images/vijesti/s11_160217068.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Radončić nakon izlaska iz pritvora: Nije vrijeme da govorim ko mi montira, koalicija je stabilna</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/sport/nogomet/cristiano-ronaldo-napustio-konferenciju-za-novinare/160217002"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Cristiano Ronaldo napustio konferenciju za novinare" src="http://static.klix.ba/media/images/vijesti/s11_160217002.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Cristiano Ronaldo napustio konferenciju za novinare</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/borenovic-dodik-je-uputio-poziv-na-otvoreni-linc-igora-crnadka-slijedi-tuzba/160216123"><div className="row"><div className="col-xs-3"><img width="100%" className="articleImg" alt="Borenović: Dodik je uputio poziv na otvoreni linč Igora Crnadka, slijedi tužba" src="http://static.klix.ba/media/images/vijesti/s11_160216123.jpg?v=1" /></div><div className="col-xs-9 col-sm-9"><div className="title">Borenović: Dodik je uputio poziv na otvoreni linč Igora Crnadka, slijedi tužba</div></div><div className="clearfix" /></div></a></div></div><div className="row hidden"><div className="clearfix" /><div className="articleList col-md-12 col-lg-12"><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/mehmedovic-porucio-vrhu-sda-dokle-vise-ponizavate-vlastiti-narod/160216167"><div className="row"><div className="col-xs-3"><div className="share-count-box">843</div></div><div className="col-xs-9 col-sm-9"><div className="title">Mehmedović poručio vrhu SDA: Dokle više ponižavate vlastiti narod</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/fahrudin-radoncic-izasao-iz-pritvora/160217065"><div className="row"><div className="col-xs-3"><div className="share-count-box">829</div></div><div className="col-xs-9 col-sm-9"><div className="title">Fahrudin Radončić izašao iz pritvora</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/pogledajte-kako-su-radoncica-docekali-ispred-avaz-twist-towera-fahro-legendo/160217092"><div className="row"><div className="col-xs-3"><div className="share-count-box">583</div></div><div className="col-xs-9 col-sm-9"><div className="title">Pogledajte kako su Radončića dočekali ispred Avaz Twist Towera: Fahro, legendo</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 last-xs" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/sport/najbolji-svjetski-skakaci-u-vodu-ponovo-u-mostaru/160217082"><div className="row"><div className="col-xs-3"><div className="share-count-box">422</div></div><div className="col-xs-9 col-sm-9"><div className="title">Najbolji svjetski skakači u vodu ponovo u Mostaru</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 last-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/sport/igor-emkic-se-priprema-za-turnir-no-limit-8-spreman-sam-za-izazove-u-ringu-protivnici-ne-znaju-sta-ih-ceka/160216031"><div className="row"><div className="col-xs-3"><div className="share-count-box">408</div></div><div className="col-xs-9 col-sm-9"><div className="title">Igor Emkić se priprema za turnir No Limit 8: Spreman sam za izazove u ringu, protivnici ne znaju šta ih čeka</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/sport/tenis/konacno-damir-dzumhur-pobijedio-ricardasa-berankisa/160216154"><div className="row"><div className="col-xs-3"><div className="share-count-box">369</div></div><div className="col-xs-9 col-sm-9"><div className="title">Konačno: Damir Džumhur pobijedio Ricardasa Berankisa</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/biznis/akcize-na-gorivo-vece-za-15-feninga-po-litru-prijevoznici-prijete-blokadama/160217016"><div className="row"><div className="col-xs-3"><div className="share-count-box">349</div></div><div className="col-xs-9 col-sm-9"><div className="title">Akcize na gorivo veće za 15 feninga po litru, prijevoznici prijete blokadama</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/majstor-karatea-armin-topalovic-skola-nas-uci-svemu-osim-zivotu/160216156"><div className="row"><div className="col-xs-3"><div className="share-count-box">341</div></div><div className="col-xs-9 col-sm-9"><div className="title">Majstor karatea Armin Topalović: Škola nas uči svemu osim životu</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/vijesti/bih/fahrudinu-radoncicu-ukinut-pritvor-odredjene-mjere-zabrane/160216114"><div className="row"><div className="col-xs-3"><div className="share-count-box">232</div></div><div className="col-xs-9 col-sm-9"><div className="title">Fahrudinu Radončiću ukinut pritvor, određene mjere zabrane</div></div><div className="clearfix" /></div></a><a className="col-lg-12 col-md-12 col-sm-6 col-xs-12 hidden-xs hidden-md" onclick="ga('send', 'event', 'Najbox klik', 'Click', '');" href="/lifestyle/prva-balerina-sa-hidzabom-stephanie-kurlow-zeli-zbliziti-svijet/160217012"><div className="row"><div className="col-xs-3"><div className="share-count-box">158</div></div><div className="col-xs-9 col-sm-9"><div className="title">Prva balerina sa hidžabom: Stephanie Kurlow želi zbližiti svijet</div></div><div className="clearfix" /></div></a></div></div></div> <div className="block-flex-2">
                  <div className="full-shadow" />
                  <div className="row">
                    <div className="popularnoHolder hidden-xs">
                      <div className="block-title popularno col-lg-12 col-md-12 col-sm-3 col-xs-12">
                        <i className="title-icon icon_popularno" /> Popularno
                        <a className="pull-right hidden-sm btn" href="/tagovi">Vidi sve <i className="icon_strelica_desno onTheRight" /></a>
                        <div className="clearfix" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-9 col-xs-12 tagovi">
                        <a className="tag" href="/tagovi/saobracajna-nesreca/281">saobraćajna nesreća</a><a className="tag" href="/tagovi/tuzilastvo-bih/354">Tužilaštvo BiH</a><a className="tag" href="/tagovi/sarajevo/23">Sarajevo</a><a className="tag" href="/tagovi/fahrudin-radoncic/138">Fahrudin Radončić</a><a className="tag" href="/tagovi/sirija/234">Sirija</a>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="banner300 text-center">
                      <div className="ads_rectangle_container">
                        <div className="ads_leaderboard_inside">
                          <div id="ads_rectangle">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="container">
            <div className="container">
              <div className="ads_leaderboard_container lc1">
                <div className="ads_leaderboard_inside">
                  <div id="ads_leaderboard_1">
                  </div>
                </div>
              </div>
            </div><div className="block struct struct_12">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_vijesti" href="/vijesti">Vijesti</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_vijesti" href="/vijesti/bih">BiH</a>
                    <div className="seperator">|</div> <a className="tch_vijesti" href="/vijesti/regija">Regija</a>
                    <div className="seperator">|</div> <a className="tch_vijesti" href="/vijesti/svijet">Svijet</a>
                    <div className="seperator">|</div> <a className="tch_vijesti" href="/vijesti/kultura">Kultura</a>
                    <div className="seperator">|</div> <a className="tch_vijesti" href="/vijesti/crna-hronika">Crna hronika</a>
                    <div className="seperator hidden-md">|</div> <a className="tch_vijesti hidden-md" href="/vijesti/eu-integracije">EU integracije</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line has_four"><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/vijesti/svijet/velika-britanija-poslala-lovce-u-presretanje-ruskih-bombardera/160217119"><div className="above"><span className="kategorija tc_vijesti">Svijet</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217119.jpg" /><div className="overblack" /></div><h1 className="srednji">Velika Britanija poslala lovce u presretanje ruskih bombardera</h1><div className="below l0"><span className="hidden-md hidden-sm date tc_vijesti"><i className="icon_popularno" /> prije 10 min</span><span className="visible-md-inline-block visible-sm-inline-block date tc_vijesti"><i className="icon_popularno" /> prije 10 min</span><span className="comments"><i className="icon_komentari" /> 7</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/vijesti/svijet/merkel-samit-eu-ce-odluciti-da-li-je-sporazum-s-turskom-vrijedan-truda/160217113"><div className="above"><span className="kategorija tc_vijesti">Svijet</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217113.jpg" /><div className="overblack" /></div><h1 className="srednji">Merkel: Samit EU će odlučiti da li je sporazum s Turskom vrijedan truda</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 57 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 57 min</span><span className="comments"><i className="icon_komentari" /> 15</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/vijesti/bih/svjedoci-na-sudjenju-u-tuzilastvu-bih-muamir-jasarevic-babo-nas-je-mucio-strujom/160217096"><div className="above"><span className="kategorija tc_vijesti">BiH</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217096.jpg" /><div className="overblack" /></div><h1 className="srednji">Svjedoci na suđenju u Tužilaštvu BiH: Muamir Jašarević Babo nas je mučio strujom</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 53 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 53 min</span><span className="comments"><i className="icon_komentari" /> 18</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/vijesti/kultura/skupljaci-perja-u-banjoj-luci-svi-mi-zivimo-kao-cigani-sa-maturom/160217098"><div className="above"><span className="kategorija tc_vijesti">Kultura<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217098.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">"Skupljači perja" u Banjoj Luci: Svi mi živimo "kao Cigani sa maturom"</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 2h 1 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 2h 1 min</span><span className="comments"><i className="icon_komentari" /> 6</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="news-line has_four"><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica bez_slike"><a href="/vijesti/svijet/austrija-ce-smanjiti-broj-dolazaka-izbjeglica-na-3-200-dnevno/160217114"><div className="above"><span className="kategorija tc_vijesti">Svijet</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><h1>Austrija će smanjiti broj dolazaka izbjeglica na 3.200 dnevno</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 47 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 47 min</span><span className="comments"><i className="icon_komentari" /> 1</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica bez_slike"><a href="/vijesti/bih/zbog-jakog-vjetra-otkazani-letovi-na-aerodromu-sarajevo/160217109"><div className="above"><span className="kategorija tc_vijesti">BiH</span><span className="shareovi"><i className="icon_dijeljenja" /> 4</span></div><h1>Zbog jakog vjetra otkazani letovi na Aerodromu Sarajevo</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 43 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 43 min</span><span className="comments"><i className="icon_komentari" /> 16</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica bez_slike"><a href="/vijesti/kultura/sarajevska-zima-mala-sirena-u-sklopu-djecijeg-programa/160217107"><div className="above"><span className="kategorija tc_vijesti">Kultura</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><h1>Sarajevska zima: "Mala sirena" u sklopu dječijeg programa</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 55 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 55 min</span><span className="comments"><i className="icon_komentari" /> 1</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12 last"><div className="articleHolder"><article className="kartica bez_slike"><a href="/vijesti/regija/hrvatska-islamska-zajednica-se-ogradila-od-podrske-ministru-zlatku-hasanbegovicu/160217101"><div className="above"><span className="kategorija tc_vijesti">Regija</span><span className="shareovi"><i className="icon_dijeljenja" /> 5</span></div><h1>Hrvatska: Islamska zajednica se ogradila od podrške ministru Zlatku Hasanbegoviću</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 2h 31 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 2h 31 min</span><span className="comments"><i className="icon_komentari" /> 78</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="load-more visible-xs" onclick="ga('send', 'event', 'Mobilna prikaži više', 'Click', '');">prikaži više</div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="block-title">
                  <i className="icon_popularno title-icon f16" /> Izdvojeno <img className="g-up visible-lg" src="/images/gradient-up.png" />
                </div>
                <div className="block-flex-1" scrolltimer>
                  <div className="izdvojeneList row theme_pocetna"><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_biznis" href="/biznis/koliko-ce-cigarete-poskupjeti-u-narednim-godinama/160111016"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160111016.jpg" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Koliko će cigarete poskupjeti u narednim godinama?</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_vijesti" href="/vijesti/bih/uvela-znakovni-jezik-radi-jednog-ucenika-bh-gradjani-traze-da-se-nagradi-uciteljica-sanela-ljumanovic/160215064"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215064.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Uvela znakovni jezik radi jednog učenika: Bh. građani traže da se nagradi učiteljica Sanela Ljumanović</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_vijesti" href="/vijesti/bih/koje-zemlje-nisu-priznale-bih-uspostavljene-diplomatske-odnose-imamo-sa-172-drzave/160215085"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215085.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Koje zemlje nisu priznale BiH: Uspostavljene diplomatske odnose imamo sa 172 države</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/sigurnost-i-efikasnost-lasera-u-podmladjivanju-uklanjanju-dlacica-kapilara-pjega/160215060"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215060.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Sigurnost i efikasnost lasera u podmlađivanju, uklanjanju dlačica, kapilara, pjega...</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_lifestyle" href="/lifestyle/ruza-i-mustafa-nam-dokazuju-kako-nikad-nije-kasno-za-ljubav-i-pronalazak-srodne-duse/160215045"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215045.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Ruža i Mustafa nam dokazuju kako nikad nije kasno za ljubav i pronalazak srodne duše</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_lifestyle" href="/lifestyle/modailjepota/maneken-iz-visokog-s-angazmanom-u-new-delhiju-za-svaki-uspjeh-je-potrebno-odricanje/160209061"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160209061.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Maneken iz Visokog s angažmanom u New Delhiju: Za svaki uspjeh je potrebno odricanje</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_biznis" href="/biznis/kasumovic-bojim-se-da-ce-se-ponoviti-lopovluci-u-privatizaciji-cicic-drzava-prvo-mora-znati-sta-prodaje/160208044"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160208044.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Kasumović: Bojim se da će se ponoviti lopovluci u privatizaciji, Čičić: Država prvo mora znati šta prodaje</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_vijesti" href="/vijesti/bih/broj-korisnika-javnih-kuhinja-u-banjoj-luci-se-ne-smanjuje/160210133"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160210133.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Broj korisnika javnih kuhinja u Banjoj Luci se ne smanjuje</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_biznis" href="/biznis/odzak-ce-izgradnjom-koridora-5c-predstavljati-vrata-bih-za-ulaz-turista/160205141"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160205141.jpg?v=2" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Odžak će izgradnjom koridora 5C predstavljati vrata BiH za ulaz turista</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/muzika/pamela-ramljak-meni-smisao-zivota-nisu-jahta-avioni-i-svaki-dan-nova-chanel-torba/160209024"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160209024.jpg?v=2" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Pamela Ramljak: Meni smisao života nisu jahta, avioni i svaki dan nova Chanel torba</div><div className="clearfix" /></div></div></div></a></div></div></div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="container">
              <div className="ads_leaderboard_container lc2">
                <div className="ads_leaderboard_inside">
                  <div id="ads_leaderboard_2">
                  </div>
                </div>
              </div>
            </div><div className="block struct struct_8">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_biznis" href="/biznis">Biznis</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_biznis" href="/biznis/privreda">Privreda</a>
                    <div className="seperator">|</div> <a className="tch_biznis" href="/biznis/finansije">Finansije</a>
                    <div className="seperator">|</div> <a className="tch_biznis" href="/biznis/investicije">Investicije</a>
                    <div className="seperator">|</div> <a className="tch_biznis" href="/biznis/eurozona">Eurozona</a>
                    <div className="seperator">|</div> <a className="tch_biznis" href="/biznis/berza">Berza</a>
                    <div className="seperator hidden-md">|</div> <a className="tch_biznis hidden-md" href="/biznis/startupi">Startupi</a>
                    <div className="seperator hidden-md">|</div> <a className="tch_biznis hidden-md" href="/biznis/posao">Posao</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line has_four"><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/biznis/mladi-poduzetnici-iz-regije-srebrenice-pokrecu-vlastiti-biznis/160217112"><div className="above"><span className="kategorija tc_biznis">biznis</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217112.jpg" /><div className="overblack" /></div><h1 className="srednji">Mladi poduzetnici iz regije Srebrenice pokreću vlastiti biznis</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 1 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 1 min</span><span className="comments"><i className="icon_komentari" /> 7</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/biznis/bombardier-ukida-7-000-radnih-mjesta/160217093"><div className="above"><span className="kategorija tc_biznis">biznis</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217093.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Bombardier ukida 7.000 radnih mjesta</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 3h 5 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 3h 5 min</span><span className="comments"><i className="icon_komentari" /> 7</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/biznis/eutelsat-i-nrm-cetvrti-put-partneri/160217067"><div className="above"><span className="kategorija tc_biznis">biznis</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217067.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Eutelsat i NRM četvrti put partneri</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 4h 39 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 4h 39 min</span><span className="comments"><i className="icon_komentari" /> 0</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/biznis/privreda/privredni-gigant-energoinvest-bi-krajem-februara-trebao-dobiti-novog-direktora/160217033"><div className="above"><span className="kategorija tc_biznis">Privreda</span><span className="shareovi"><i className="icon_dijeljenja" /> 16</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217033.jpg" /><div className="overblack" /></div><h1 className="srednji">Privredni gigant Energoinvest bi krajem februara trebao dobiti novog direktora</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 5h 23 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 5h 23 min</span><span className="comments"><i className="icon_komentari" /> 32</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="load-more visible-xs" onclick="ga('send', 'event', 'Mobilna prikaži više', 'Click', '');">prikaži više</div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="block-title rel">
                  <span className="icon_x-logo title-svg-icon" /> Promo
                  <a className="btn pull-right" href="http://marketing.klix.ba">
                      Marketing <i className="icon icon_strelica_desno" />
                  </a>
                  <img className="g-up visible-lg" src="/images/gradient-up.png" />
                </div>
                <div className="block-flex-1" scrolltimer ng-scroll="scrollNajcitanije(top, blok);">
                  <div className="izdvojeneList row theme_promo"><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_vijesti" href="/vijesti/bih/zivot-ide-dalje-u-stanu-obnovljenom-uz-pomoc-evropske-unije/160215077"><div className="vholder"><div className="row"><div className="col-xs-2"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215077.jpg?v=1" /></div></div><div className="col-xs-10 naslovHolder"><div className="naslov">Život ide dalje u stanu obnovljenom uz pomoć Evropske unije</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/film-tv/peti-val-stize-u-bh-kinodvorane-a-vi-mozete-osvojiti-ulaznice/160216117"><div className="vholder"><div className="row"><div className="col-xs-2"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216117.jpg?v=1" /></div></div><div className="col-xs-10 naslovHolder"><div className="naslov">"Peti val" stiže u bh. kinodvorane, a vi možete osvojiti ulaznice</div><div className="clearfix" /></div></div></div></a></div></div></div>
                </div>
                <div className="block-flex-2 kursna-block">
                  <div className="row" ng-controller="KursnaCtrlD">
                    <div className="col-md-12 col-sm-12 konvertor">
                      <div className="block-title"><i className="title-icon icon_konverter" /> Konvertor valuta</div>
                      <div className="konvertorHolder">
                        <div className="box_a row no-margin-md no-padding-xs no-margin-lg col-lg-12 col-md-12 no-padding-md no-padding-lg no-padding-sm">
                          <div className="txtbox col-xs-8 no-l-padding-md no-l-padding-lg"><input type="text" ng-model="val_a" ng-focus="smijer = 0" ng-keyup="calcKurs();" /></div>
                          <div className="col-xs-4 no-r-padding-lg">
                            <div className="kxSelect">
                              <select ng-model="valuta_a" ng-options="kurs.valuta for kurs in kursna" ng-change="calcKurs();" />
                              <i className="icon_chevron_dole" />
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                        <div className="row hidden">
                          <div className="col-xs-4 col-sm-push-8 text-center smijer" ng-click="smijer = smijer == 0 ? 1 : 0; calcKurs();">
                            <i className="icon_chevron_dole" />
                          </div>
                        </div>
                        <div className="box_b row no-margin-md no-padding-xs no-margin-lg col-lg-12 col-md-12 no-padding-md no-padding-lg no-padding-sm">
                          <div className="txtbox col-xs-8 no-l-padding-lg"><input type="text" ng-model="val_b" ng-focus="smijer = 1" ng-keyup="calcKurs();" /></div>
                          <div className="col-xs-4 no-r-padding-lg no-r-padding-md">
                            <div className="kxSelect">
                              <select ng-model="valuta_b" ng-options="kurs.valuta for kurs in kursna" ng-change="calcKurs();" />
                              <i className="icon_chevron_dole" />
                              <div className="clearfix" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="container">
              <div className="ads_leaderboard_container lc3">
                <div className="ads_leaderboard_inside">
                  <div id="ads_leaderboard_3">
                  </div>
                </div>
              </div>
            </div><div className="block struct struct_5">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_sport" href="/sport">Sport</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_sport" href="/sport/nogomet">Nogomet</a>
                    <div className="seperator">|</div> <a className="tch_sport" href="/sport/kosarka">Košarka</a>
                    <div className="seperator">|</div> <a className="tch_sport" href="/sport/tenis">Tenis</a>
                    <div className="seperator">|</div> <a className="tch_sport" href="/sport/rukomet">Rukomet</a>
                    <div className="seperator">|</div> <a className="tch_sport" href="/sport/formula1">Formula 1</a>
                    <div className="seperator hidden-md">|</div> <a className="tch_sport hidden-md" href="/sport/skijanje">Skijanje</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line has_big"><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/sport/nogomet/raspudic-spoj-mladost-i-iskustva-recept-za-povratak-borca-u-vrh-bh-fudbala/160217110"><div className="above"><span className="kategorija tc_sport">Nogomet</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217110.jpg?v=2" /><div className="overblack" /></div><h1 className="srednji">Raspudić: Spoj mladost i iskustva recept za povratak Borca u vrh bh. fudbala</h1><div className="uvod">Fudbaleri Banjalučkog Borca odigrali su i šestu kontrolnu utakmicu u sklopu priprema pred...</div><div className="below l0"><span className="hidden-md hidden-sm date">prije 1h 35 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 1h 35 min</span><span className="comments"><i className="icon_komentari" /> 6</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-6 col-sm-6 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/sport/tenis/trener-ane-ivanovic-otkrio-uzrok-kolabiranja-na-australian-openu/160217063"><div className="above"><span className="kategorija tc_sport">Tenis</span><span className="shareovi"><i className="icon_dijeljenja" /> 1</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/l21_160217063.jpg?v=1" /><div className="overblack" /></div><h1 className="veliki">Trener Ane Ivanović otkrio uzrok kolabiranja na Australian Openu</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 2h 20 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 2h 20 min</span><span className="comments"><i className="icon_komentari" /> 29</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/sport/najbolji-svjetski-skakaci-u-vodu-ponovo-u-mostaru/160217082"><div className="above"><span className="kategorija tc_sport">sport<i className="mark icon_foto" /><i className="mark icon_video" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 422</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217082.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Najbolji svjetski skakači u vodu ponovo u Mostaru</h1><div className="uvod">Red Bull Cliff Diving Svjetsko prvenstvo i ove godine dolazi u Bosnu i Hercegovinu.</div><div className="below l0"><span className="hidden-md hidden-sm date">prije 3h 48 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 3h 48 min</span><span className="comments"><i className="icon_komentari" /> 17</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="news-line has_four"><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/sport/kosarka/kenan-bajramovic-napusta-spars-i-odlazi-u-turski-socar-petkim/160217103"><div className="above"><span className="kategorija tc_sport">Košarka</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217103.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Kenan Bajramović napušta Spars i odlazi u turski Socar Petkim</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 2h 5 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 2h 5 min</span><span className="comments"><i className="icon_komentari" /> 8</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/sport/nogomet/gazzeta-dzeko-je-bio-na-meti-real-madrida-sada-ima-priliku-pokazati-sta-su-propustili/160217100"><div className="above"><span className="kategorija tc_sport">Nogomet</span><span className="shareovi"><i className="icon_dijeljenja" /> 33</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217100.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Gazzeta: Džeko je bio na meti Real Madrida, sada ima priliku pokazati šta su propustili</h1><div className="below l0"><span className="hidden-md hidden-sm date tc_sport"><i className="icon_popularno" /> prije 2h 31 min</span><span className="visible-md-inline-block visible-sm-inline-block date tc_sport"><i className="icon_popularno" /> prije 2h 31 min</span><span className="comments"><i className="icon_komentari" /> 27</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/sport/nogomet/rooney-propusta-mec-protiv-midtjyllanda-u-evropskoj-ligi/160217091"><div className="above"><span className="kategorija tc_sport">Nogomet</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217091.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Rooney propušta meč protiv Midtjyllanda u Evropskoj ligi</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 3h 17 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 3h 17 min</span><span className="comments"><i className="icon_komentari" /> 9</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-3 col-sm-3 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/sport/nogomet/trener-labbadia-zadovoljan-spahic-produzuje-ugovor-sa-hsv-om/160217072"><div className="above"><span className="kategorija tc_sport">Nogomet<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 2</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217072.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Trener Labbadia zadovoljan, Spahić produžuje ugovor sa HSV-om</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 4h 8 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 4h 8 min</span><span className="comments"><i className="icon_komentari" /> 6</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="load-more visible-xs" onclick="ga('send', 'event', 'Mobilna prikaži više', 'Click', '');">prikaži više</div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="block-title">
                  <i className="icon_popularno title-icon f16" /> Izdvojeno <a className="btn pull-right" href="/sport">
                      Vidi sve <i className="icon icon_strelica_desno" />
                  </a>
                  <img className="g-up visible-lg" src="/images/gradient-up.png" />
                </div>
                <div className="block-flex-1" scrolltimer>
                  <div className="izdvojeneList row theme_pocetna"><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/kosarka/kenan-bajramovic-napusta-spars-i-odlazi-u-turski-socar-petkim/160217103"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160217103.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Kenan Bajramović napušta Spars i odlazi u turski Socar Petkim</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/tenis/del-potro-se-pobjedom-vratio-nakon-skoro-godinu-dana-pauze/160217040"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160217040.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Del Potro se pobjedom vratio nakon skoro godinu dana pauze</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/nogomet/adnan-osmanovic-interesantan-slovackom-klubu-krste-velkoski-odlazi-s-koseva/160217028"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160217028.jpg" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Adnan Osmanović interesantan slovačkom klubu, Krste Velkoski odlazi s Koševa</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/nogomet/zlatan-ibrahimovic-srusio-rekord-lige-prvaka/160217025"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160217025.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Zlatan Ibrahimović srušio rekord Lige prvaka</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/nogomet/cetiri-bh-internacionalca-na-terenu-roma-docekuje-real-vatreno-krstenje-genta-i-wolfsburga-u-osmini-finala-lige-prvaka/160216094"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216094.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Četiri bh. internacionalca na terenu: Roma dočekuje Real, "vatreno krštenje" Genta i Wolfsburga u osmini finala Lige prvaka</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/nogomet/liga-prvaka-psg-savladao-chelsea-sa-2-1-benfica-s-minimalnih-1-0-bolja-od-zenita/160216165"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216165.jpg?v=2" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Liga prvaka: PSG savladao Chelsea sa 2:1, Benfica s minimalnih 1:0 bolja od Zenita</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/nogomet/tek-je-pocetak-godine-a-u-maleziji-smo-vec-vidjeli-gol-za-nagradu-puskas/160216150"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216150.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Tek je početak godine, a u Maleziji smo već vidjeli gol za Nagradu Puskas</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/tenis/konacno-damir-dzumhur-pobijedio-ricardasa-berankisa/160216154"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216154.jpg" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Konačno: Damir Džumhur pobijedio Ricardasa Berankisa</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/nogomet/evropska-liga-souza-s-dva-pogotka-donio-pobjedu-fenerbahceu-nad-lokomotivom/160216151"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216151.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Evropska liga: Souza s dva pogotka donio pobjedu Fenerbahceu nad Lokomotivom</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_sport" href="/sport/igor-emkic-se-priprema-za-turnir-no-limit-8-spreman-sam-za-izazove-u-ringu-protivnici-ne-znaju-sta-ih-ceka/160216031"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216031.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Igor Emkić se priprema za turnir No Limit 8: Spreman sam za izazove u ringu, protivnici ne znaju šta ih čeka</div><div className="clearfix" /></div></div></div></a></div></div></div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="block struct struct_2">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_magazin" href="/magazin">Magazin</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_magazin" href="/magazin/muzika">Muzika</a>
                    <div className="seperator">|</div> <a className="tch_magazin" href="/magazin/film-tv">Film/TV</a>
                    <div className="seperator">|</div> <a className="tch_magazin" href="/magazin/showbiz">Showbiz</a>
                    <div className="seperator">|</div> <a className="tch_magazin" href="/magazin/ljepotice">Ljepotice</a>
                    <div className="seperator">|</div> <a className="tch_magazin" href="/magazin/zanimljivosti">Zanimljivosti</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line"><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/magazin/zanimljivosti/jeste-li-znali-da-je-danas-dan-macaka/160217085"><div className="above"><span className="kategorija tc_magazin">Zanimljivosti<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 20</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217085.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Jeste li znali da je danas Dan mačaka?</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 2h 23 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 2h 23 min</span><span className="comments"><i className="icon_komentari" /> 35</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/magazin/ljepotice/juli-anee-novo-fatalno-lice-svijeta-modelinga/160217023"><div className="above"><span className="kategorija tc_magazin">Ljepotice<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 1</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217023.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Juli Anee, novo fatalno lice svijeta modelinga</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 7h 52 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 7h 52 min</span><span className="comments"><i className="icon_komentari" /> 50</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/magazin/film-tv/preminuo-george-gaynes-zvijezda-policijske-akademije/160217021"><div className="above"><span className="kategorija tc_magazin">Film/TV<i className="mark icon_video" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 48</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217021.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Preminuo George Gaynes, zvijezda "Policijske akademije"</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 8h 17 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 8h 17 min</span><span className="comments"><i className="icon_komentari" /> 20</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="news-line"><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica bez_slike"><a href="/magazin/zanimljivosti/kako-je-ali-g-razgovarao-s-boutros-ghalijem-kako-se-kaze-g-no-na-francuskom/160217031"><div className="above"><span className="kategorija tc_magazin">Zanimljivosti<i className="mark icon_video" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 48</span></div><h1>Kako je Ali G razgovarao s Boutros-Ghalijem: "Kako se kaže g**no na francuskom?"</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 6h 23 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 6h 23 min</span><span className="comments"><i className="icon_komentari" /> 40</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica bez_slike"><a href="/magazin/zanimljivosti/america-brat-georgea-busha-na-twitteru-objavio-fotografiju-pistolja/160217018"><div className="above"><span className="kategorija tc_magazin">Zanimljivosti<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 14</span></div><h1>"America": Brat Georgea Busha na Twitteru objavio fotografiju pištolja</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 7h 53 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 7h 53 min</span><span className="comments"><i className="icon_komentari" /> 13</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12 last"><div className="articleHolder"><article className="kartica bez_slike"><a href="/magazin/zanimljivosti/garaza-u-kojoj-parking-mjesto-kosta-vise-od-116-000-dolara/160217003"><div className="above"><span className="kategorija tc_magazin">Zanimljivosti</span><span className="shareovi"><i className="icon_dijeljenja" /> 29</span></div><h1>Garaža u kojoj parking mjesto košta više od 116.000 dolara</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 9h 45 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 9h 45 min</span><span className="comments"><i className="icon_komentari" /> 19</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div><div className="load-more visible-xs" onclick="ga('send', 'event', 'Mobilna prikaži više', 'Click', '');">prikaži više</div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="block-title">
                  <i className="icon_ljepotice title-icon f8" /> Ljepotice <a className="btn pull-right" href="/magazin/ljepotice">
                      Vidi sve <i className="icon icon_strelica_desno" />
                  </a>
                  <img className="g-up visible-lg" src="/images/gradient-up.png" />
                </div>
                <div className="block-flex-1" scrolltimer>
                  <div className="izdvojeneList row theme_pocetna"><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/juli-anee-novo-fatalno-lice-svijeta-modelinga/160217023"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160217023.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Juli Anee, novo fatalno lice svijeta modelinga</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/upoznajte-alanu-blanchard-uspjesnu-surferku-koja-se-bavi-i-modelingom/160216019"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216019.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Upoznajte Alanu Blanchard, uspješnu surferku koja se bavi i modelingom</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/pogledajte-zasto-je-olivia-culpo-jedna-od-zvijezda-u-svijetu-modelinga/160215016"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215016.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Pogledajte zašto je Olivia Culpo jedna od zvijezda u svijetu modelinga</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/sofija-kraljica-fitnesa-i-mode/160214048"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160214048.jpg?v=2" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Sofija, kraljica fitnesa i mode</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/za-gledanje-i-slusanje-prelijepa-dj-unimerce/160213008"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160213008.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Za gledanje i slušanje: Prelijepa DJ Unimerce</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/sta-danas-radi-internet-senzacija-sara-mills/160212034"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160212034.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Šta danas radi internet senzacija Sara Mills</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/paris-dylan-djevojka-kojoj-maxim-nije-mogao-odoljeti/160211018"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160211018.jpg?v=2" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Paris Dylan, djevojka kojoj Maxim nije mogao odoljeti</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/olga-brun-se-oslanja-na-stav-a-ne-na-tijelo/160210028"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160210028.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Olga Brun se oslanja na stav, a ne na tijelo</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/bangs-garcia-je-ponos-filipina/160209122"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160209122.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Bangs Garcia je ponos Filipina</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_magazin" href="/magazin/ljepotice/vitka-maria-voli-slatke-koale-i-muziku/160208038"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160208038.jpg?v=2" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Vitka Maria voli slatke koale i muziku</div><div className="clearfix" /></div></div></div></a></div></div></div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="block struct struct_7">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_lifestyle" href="/lifestyle">Lifestyle</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_lifestyle" href="/lifestyle/modailjepota">Moda i ljepota</a>
                    <div className="seperator">|</div> <a className="tch_lifestyle" href="/lifestyle/zdravlje">Zdravlje</a>
                    <div className="seperator">|</div> <a className="tch_lifestyle" href="/lifestyle/vezeiseks">Veze i seks</a>
                    <div className="seperator">|</div> <a className="tch_lifestyle" href="/lifestyle/hranaipice">Hrana i piće</a>
                    <div className="seperator">|</div> <a className="tch_lifestyle" href="/lifestyle/kucaiured">Kuća i ured</a>
                    <div className="seperator hidden-md">|</div> <a className="tch_lifestyle hidden-md" href="/lifestyle/putovanja">Putovanja</a>
                    <div className="seperator hidden-md">|</div> <a className="tch_lifestyle hidden-md" href="/lifestyle/bebe">Bebe</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line"><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/lifestyle/zdravlje/argentinski-naucnici-tvrde-bolest-kod-beba-ne-izaziva-zika-virus-vec-americki-pesticid/160217074"><div className="above"><span className="kategorija tc_lifestyle">Zdravlje</span><span className="shareovi"><i className="icon_dijeljenja" /> 16</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217074.jpg" /><div className="overblack" /></div><h1 className="srednji">Argentinski naučnici tvrde: Bolest kod beba ne izaziva Zika virus već američki pesticid</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 4h 15 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 4h 15 min</span><span className="comments"><i className="icon_komentari" /> 17</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/lifestyle/hranaipice/naucnici-konacno-otkrili-zasto-je-coca-colu-bolje-piti-iz-staklene-flase/160217038"><div className="above"><span className="kategorija tc_lifestyle">Hrana i piće</span><span className="shareovi"><i className="icon_dijeljenja" /> 21</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217038.jpg" /><div className="overblack" /></div><h1 className="srednji">Naučnici konačno otkrili zašto je Coca-Colu bolje piti iz staklene flaše</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 6h 50 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 6h 50 min</span><span className="comments"><i className="icon_komentari" /> 30</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/lifestyle/bebe/konzumacija-ribe-u-trudnoci-povezana-sa-povecanom-tjelesnom-masom-djece/160217019"><div className="above"><span className="kategorija tc_lifestyle">Bebe</span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217019.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Konzumacija ribe u trudnoći povezana sa povećanom tjelesnom masom djece</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 7h 50 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 7h 50 min</span><span className="comments"><i className="icon_komentari" /> 4</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="tvprogramBlock">
                  <div className="block-title" in-view-options="{offsetTop: 150}" in-view="initializeTVProgram();">
                    <i className="title-icon icon_tv" /> TV Program
                    <a className="btn pull-right" href="/tv-program">Vidi sve <i className="icon_strelica_desno" /></a>
                  </div>
                  <div className="tvprogramKanali row">
                    <a className="col-md-12 col-sm-6" href="/tv-program/nova">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">Najbolje godine 2, ep. 140., serija</div>
                        <div className="meta">NOVA TV 18:15 - 19:15</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6" href="/tv-program/al-jazeera-balkans">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">VIJESTI, informativni</div>
                        <div className="meta">AJB 18:00 - 19:00</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6" href="/tv-program/bht1">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">Ljubav s okusom vina, ep. 106. (R),...</div>
                        <div className="meta">BHT1 18:00 - 18:50</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6" href="/tv-program/obn">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">Ali, ep. 52., turska serija</div>
                        <div className="meta">OBN 17:55 - 18:50</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6" href="/tv-program/pink-bih">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">Info top 18:00, informativni</div>
                        <div className="meta">Pink BH 18:06 - 18:37</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6 hidden-lg" href="/tv-program/ftv">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">Nepokoreni grad, ep. 6., igrana serija...</div>
                        <div className="meta">FTV 17:25 - 18:45</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6 hidden-lg" href="/tv-program/rtrs">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">TAJNE INSTITUTA ZA DAME, ep. 92., serija...</div>
                        <div className="meta">RTRS 17:38 - 18:27</div>
                      </div>
                    </a>
                    <a className="col-md-12 col-sm-6 hidden-lg" href="/tv-program/tv1">
                      <div className="kanal">
                        <div className="boja" />
                        <div className="naziv">Oluja, ep. 34., igrana serija</div>
                        <div className="meta">TV1 17:25 - 18:25</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="block struct struct_6 block-colored">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_auto" href="/auto">Auto</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_auto" href="/auto/testovi">Testovi</a>
                    <div className="seperator">|</div> <a className="tch_auto" href="/auto/noviteti">Noviteti</a>
                    <div className="seperator">|</div> <a className="tch_auto" href="/auto/koncepti">Koncepti</a>
                    <div className="seperator">|</div> <a className="tch_auto" href="/auto/tuning">Tuning</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line"><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika obojena bg_auto"><a href="/auto/noviteti/alpine-vision-renault-predstavio-predserijski-model-legendarne-alpine/160217088"><div className="above"><span className="kategorija tc_auto">Noviteti<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 0</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217088.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Alpine Vision - Renault predstavio predserijski model legendarne Alpine</h1><div className="below l0"><span className="hidden-md hidden-sm date"><i className="icon_popularno" /> prije 3h 3 min</span><span className="visible-md-inline-block visible-sm-inline-block date"><i className="icon_popularno" /> prije 3h 3 min</span><span className="comments"><i className="icon_komentari" /> 11</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika obojena bg_auto"><a href="/auto/general-motors-povlaci-oko-200-000-vozila-zbog-problema-sa-vazdusnim-jastucima/160216124"><div className="above"><span className="kategorija tc_auto">auto</span><span className="shareovi"><i className="icon_dijeljenja" /> 21</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160216124.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">General Motors povlači oko 200.000 vozila zbog problema sa vazdušnim jastucima</h1><div className="below l0"><span className="hidden-md hidden-sm date"><i className="icon_popularno" /> jučer</span><span className="visible-md-inline-block visible-sm-inline-block date"><i className="icon_popularno" /> jučer</span><span className="comments"><i className="icon_komentari" /> 10</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12 last"><div className="articleHolder"><article className="kartica velika obojena bg_auto"><a href="/auto/tuning/kaege-tunirao-porsche-911-gt3-rs/160216091"><div className="above"><span className="kategorija tc_auto">Tuning<i className="mark icon_foto" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 1</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160216091.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Kaege tunirao Porsche 911 GT3 RS</h1><div className="below l0"><span className="hidden-md hidden-sm date"><i className="icon_popularno" /> jučer</span><span className="visible-md-inline-block visible-sm-inline-block date"><i className="icon_popularno" /> jučer</span><span className="comments"><i className="icon_komentari" /> 11</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="block-title">
                  <i className="icon_popularno title-icon f16" /> Testovi <a className="btn pull-right btn-white" href="/auto/testovi">
                      Vidi sve <i className="icon icon_strelica_desno" />
                  </a>
                  <img className="g-up visible-lg" src="/images/gradient-up.png" />
                </div>
                <div className="block-flex-1" scrolltimer>
                  <div className="izdvojeneList row theme_pocetna"><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_auto" href="/auto/testovi/renault-espace-1-6-dci-edc-zen-poseban-po-svaku-cijenu/160111144"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160111144.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Renault Espace 1,6 dCi EDC Zen: Poseban po svaku cijenu</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_auto" href="/auto/testovi/barcelona-vozili-smo-novi-kia-sportage/160127043"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160127043.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Barcelona: Vozili smo novi KIA Sportage</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_auto" href="/auto/testovi/alicante-vozili-smo-novi-toyota-rav4-hybrid/160122021"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160122021.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Alicante: Vozili smo novi Toyota RAV4 Hybrid</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_auto" href="/auto/testovi/skoda-superb-2-0-tdi-4x4-style-opet-za-klasu-vise/151226002"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_151226002.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Škoda Superb 2.0 TDI 4x4 Style: Opet za klasu više</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_auto" href="/auto/testovi/test-hyundai-tucson-1-7-crdi-classic-jedan-iz-prvog-tima/151118020"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_151118020.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">TEST: Hyundai Tucson 1.7 CRDi Classic: Jedan iz prvog tima</div><div className="clearfix" /></div></div></div></a></div></div></div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="block struct struct_3">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" /> <a className="headingUrl tch_scitech" href="/scitech">Scitech</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                    <a className="tch_scitech" href="/scitech/nauka">Nauka</a>
                    <div className="seperator">|</div> <a className="tch_scitech" href="/scitech/tehnologija">Tehnologija</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                  <div className="news-line"><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/scitech/tehnologija/apple-dobio-naredbu-da-pomogne-fbi-u-otkljucati-telefon/160217014"><div className="above"><span className="kategorija tc_scitech">Tehnologija</span><span className="shareovi"><i className="icon_dijeljenja" /> 11</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217014.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Apple dobio naredbu da pomogne FBI-u otključati telefon</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 7h 45 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 7h 45 min</span><span className="comments"><i className="icon_komentari" /> 39</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12"><div className="articleHolder"><article className="kartica velika"><a href="/scitech/nauka/eksplozije-i-erupcije-nasa-objavila-fantastican-ultra-hd-video-sunca/160217006"><div className="above"><span className="kategorija tc_scitech">Nauka<i className="mark icon_video" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 19</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160217006.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Eksplozije i erupcije: NASA objavila fantastičan Ultra HD video Sunca</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 9h 23 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 9h 23 min</span><span className="comments"><i className="icon_komentari" /> 11</span></div><div className="clearfix" /></a></article></div></div><div className="kolona col col-md-4 col-sm-4 col-xs-12 last"><div className="articleHolder"><article className="kartica velika"><a href="/scitech/tehnologija/kina-ce-iseliti-9-000-ljudi-zbog-izgradnje-najveceg-teleskopa-na-svijetu/160216142"><div className="above"><span className="kategorija tc_scitech">Tehnologija<i className="mark icon_video" /></span><span className="shareovi"><i className="icon_dijeljenja" /> 2</span></div><div className="img"><img src="http://static.klix.ba/media/images/vijesti/m32_160216142.jpg?v=1" /><div className="overblack" /></div><h1 className="srednji">Kina će iseliti 9.000 ljudi zbog izgradnje najvećeg teleskopa na svijetu</h1><div className="below l0"><span className="hidden-md hidden-sm date">prije 21h 47 min</span><span className="visible-md-inline-block visible-sm-inline-block date">prije 21h 47 min</span><span className="comments"><i className="icon_komentari" /> 22</span></div><div className="clearfix" /></a></article></div></div><div className="clearfix" /></div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm block-side block-flex">
                <div className="block-title">
                  <i className="icon_popularno title-icon f16" /> Izdvojene <a className="btn pull-right" href="/scitech">
                      Vidi sve <i className="icon icon_strelica_desno" />
                  </a>
                  <img className="g-up visible-lg" src="/images/gradient-up.png" />
                </div>
                <div className="block-flex-1" scrolltimer>
                  <div className="izdvojeneList row theme_pocetna"><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/zabavite-se-uz-aplikaciju-msqrd-napravite-zanimljive-selfije-i-klipove/160216036"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216036.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Zabavite se uz aplikaciju MSQRD, napravite zanimljive selfije i klipove</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/iz-microsofta-stize-smartphone-lumia-650/160216027"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216027.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Iz Microsofta stiže smartphone Lumia 650</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/lg-najavio-jeftine-alternative-smartphoneu-lg-g5/160216024"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160216024.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">LG najavio jeftine alternative smartphoneu LG G5</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow"><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/ako-postavite-ovaj-datum-na-appleovim-uredjajima-blokirat-cete-ih/160215070"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215070.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Ako postavite ovaj datum na Appleovim uređajima, blokirat ćete ih</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/australska-kompanija-poklonila-besplatan-download-preuzet-1-841-terabajt-podataka/160215028"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215028.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Australska kompanija poklonila besplatan download, preuzet 1.841 terabajt podataka</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/novi-render-pokazuje-da-ce-htc-one-m10-biti-jedan-od-najljepsih-smartphonea-na-trzistu/160215026"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160215026.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Novi render pokazuje da će HTC One M10 biti jedan od najljepših smartphonea na tržištu</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/americki-astronaut-zemlja-iz-svemira-izgleda-bolesno-i-ranjivo/160214007"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160214007.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Američki astronaut: Zemlja iz svemira izgleda bolesno i ranjivo</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/nasa-regrutuje-nove-astronaute-neophodna-emocionalna-snaga-i-dobro-mentalno-zdravlje/160214019"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160214019.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">NASA regrutuje nove astronaute: Neophodna emocionalna snaga i dobro mentalno zdravlje</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/polovina-ljudi-na-svijetu-ce-ostati-bez-posla-zbog-robota-u-sljedecih-30-godina/160213079"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160213079.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Polovina ljudi na svijetu će ostati bez posla zbog robota u sljedećih 30 godina</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow hidden-md"><div className="col-md-12 col-sm-6"><a className="tch_scitech" href="/scitech/tehnologija/standardno-visoko-otkrivena-cijena-galaxyja-s7-i-s7-edge/160213012"><div className="vholder"><div className="row"><div className="col-xs-3 col-lg-push-9"><div className="img"><img src="http://static.klix.ba/media/images/vijesti/s11_160213012.jpg?v=1" /></div></div><div className="col-xs-9 naslovHolder col-lg-pull-3"><div className="naslov">Standardno visoko: Otkrivena cijena Galaxyja S7 i S7 Edge</div><div className="clearfix" /></div></div></div></a></div></div></div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="multiblocks ng-cloak">
              <div className="col-md-6 col-sm-12">
                <div className="block struct fotodanaBlock" ng-controller="FotodanaCtrl" in-view="initializeFotodana();">
                  <div className="block-head col-md-12">
                    <div className="col-md-12 heading">
                      <div className="kocka bg_nightlife" /> Fotografija dana
                      <div className="shares pull-right">
                        <i className="icon_dijeljenja" />
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="fotocont">
                    <img className="photo" imageonload="loaded = true;" ng-src="" />
                    <div className="loader" ng-show="!loaded">
                      <img width="150" src="/images/gridloader.svg" />
                    </div>
                    <div className="fs" ng-click="fullscreenOn();" ng-show="!fullscreen"><i className="icon_fullscreen" /></div>
                    <div className="fs" ng-click="fullscreenOff();" ng-show="fullscreen"><i className="icon_x" /></div>
                    <div className="fotoBtn left" ng-click="prevPhoto();" ng-hide="i == 0">
                      <i className="icon_chevron_lijevo" />
                    </div>
                    <div className="fotoBtn right" ng-click="nextPhoto();">
                      <i className="icon_chevron_desno" />
                    </div>
                    <div className="fullbottom" ng-show="fullscreen">
                      <div className="fotobottom pull-left">
                        <div className="naslov"></div>
                        <div className="meta"></div>
                      </div>
                      <div className="pull-right">
                        <div className="shares"><i className="icon_dijeljenja" /></div>
                        <social ng-if="fotodana" theme="dark" caption="Fotografija dana: " />
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="fotobottom">
                    <div className="col-sm-9">
                      <div className="naslov"></div>
                      <div className="meta"></div>
                    </div>
                    <div className="col-sm-3 text-right">
                      <social ng-if="fotodana" caption="Fotografija dana: " />
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="col-sm-6 col-sm-12 hidden-xs">
                <div className="block block-colored klixtvbox">
                  <div className="block-head">
                    <div className="heading">
                      <div className="kocka" /> <a className="headingUrl tch_auto" href="/">Video</a>
                    </div>
                  </div>
                  <div className="block-news dyn">
                    <div className="izdvojeneList row theme_video"><div className="izdvojeneRow"><div className="col-md-12 col-sm-12"><a className="tch_magazin" href="/magazin/muzika/bh-pjevacica-sheyla-na-muzickom-takmicenju-music-i-o/160217058"><div className="vholder"><div className="row"><div className="col-xs-4"><div className="img"><div className="play-icon" /><img src="http://static.klix.ba/media/images/vijesti/m21_160217058.jpg?v=2" /></div></div><div className="col-xs-8 naslovHolder col-sm-offset-4"><div className="naslov">Bh. pjevačica Sheyla na muzičkom takmičenju Music I/O</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-12"><a className="tch_vijesti" href="/vijesti/bih/pogledajte-kako-su-radoncica-docekali-ispred-avaz-twist-towera-fahro-legendo/160217092"><div className="vholder"><div className="row"><div className="col-xs-4"><div className="img"><div className="play-icon" /><img src="http://static.klix.ba/media/images/vijesti/m21_160217092.jpg?v=1" /></div></div><div className="col-xs-8 naslovHolder col-sm-offset-4"><div className="naslov">Pogledajte kako su Radončića dočekali ispred Avaz Twist Towera: Fahro, legendo</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-12"><a className="tch_magazin" href="/magazin/zanimljivosti/kako-je-ali-g-razgovarao-s-boutros-ghalijem-kako-se-kaze-g-no-na-francuskom/160217031"><div className="vholder"><div className="row"><div className="col-xs-4"><div className="img"><div className="play-icon" /><img src="http://static.klix.ba/media/images/vijesti/m21_160217031.jpg?v=1" /></div></div><div className="col-xs-8 naslovHolder col-sm-offset-4"><div className="naslov">Kako je Ali G razgovarao s Boutros-Ghalijem: "Kako se kaže g**no na francuskom?"</div><div className="clearfix" /></div></div></div></a></div></div><div className="izdvojeneRow"><div className="col-md-12 col-sm-12"><a className="tch_lifestyle" href="/lifestyle/prva-balerina-sa-hidzabom-stephanie-kurlow-zeli-zbliziti-svijet/160217012"><div className="vholder"><div className="row"><div className="col-xs-4"><div className="img"><div className="play-icon" /><img src="http://static.klix.ba/media/images/vijesti/m21_160217012.jpg?v=1" /></div></div><div className="col-xs-8 naslovHolder col-sm-offset-4"><div className="naslov">Prva balerina sa hidžabom: Stephanie Kurlow želi zbližiti svijet</div><div className="clearfix" /></div></div></div></a></div><div className="col-md-12 col-sm-12"><a className="tch_vijesti" href="/vijesti/svijet/papa-se-naljutio-kad-su-ga-iz-mase-povukli-za-rukav-ne-budite-sebicni/160217015"><div className="vholder"><div className="row"><div className="col-xs-4"><div className="img"><div className="play-icon" /><img src="http://static.klix.ba/media/images/vijesti/m21_160217015.jpg?v=1" /></div></div><div className="col-xs-8 naslovHolder col-sm-offset-4"><div className="naslov">Papa se naljutio kad su ga iz mase povukli za rukav: Ne budite sebični</div><div className="clearfix" /></div></div></div></a></div></div></div>
                  </div>
                  <div className="overlay" />
                </div>
              </div>
            </div>
            <div className="block miscBox hidden-xs">
              <div className="block-dyn">
                <div className="boxP">
                  <div className="col-sm-4">
                    <div className="box krizaljka" href="/krizaljka">
                      <div className="boxNaziv">
                        <div className="pull-left nicon">
                          <i className="icon_krizaljka" /> Križaljka
                        </div>
                        <a className="hidden pull-right btn" href="/krizaljke">
                            Vidi više&nbsp;<i className="icon_strelica_desno" />
                        </a>
                        <div className="clearfix" />
                      </div>
                      <a href="/krizaljka">
                        <div className="krimg"><img ng-src="http://static.klix.ba/media/images/sezam/thumb/1562_Tinka Milinovic.jpg" /></div>
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje" />
                        <div className="polje lastrow" />
                        <div className="polje lastrow" />
                        <div className="polje lastrow" />
                        <div className="polje lastrow" />
                        <div className="polje go"><i className="icon_strelica_desno" /></div>
                        <div className="clearfix" />
                        <div className="pitanje">Znate li ko je pjevačica na slici?</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="box">
                      <div className="boxNaziv">
                        <div className="pull-left nicon">
                          <i className="icon_forum" />Forum
                        </div>
                        <a className="pull-right btn" href="http://forum.klix.ba">
                            Vidi više&nbsp;<i className="icon_strelica_desno" />
                        </a>
                        <div className="clearfix" />
                      </div>
                      <div className="forumLinkovi">
                        <a href="http://forum.klix.ba/papanluk-na-automobilima-t82562.html">
                          <div className="row">
                            <div className="topicTitle col-sm-10">Papanluk na automobilima</div>
                            <div className="topicPost text-right col-sm-2">7K</div>
                            <span className="clearfix" />
                          </div>
                        </a>
                        <a href="http://forum.klix.ba/gdje-u-zenici--t117378.html">
                          <div className="row">
                            <div className="topicTitle col-sm-10">Gdje u Zenici...?</div>
                            <div className="topicPost text-right col-sm-2">360</div>
                            <span className="clearfix" />
                          </div>
                        </a>
                        <a href="http://forum.klix.ba/uspon-i-pad-hapsenje-fahrudina-radoncica--t140952.html">
                          <div className="row">
                            <div className="topicTitle col-sm-10">Uspon i pad (HAPŠENJE) Fahrudina Radončića!!!</div>
                            <div className="topicPost text-right col-sm-2">3K</div>
                            <span className="clearfix" />
                          </div>
                        </a>
                        <a href="http://forum.klix.ba/ne-zeli-da-me-ozeni-zbog--t141397.html">
                          <div className="row">
                            <div className="topicTitle col-sm-10">Ne zeli da me ozeni zbog..</div>
                            <div className="topicPost text-right col-sm-2">304</div>
                            <span className="clearfix" />
                          </div>
                        </a>
                        <a href="http://forum.klix.ba/etf-t67683.html">
                          <div className="row">
                            <div className="topicTitle col-sm-10">ETF</div>
                            <div className="topicPost text-right col-sm-2">1K</div>
                            <span className="clearfix" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="box anketa" anketa>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="boxP">
                  <div className="col-sm-4">
                    <a className="box mini text-center" href="/tv-program">
                      <div className="boxCont tvp">
                        <i className="icon_tv" />
                        <span className="boxname">TV Program</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-4">
                    <a className="box mini text-center hidden-p hidden-m" href="/stanje-na-putevima">
                      <div className="boxCont stanje">
                        <i className="icon_auto" />
                        <span className="boxname">Stanje na putevima</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-4">
                    <a className="box mini text-center" href="/kursna-lista">
                      <div className="boxCont kursna">
                        <i className="icon_kursna_lista" />
                        <span className="boxname">Kursna lista</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="block-side hidden-md">
                <div className="prognoza row">
                  <a className="col-md-12 col-sm-6" href="/vrijeme/sarajevo">
                    <div className="grad">
                      <div className="naziv col-sm-10 col-lg-10">
                        <span className="vr vr-clear-dark" />
                        <div className="gradIme">Sarajevo</div>
                        <div className="gradOpis">Vedro</div>
                      </div>
                      <div className="temp col-sm-2 col-lg-2 text-right">
                          19°C
                      </div>
                      <div className="clearfix" />
                    </div>
                  </a>
                  <a className="col-md-12 col-sm-6" href="/vrijeme/mostar">
                    <div className="grad">
                      <div className="naziv col-sm-10 col-lg-10">
                        <span className="vr vr-partlycloudy-dark" />
                        <div className="gradIme">Mostar</div>
                        <div className="gradOpis">Djelomična naoblaka</div>
                      </div>
                      <div className="temp col-sm-2 col-lg-2 text-right">
                          21°C
                      </div>
                      <div className="clearfix" />
                    </div>
                  </a>
                  <a className="col-md-12 col-sm-6" href="/vrijeme/banja luka">
                    <div className="grad">
                      <div className="naziv col-sm-10 col-lg-10">
                        <span className="vr vr-partlycloudy-dark" />
                        <div className="gradIme">Banja Luka</div>
                        <div className="gradOpis">Djelomična naoblaka</div>
                      </div>
                      <div className="temp col-sm-2 col-lg-2 text-right">
                          8°C
                      </div>
                      <div className="clearfix" />
                    </div>
                  </a>
                  <a className="col-md-12 col-sm-6" href="/vrijeme/bihać">
                    <div className="grad">
                      <div className="naziv col-sm-10 col-lg-10">
                        <span className="vr vr-chancerain-dark" />
                        <div className="gradIme">Bihać</div>
                        <div className="gradOpis">Moguća kiša</div>
                      </div>
                      <div className="temp col-sm-2 col-lg-2 text-right">
                          15°C
                      </div>
                      <div className="clearfix" />
                    </div>
                  </a>
                  <a className="col-md-12 col-sm-6" href="/vrijeme/tuzla">
                    <div className="grad">
                      <div className="naziv col-sm-10 col-lg-10">
                        <span className="vr vr-partlycloudy-dark" />
                        <div className="gradIme">Tuzla</div>
                        <div className="gradOpis">Djelomična naoblaka</div>
                      </div>
                      <div className="temp col-sm-2 col-lg-2 text-right">
                          7°C
                      </div>
                      <div className="clearfix" />
                    </div>
                  </a>
                  <a className="col-md-12 col-sm-6" href="/vrijeme/zenica">
                    <div className="grad">
                      <div className="naziv col-sm-10 col-lg-10">
                        <span className="vr vr-clear-dark" />
                        <div className="gradIme">Zenica</div>
                        <div className="gradOpis">Vedro</div>
                      </div>
                      <div className="temp col-sm-2 col-lg-2 text-right">
                          19°C
                      </div>
                      <div className="clearfix" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div> <div className="block struct nightlifeBlock block-colored bg_nightlife">
              <div className="block-head col-md-12">
                <div className="col-md-12 heading">
                  <div className="kocka bg_nightlife" /> <a href="/nightlife">Nightlife</a>
                  <span className="banner-sarajevsko" />
                  <a className="btn btn-white pull-right" href="/nightlife">
                      Vidi sve <i className="icon icon_strelica_desno" />
                  </a>
                </div>
              </div>
              <div className="block-news col-md-12">
                <div className="news-line">
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 ">
                    <article className="kartica bg_nightlife obojena velika">
                      <a href="/nightlife/sarajevo/2016/02/13/tesla-pub/3455">
                        <div className="above">
                          <span className="num"><i className="icon icon_foto" /> 26</span>
                        </div>
                        <div className="img ratio32">
                          <div className="overblack" />
                          <img ng-src="http://static.klix.ba/media/images/nightlife/64630_fr.jpg" />
                        </div>
                        <h1>Tesla pub</h1>
                        <div className="below l0">
                          <span className="date">13.02.2016.</span>
                          <span className="comments">Sarajevo</span>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 ">
                    <article className="kartica bg_nightlife obojena velika">
                      <a href="/nightlife/sarajevo/2016/02/13/cheers/3454">
                        <div className="above">
                          <span className="num"><i className="icon icon_foto" /> 31</span>
                        </div>
                        <div className="img ratio32">
                          <div className="overblack" />
                          <img ng-src="http://static.klix.ba/media/images/nightlife/64626_fr.jpg" />
                        </div>
                        <h1>Cheers</h1>
                        <div className="below l0">
                          <span className="date">13.02.2016.</span>
                          <span className="comments">Sarajevo</span>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 ">
                    <article className="kartica bg_nightlife obojena velika">
                      <a href="/nightlife/sarajevo/2016/02/13/aquarius/3453">
                        <div className="above">
                          <span className="num"><i className="icon icon_foto" /> 23</span>
                        </div>
                        <div className="img ratio32">
                          <div className="overblack" />
                          <img ng-src="http://static.klix.ba/media/images/nightlife/64585_fr.jpg" />
                        </div>
                        <h1>Aquarius</h1>
                        <div className="below l0">
                          <span className="date">13.02.2016.</span>
                          <span className="comments">Sarajevo</span>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 ">
                    <article className="kartica bg_nightlife obojena velika">
                      <a href="/nightlife/sarajevo/2016/02/13/element/3452">
                        <div className="above">
                          <span className="num"><i className="icon icon_foto" /> 21</span>
                        </div>
                        <div className="img ratio32">
                          <div className="overblack" />
                          <img ng-src="http://static.klix.ba/media/images/nightlife/64553_fr.jpg" />
                        </div>
                        <h1>Element</h1>
                        <div className="below l0">
                          <span className="date">13.02.2016.</span>
                          <span className="comments">Sarajevo</span>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 hidden-md hidden-sm hidden-xs">
                    <article className="kartica bg_nightlife obojena velika">
                      <a href="/nightlife/sarajevo/2016/02/13/hacienda/3451">
                        <div className="above">
                          <span className="num"><i className="icon icon_foto" /> 20</span>
                        </div>
                        <div className="img ratio32">
                          <div className="overblack" />
                          <img ng-src="http://static.klix.ba/media/images/nightlife/64550_fr.jpg" />
                        </div>
                        <h1>Hacienda</h1>
                        <div className="below l0">
                          <span className="date">13.02.2016.</span>
                          <span className="comments">Sarajevo</span>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 hidden-md hidden-sm hidden-xs">
                    <article className="kartica bg_nightlife obojena velika">
                      <a href="/nightlife/sarajevo/2016/02/12/sergej-cetkovic/3450">
                        <div className="above">
                          <span className="num"><i className="icon icon_foto" /> 50</span>
                        </div>
                        <div className="img ratio32">
                          <div className="overblack" />
                          <img ng-src="http://static.klix.ba/media/images/nightlife/64499_fr.jpg" />
                        </div>
                        <h1>Sergej Ćetković</h1>
                        <div className="below l0">
                          <span className="date">12.02.2016.</span>
                          <span className="comments">Sarajevo</span>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="container">
            <div className="footer visible ng-cloak">
              <div className="redd">
                <div className="col-lg-12 footerGore">
                  <div className="col-lg-2 pull-right text-right">
                    <a className="dojavi-btn" href="/dojavi-vijest"><i className="icon_posalji_vijest pointer" />Dojavi vijest</a>
                  </div>
                  <div className="col-lg-1">
                    <a className="footer_logo" onclick="javascript:window.location = '/'" href="/"><span className="icon_kx_logo" /></a>
                  </div>
                  <div className="col-lg-8 col-md-12 ft_linkovi">
                    <a href="/o-nama">O nama</a> <span className="crtica">|</span>
                    <a href="http://marketing.klix.ba">Marketing</a> <span className="crtica">|</span>
                    <a href="/impressum">Impressum</a> <span className="crtica">|</span>
                    <a className="hidden-xs" href="/uslovi">Uslovi</a> <span className="crtica hidden-xs">|</span>
                    <a className="hidden-xs" href="/posao">Posao</a> <span className="crtica hidden-xs">|</span>
                    <a className="hidden-xs" href="/arhiva">Arhiva</a> <span className="crtica hidden-xs">|</span>
                    <a className="hidden-xs" href="/rss">RSS</a> <span className="crtica hidden-xs">|</span>
                    <a href="/kontakt">Kontakt</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="col-lg-12 footerDole">
                  <div className="col-lg-3 col-md-6 hidden-xs">
                    <b>Redakcija:</b><br />
                      t. +387 33 263-245, &nbsp;&nbsp;&nbsp;e: <a href="/cdn-cgi/l/email-protection#f88a9d9c99939b919299b893949180d69a99">
                      <span className="__cf_email__" data-cfemail="93e1f6f7f2f8f0faf9f2d3f8fffaebbdf1f2">[email&nbsp;protected]</span>
                      </a>
                  </div>
                  <div className="col-lg-3 col-md-6 hidden-xs">
                    <b>Marketing:</b><br />
                      t. +387 33 263-250, &nbsp;&nbsp;&nbsp;e: <a href="/cdn-cgi/l/email-protection#7c111d0e17190815121b3c17101504521e1d">
                      <span className="__cf_email__" data-cfemail="94f9f5e6fff1e0fdfaf3d4fff8fdecbaf6f5">[email&nbsp;protected]</span>
                      </a>
                  </div>
                  <div className="col-lg-6 col-md-12 disclaimer">
                      Copyright 2000-2016 InterSoft d.o.o. <br />
                      Sva prava zadržana. Zabranjeno preuzimanje sadržaja bez dozvole izdavača.
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </body>
        </html>
    );
}
});

var Article = React.createClass({
    propTypes: {
        article: React.PropTypes.object
    },
    getInitialState: function () {
        return {
            article: this.props.article
        };
    },
    render: function () {
        return (
                 <div className={"kolona col col-md-" + (this.props.article.isBig ? '6' : '3') + " col-sm-" + (this.props.article.isBig ? '6' : '3') + " col-xs-12"}>
                        <div className="articleHolder">
                <article className="kartica velika">
                    <a href={this.props.article.link}>
                        <div className="above">
                            <span className="kategorija tc_vijesti">{this.props.article.category}<i className="mark icon_foto"></i></span>
                            <span className="shareovi"><i className="icon_dijeljenja"></i> 7</span>
                        </div>
                        <div className="img">
                            <img src={this.props.article.image} /><div className="overblack"></div>
                        </div>
                        <h1 className={ this.props.article.isBig ? 'veliki' : 'srednji' }>{this.props.article.title}</h1>
                        <div className="uvod">{this.props.article.summary}</div>
                        <div className="below l0">
                            <span className="hidden-md hidden-sm date">prije {this.props.article.time} min</span>
                            <span className="visible-md-inline-block visible-sm-inline-block date">prije {this.props.article.time}</span>
                            <span className="comments"><i className="icon_komentari"></i> {this.props.article.commentsCount}</span>
                        </div>
                        <div className="clearfix"></div>
                    </a>
                </article>
                        </div>
                 </div>
        );
    }
});

module.exports = Index;