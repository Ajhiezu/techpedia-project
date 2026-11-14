 'use client';
import {useState} from 'react';
import Link from 'next/link';
import type {Content} from '../lib/api';
import {Empty} from './Content';
import RpkProject from './RpkProject';
import ProjectLinks,{demoLabel,thumbnailUrl} from './ProjectLinks';
export default function Catalog({items,base,unavailable}:{items:Content[];base:string;unavailable:boolean}){
 const [category,setCategory]=useState('All');const categories=['All',...new Set(items.map(x=>x.category_name).filter((x):x is string=>Boolean(x)))];
 const filtered=items.filter(x=>category==='All'||x.category_name===category);
 return <section className="section"><div className="filters" role="group" aria-label="Kategori konten">{categories.map(c=><button key={c} className={'filter '+(c===category?'selected':'')} aria-pressed={c===category} onClick={()=>setCategory(c)}>{c==='All'?'Semua':c}</button>)}</div>{filtered.length?<div className="grid three">{filtered.map(x=>base==='/portfolio'&&['rpk-pustaka','techcommers','stayease','tech-resto'].includes(x.slug)?<RpkProject key={x.id} item={x}/>:<article key={x.id} className="card">{base==='/portfolio'&&thumbnailUrl(x.thumbnail)&&<img className="project-thumbnail" src={thumbnailUrl(x.thumbnail)!} alt={x.thumbnail_alt||x.title} width={720} height={450} loading="lazy"/>}<p className="eyebrow">{x.category_name}</p><h2>{x.title}</h2><p>{x.short_description||x.excerpt}</p>{base==='/portfolio'&&<><p className="demo-badge">{demoLabel(x)}</p>{x.technologies?.length?<ul className="tech-stack">{x.technologies.map((t,i)=><li key={i}>{typeof t==='string'?t:t.name}</li>)}</ul>:null}</>}<div className="project-links"><Link className="text-link" href={`${base}/${encodeURIComponent(x.slug)}`}>{base==='/portfolio'?'Studi kasus':'Baca selengkapnya'}</Link>{base==='/portfolio'&&<ProjectLinks item={x}/>}</div></article>)}</div>:<Empty unavailable={unavailable}/>}</section>;
}
