import React, { useState, useEffect, useRef } from "react";
import SlotCell from "./SlotCell";
import { gsap } from "gsap";


const verticalLoop = (elements, speed, time) => {
    // console.log(elements);
    elements = gsap.utils.toArray(elements);
    let firstBounds = elements[0].getBoundingClientRect(),
        lastBounds = elements[elements.length - 1].getBoundingClientRect(),
        top = firstBounds.top - firstBounds.height - Math.abs(elements[1].getBoundingClientRect().top - firstBounds.bottom),
        bottom = lastBounds.top,
        distance = bottom - top,
        duration = Math.abs(distance / speed),
        tl = gsap.timeline({repeat: -1}),
        plus = speed < 0 ? "-=" : "+=",
        minus = speed < 0 ? "+=" : "-=";
    elements.forEach(el => {
      let bounds = el.getBoundingClientRect(),
          ratio = Math.abs((bottom - bounds.top) / distance);
      if (speed < 0) {
        ratio = 1 - ratio;
      }
      tl.to(el, {
        y: plus + distance * ratio,
        duration: duration * ratio,
        ease: "none"
      }, 0);
      tl.fromTo(el, {
        y: minus + distance
      }, {
        y: plus + (1 - ratio) * distance,
        ease: "none",
        duration: (1 - ratio) * duration,
        immediateRender: false
      }, duration * ratio)
    });
    return tl;
}

export default function SlotWidget ({ type, items, canSelect, speed }) {
    let spin;

    const doSpin = () => {
        console.log('spin');
        spin.play();
        setTimeout(()=> {
            spin.pause();
        }, 5000)
    }

    useEffect(() => {
        const elements = document.querySelectorAll(`#SlotCell-${type}`);
        spin = verticalLoop(elements, speed).pause();
    })

    useEffect(() => {
        if(canSelect){
            doSpin();
        }
    }, [canSelect])

    return (
        <>
            <div id="ideas" className={`SlotWidget-${type} p-4 border-r-2 border-l-2`}>
                { items.map((item, index) => <SlotCell key={index} text={item} type={type} />) }
            </div>
        </>
    )
}