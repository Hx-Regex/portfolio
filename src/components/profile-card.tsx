"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export function ProfileCard() {
  const cardRef = useRef(null);
  const profileRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // Card entrance animation
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Profile section animation
    gsap.fromTo(
      profileRef.current,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      }
    );

    // Details section animation
    gsap.fromTo(
      detailsRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="w-full max-w-md mx-auto bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 opacity-0"
    >
      {/* Profile Header */}
      <div ref={profileRef} className="flex items-start space-x-4 mb-6 opacity-0">
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
            <Image
              src="/assets/pfp/logopng.png"
              alt="Ismail Chabane"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Flag Overlay */}
          <div className="absolute -top-1 -left-1 w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Name and Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-xl font-bold text-white">Ismail Chabane</h3>
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Building digital experiences with code.<br />
            Passionate about clean architecture.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div ref={detailsRef} className="space-y-3 opacity-0">
        {/* Professional Role */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm">Software Engineer & Freelancer</span>
        </div>

        {/* Education */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.482 0l5.5-2.358a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm">Master's in Data Science & Big Data</span>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm">Algeria</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm">ismail@example.com</span>
        </div>

        {/* Website */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm">portfolio.ismail.com</span>
        </div>

        {/* Pronouns */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-gray-300 text-sm">he/him</span>
        </div>
      </div>
    </div>
  );
}
