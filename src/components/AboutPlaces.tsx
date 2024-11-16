"use client"


import { useState } from "react";
import Image from "next/image";

import frere from "./../../public/frere.jpg"
import mohatta from "./../../public/mohatta.jpg"

import zoo from "./../../public/zoo.jpg"
import dino from "./../../public/dino.jpg"

import paf from "./../../public/paf.jpg"
import national from "./../../public/national.jpg"

import clifton from "./../../public/clifton.jpg"
import hawks from "./../../public/hawks.jpg"

export function AboutPlaces() {
 
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(prevState => !prevState);
    };

    const [isClick, setIsClick] = useState(false);
    const toggleClick = () => {
      setIsClick(prevState => !prevState);
    };

    const [isClick1, setIsClick1] = useState(false);
    const toggleClick1 = () => {
      setIsClick1(prevState => !prevState);
    };

    const [isChange, setIsChange] = useState(false);
    const toggleChange = () => {
      setIsChange(prevState => !prevState);
    };
  
    return (
      <div>


        <div className="card1">
          <h2>Outdoor Attractions</h2>
          <p>
            Pakistan’s biggest metropolitan city, Karachi, comprises the largest population in the country bringing people of diverse ethnicities together. 
            Fun places in Karachi are in abundance.
            The city is paved with various tourist attractions, shopping malls, restaurant chains, and industries that attract tourists from all over the world.
            <br />
          </p>
          <button  id="button" onClick={toggleChange}>
          {isChange ? 'Hide' : 'Show'} Places
        </button>
  
        {isChange && (
          < >
          <div id="img-main">
            <div className="img"  >
           <Image src={zoo} alt="" width={400} height={400}  />
            </div>
            <div className="txt-img-left">
              <h2>Karachi Zoo</h2>
              <p>
         The Karachi Zoo, also known as Karachi Zoological and Botanical Gardens, Gandhi Garden, is located in Garden East,
         Karachi, Sindh, Pakistan. Established in 1899, it is the largest
      zoo of Pakistan and second oldest zoo in the country after Lahore Zoo.</p>
            </div>
          </div>
  
          <div id="img-main">
           <div className="img"> <Image src={dino} alt="" width={400} height={10}></Image></div>
           <div className="txt-img-left">  
                  <h2> Dino Safari Park</h2> 
                  <p>The park offers a Jurassic drive-through experience where visitors can get close to dinosaurs that roam freely.
                  DinoSafari Park in Karachi is a fantastical adventure where animatronic dinosaurs come to life and roam the grounds!🦖 You Can Enjoy With Your Family❤️</p></div>
           </div>
  </>
        )}
        </div>

        <div className="card1">
        <h2>Historical Places</h2> 
<p> Historical places are significant sites that reflect the cultural, architectural, and social heritage of a region. 
    They often embody key events, personalities, or periods in history, providing insight into the past. Examples include 
    the ancient ruins of Pompeii, the iconic pyramids of Giza, and the majestic Colosseum in Rome. These sites not only 
    serve as reminders of human achievement and creativity but also attract scholars and tourists alike, fostering a 
    deeper understanding of diverse cultures and histories. Visiting these places allows us to connect with the narratives
     that shaped our world.
<br /> </p>
          <button id="button" onClick={toggleClick1}>
          {isClick1 ? 'Hide' : 'Show'} Places 
        </button>
  
        {isClick1 && (
          <>
          <div id="img-main">
            <div className="img">
              <Image src={frere} alt="" width={400} height={400} />
            </div>
            <div className="txt-img">
            <h2>Frere Hall </h2> 
                <p>Frere Hall is a building in Karachi, Pakistan that dates from the early British colonial era in Sindh. 
                    Completed in 1865, Frere Hall was originally intended to serve as Karachi's town hall, and now serves 
                    as an exhibition space and library. </p>
            </div>
          </div>
  
  <div id="img-main">
           <div className="img"> <Image src={mohatta} alt="" width={400} height={100}></Image></div>
           <div className="txt-img-left">  
        <h2>Mohatta Palace</h2>
                <p>The Mohatta Palace is a museum located in Karachi, Sindh, Pakistan. Designed by Ahmed Hussain 
                    Agha,the palace was built in 1927 in the posh seaside locale of Clifton as the summer home of Shivratan Mohatta, 
                    a Hindu Marwari businessman from what is now the modern-day Indian state of Rajasthan</p>
            </div>
           </div>
  </>
        )}

        </div>

        <div className="card1">
        <h2> Museums</h2> 
 <p> The Maritime Museum is a popular tourist attraction in Sindh. It is a great place for families to visit, with a vast range of art galleries, weapons, ships, and aircraft on display.
For people who are interested in the naval machinery used, there is a full-class submarine on display, the famous PNS Hangor.
Besides having a picnic and taking a walk in the wide green lawn area, it is a very affordable place with paddle-boat rides on the small lake. This place is also in the museum as well as a dolphin 
show that the kids will love for sure.Additionally, there is also a range of swings and electronic rides that is bound to give you and your family a fun time. 
           </p>
          <button id="button" onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'}  Places
        </button>
  
        {isVisible && (
          <>
          <div id="img-main">
            <div className="img">
              <Image src={paf} alt="" width={400} height={400} />
            </div>
            <div className="txt-img">
            <h2>PAF Museum </h2> 
        <p>Pakistan Air Force Museum Faisal is the official museum of the Pakistan Air Force located on the south-western edge of PAF 
            Base Faisal near Karsaz Flyover on Shahrah-e-Faisal at Karachi. The museum is the only military aviation museum in Pakistan,
         with more than 50 aircraft, radars and missiles on display. The museum draws thousands of visitors each day making it one 
            of the most frequently visited tourist attractions in Karachi.</p>
            </div>
          </div>
  
  <div id="img-main">
           <div className="img"> <Image src={national} alt="" width={400} height={100}></Image></div>

           <div className="txt-img-left">  
           <h1>National Museum of  Pakistan </h1> 
           <p>The National Museum of Pakistan was established in Frere Hall in 1951, replacing the defunct Victoria Museum.
             Frere Hall itself was built in 1865 as a tribute to Sir Bartle Frere, a commissioner of Sind during the 19th century. 
           Once the museum was inaugurated the government of Pakistan deemed it wise to constitute an Advisory Council in 1950 with
          a primary duty to counsel the museum on the issues of enriching its collection through new acquisitions and purchase of 
           antiquities and works of arts</p></div>
           </div>
  </>
        )}
        </div>

    <div className="card1">
    <h2>Beaches</h2> 
<p>Coming to Karachi and not starting by visiting the beach? Big Mistake. Karachi has the most beautiful beaches that you can visit and enjoy the cool sea breeze with a picnic spread.
The closes to the city are the Clifton Sea View, which is always overcrowded and is also affected in terms of water pollution ever since the oil leak in 2003. However, the best beach sides with clean water and sand are Nathiagali Beach, Sand’s Pit, Hawk’s Bay, French Beach etc.
Besides the beautiful view of the waves crashing, you can enjoy horse and camel riding with your family. In addition to these, you can also try buggy rides and bikes to get the full sand experience.
<br /> </p>
          <button id="button" onClick={toggleClick}>
          {isClick ? 'Hide' : 'Show'} Places
        </button>
  
        {isClick && (
          <>
          <div id="img-main">
            <div className="img">
              <Image src={hawks} alt="" width={400} height={400} />
            </div>
            <div className="txt-img">
            <h2> Hawke's Bay</h2> 
     <p> Hawke's Bay or Hawkesbay is a beach in Karachi, Sindh, Pakistan, located 20 km southwest of Karachi city. 
        The beach is named after Bladen Wilmer Hawke, who owned a house on the beach during the 1930s.
The beach is very popular, with hundreds of people visiting daily for swimming, camel and horse riding, and vacations.</p>
            </div>
          </div>
  
  <div id="img-main">
           <div className="img"> <Image src={clifton} alt="" width={400} height={100}></Image></div>

           <div className="txt-img-left">  
           <h1>Clifton Beach</h1> 
                <p>Clifton Beach, also known as Sea View,[1] is a beach in Karachi, Sindh, Pakistan and is located on the Arabian Sea. 
         It stretches from Karachi to Ormara (Balochistan).[2] The beach is very popular in Pakistan. It is open 24/7 for the general public.
        Clifton Beach is purported to give the best value in leisure and recreational opportunities for fun seekers and beach lovers. 
                </p></div>
           </div>
  </>
        )}
        </div>
      </div>
    );
  }
   
