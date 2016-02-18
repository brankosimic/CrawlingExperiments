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
                      {
                        this.props.articles[0].rows[0].articles.map(function(article, index){
                            return <Article article={article}></Article> ;
                      })}
                  </div>
                    <div className="news-line has_four">
                        {
                        this.props.articles[0].rows[1].articles.map(function(article, index){
                        return <Article article={article}></Article> ;
                        })}
                    </div>
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
              {
                this.props.articles.slice(1, this.props.articles.length).map(function(group, index){
              return <div>
            <div className="container">
              <div className="ads_leaderboard_container lc1">
                <div className="ads_leaderboard_inside">
                  <div id="ads_leaderboard_1">
                  </div>
                </div>
              </div>
            </div>
              <div className="block struct struct_12">
              <div className="block-dyn">
                <div className="block-head">
                  <div className="col-md-2 col-sm-12 heading">
                    <div className="kocka" style={ {backgroundColor: (group.categoryColor)} } /> <a className={"headingUrl tch_" + ( group.categoryName.toLowerCase() )} href="/vijesti">{ group.categoryName }</a>
                  </div>
                  <div className="col-md-10 block-links hidden-sm hidden-xs">
                      {
                      group.subCategories.map(function(cat, index){
                      return  
                      <div><div className="seperator">|</div> <a className={"tch_" + (cat.toLowerCase())} href="/vijesti/regija">cat</a></div>
                      })}
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="block-news">
                    {
                    group.rows.map(function(row, index){
                    return  <div className="news-line has_four">
                        {
                                row.articles.map(function(article, index){
                            return <Article article={article}></Article> ;
                        })}
                    </div> ;
                    })}
                  
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
              </div>
              })}
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
                <article className={"kartica velika " + (this.props.article.isFlagged ? 'obojena ' + "bg_" + (this.props.article.categoryName.toLowerCase()) : '')}>
                    <a href={this.props.article.link}>
                        <div className="above">
                            <span className={"kategorija tc_" + (this.props.article.categoryName.toLowerCase())}>{this.props.article.subCategoryName}<i className="mark icon_foto"></i></span>
                            <span className="shareovi"><i className="icon_dijeljenja"></i> 7</span>
                        </div>
                        <div className="img">
                            <img src={this.props.article.image} /><div className="overblack"></div>
                        </div>
                        <h1 className={ this.props.article.isBig ? 'veliki' : 'srednji' }>{this.props.article.title}</h1>
                        <div className="uvod">{this.props.article.summary}</div>
                        <div className="below l0">
                            <span className="hidden-md hidden-sm date">prije {this.props.article.time}</span>
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