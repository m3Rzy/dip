import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import '../styles/anchor.css';
const { Link } = Anchor;


const AnchorExample = () => {
    const [targetOffset, setTargetOffset] = useState(undefined);
    const [scrollTop, setScrollTop] = useState(0);
    const [vizy, onOpacity] = useState(0)
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        var opacity = 0;
        var vizy = 0;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height * 100);
        opacity = (winScroll / 100)
        console.log(opacity)
        if (opacity >= 4.7) {
          var vizy = 100;
        }
        onOpacity(vizy, 1000)
        setScrollTop(scrolled)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        
        return () => window.removeEventListener("scroll", onScroll)
    })

    useEffect(() => {
        setTargetOffset(window.innerHeight / 14);
    }, []);

    return (
        <section className='anchor-mine'>
            <Anchor targetOffset={targetOffset} affix={true} style={{opacity: `${vizy}%`}}>
                <Link href="#part1" title="V веков истории рода Строгановых"/>
                <Link href="#part2" title="Век XVI" />
            </Anchor>
        </section>
    );
  };

export default () => <AnchorExample />;