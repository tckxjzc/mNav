

export function addScriptElement(url){
    let el=document.createElement('script');
    el.src=url;
    document.body.appendChild(el);
}