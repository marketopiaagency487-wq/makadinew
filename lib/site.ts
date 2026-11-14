// ============================================================
//  إعدادات الصفحة — عدّل هنا فقط (النصوص في lib/content.ts)
// ============================================================

export const SITE = {
  url: "https://www.makadiheightseg.org", // ← دومين الصفحة
  brand: "The Real Deal", // ← اسم المسوّق الظاهر في الإفصاح
  phone: "01060997771",
  phoneIntl: "+201060997771",
  whatsapp: "201060997771",
  email: "leads@makadiheights.info",

  web3formsKey: "2661d69f-fbeb-48ae-adcf-281d86e5b9d9",

  adsId: "",
  conversions: {
    form: "",
    whatsapp: "",
    call: "",
  },

  chaletsFrom: "13.5",
  villasFrom: "23",
  adenFrom: "15", // Aden Parks — شاليه غرفتين
  installmentYears: "8",

  // ----------------------------------------------------------
  //  الفيديوهات — حط لينك يوتيوب أو مسار ملف MP4 داخل public/videos
  //  مثال يوتيوب: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  //  مثال MP4:    "/videos/ledge-valley.mp4"
  //  أي قيمة فاضية "" = السكشن مش هيظهر
  // ----------------------------------------------------------
  videos: {
    home: "",
    "ledge-valley": "",
    "aden-parks": "",
    siyal: "",
  },
  // فيديو خلفية للهيرو في الصفحة الرئيسية (MP4 فقط، صامت ومتكرر). فاضي = صورة
  heroLoop: "",
};

export const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
