import{f as d}from"./vendor.9bcc5124.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};m();const f=()=>{const r=document.querySelector("#mobile-menu");r.classList.remove("opacity-100","scale-100"),r.classList.add("hidden","opacity-0","scale-95")},y=()=>{const r=document.querySelector("#mobile-menu");r.classList.add("opacity-100","scale-100"),r.classList.remove("hidden","opacity-0","scale-95")},l=document.querySelectorAll("figure"),a=document.getElementById("carousel-left"),u=document.getElementById("carousel-right");let t=0,p=null;const h=()=>{t=(t+1)%l.length;const r=l[0].clientWidth;l.forEach((o,s)=>{t-1===s||t===0&&s===l.length-1?(o.style.transform=`translateX(${r*(l.length-s)}px)`,o.style.transitionDuration="0s"):(o.style.transform=`translateX(${r*(t>s?l.length-t:-t)}px)`,o.style.transitionDuration="750ms")}),a.classList.add("carousel-control-active"),u.classList.remove("carousel-control-active")},g=()=>{clearTimeout(p),t=t===0?l.length-1:t-1;const r=l[0].clientWidth;l.forEach((o,s)=>{t===s?(o.style.transform=`translateX(${-r*t}px)`,o.style.transitionDuration="0s"):(o.style.transform=`translateX(${r*(t>s?l.length-t:-t)}px)`,o.style.transitionDuration="750ms")}),a.classList.remove("carousel-control-active"),u.classList.add("carousel-control-active")};d.replace();document.querySelector("#mobile-menu-toggler").addEventListener("click",y);document.querySelector("#mobile-menu-close").addEventListener("click",f);document.querySelector("#carousel-left").addEventListener("click",h);document.querySelector("#carousel-right").addEventListener("click",g);