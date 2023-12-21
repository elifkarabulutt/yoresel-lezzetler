import productImg01 from "../../assets/images/elazıg_1.jpg";
import productImg02 from "../../assets/images/elazig-2.jpg";
import productImg03 from "../../assets/images/elazıg_3.jpg";

import productImg04 from "../../assets/images/elazıg_1.jpg";
import productImg05 from "../../assets/images/elazig-2.jpg";
import productImg06 from "../../assets/images/elazıg_3.jpg";


import citiesimg1 from "../../assets/images/elazig.jpg";
import citiesimg2 from "../../assets/images/malatya.jpeg";
import cities from "./cities"; 

const recipes = [
  {
    id: "01",
    recipeName: "Harput Köfte",
    imgUrl: productImg01,
    category: "favorite",
    shortDesc: "Elazığ’ın Harput ilçesine has lezzetlerden biri olarak adını tüm Türkiye’ye duyuran Harput köfte",
    ingredients: [
      "300 gram yağsız kıyma",
      "1,5 çorba kasesi köftelik bulgur",
      "1 adet büyük kuru soğan(rendelenmiş)",
      "1 adet yumurta",
      "Kuru reyhan",
      "Maydanoz (ince ince kıyılmış)",
      "3 yemek kaşığı domates salçası",
      "Tuz",
      "Karabiber",
      "Kırmızı biber",
      "1 yemek kaşığı tereyağı",
      "2 yemek kaşığı zeytinyağı",
    ],
    preparation: [
      "Yağlar ve 1 yemek kaşığı salça haricinde bütün malzemeler karıştırılarak 25-30 dakika kadar suyla yumuşatılarak yoğurulur. İstenilen şekil verilir.",
      "Tencerede salçayla yağ kavrulur. Su, kuru reyhan, tuz da eklenir. Kaynamaya başlayınca köfteler içine atılır. 15 dakika pişirilir. Afiyet olsun.",
    ],
    additionalInfo:
      "Elazığ’ın Harput ilçesine has lezzetlerden biri olarak adını tüm Türkiye’ye duyuran Harput köfte",
  cityId:1,
  
    },

  {
    id: "02",
    recipeName: "İçli Köfte",
    imgUrl: productImg02,
    category: "favorite",
    shortDesc: "Bilindik bir içli köfte değik Elazığ’ın içli köftesi… ",
    ingredients: [
      "İçli köftenin dışı için;",
      "1 kilo yağsız içli köftelik kıyma",
      "2,5 kase bulgur (3 su bardağı kadar)",
      "1 yumurta",
      "1 çay bardağı irmik",
      "2 tatlı kaşığı tuz",
      "1 yemek kaşığı pul biber",
      "1 yemek kaşığı kırmızı toz biber",
      "Su",
      "İçi için;",
      "1 kilo normal yağlı kıyma",
      "10-12 adet kuru soğan (yaklaşık 2 Kilo )",
      "1 paket margarin",
      "2 yemek kaşığı tereyağı",
      "2 yemek kaşığı domates salçası",
      "1 yemek kaşığı biber salçası",
      "1 yemek kaşığı pul biber",
      "1 yemek kaşığı karabiber",
      "1 yemek kaşığı tuz",
      "Biraz maydanoz",
      "1 su bardağı kadar doğranmış ceviz",
      "Pişirmek için;",
      "3 yemek kaşığı domates salçası",
      "1 yemek kaşığı biber salçası",
      "Yarım çay bardağı sıvı yağ",
      "1 yemek kaşığı tepeli margarin",
      "1,5 litre su",
      "Tuz",
    ],
    preparation: [
      "İlk başta içli köfte içimizi yapalım, buzlukta donması gerek. Önce soğanlarımızı robotta yemeklik çekelim.",
      "Tencereye alalım, soğanı ne kadar çok olursa o kadar lezzetli olur. Soğanları koyduktan sonra ocağı yakalım.",
      "Eğer soğan sulanırsa suyunu çekene kadar bekleyelim. Sulanmazsa direk yağı ekleyelim.",
      "Yağ fazla ve kesinlikle margarin olmalı ve asla teremyağ marka kullanmayın, bazı margarinler yumuşak türde oluyor ben bizim marka kullanıyorum.",
      "Teremyağın hüsranını yaşadım bir keresinde yumuşak olursa soğuduktan sonra yuvarlak şeklini veremeyiz. Neyse yağını ekleyelim ve soğanları kavuralım.",
      "Ve kıymayı ekleyip kavurmaya devam edelim. Kıyma iyice pişene kadar bekliyoruz, arada karıştıralım dibi tutmasın. Kıyma pişince salça ve baharatları ekleyelim, karıştırıp en son maydanoz ekleyelim.",
      "Ilık olunca doğranan cevizi de ekleyelim. Cevizi neden ılık olunca ekliyoruz söyleyeyim ceviz sıcakken yağı çeker ve harçta yağ kalmaz.",
      "Ve tencereyi 1 gece dolapta bekletelim, iyice soğuyacak harç ve bir gece sonra soğuyan harcı istenilen büyüklükte alıp yuvarlayalım, boyutu resimlerde var. ",
      "Yuvarlanıp kaba alınan iç harcı bu sefer de buzlukta bekletiyoruz bir gece yada istediğiniz kadar kalabilir. İçli köfte yapacağınız gün o an çıkarılır asla buzu çözülmemeli.",
      "Gelelim dış kabuğuna. Kıyma ve diğer malzemeler kaba alınır, azar azar su eklenerek  iyice yoğurulur. Kıyma sakız gibi olacak biz öyle deriz.",
      "Ve yuvarlak harçlar alınır parmakla oyularak ince açılır. İçine donan iç harç koyulur ve kapatılarak yuvarlanır.",
      "Sıra geldi pişmeye. Suyu için yağ ve salça tencereye alınır, kavrulur ve suyu dökülür. Tuz eklenir ve su kaynayınca içli köfteler içine atılır, haşlanır.",
      "Haşlandığı sudan anlaşılır resimde de gösterdiğim gibi içli köfteler üste çıkarsa pişmeye çok az kalmıştır.",
      "Üste çıksın 5 dk daha kaynasın, sudan çıkarın servis yaparken isteyene sulu isteyene su koymadan servis yapabilirsiniz. Nefis köfteler hazır, afiyet olsun :)",

    ],
    additionalInfo:
      "Bilindik bir içli köfte değik Elazığ’ın içli köftesi… ",
      cityId:1,
    },

  {
    id: "03",
    recipeName: "Patila",
    imgUrl: productImg03,
    category: "favorite",
    shortDesc: "Bir nevi börek olarak tarif edebileceğimiz patila, Elazığ mutfağının vazgeçilmez yemeklerinden biri",
    ingredients: [
      "1 paket hamur kabartma tozu",
      " 1 çay kaşığı tuz",
      " 6 su bardağı un",
      " İçi için;",
      "3 dilim peynir",
      " 1 deste maydanoz",
      "Üstü için;",
      "  Tereyağı",

    ],
    preparation: [
      "Altı su bardağı unu hamur yoğurma kabımıza alalım ve ortasını havuz şeklinde açalım.",
      "Hamur kabartma tozu, tuz ve suyu ekleyip yoğuralım. Kulak memesi kıvamında bir hamur elde edelim.",
      "Hazır olan hamurumuzu beş altı dk dinlendirelim",
      "Peynirimizi rendeleyelim, bir deste maydanozu da doğrayalım ve peynirle karıştıralım.",
      "Hamurumuzdan küçük parçalar alıp, tezgahın üstünde açalım. Küçük parçalar alıp, ince açmaya çalışalım.",
      "Yuvarlak olarak açtığımız hamurun bir tarafına peynirli maydanozlu harcı koyup, ay şeklinde kapatalım. Kenarlarını elimizle bastıralım ki pişerken harç çıkmasın.",
      "Yağsız seramik ya da teflon tavada teker teker kızartalım.",

    ],
    additionalInfo:
      "Bir nevi börek olarak tarif edebileceğimiz patila, Elazığ mutfağının vazgeçilmez yemeklerinden biri",
  },

  {
    id: "04",
    recipeName: "Harput Köfte",
    imgUrl: productImg04,
    category: "latest",
    shortDesc:
      "Elazığ’ın Harput ilçesine has lezzetlerden biri olarak adını tüm Türkiye’ye duyuran Harput köfte",
    ingredients: [
      "300 gram yağsız kıyma",
      "1,5 çorba kasesi köftelik bulgur",
      "1 adet büyük kuru soğan(rendelenmiş)",
      "1 adet yumurta",
      "Kuru reyhan",
      "Maydanoz (ince ince kıyılmış)",
      "3 yemek kaşığı domates salçası",
      "Tuz",
      "Karabiber",
      "Kırmızı biber",
      "1 yemek kaşığı tereyağı",
      "2 yemek kaşığı zeytinyağı",
    ],
    preparation: [
      "Yağlar ve 1 yemek kaşığı salça haricinde bütün malzemeler karıştırılarak 25-30 dakika kadar suyla yumuşatılarak yoğurulur. İstenilen şekil verilir.",
      "Tencerede salçayla yağ kavrulur. Su, kuru reyhan, tuz da eklenir. Kaynamaya başlayınca köfteler içine atılır. 15 dakika pişirilir. Afiyet olsun.",
    ],
    additionalInfo:
      "Elazığ’ın Harput ilçesine has lezzetlerden biri olarak adını tüm Türkiye’ye duyuran Harput köfte",
      cityId:1,
  
    },

  {
    id: "05",
    recipeName: "İçli Köfte",
    imgUrl: productImg05,
    category: "latest",
    shortDesc:
      "Bilindik bir içli köfte değik Elazığ’ın içli köftesi… ",
    ingredients: [
      "İçli köftenin dışı için;",
      "1 kilo yağsız içli köftelik kıyma",
      "2,5 kase bulgur (3 su bardağı kadar)",
      "1 yumurta",
      "1 çay bardağı irmik",
      "2 tatlı kaşığı tuz",
      "1 yemek kaşığı pul biber",
      "1 yemek kaşığı kırmızı toz biber",
      "Su",
      "İçi için;",
      "1 kilo normal yağlı kıyma",
      "10-12 adet kuru soğan (yaklaşık 2 Kilo )",
      "1 paket margarin",
      "2 yemek kaşığı tereyağı",
      "2 yemek kaşığı domates salçası",
      "1 yemek kaşığı biber salçası",
      "1 yemek kaşığı pul biber",
      "1 yemek kaşığı karabiber",
      "1 yemek kaşığı tuz",
      "Biraz maydanoz",
      "1 su bardağı kadar doğranmış ceviz",
      "Pişirmek için;",
      "3 yemek kaşığı domates salçası",
      "1 yemek kaşığı biber salçası",
      "Yarım çay bardağı sıvı yağ",
      "1 yemek kaşığı tepeli margarin",
      "1,5 litre su",
      "Tuz",
    ],
    preparation: [
      "İlk başta içli köfte içimizi yapalım, buzlukta donması gerek. Önce soğanlarımızı robotta yemeklik çekelim.",
      "Tencereye alalım, soğanı ne kadar çok olursa o kadar lezzetli olur. Soğanları koyduktan sonra ocağı yakalım.",
      "Eğer soğan sulanırsa suyunu çekene kadar bekleyelim. Sulanmazsa direk yağı ekleyelim.",
      "Yağ fazla ve kesinlikle margarin olmalı ve asla teremyağ marka kullanmayın, bazı margarinler yumuşak türde oluyor ben bizim marka kullanıyorum.",
      "Teremyağın hüsranını yaşadım bir keresinde yumuşak olursa soğuduktan sonra yuvarlak şeklini veremeyiz. Neyse yağını ekleyelim ve soğanları kavuralım.",
      "Ve kıymayı ekleyip kavurmaya devam edelim. Kıyma iyice pişene kadar bekliyoruz, arada karıştıralım dibi tutmasın. Kıyma pişince salça ve baharatları ekleyelim, karıştırıp en son maydanoz ekleyelim.",
      "Ilık olunca doğranan cevizi de ekleyelim. Cevizi neden ılık olunca ekliyoruz söyleyeyim ceviz sıcakken yağı çeker ve harçta yağ kalmaz.",
      "Ve tencereyi 1 gece dolapta bekletelim, iyice soğuyacak harç ve bir gece sonra soğuyan harcı istenilen büyüklükte alıp yuvarlayalım, boyutu resimlerde var. ",
      "Yuvarlanıp kaba alınan iç harcı bu sefer de buzlukta bekletiyoruz bir gece yada istediğiniz kadar kalabilir. İçli köfte yapacağınız gün o an çıkarılır asla buzu çözülmemeli.",
      "Gelelim dış kabuğuna. Kıyma ve diğer malzemeler kaba alınır, azar azar su eklenerek  iyice yoğurulur. Kıyma sakız gibi olacak biz öyle deriz.",
      "Ve yuvarlak harçlar alınır parmakla oyularak ince açılır. İçine donan iç harç koyulur ve kapatılarak yuvarlanır.",
      "Sıra geldi pişmeye. Suyu için yağ ve salça tencereye alınır, kavrulur ve suyu dökülür. Tuz eklenir ve su kaynayınca içli köfteler içine atılır, haşlanır.",
      "Haşlandığı sudan anlaşılır resimde de gösterdiğim gibi içli köfteler üste çıkarsa pişmeye çok az kalmıştır.",
      "Üste çıksın 5 dk daha kaynasın, sudan çıkarın servis yaparken isteyene sulu isteyene su koymadan servis yapabilirsiniz. Nefis köfteler hazır, afiyet olsun :)",

    ],
    additionalInfo:
      "Bilindik bir içli köfte değik Elazığ’ın içli köftesi… ",
      cityId:1,
    },

  {
    id: "06",
    recipeName: "Patila",
    imgUrl: productImg06,
    category: "latest",
    shortDesc:
      "Bir nevi börek olarak tarif edebileceğimiz patila, Elazığ mutfağının vazgeçilmez yemeklerinden biri",
    ingredients: [
      "1 paket hamur kabartma tozu",
      " 1 çay kaşığı tuz",
      " 6 su bardağı un",
      " İçi için;",
      "3 dilim peynir",
      " 1 deste maydanoz",
      "Üstü için;",
      "  Tereyağı",

    ],
    preparation: [
      "Altı su bardağı unu hamur yoğurma kabımıza alalım ve ortasını havuz şeklinde açalım.",
      "Hamur kabartma tozu, tuz ve suyu ekleyip yoğuralım. Kulak memesi kıvamında bir hamur elde edelim.",
      "Hazır olan hamurumuzu beş altı dk dinlendirelim",
      "Peynirimizi rendeleyelim, bir deste maydanozu da doğrayalım ve peynirle karıştıralım.",
      "Hamurumuzdan küçük parçalar alıp, tezgahın üstünde açalım. Küçük parçalar alıp, ince açmaya çalışalım.",
      "Yuvarlak olarak açtığımız hamurun bir tarafına peynirli maydanozlu harcı koyup, ay şeklinde kapatalım. Kenarlarını elimizle bastıralım ki pişerken harç çıkmasın.",
      "Yağsız seramik ya da teflon tavada teker teker kızartalım.",

    ],
    additionalInfo:
      "Bir nevi börek olarak tarif edebileceğimiz patila, Elazığ mutfağının vazgeçilmez yemeklerinden biri",
      cityId:1,
    },
];




const recipesWithCityInfo = recipes.map(recipe => {
  const city = cities.find(city => city.id === recipe.cityId);
  return { ...recipe, city };
});
export default recipes;
