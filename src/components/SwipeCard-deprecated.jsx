// import React, { useState } from "react";
// import SwipeableViews from "react-swipeable-views";

// export default function SwipeCard() {
//   const [cards, setCards] = useState([
//     { content: "Card 1" },
//     { content: "Card 2" },
//     { content: "Card 3" },
//   ]);

//   const [bigCards, setBigCards] = useState([
//     {
//       image:
//         "https://i2.wp.com/www.faselhd.express/wp-content/uploads/2022/05/MV5BOGI5N2FhNzktZjZlNi00MmRjLWE1MmUtNjRlNzQyOGMzYjNhXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg?resize=205%2C310",
//       rating: "5.6 ⭐",
//       views: "49٬393 👁️",
//       title: "فيلم Memory 2022 مترجم",
//       categories: ["الأكشن", "الإثارة"],
//       story:
//         "قاتل مأجور يكتشف أنه أصبح هدفًا بعد أن رفض إكمال وظيفة لمنظمة إجرامية خطيرة. نسخة جديدة من الفيلم البلجيكي The Memory of a Killer لعام 2003.",
//     },
//     {
//       image:
//         "https://i2.wp.com/www.faselhd.express/wp-content/uploads/2023/08/a2e65a3672a1b25c4656c4e155aee18d.jpg?resize=205%2C310",
//       rating: "7.6 ⭐",

//       views: " 49٬393 👁️",
//       title: "فيلم Insidious: The Red Door 2023 مترجم",
//       categories: ["الإثارة", "الغموض", "الرعب"],
//       story:
//         "يجب أن يتعمق اللامبيرت في ذا المزيد أكثر من أي وقت مضى ليضعوا شياطينهم للراحة مرة واحدة وإلى الأبد.",
//     },
//     {
//       image:
//         "https://i2.wp.com/www.faselhd.express/wp-content/uploads/2023/07/4e39d2d37e498b539e565bbe400dd5a5.jpg?resize=205%2C310",
//       rating: "8.6 ⭐",

//       views: " 49٬393 👁️",
//       title: "فيلم The Little Mermaid 2023 مترجم",
//       categories: ["عائلي", "فانتازيا", "مغامرات"],
//       story:
//         "تعقد حورية البحر الشابة صفقة مع ساحرة بحرية لاستبدال صوتها الجميل بأرجل بشرية حتى تتمكن من اكتشاف العالم فوق الماء وإثارة إعجاب الأمير.",
//     },
//   ]);

//   return (
//     <div className="border border-black z-10">
//       {/* ------------------------------------------------------------------------------------ */}
//       <SwipeableViews enableMouseEvents resistance>
//         {bigCards.map((item, index) => (
//           <div
//             className=" mx-5 flex justify-end flex-row rounded-md border-2 border-red-500  items-center bg-[#303030]"
//             key={index}
//           >
//             <div className="mx-3 text-right flex flex-col items-end text-gray-300">
//               <div className="text-sm">
//                 {item.rating} | {item.views}
//               </div>
//               <div className="text-2xl font-semibold">{item.title}</div>
//               {/* ---------- */}

//               <div className="flex flex-row-reverse text-xs mt-2">
//                 {item.categories.map((category, index) => (
//                   <div>| {category}</div>
//                 ))}
//               </div>
//               {/* --------------- */}
//               <div className="mt-5"> {item.story}</div>

//               <button className="text-lg  mt-10 w-1/5 rounded-full hover:bg-red-400 hover:text-white border-2 border-red-400 m-1 py-1 text-[#aaa] hover:text-gray-200 hover:text-[#303030]">
//                 شاهد الأن
//               </button>
//             </div>

//             <img
//               className="m-3 rounded-md border-2 border-gray-300"
//               src={item.image}
//             />
//           </div>
//         ))}
//       </SwipeableViews>
//     </div>
//   );
// }
