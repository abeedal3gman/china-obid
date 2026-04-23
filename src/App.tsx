/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Settings, 
  Zap, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Car,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  details: string[];
  imageUrl: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'mech',
    title: 'الميكانيكا العامة',
    description: 'صيانة المحركات وناقل الحركة بأحدث الأدوات المخصصة للصيني.',
    icon: Wrench,
    imageUrl: 'https://i.postimg.cc/PJM9mpqN/Chat-GPT-Image-23-abryl-2026-12-23-21-m.png',
    details: [
      'توضيب المحركات الحديثة',
      'صيانة نظام القير (DCT/CVT)',
      'إصلاح أنظمة التبريد',
      'فحص العضلات والمساعدات'
    ]
  },
  {
    id: 'elec',
    title: 'كهرباء وتكييف',
    description: 'إصلاح أعطال الحساسات وتعبئة الفريون الأصلي وفحص الضفيرة.',
    icon: Zap,
    imageUrl: 'https://i.postimg.cc/VvFpjrNv/Chat-GPT-Image-23-abryl-2026-12-25-01-m.png',
    details: [
      'فحص ضفيرة الكهرباء',
      'صيانة التكييف المركزي',
      'إصلاح مشاكل الحساسات',
      'برمجة البطارية'
    ]
  },
  {
    id: 'prog',
    title: 'برمجة الأنظمة',
    description: 'تحديث الخرائط وفحص الكمبيوتر الشامل بدقة لأحدث الموديلات.',
    icon: Cpu,
    imageUrl: 'https://i.postimg.cc/RhTyc60m/Chat-GPT-Image-23-abryl-2026-12-26-57-m.png',
    details: [
      'فحص شامل بأحدث الأجهزة',
      'برمجة العقل (ECU)',
      'تحديث الشاشات والخرائط',
      'برمجة المفاتيح والبصمة'
    ]
  }
];

const BRANDS = [
  'CHANGAN', 'GEELY', 'HAVAL', 'BYD', 'MG', 'CHERY', 'EXEED', 'HONGQI'
];

const FAQS: FAQ[] = [
  {
    question: 'هل توفرون قطع غيار أصلية للسيارات الصينية؟',
    answer: 'نعم، في مركز صيانة السيارات الصينية نوفر كافة قطع الغيار الأصلية المعتمدة لسيارات شانجان، جيلي، هافال، وMG مع ضمان حقيقي.'
  },
  {
    question: 'ما هي أنواع السيارات الصينية التي يتم صيانتها؟',
    answer: 'متخصصون في كافة الماركات الصينية الحديثة مثل شانجان، جيلي، هافال، إم جي، بي واي دي، جيتور (Jetour)، هوني تشي (Hongqi)، ودونج فينج.'
  },
  {
    question: 'أين يقع أفضل مركز صيانة سيارات صينية في الرياض؟',
    answer: 'يقع مركزنا في صناعية أم الحمام بالرياض، ونعتبر الخيار الأول لمالكي السيارات الصينية نظراً لتخصصنا الدقيق في البرمجة والميكانيكا.'
  },
  {
    question: 'هل تقدمون خدمة فحص السيارة قبل الشراء؟',
    answer: 'نعم، نقدم خدمة فحص شاملة لأكثر من 150 نقطة للسيارات الصينية لضمان سلامتها قبل الشراء، مع تقرير فني مفصل بالكمبيوتر.'
  }
];

// --- Components ---

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black text-xl text-white shadow-lg shadow-red-600/30">C</div>
          <div className="leading-none text-right">
            <h1 className="text-xl font-bold tracking-tight text-white uppercase italic">صيانة السيارات الصينية</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">المركز المتخصص الأول بالرياض</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#الرئيسية" className="hover:text-red-500 transition-colors uppercase tracking-widest">الرئيسية</a>
          
          <div className="relative group">
            <a href="#خدماتنا" className="hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-1">
              خدماتنا <ChevronDown size={14} />
            </a>
            <div className="absolute top-full -right-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-2 w-56 shadow-2xl backdrop-blur-xl">
                {SERVICES.map((s) => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`} 
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 hover:text-red-500 transition-all text-xs"
                  >
                    <s.icon size={16} className="text-red-500" />
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#الماركات" className="hover:text-red-500 transition-colors uppercase tracking-widest">الماركات</a>
          <a href="#اتصل بنا" className="hover:text-red-500 transition-colors uppercase tracking-widest">اتصل بنا</a>
        </div>

        <div className="hidden md:block text-left text-xs text-gray-500 border-l border-white/10 pl-6 rtl:border-l-0 rtl:border-r rtl:pr-6 rtl:text-right">
          <p>موقعنا في الرياض</p>
          <p className="font-bold text-red-500">صناعية أم الحمام</p>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-white/5"
          >
            <div className="flex flex-col p-6 space-y-4">
              <a href="#الرئيسية" onClick={() => setIsOpen(false)} className="text-lg text-gray-400 hover:text-red-500 uppercase tracking-widest">الرئيسية</a>
              <div className="flex flex-col space-y-3">
                <span className="text-lg text-gray-200 font-bold">خدماتنا</span>
                <div className="flex flex-col pr-4 border-r border-red-600/30 space-y-3">
                  {SERVICES.map(s => (
                    <a key={s.id} href={`#${s.id}`} onClick={() => setIsOpen(false)} className="text-sm text-gray-500 hover:text-red-500">{s.title}</a>
                  ))}
                </div>
              </div>
              <a href="#الماركات" onClick={() => setIsOpen(false)} className="text-lg text-gray-400 hover:text-red-500 uppercase tracking-widest">الماركات</a>
              <a href="#اتصل بنا" onClick={() => setIsOpen(false)} className="text-lg text-gray-400 hover:text-red-500 uppercase tracking-widest">اتصل بنا</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section id="الرئيسية" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background Image Banner */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/W36G5Mcg/Chat-GPT-Image-23-abryl-2026-12-12-54-m.png" 
          alt="Main Banner" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
      </div>

      <div className="glow-bg" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 text-right">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-12 lg:col-span-7"
        >
          <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 backdrop-blur-sm rounded-full text-red-500 text-xs font-bold mb-6">
            خبرة 15 عاماً في السيارات الصينية
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 text-white drop-shadow-2xl">
            خبراء صيانة<br />
            <span className="text-red-600">السيارات الصينية.</span>
          </h1>
          <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl drop-shadow-md">
            المركز الأول المتخصص في الرياض لصيانة وبرمجة (شانجان، جيلي، هافال، MG، بي واي دي). حلول تقنية متقدمة، قطع غيار أصلية، وأيدي فنية خبيرة في صناعية أم الحمام.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-600/30 active:scale-95">
              احجز موعد فحص
            </button>
            <button className="px-10 py-4 glass-panel hover:bg-white/10 text-white font-bold rounded-lg transition-all active:scale-95">
              خدمات البرمجة
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingActions() {
  return (
    <>
      {/* Phone Button */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-24 right-6 z-[100] flex items-center gap-3 pointer-events-none md:right-8"
      >
        <span className="bg-black/60 backdrop-blur-md text-red-500 text-xs font-bold py-1.5 px-4 rounded-full border border-red-500/20 shadow-xl drop-shadow-lg">
          اتصل بنا الآن
        </span>
        <a 
          href="tel:0565219283" 
          className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all pointer-events-auto active:scale-90 group relative"
        >
          <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" />
          <Phone size={28} />
        </a>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 pointer-events-none md:right-8"
      >
        <span className="bg-black/60 backdrop-blur-md text-[#25D366] text-xs font-bold py-1.5 px-4 rounded-full border border-[#25D366]/20 shadow-xl drop-shadow-lg">
          راسلنا واتساب
        </span>
        <a 
          href="https://wa.me/966565219283" 
          target="_blank" 
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all pointer-events-auto active:scale-90 group relative"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          <MessageCircle size={32} />
        </a>
      </motion.div>
    </>
  );
}

const BRAND_LOGOS = [
  { name: 'Changan', url: 'https://1000logos.net/wp-content/uploads/2021/03/changan-logo.png' },
  { name: 'Dongfeng', url: 'https://1000logos.net/wp-content/uploads/2021/01/Dongfeng-logo.png' },
  { name: 'FAW', url: 'https://1000logos.net/wp-content/uploads/2021/02/FAW-Logo.png' },
  { name: 'GAC', url: 'https://1000logos.net/wp-content/uploads/2021/03/GAC-Group-logo.png' },
  { name: 'JAC', url: 'https://1000logos.net/wp-content/uploads/2021/03/JAC-logo.png' },
  { name: 'Great Wall', url: 'https://1000logos.net/wp-content/uploads/2020/03/Great-Wall-Logo.png' },
  { name: 'Geely', url: 'https://1000logos.net/wp-content/uploads/2021/03/Logo-Geely.png' },
  { name: 'BAIC', url: 'https://1000logos.net/wp-content/uploads/2021/03/BAIC-Group-logo.png' },
  { name: 'BYD', url: 'https://1000logos.net/wp-content/uploads/2020/07/BYD-Logo.png' },
  { name: 'Chery', url: 'https://1000logos.net/wp-content/uploads/2020/04/Chery-Logo.png' },
  { name: 'HongQi', url: 'https://1000logos.net/wp-content/uploads/2021/03/HongQi-logo.png' },
  { name: 'Wuling', url: 'https://1000logos.net/wp-content/uploads/2021/03/Wuling-logo.png' },
  { name: 'Haval', url: 'https://1000logos.net/wp-content/uploads/2020/10/Haval-Logo.png' },
  { name: 'Jetour', url: 'https://1000logos.net/wp-content/uploads/2023/12/Jetour-Logo.png' },
  { name: 'Xiaomi', url: 'https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png' },
  { name: 'LvChi', url: 'https://1000logos.net/wp-content/uploads/2022/01/LvChi-Auto-logo.png' },
];

function BrandsSection() {
  return (
    <section id="الماركات" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-red-500 mb-4">تخصصنا الأساسي</h3>
        <h2 className="text-4xl font-black text-white italic mb-16 uppercase">بعض الماركات التي تدعمها خبراتنا</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {BRAND_LOGOS.map((brand, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="bg-white p-6 rounded-2xl flex items-center justify-center h-32 group relative transition-all shadow-lg overflow-hidden"
            >
              <img 
                src={brand.url} 
                alt={brand.name} 
                className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="خدماتنا" className="py-32 bg-[#050505] relative overflow-hidden">
       <div className="container mx-auto px-6 relative z-10 text-right">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center text-white italic">خدماتنا المميزة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel overflow-hidden service-card group scroll-mt-32"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 glass-panel flex items-center justify-center bg-red-600/20 text-red-500 border-red-600/20">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="w-1 h-1 bg-red-600 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpenPolicy }: { onOpenPolicy: (type: 'privacy' | 'terms') => void }) {
  return (
    <footer id="اتصل بنا" className="bg-[#050505] text-white pt-24 pb-12 relative overflow-hidden font-sans">
      <div className="tech-line" />
      <div className="container mx-auto px-6 text-right relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black text-xl text-white">C</div>
              <h1 className="text-xl font-bold tracking-tight italic">صيانة السيارات الصينية</h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              المركز المتخصص الأول في الرياض لصيانة وبرمجة كافة أنواع السيارات الصينية. نلتزم بأعلى معايير الجودة والشفافية في التعامل مع عملائنا.
            </p>
            <p className="text-[10px] text-gray-600 leading-relaxed max-w-sm border-t border-white/5 pt-4">
              * إخلاء مسؤولية: نحن مركز صيانة مستقل متخصص في السيارات الصينية. كافة الشعارات والعلامات التجارية الموجودة في الموقع هي ملك لأصحابها وتستخدم هنا لأغراض توضيحية وتخصصية فقط.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">روابط تهمك</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onOpenPolicy('privacy')} className="text-gray-500 hover:text-red-500 text-sm transition-colors decoration-none">سياسة الخصوصية</button></li>
              <li><button onClick={() => onOpenPolicy('terms')} className="text-gray-500 hover:text-red-500 text-sm transition-colors decoration-none">شروط الاستخدام</button></li>
              <li><a href="#خدماتنا" className="text-gray-500 hover:text-red-500 text-sm transition-colors">خدمات الصيانة</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">موقعنا</h4>
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass-panel flex items-center justify-center"><MapPin size={18}/></div>
                <div className="text-sm leading-relaxed text-gray-400">
                   الرياض - صناعية أم الحمام<br />
                   المملكة العربية السعودية
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-wider">
           <div className="mb-4 md:mb-0">© 2026 CHINA CAR SERVICE - ALL RIGHTS RESERVED</div>
           <div className="flex gap-8">
              <span>ترخيص رقم: 1234567890</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

function PolicyModal({ type, onClose }: { type: 'privacy' | 'terms', onClose: () => void }) {
  const content = type === 'privacy' ? {
    title: 'سياسة الخصوصية',
    body: `نحن في مركز صيانة السيارات الصينية نلتزم بحماية خصوصيتك. نجمع المعلومات التي تزودنا بها عند الاتصال بنا أو طلب موعد صيانة فقط للتواصل معك وتقديم الخدمة. لا نقوم بمشاركة أي من بياناتك الشخصية مع أطراف ثالثة لأغراض تسويقية. يتم تخزين بياناتك بشكل آمن ولا تستخدم إلا لغرض تحسين تجربتك مع مركزنا.`
  } : {
    title: 'شروط الاستخدام',
    body: `شروط الاستخدام تحكم وصولك واستخدامك لموقعنا. يتم تقديم المعلومات في هذا الموقع لأغراض إعلامية عن خدماتنا. الأسعار والخدمات قابلة للتغيير بناءً على الفحص الفني داخل المركز. نحن غير مسؤولين عن أي استخدام خاطئ للمعلومات الواردة في الموقع خارج إطار الصيانة الفنية المعتمدة لدينا.`
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-[#111] border border-white/10 p-8 rounded-3xl max-w-2xl w-full relative z-[210] shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-6 left-6 text-gray-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-red-500">{content.title}</h2>
        <div className="text-gray-400 leading-relaxed text-sm whitespace-pre-wrap">
          {content.body}
        </div>
        <button 
          onClick={onClose}
          className="mt-8 w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all"
        >
          فهمت ذلك
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div dir="rtl" className="font-sans antialiased text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Nav />
      <main>
        {/* --- Hero Section --- */}
        <section id="الرئيسية" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 z-0 cursor-zoom-in" onClick={() => setSelectedImage("https://i.postimg.cc/W36G5Mcg/Chat-GPT-Image-23-abryl-2026-12-12-54-m.png")}>
            <img 
              src="https://i.postimg.cc/W36G5Mcg/Chat-GPT-Image-23-abryl-2026-12-12-54-m.png" 
              alt="Main Banner" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
          </div>

          <div className="glow-bg" />
          
          <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 text-right">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-12 lg:col-span-7"
            >
              <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 backdrop-blur-sm rounded-full text-red-500 text-xs font-bold mb-6">
                خبرة 15 عاماً في السيارات الصينية
              </div>
              <h2 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 text-white drop-shadow-2xl">
                دقة البرمجة،<br />
                <span className="text-red-600">إتقان الميكانيكا.</span>
              </h2>
              <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl drop-shadow-md">
                المركز المتخصص الأول لصيانة كافة أنواع السيارات الصينية (Changan, Geely, Haval, BYD). نقدم حلولاً تقنية متطورة بضمان معتمد وفنيين متخصصين.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-600/30 active:scale-95">
                  احجز موعد فحص
                </button>
                <button className="px-10 py-4 glass-panel hover:bg-white/10 text-white font-bold rounded-lg transition-all active:scale-95">
                  خدمات البرمجة
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <BrandsSection />

        {/* --- Services Section --- */}
        <section id="خدماتنا" className="py-32 bg-[#050505] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-right">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-black mb-16 text-center text-white italic">خدماتنا المميزة</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((service, idx) => (
                  <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel overflow-hidden service-card group"
                  >
                    <div className="h-48 overflow-hidden relative cursor-zoom-in" onClick={() => setSelectedImage(service.imageUrl)}>
                      <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 glass-panel flex items-center justify-center bg-red-600/20 text-red-500 border-red-600/20">
                        <service.icon size={24} />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>
                      <ul className="space-y-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
                            <div className="w-1 h-1 bg-red-600 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Immersive CTA Section */}
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
           <div className="container mx-auto px-6 text-center relative z-10">
              <ShieldCheck size={80} className="mx-auto mb-10 text-red-600 opacity-50" />
              <h2 className="text-5xl font-black mb-8 italic">مركز معتمد بضمان فني</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
                 نوفر تقارير فنية دقيقة تشمل أكثر من 150 نقطة فحص، بضمان فني معتمد يمنحك راحة البال.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                 {[
                   { label: 'إيقاف سريع', icon: Clock },
                   { label: 'برمجة دقيقة', icon: Cpu },
                   { label: 'فحص شامل', icon: MapPin }
                 ].map((stat, i) => (
                    <div key={i} className="glass-panel p-8 min-w-[200px] group hover:border-red-600/50 transition-all">
                       <stat.icon className="mx-auto mb-4 text-red-600" />
                       <div className="font-bold text-lg mb-1">{stat.label}</div>
                       <div className="text-[10px] text-gray-500 uppercase tracking-widest">خدمات معتمدة</div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SEO Focused FAQ */}
        <section className="py-32 bg-[#050505]">
           <div className="container mx-auto px-6 max-w-3xl text-right">
              <h2 className="text-4xl font-black mb-16 text-center italic">الأسئلة المتكررة</h2>
              <div className="space-y-6">
                 {FAQS.map((faq, i) => (
                    <div key={i} className="glass-panel p-8 border border-white/5">
                       <h3 className="text-xl font-bold mb-4 text-red-500">{faq.question}</h3>
                       <p className="text-gray-400 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </main>
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />
      <FloatingActions />

      {/* --- Policy Modals --- */}
      <AnimatePresence>
        {activePolicy && (
          <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />
        )}
      </AnimatePresence>
      
      {/* --- Image Modal (Lightbox) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
            >
              <img 
                src={selectedImage} 
                alt="Enlarged" 
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 md:-top-12 md:-right-12 p-3 text-white hover:text-red-500 transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced SEO Keyword Section (Hidden but indexed by Search Engines) */}
      <section className="sr-only" aria-hidden="true">
        <h2>مركز صيانة السيارات الصينية بالرياض - كافة الخدمات</h2>
        <ul>
          <li>صيانة وبرمجة سيارات شانجان: CS35, CS75, CS85, CS95, UNI-K, UNI-T, Eado</li>
          <li>صيانة وبرمجة سيارات جيلي: Monjaro, Tugella, Coolray, Azkarra, Emgrand, Geometry</li>
          <li>صيانة وبرمجة سيارات هافال: Jolion, H6, H9, Dargo, Great Wall POER</li>
          <li>صيانة وبرمجة سيارات إم جي (MG): MG5, MG6, MG RX5, MG RX8, MG HS, MG ZS</li>
          <li>صيانة وبرمجة سيارات بي واي دي (BYD): Qin, Han, Tang, Atto 3</li>
          <li>صيانة وبرمجة سيارات جيتور (Jetour): X70, X90, Dashing</li>
          <li>صيانة وبرمجة سيارات جونيور (GAC): GS3, GS4, GS8, GA6, GA8</li>
          <li>خدمات: توضيب مكائن، إصلاح قيربكس، فحص تكييف، برمجة كنترول المحرك، إلغاء نظام AdBlue، برمجة شاشات</li>
          <li>صناعية أم الحمام، الرياض، المملكة العربية السعودية</li>
        </ul>
      </section>
    </div>
  );
}
