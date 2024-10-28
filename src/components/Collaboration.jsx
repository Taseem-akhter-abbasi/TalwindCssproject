import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { brainwaveSymbol, check } from "../assets";



const Collaboration = () => {
  return (
    <Section crosses>
    <div className='container lg:flex items-center'>
        <div className='max-w-[25rem]'>
            <h2 className='h2 mb-4 md:mb-8'>AI chat app for seamless</h2>
            <ul className='max-w-[22rem] mb-10 md:mb-14'>
                {collabContent.map((item)=>(
                    <li className='mb-3 ' key={item.id}>
                        <div className='flex items-center'>
                            <img src={check} width={24} height={24}/>
                            <h6 className="body-2 ml-5">{item.title}</h6>
                        </div>
                        {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
                    </li>
                ))}
            </ul>
            <Button>Try it now</Button>
        
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-75 sm:scale-50">
            {/* we have create this div to appear just rounded circle it roundefull property acting as a border */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                {/*  this div is the scond circle appear */}
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                {/* this div is for creating space for image brain bg conic id for circle around brain */}
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
{/* this ul is for circular orbit of apps collab apps containing diffrent icons */}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                //   by using rotae 45 index all the apps will be appear and by position absolute it will b exaactly positioned
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    {/*  again rotate 45 and -top will be appear the apps on the circle touch the orbit */}
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                    {/* this will change the width and height of the apps icon  */}
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
            {/* these are for right and left line which meet button and glaxy */}
          </div>

        </div>
        
    </div>
    </Section>
  );
}

export default Collaboration