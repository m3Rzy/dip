import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import '../styles/anchor.css';
const { Link } = Anchor;

const AnchorExample = () => {
    const [targetOffset, setTargetOffset] = useState(undefined);
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
    
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height * 100);

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

      <Anchor targetOffset={targetOffset} affix={true}>
        <Link href="#part1" title="V веков истории рода Строгановых"/>
        <Link href="#part2" title="Век XVI" />
        {/* <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link> */}
      </Anchor>
      </section>
    );
  };

export default () => <AnchorExample />;