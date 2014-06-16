// (c) by Gemius SA - gemius main script
// ver. 2.0 rc

if (typeof gemius_ready == "undefined") {
    gemius_ready = {
        ready : 0,
        functions : new Array(),
        docready : function() {
            if (gemius_ready.ready==0) {
                gemius_ready.ready = 1;
                var i;
                for (i=0 ; i<gemius_ready.functions.length ; i++) {
                    gemius_ready.functions[i]();
                }
            }
        },
        domloaded : function(e) {
            gemius_ready.docready();
        },
        loaded : function(e) {
            gemius_ready.docready();
        },
        readystate : function(e) {
            if (document.readyState=="complete" || document.readyState=="interactive") {
                gemius_ready.docready();
            }
        },
        readytest : function() {
            if (gemius_ready.ready==0) {
                if (typeof document.readyState!="undefined") {
                    if (document.readyState=="complete" || document.readyState=="interactive") {
                        gemius_ready.docready();
                    } else {
                        setTimeout("gemius_ready.readytest()",100);
                    }
                    return;
                }
                if (typeof document.documentElement!="undefined" && typeof document.documentElement.doScroll!="undefined") {
                    try {
                        document.documentElement.doScroll("left");
                    } catch (e) {
                        setTimeout("gemius_ready.readytest()",100);
                        return;
                    }
                }
                gemius_ready.docready();
            }
        },
        register : function(fn) {
            if (gemius_ready.ready) {
                fn();
            } else {
                var l = gemius_ready.functions.length;
                gemius_ready.functions[l]=fn;
            }
        },
        init : function() {
            if (window.addEventListener) {
                document.addEventListener("DOMContentLoaded",gemius_ready.domloaded,false);
                document.addEventListener("readystatechange",gemius_ready.readystate,false);
                window.addEventListener("load",gemius_ready.loaded,false);
            } else if (window.attachEvent) {
                document.attachEvent("onDOMContentLoaded",gemius_ready.domloaded);
                document.attachEvent("onreadystatechange",gemius_ready.readystate);
                window.attachEvent("onload",gemius_ready.loaded);
            }
            setTimeout("gemius_ready.readytest()",100);
        }
    }
    gemius_ready.init();
}

if (typeof gemius_hcconn == "undefined") {
    gemius_hcconn = {
        lsdata : "",
        fpdata : "",
        event_identifier : null,
        current_receiver : null,
        waiting_for_fpdata : 1,
        waiting_for_lsdata : 1,
        waiting_on_prerender : 1,
        visapi_s : "",
        visapi_h : "",
        visapi_c : "",
        loadinit : 0,
        to : null,
        ltime : 0,
        timerevents : [],
        requests : [],
        allowaddscript : [],
        vers : [],
        state : 0,
        ready : 0,
        ssl : (document.location && document.location.protocol && document.location.protocol=='https:')?1:0,
        hc : (typeof pp_gemius_hitcollector != 'undefined')?pp_gemius_hitcollector:(typeof gemius_hitcollector != 'undefined')?gemius_hitcollector:'gadk.hit.gemius.pl',
        add_event : function(obj,type,fn) {
            if (obj.attachEvent) {
                obj.attachEvent('on'+type, fn);
            } else if(obj.addEventListener) {
                obj.addEventListener(type, fn, false);
            }
        },
        append_script : function(xp_url) {
            var ex;
            try {
                var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0];
                gt.defer = 'true';
                gt.async = 'true';
                gt.src = xp_url;
                s.parentNode.insertBefore(gt,s);
            } catch (ex) {};
        },
        latehits : function() {
            var i,j;
            if (gemius_hcconn.ready && gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
                for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
                    var url = (gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/_';
                    var d = new Date().getTime();
                    var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
                    var params = '&ltime='+gemius_hcconn.ltime+'&lsdata='+gemius_hcconn.lsdata+'&fpdata='+gemius_hcconn.fpdata+'&vis='+vis+gemius_hcconn.requests[i];
                    if (gemius_hcconn.state>0 || gemius_hcconn.allowaddscript[i]==0 || typeof gemius_open != 'undefined') {
                        url += (d+i)+'/redot.js?l='+gemius_hcconn.vers[i]+params;
                        gemius_hcconn.append_script(url);
                    } else {
                        url += (d+i)+'/rexdot.js?l='+gemius_hcconn.vers[i]+params;
                        gemius_hcconn.state = 1;
                        gemius_hcconn.append_script(url);
                    }
                    if (typeof pp_gemius_notify != 'undefined') {
                        pp_gemius_notify(url);
                    } else if (typeof gemius_notify != 'undefined') {
                        gemius_notify(url);
                    }
                }
                gemius_hcconn.requests = [];
                gemius_hcconn.allowaddscript = [];
                gemius_hcconn.vers = [];
            }
        },
        getfpcookie : function() {
            var cookies = document.cookie.split( ';' );
            var cookie_arr;
            for (var i=0; i<cookies.length ; i++) {
                cookie_arr = cookies[i].split('=');
                if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_64b') {
                    return cookie_arr[1].replace(/^\s+|\s+$/g,'');
                }
            }
            return '';
        },
        fpset_loaded : function() {
            gemius_hcconn.fpdata = gemius_hcconn.getfpcookie();
            gemius_hcconn.waiting_for_fpdata = 0;
            gemius_hcconn.latehits();
        },
        addframe : function(ssl,file,args,rcvfn) {
            gemius_hcconn.current_receiver = rcvfn;
            var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/_'+((new Date()).getTime())+'/ls'+file+'.html'+args;
            if (rcvfn!=null) {
                gemius_hcconn.loadinit = (new Date()).getTime();
                if (gemius_hcconn.to==null) {
                    gemius_hcconn.to = setTimeout("gemius_hcconn.frameto()",10000);
                }
            }
            var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
            var d = document.createElement('div');
            d.style.display = 'none';
            d.style.position = 'absolute';
            d.style.left = '-10000px';
            d.style.top = '-10000px';
            var f = document.createElement('iframe');
            f.setAttribute('id',rndid);
            f.setAttribute('name','ls'+file+'frame');
            f.setAttribute('width',1);
            f.setAttribute('height',1);
            f.setAttribute('scrolling','no');
            f.setAttribute('src',url);
            document.body.insertBefore(d,document.body.firstChild);
            d.appendChild(f);
        },
        frameto : function() {
            if (gemius_hcconn.to!=null) {
                gemius_hcconn.to = null;
                if (gemius_hcconn.lsdata=='') {
                    gemius_hcconn.ltime = 10000;
                    gemius_hcconn.lsdata = '-TIMEDOUT';
                }
                gemius_hcconn.waiting_for_lsdata = 0;
                gemius_hcconn.latehits();
            }
        },
        last_datareceiver : function(lsdata) {
            gemius_hcconn.current_receiver = null;
            gemius_hcconn.lsdata = lsdata;
            gemius_hcconn.waiting_for_lsdata = 0;
            gemius_hcconn.latehits();
        },
        second_datareceiver : function(data) {
            if (data.charAt(0)=='-' || data=='') {
                gemius_hcconn.addframe(1,'set','',gemius_hcconn.last_datareceiver);
            } else {
                if (gemius_hcconn.ssl==0) {
                    gemius_hcconn.addframe(0,'cpy','?lsdata='+data,null);
                }
                gemius_hcconn.last_datareceiver(data);
            }
        },
        first_datareceiver : function(data) {
            var m = data.match(/\|(\d+)$/);
            var n = (new Date()).getTime();
            if (data.charAt(0)=='-' || data=='' || !m || m[1]<n) {
                gemius_hcconn.addframe(1,'get','',gemius_hcconn.second_datareceiver);
            } else {
                gemius_hcconn.last_datareceiver(data);
            }
        },
        docready : function() {
            gemius_hcconn.ready = 1;
            if (gemius_hcconn.waiting_for_lsdata) {
                gemius_hcconn.add_event(window,'message',gemius_hcconn.msgreceiver);
                if (gemius_hcconn.ssl) {
                    gemius_hcconn.addframe(1,'get','',gemius_hcconn.second_datareceiver);
                } else {
                    gemius_hcconn.addframe(0,'get','',gemius_hcconn.first_datareceiver);
                }
            } else {
                gemius_hcconn.latehits();
            }
        },
        msgreceiver : function(e) {
            if (e.data.substr(0,15)=="_xx_gemius_xx_/") {
                if (gemius_hcconn.to!=null) {
                    clearTimeout(gemius_hcconn.to);
                    gemius_hcconn.to = null;
                    gemius_hcconn.ltime = (new Date()).getTime() - gemius_hcconn.loadinit;
                }
                if (gemius_hcconn.current_receiver!=null) {
                    gemius_hcconn.current_receiver(e.data.substr(15));
                }
            }
        },
        parameters : function() {
            var d=document;
            var w=window;
            var href=new String(d.location.href);
            var ref;
            var f=0;
            var fv='-';
            var dd;
            if (d.referrer) { ref=new String(d.referrer); } else { ref=''; }
            if (typeof Error!='undefined') {
                var fo,e;
                try { f=(d==top.document)?1:2; if (typeof top.document.referrer=="string") { ref=top.document.referrer } } catch(e) {f=3;};
                try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {};
                if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }};
            }
            var url='&fr='+f+'&tz='+(new Date()).getTimezoneOffset();
            if (typeof encodeURIComponent != 'undefined') {
                url+='&fv='+encodeURIComponent(fv)+'&href='+encodeURIComponent(href.substring(0,499))+'&ref='+encodeURIComponent(ref.substring(0,499));
            }
            if (screen) {
                var s=screen;
                if (s.width) {
                    if (s.deviceXDPI && s.deviceYDPI) {
                        url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
                    } else {
                        url+='&screen='+s.width+'x'+s.height;
                    }
                }
                if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
                if (s.colorDepth) url+='&col='+s.colorDepth;
            }
            if (typeof w.innerWidth=='number') {
                url+='&window='+w.innerWidth+'x'+w.innerHeight;
            } else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
                url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
            }
            return url;
        },
        array_to_string : function(arr,start) {
            var i,str;
            if (typeof arr == 'string') {
                return arr;
            }
            str = '';
            if (typeof arr.length != 'undefined') {
                for (i=start ; i<arr.length ; i++) {
                    if (i>start) {
                        str += '|';
                    }
                    str += ((new String(arr[i])).replace(/\|/g,'_'));
                }
            }
            return str;
        },
        internal_hit : function(allowaddscript,vers,list,rfrom,rto,et,extra) {
            var req = "";
            var i;
            if (rfrom==0 && rto==0) {
                req += '&id='+list;
                if (typeof et != 'undefined') {
                    req += '&et='+et;
                }
                if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
                    req += '&extra='+encodeURIComponent(extra.substring(0,1999));
                }
            } else {
                for (var i=rfrom ; i<rto ; i++) {
                    req += '&id='+list[i];
                }
            }
            req += gemius_hcconn.parameters();
            i = gemius_hcconn.requests.length;
            gemius_hcconn.requests[i] = req;
            gemius_hcconn.allowaddscript[i] = allowaddscript;
            gemius_hcconn.vers[i] = vers;
            gemius_hcconn.latehits();
        },
        timer : function() {
            var i;
            for (i=0 ; i<gemius_hcconn.timerevents.length ; i++) {
                gemius_hcconn.internal_hit(0,75,gemius_hcconn.timerevents[i],0,0);
            }
        },
        gtimer_add : function(id) {
            gemius_hcconn.timerevents[gemius_hcconn.timerevents.length] = id;
        },
        ghit : function(allowaddscript,vers,args) {
            var i;
            for (i=0 ; i<args.length ; i+=5) {
                if (i+5<args.length) {
                    gemius_hcconn.internal_hit(allowaddscript,vers,args,i,i+5);
                } else {
                    gemius_hcconn.internal_hit(allowaddscript,vers,args,i,args.length);
                }
            }
        },
        gevent : function(allowaddscript,vers,args) {
            var pos = 0;
            var et = "view";
            if (args.length>1) {
                var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
                if (m) {
                    et = m[1];
                    pos = 1;
                }
            }
            if (args.length>pos) {
                if (!args[pos] && gemius_hcconn.event_identifier != null) {
                    args[pos] = gemius_hcconn.event_identifier;
                } else if (gemius_hcconn.event_identifier==null && args[pos]) {
                    gemius_hcconn.event_identifier = args[pos];
                }
                gemius_hcconn.internal_hit(allowaddscript,vers,args[pos],0,0,et,gemius_hcconn.array_to_string(args,pos+1));
            }
        },
        addscripthit : function() { gemius_hcconn.ghit(1,72,arguments) },
        plainhit : function() { gemius_hcconn.ghit(0,72,arguments) },
        addscriptevent : function() { gemius_hcconn.gevent(1,72,arguments) },
        plainevent : function() { gemius_hcconn.gevent(0,72,arguments) },
        pendingdata : function(arr,fn) {
            var i;
            if (typeof window[arr] != 'undefined') {
                for (i=0 ; i<window[arr].length ; i++) {
                    fn.apply(this,window[arr][i]);
                }
                window[arr]=[];
            }
        },
        sendpendingdata : function() {
            gemius_hcconn.pendingdata('pp_gemius_hit_pdata',gemius_hcconn.addscripthit);
            gemius_hcconn.pendingdata('gemius_hit_pdata',gemius_hcconn.plainhit);
            gemius_hcconn.pendingdata('pp_gemius_event_pdata',gemius_hcconn.addscriptevent);
            gemius_hcconn.pendingdata('gemius_event_pdata',gemius_hcconn.plainevent);
            gemius_hcconn.pendingdata('gemius_shits',gemius_hcconn.addscripthit);
            gemius_hcconn.pendingdata('gemius_phits',gemius_hcconn.plainhit);
            gemius_hcconn.pendingdata('gemius_sevents',gemius_hcconn.addscriptevent);
            gemius_hcconn.pendingdata('gemius_pevents',gemius_hcconn.plainevent);
        },
        findvisapi : function() {
            var p = ['moz','webkit','ms','o'];
            var i;
            if (typeof document.hidden != 'undefined') {
                gemius_hcconn.visapi_h = 'hidden';
                gemius_hcconn.visapi_s = 'visibilityState';
                gemius_hcconn.visapi_c = 'visibilitychange';
            } else {
                for (i in p) {
                    if (typeof document[p[i]+'Hidden'] != 'undefined') {
                        gemius_hcconn.visapi_h = p[i]+'Hidden';
                        gemius_hcconn.visapi_s = p[i]+'VisibilityState';
                        gemius_hcconn.visapi_c = p[i]+'visibilitychange';
                    }
                }
            }
        },
        visibilitychanged : function() {
            if (document[gemius_hcconn.visapi_s]!='prerender') {
                if (gemius_hcconn.waiting_on_prerender) {
                    gemius_hcconn.waiting_on_prerender = 0;
                    // Chrome changes 'prerender' always to 'hidden' and then to 'visible', so delay sending
                    setTimeout("gemius_hcconn.latehits()",100);
                } else {
                    gemius_hcconn.gevent(0,77,['_vischg_','']);
                }
            }
        },
        init : function() {
            var e;
            setInterval('gemius_hcconn.timer()',60*1000);
            gemius_hcconn.ready = 0;
            gemius_hcconn.fpdata = gemius_hcconn.getfpcookie();
            gemius_hcconn.waiting_for_fpdata = (gemius_hcconn.fpdata=='' || gemius_hcconn.fpdata=='-')?1:0;
            try {
                gemius_hcconn.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
                if (gemius_hcconn.waiting_for_lsdata==0) {
                    gemius_hcconn.lsdata='-NOTSUP';
                }
            } catch (e) {
                gemius_hcconn.waiting_for_lsdata = 0;
                gemius_hcconn.lsdata='-TURNEDOFF';
            }
            gemius_hcconn.waiting_on_prerender = 0;
            gemius_hcconn.findvisapi();
            if (gemius_hcconn.visapi_s != '') {
                if (document[gemius_hcconn.visapi_s] == 'prerender') {
                    gemius_hcconn.waiting_on_prerender = 1;
                }
                gemius_hcconn.add_event(document,gemius_hcconn.visapi_c,gemius_hcconn.visibilitychanged);
            }
            gemius_hcconn.latehits();
            if (gemius_hcconn.waiting_for_fpdata) {
                gemius_hcconn.append_script((gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/fpset.js');
            }
            gemius_ready.register(gemius_hcconn.docready);
        }
    }
    gemius_fpset_loaded = gemius_hcconn.fpset_loaded;
    gemius_hcconn.init();
    gemius_hit = gemius_hcconn.plainhit;
    gemius_event = gemius_hcconn.plainevent;
    pp_gemius_hit = gemius_hcconn.addscripthit;
    pp_gemius_event = gemius_hcconn.addscriptevent;
}

if (typeof pp_gemius_identifier != 'undefined') {
    var s = (typeof pp_gemius_mode != 'undefined') ? 0 : 1;
    var v = 71-s;
    if (typeof window.pp_gemius_cnt != 'undefined') {
        pp_gemius_identifier = 'ERR_'+pp_gemius_identifier.replace(/id=/g,'id=ERR_');
        v = 73;
    } else if (typeof pp_gemius_time_identifier != 'undefined') {
        gemius_hcconn.gtimer_add(pp_gemius_time_identifier);
        pp_gemius_identifier += '&id='+pp_gemius_time_identifier;
        v += 4;
    }
    window.pp_gemius_cnt = 1;
    if (typeof pp_gemius_extraparameters != 'undefined') {
        gemius_hcconn.gevent(s,v,[pp_gemius_identifier].concat(pp_gemius_extraparameters));
    } else {
        gemius_hcconn.ghit(s,v,[pp_gemius_identifier]);
    }
    if (gemius_hcconn.event_identifier==null) {
        gemius_hcconn.event_identifier = pp_gemius_identifier;
    }
    pp_gemius_identifier = 'USED_'+pp_gemius_identifier.replace(/id=/g,'id=USED_');
} else if (typeof gemius_identifier != 'undefined') {
    var s = (typeof pp_gemius_mode != 'undefined') ? 0 : 1;
    var v = 71-s;
    if (typeof window.pp_gemius_cnt != 'undefined') {
        gemius_identifier = 'ERR_'+gemius_identifier.replace(/id=/g,'id=ERR_');
        v = 73;
    }
    window.pp_gemius_cnt = 1;
    if (typeof gemius_extraparameters != 'undefined') {
        gemius_hcconn.gevent(s,v,[gemius_identifier].concat(gemius_extraparameters));
    } else {
        gemius_hcconn.ghit(s,v,[gemius_identifier]);
    }
    if (gemius_hcconn.event_identifier==null) {
        gemius_hcconn.event_identifier = gemius_identifier;
    }
    gemius_identifier = 'USED_'+gemius_identifier.replace(/id=/g,'id=USED_');
}
gemius_hcconn.sendpendingdata();