import '../styles/family.css';
import '../styles/scroll.css';
import '../styles/allObjects.css'
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';
import yop2 from '../assets/виднастрогановдачу.png';
import sitmo from '../assets/logo-full.png';
import '../fonts.css';
import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import '../styles/anchor.css';
const { Link } = Anchor;


function FamilyApp() {
    document.title = 'Род Строгановых';
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
        vizy = 100;
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
        <div className="FamilyApp">
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            
            <div className="container-fluid" id="supertitle">
                
                <div className="listheader2">
                    <a href="/">
                        <div className="logo">
                            <img src={logo2} alt="" width="250px" className="logo_img-family" />
                        </div>
                    </a>

                    <div className="nextbtn">
                        <img src={picture2} alt="#" className="nextsvg" />
                        <a href="/" className="nextbutton">Назад</a>
                    </div>
                    <div className="titles">
                        <h1 className="title_main">Род Строганова</h1>
                        <h3 className="title_help">Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и государственные деятели XVI—XX веков.</h3>
                        <div className="line"></div>
                    </div>
                </div>
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="История рода Строгановых V веков"/>
                            <Link href="#part2" title="История рода Строгановых XVI веков" />
                        </Anchor>
                    </section>
            </div>
            
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part1">                      {/* перменная */}
                        V веков истории рода Строгановых
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Блестящие аристократы Российской империи, богатые купцы, крупные промышленники, отважные землепроходцы, щедрые меценаты, влиятельные вельможи. Основная деятельность Строгановых была связана с соледобывающим промыслом в Сольвычегодске и
                            близлежайших окрестностях. Начало этому делу в XVI в. положил Аникей Фёдорович, а продолжили его сыновья и внуки. В результате к XVII в. Строгановы обладали обширными земельными владениями, осуществляли торговлю во многих городах,
                            охраняли восточные границы государства.</p>
                    </div>
                    <div className="textarea-normal">
                        <p> Накопленные средства, а также покровительство Ивана IV позволяли Строгановым заниматься открытием и освоением новых территорий. Для этого Строгановы неоднократно отправляли экспедиции. Наибольшую известность получила экспедиция Ермака,
                            положившая начало процесса включения Сибири в состав Российского государства. Её снарядили Максим Яковлевич и Никита Григорьевич Строгановы, которые предоставили деньги и людей.</p>
                    </div>

                    <div className="picture1-block">
                        <img src={yop2} alt="" className="picture1"/>
                        <div className="picture1-info">
                            <p>Вид на Строгановскую дачу с Каменного острова (Б. Патерсон, 1804 г.)</p>
                        </div>
                    </div>
                    <div className="subject3">
                        <p>Уже в конце XVI и начале XVII века Строгановы поддерживали творчество наиболее искусных иконописцев, стремившихся к особому изяществу живописи, заказывая и приобретая их произведения для своих "горниц". В тот период сложилась "строгановская"
                            художественная школа. В конце XVII века можно говорить и о «строгановском стиле» в архитектуре. Именно в этом стиле выполнена церковь Рождества Богородицы в Нижнем Новгороде (1696-1719), построенная на средства Г. Д. Строганова.
                        </p>
                    </div>
                    <div className="subject4">
                        <p>Строгановский дворец - один из лучших образцов архитектуры русского барокко, построен в 1753-1756 гг. архитектором Ф.-Б. Растрелли. В позднейших перестройках и оформлении внутренних интерьеров дворца принимали участие известные архитекторы
                            А. Воронихин, К. Росси, П. Садовников, Г. Боссе и другие. Большой танцевальный зал - единственный в Петербурге интерьер, сохранивший подлинное декоративное убранство Ф.-Б. Растрелли с уникальным плафоном "Триумф Героя" работы Дж. Валериани.
                        </p>
                    </div>
                    

                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part2">
                            V веков истории рода Строгановых. Век XVI
                        </h>
                    </div>

                    <div className="textarea-normal">
                        <p>Родоначальник династии промышленников Строгановых – Аникей (Аника) Федорович (1497-1570). Получив от отца в наследство соляную варницу, через 20 лет добился монополии в производстве соли. Заработав начальный капитал, стал закупать ценные
                            меха у зауральских охотников. С 1574 года Строгановым разрешалось добывать медную, железную руду и серу в Предуралье и за Уралом по жалованной грамоте Ивана Грозного. Говорили, что богатство их "росло как на дрожжах". Передав дело
                            сыновьям – Якову, Григорию и Семену, отошел от дел и последние годы жизни провел в Пыскорском монастыре под именем монаха Иоасафа. </p>
                    </div>
                    <div className="textarea-normal">
                        <p>Сознавая, что богатство – большая ответственность перед Богом и людьми, Аникей Федорович строил церкви, приобретал для них иконы и церковные книги, на свои средства, делал щедрые взносы монастырям. В Соли Вычегодской возвел каменный Благовещенский
                            собор. Который до сих пор является визитной карточкой Сольвычегодска. Именно Аника Строганов заложил фундамент и наметил пути промышленной, меценатской и благотворительной деятельности всего рода.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>Внукам Аники Строганова, двоюродным братьям Максиму Яковлевичу и Никите Григорьевичу приходилось решать вопросы охраны огромных семейных владений. Они укрепляли оборону городков и поселков, содержали большое количество военной силы для
                            защиты своих промыслов от набегов и разорения. Способных на ратное дело людей не было. Братья со свойственной им сметливостью нашли выход из этого положения. На выгодных условиях они пригласили донских казаков во главе с атаманом Ермаком
                            Тимофеевичем. Войско было снабжено Строгановыми всем необходимым. Снаряжение обошлось в огромную по тому времени сумму — 20 тысяч рублей. Такое было не под силу даже государственной казне. В 1581 году войско численностью около 850
                            человек выступило на Сибирское ханство Кучума. Четырехлетний поход закончился разгромом Кучума, к Московскому царству были присоединены обширные сибирские земли. За это семья Строгановых была вознаграждена правом беспошлинной торговли
                            на всех завоеванных территориях. Строгановы фактически стали монополистами-солепромышленниками, беспрепятственно и в большом количестве поставляя соль в города Поволжья и центральной России. Параллельно с этим они продолжали вести
                            активную торговлю пушниной, рыбой, товарами с Востока. Их благосостояние увеличивалось, а вместе с ним росли и их привилегии.</p>
                    </div>
                    
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Дом П. С. Строганова на Сергиевской улице</p>
                        <p className="next-h2">Дворец Строгановых, построенный по проекту архитектора Франческо Бартоломео Растрелли в 1753—1754 годах, один из образцов уникального растреллиевского «барочно-рокайльного стиля».</p>
                        <a href="/house"><button type="button" className="block">Читать</button></a>
                    </div>
                </div>
            </div>
            <div className="container-fluid3">
                <div className="footer-pooper">
                    <img src={sitmo} width="200px" alt="" className="logo_img_footer" />
                    <p className="excep">Нашли ошибку в тексте? Выделите ее и нажмите Ctrl + Enter</p>
                    <div className="line-footer"></div>
                    <p className="rules">© 2021 ITMO Unversity</p>
                </div>
            </div>
    </div>
    );

    
}

export {FamilyApp};