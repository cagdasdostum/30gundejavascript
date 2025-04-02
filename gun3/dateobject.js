// Creating a time object
const now = new Date();
console.log(now);
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // nisan ayındayız 4 yazması gerekiyor ama 0-11 şeklinde sıralanıyor yani 3
console.log(now.getDate()); // bugün 2 nisan 2025. çıktı 2 olacak.
console.log(now.getDay());  // bugün günlerden çarşamba. 0-pazar, 1-pazartesi, 2-salı, 3-çarşamba
console.log(now.getHours()); // 21:57 şu an yani çıktı 21
console.log(now.getMinutes()); // 21.57 şu an yani çıktı 57
console.log(now.getSeconds()); // şu an saniye kaçsa onu çıktı verir.
console.log(now.getTime()); // 1 Ocak 1970'den bugüne kaç saniye geçtiğini gösteriyor. Unix time
