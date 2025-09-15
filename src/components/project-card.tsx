// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Calendar, DollarSign, Users, Clock, ArrowRight, Badge, Trophy } from 'lucide-react';



// export default function EventCard({ event, isPast = false }: EventCardProps) {
//   return (
//     <TooltipProvider>
//       <div className="group block relative">
//         <Link href={`/events/${event.slug}`}>
//           <article className={`
//             transition-all duration-500 ease-out 
//             ${isPast ? 'opacity-70 hover:opacity-85' : ''}
//             overflow-hidden h-full flex flex-col relative
//           `}>
//             {/* Image Section */}
//             <div className="relative aspect-[4/3] bg-gray-50">
//               {event.logo_url ? (
//                 <Image 
//                   src={event.logo_url} 
//                   alt={event.title_en}
//                   fill
//                   className="object-cover aspect-square transition-transform duration-700 rounded-sm ease-out"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
//                       <Calendar className="w-6 h-6 text-gray-500" />
//                     </div>
//                     <span className="text-gray-500 text-sm font-medium">Event Image</span>
//                   </div>
//                 </div>
//               )}
              
//               {/* Hover Overlay with Button and Corner Stats */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-sm">
//                 {/* Square Vote Now Button - Center */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <Button 
//                     size="lg"
//                     className="bg-white text-black  font-regular px-8 py-3 rounded-sm  cursor-pointer hover:bg-primary/80 hover:text-white"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       window.location.href = `/events/${event.slug}`;
//                     }}
//                   >
//                     <ArrowRight className="w-4 h-4 mr-2" />
//                     VOTE NOW
//                   </Button>
//                 </div>
                
//                 {/* Nominees Stats - Bottom Left Corner */}
//                 <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-lg">
//                   <Users className="w-5 h-5" />
//                   <span className="font-medium">{event.stats.nomineesCount}</span>
//                   <span>Nominees</span>
//                 </div>
                
//                 {/* Categories Stats - Bottom Right Corner */}
//                 <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-lg">
//                   <Trophy className="w-5 h-5" />
//                   <span className="font-medium">{event.stats.categoriesCount}</span>
//                   <span>Categories</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Title Section with Paid Badge */}
//             <div className="flex-1 mb-6 py-2 w-full">
//               <div className="flex items-center justify-between gap-2 px-1">
//                 <h3 className="text-lg font-bold flex-1">{event.title_en}</h3>
                
//                 {/* Paid Event Badge */}
//                 {event.is_paid && (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <DollarSign className="w-4 h-4 text-green-500 cursor-pointer" /> 
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p className="text-sm">This is a paid event - voting requires payment</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 )}
//               </div>
//             </div>
//           </article>
//         </Link>
//       </div>
//     </TooltipProvider>
//   );
// } 