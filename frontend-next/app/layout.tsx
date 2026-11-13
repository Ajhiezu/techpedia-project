import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import Navigation from '../components/Navigation';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import {indexable,publicOrigin} from '../lib/seo';
export const metadata: Metadata = {
 title: {default:'Techpedia Project - Jasa Pengembangan Aplikasi Custom',template:'%s | Techpedia Project'},
 description:'Jasa pengembangan aplikasi custom, website, dan sistem sesuai kebutuhan bisnis.',
 metadataBase:publicOrigin()?new URL(publicOrigin()!):undefined,
 robots:{index:indexable(),follow:indexable()},
};
export default function Layout({children}:{children:React.ReactNode}) {
 return <html lang="id"><body><a className="skip-link" href="#main">Langsung ke konten</a><Navigation/><FloatingWhatsApp/><main id="main" tabIndex={-1}>{children}</main><footer className="footer"><div className="footer-grid"><div><Link className="brand inverse" href="/"><Image className="brand-logo" src="/logo.png" alt="" width={30} height={30}/><b className="brand-name">Techpedia <i>Project</i></b></Link><p>Pengembangan aplikasi custom, website, dan sistem bisnis.</p></div><div><h2>Jelajahi</h2><Link href="/services">Layanan</Link><Link href="/portfolio">Proyek</Link><Link href="/about">Tentang Kami</Link><Link href="/process">Alur kerja</Link></div><div><h2>Informasi</h2><Link href="/faq">FAQ</Link><Link href="/contact">Kontak</Link></div><div><h2>Ketentuan</h2><Link href="/privacy-policy">Kebijakan privasi</Link><Link href="/terms">Syarat dan ketentuan</Link></div></div><div className="footer-bottom">&copy; {new Date().getFullYear()} Techpedia Project</div></footer></body></html>;
}
