import '../styles/house.css';
import '../styles/allObjects.css';
import '../fonts.css';
import '../styles/family.css';
import '../styles/scroll.css';
import '../styles/allObjects.css'
import '../fonts.css';
import '../styles/anchor.css';
import fasad from '../assets/img-pages/fasad.jpg'
import parad from '../assets/img-pages/parad.png'
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';
import sas from '../assets/img-pages/SAS.jpg'
import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import newpic from '../assets/headers/house-strg.png'
import { useNavigate } from 'react-router-dom'
import { Footer } from './components/footer'
import '../styles/anchor.css';
import { FooterWidget } from './components/footerwidget';
import { SrcLine } from './components/srcline';
const { Link } = Anchor;


function HouseApp() {
    document.title = 'Дом П. С. Строганова';
    const history = useNavigate();
    
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
        if (opacity >= 6.8) {
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
        <div className='HouseSApp'>
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className='container-fluid-house' id='supertitle'>
                <div className="listheader2">
                    <a href="/">
                        <div className="logo">
                            <img src={logo2} alt="" width="250px" className="logo_img-family" />
                        </div>
                    </a>
                    <div className="nextbtn">
                        <img src={picture2} alt="#" className="nextsvg" onClick={() => history(-1)}/>
                        <a className='backButton-my' onClick={() => history(-1)}></a>
                    </div>
                    {/* <button onClick={() => history(-1)}></button>  */}
                    <div className="titles">
                        <h1 className="title_main">Дом Павла Сергеевича Строганова</h1>
                        <h3 className="title_help">Здание на Сергиевской, 11, без сомнения выросло из впечатлений от путешествия графа Павла Сергеевича</h3>
                        <div className="line"></div>
                        <FooterWidget>
                            <li className='footer-data'>📅 05.01.2022</li>
                            <li className='footer-write'>🖋 Университет ИТМО</li>
                            <li className='footer-write'>📄 Статья</li>
                            <li className='footer-write'>🕓 10 минут</li>
                        </FooterWidget>
                    </div>
                </div>
                <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="Общая история" /> 
                            <Link href="#part2" title="Дополнительная информация"></Link>
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part1">                     
                        Общая история
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>По переписи населения 1737 г. участок принадлежал капитану-поручику преображенского полка Федору Фирсову. У вдовы Фирсова его купил придворный двора цесаревны Елизаветы Петровны Андрей Каштарев. Дом, скорее всего, был деревянный.
                    </p>
                    </div>
                    <div className="textarea-normal">
                        <p>В 1740-х гг. владелец - <a href="https://ru.wikipedia.org/wiki/Меншиков,_Александр_Александрович" className='hyperurl'>Александр Александрович Меншиков</a>, сын А. Д. Меншикова, в те годы секунд-майор Преображенского полка. После вступления на престол Петра II в 1727 г. был сослан вместе с отцом в Березов. Императрица Анна Иоановна возвратила его в Петербург. При Елизавете Александр - генерал-майор; при Екатерине II - генерал-аншеф. А. А. Меньшиков - единственный мужчина, награжденный орденом св. влкм. Екатерины (награждались только женщины).
                    </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        В 1749 г. двор купил обер-комиссар <a href="https://towiki.ru/view/Пётр_Иванович_Стеллих" className='hyperurl'>Иван Петрович Стеллих</a>.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        В 1758 г. арх. Кнебель произвел обмер участка, видимо, в связи с переходом владения к <a href="https://ru.wikipedia.org/wiki/Княжнины" className='hyperurl'>Борису Ивановичу Княжнину</a>, псковскому вице-губернатору. Его сын <a href="https://ru.wikipedia.org/wiki/Княжнин,_Яков_Борисович" className='hyperurl'>Яков</a>, будущий поэт, жил в этом доме. Яков женился на дочери основателя русского театра А. П. Сумарокова Екатерине, одной из первых русских поэтесс. В 1772 г. Я. Б. Княжнин продал доставшийся от отца дом. Тогда дом был деревянным на каменном фундаменте. 
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Следующий владелец - протопоп Петропавловского собора Василий Алексеев, затем советник И.И. Татищев, позже - генерал-майор С.М. Давыдов. По просроченной закладной дом перешел к князьям Несвитским (Несвицким), Ивану и Петру, сыновьям петербургского губернатора, вице-адмирала В. Ф. Несвитского. Дом принадлежал Несвитским, служившим в лейб-гвардии Конном полку, в 1792-1794 гг. В начале XIX в. участок принадлежал представителям семейства Строгановых. Сначала Елизавете Александровне, вдове Александра Николаевича Строганова, затем их сыну, дипломату Григорию Александровичу. Г.А. Строганов был двоюродным дядей Н. Н. Гончаровой (Пушкиной). В 1857 г. владельцами стали П.С. Строганов, внук Г. А., и его жена Анна Дмитриевна, дочь известного военного историка Д.П. Бутурлина. В 1857 г. по проекту арх. И.А. Монигетти началось возведение двухэтажного особняка. В 1877 г. по проекту арх. М.Е. Месмахера по Сергиевской (Чайковского) ул. сделали пристройку в три окна для домовой церкви.  
                        </p>
                    </div>
                    {/* ФАСАД СО СТОРОНЫ СЕРГИЕВСКОЙ УЛИЦЦЫ */}
                    <div style={{marginLeft: 400, marginTop: 30}}> 
                        <img src={fasad} className="strog-img"></img>
                        <p className='podimg'>Фасад со стороны Сергиевской улицы</p>
                    </div>
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part2">                     
                        Дополнительная информация
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Главный вход находился на Сергиевской ул. Парадные помещения располагались справа от беломраморной лестницы. В вестибюле стоит мраморная лисица (часть герба Строгановых), держащая картуш с вензелем "СС". Такой же вензель украшает угол дома. Первоначально основной двухэтажный объем располагался традиционно для Строгановых глаголем, т. е. выходил сразу на две улицы: Сергиевскую (сейчас это ул.Чайковского) и Моховую. Над углом возвышался купол, придававший всему зданию торжественный вид. Въезд располагался со стороны Сергиевской улицы, в сторону которой были обращены ворота.
                        </p>
                    </div>

                    {/* <div style={{marginLeft: 400, marginTop: 30}}> 
                        <img src={parad} className="strog-img"></img>
                        <p className='podimg'>Парадная лестница</p>
                    </div> */}

                    <div className="textarea-normal">
                        <p>
                        Многое в доме напоминает о бывших хозяевах, и сейчас на балконе можно увидеть вензель из двух переплетенных букв «С». Такой же вензель украшает чугунные ворота. Внутри дома основной достопримечательностью, доступной для любого посетителя, является прекрасная беломраморная лестница. Раньше её украшали скульптуры ангелов, однако в 90-е годы ХХ в. их увезли на реставрацию и не вернули до сих пор. Потолок в холле украшен лепниной и росписью с библейским сюжетом. На втором этаже посетителей встречает загадочный зверь, многие наверняка озадачились бы вопросом, кто же это? Оказывается, лисица – символ семьи. Она держит в лапах картуш с вензелем «S». До недавнего времени был открыт «Дубовый зал», в котором при Строгановых размещалась столовая. Она была «сердцем» дома. Сюда ведут четыре двери, связывающие ее с гостиными, внутренними комнатами и лестницей. Этот зал оформлен в стиле фламандского барокко. Здесь сохранился камин, на котором стоят две фигуры, выполненные из дуба. Это опять лисицы. Когда-то они держали герб Строгановых, но теперь лапы у зверьков обрублены.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Столовая имеет свою тайну. Не каждый сразу заметит небольшую потайную дверь в стене, за которой спряталась лестница. Скорее всего, раньше по ней можно было пройти в кабинет Павла Сергеевича.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Из столовой можно войти в Зеленую гостиную. Сейчас эта комната используется как склад мебели, потолок здесь затянут сеткой – местами обвалилась лепнина.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Еще одна дверь ведет в Большую гостиную, окна которой выходят на улицы Чайковского и Моховую. Пожалуй, это самая парадная часть особняка. Комната довольно большая, чувствуется, что когда-то здесь было очень уютно. Внутри стены особняка украшали 94 картины Ватто, Филиппо Липпи и др. из коллекции, собранной графом П. С. Строгановым. Впоследствии двухэтажное здание надстроили еще на два этажа. После смерти П. С. Строганова особняк унаследовал его внучатый племянник князь Г.А. Щербатов. В годы Первой мировой войны в доме находился лазарет Датского отряда и Российского общества Красного Креста.  
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p style={{fontSize: 20}}>В советское время в особняке размещались различные учреждения:</p>
                    </div>
                    <div className="textarea-normal" style={{marginTop: -40}}>
                    <ul className='futurehouse-li'>
                           <li>1922 г. - Центральные костюмировочные мастерские Политпросвета;</li>
                           <li>1930-е гг. - Центральный музыкальный техникум;</li>
                           <li>нач.1950-х - Электромеханический техникум Трамвайно-троллейбусного управления;</li>
                           <li>нач. 1960-х - Радиотехнический техникум;</li>
                           <li>1970-е - Техникум морского приборостроения,</li>
                           <li>1990-е - Колледж морского приборостроения.</li>
                        </ul>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Основной двухэтажный объем располагался, как и в доме на Невском проспекте, глаголем, то есть выходил сразу на две улицы — Сергиевскую и Моховую. Его фасад в стиле Людовика XV, выкрашенный одним тоном, отсылал знатока к Полицейскому мосту, к строению графа Александра Сергеевича. Претензии правнука на его наследие кажутся обоснованными в отличие от «поползновений» тещи — Елизаветы Михайловны  Бутурлиной, матери Анны Дмитриевны. Именно для нее на другой стороне Сергиевской улицы архитектор Гаральд Боссе, в 1840-х работавший для Строгановых, в том же 1857 году начал строить дом не только в том же стиле, но еще с более «точными цитатами» из дома на Невском. Можно полагать, что в ситуации острого соперничества зодчих, приглашенный графом Павлом Сергеевичем архитектор Ипполит Монигетти, выпускник основанной его отцом Рисовальной школы, был принужден остаться в тени в прямом и переносном смысле, ибо дом Бутурлиной занимал более выгодное в градостроительном отношении место в перспективе Моховой улицы, находясь на четной, солнечной, стороне Сергиевской.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Правда, над углом дома «скромного зятя» возвышался купол, придавший зданию торжественный французский вид, которым он чуть-чуть напоминал примененное к другой архитектурной ситуации здание Академии художеств, построенное Жаном-Батистом Валлен-Деламотом там же в Петербурге, на Васильевском острове. Кстати, на фотографии Дж. Бианки видно, что в конечном итоге купол несколько отличался, причем в худшую сторону от того, что был задуман архитектором и показан на акварели Жюля Мейблюма. Как мы увидим впоследствии, для намека на Академию художеств имелись веские основания — граф Павел Сергеевич, один из ведущих художественных деятелей XIX века, энергично пошел по стопам знаменитого прадеда.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Игра в подражание весьма характерна для времени правления императора Александра II, при всеобщем увлечении созданием живых картин: группы любителей, переодевшись в соответствующие наряды, представляли тот или иной живописный шедевр. Как рассказывалось выше, историзм в архитектуре начался с копирования фасадов. С течением времени зодчие нового поколения научились творчески перерабатывать вновь обнаруженные образцы старины, и они теряли свой блеск перед изысканными шедеврами XIX века. И. Монигетти прославился постройкой в Царском Селе дачи княгини Зинаиды Юсуповой, воспроизводившей заново растреллиевский Эрмитаж близлежащего елизаветинского парка. По этой причине у нас есть основания думать, что и дом для графа Павла Сергеевича навеял конкретный образец (или образцы).
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Здание на Сергиевской, 11, без сомнения выросло из впечатлений от путешествия графа Павла Сергеевича с отцом по Италии 1839-1840-х годов, подобно тому, как внутреннее убранство дома на Невском обязано своим рождением поездке своего главного владельца — графа Александра Сергеевича — по Европе в 1771–1779 годах.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Выше уже говорилось, что дом Павла Сергеевича стоял глаголем. В целом это была маленькая усадьба, состоявшая из нескольких построек. Вход в дом и въезд во двор, перегороженный чугунными воротами, были устроены со стороны Сергиевской улицы. Здесь же главная часть дома соединялась переходом над воротами с так называемым лицевым флигелем в полтора этажа. Внизу здания находились хозяйственные помещения, а наверху ряд комнат. Во дворе Монигетти расположил четырехэтажное служебное здание с конюшнями, а также помещениями для служителей и сторожей.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Сердцем главного здания маленького ансамбля являлась смотревшая окнами во двор Столовая, оформленная в стиле фламандского барокко. Отделанный деревом камин украшала латинская надпись «Nectimeonecspero». Этот девиз располагался на кольце, принадлежавшем другому графу Павлу Строганову — Павлу Александровичу, умершему в 1817 году на фрегате «Патрикий». Давая подобное имя своему второму сыну, граф Сергей Григорьевич хотел, вероятно, видеть его воином или государственным деятелем. Однако в данном случае магия слова не сработала. У Павла-второго оказалось больше схожести с личностью графа Александра Сергеевича.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        В Столовую вели четыре двери, связывавшие ее с гостиными, внутренними комнатами и Парадной лестницей, на которой стоял исполненный итальянским скульптором Виченцо Вела (1822–1891) мраморный волк, держащий картуш владельца, — оригинальная особенность дома. Вела, уроженец Швейцарии, сначала работал в качестве каменотеса при реставрации Миланского собора, в 1847 году он отправился в Рим, где мог познакомиться с Павлом Сергеевичем. Скульптор участвовал в 1848 году в войне за освобождение Италии, по окончании боевых действий жил и работал в Турине. За первым трудом, статуей «Спартак», принесшей ему премию на Парижской выставке 1855 года, последовали другие произведения, замечательные по своей жизненности и сильной передаче чувств. Такими являются, например, «Плачущая Гармония», исполненная для памятника композитору Доницетти. Композиция «Умирающий Наполеон» имела оглушительный успех на Всемирной выставке в Париже в 1867 году.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Купольный зал, оформленный в стиле Людовика XV, являлся главной гостиной дома. Центром его был pate — особой формы диван вокруг комнатных растений.
Окна Зеленой гостиной были обращены на Моховую улицу. «Как в архитектурном отношении, так и по декоративному своему впечатлению, гостиная эта принадлежит к самым изящным в Петербурге. Здесь архитектор действительно отличился — постройка гостиной во всех ее частях и мельчайших деталях исполнена по шаблонам и рисункам, сделанным г. Монигетти в натуральную величину каждого предмета; прирожденный вкус художника и любовь к делу работали здесь заодно. Стены обиты одноцветной обюссонской тканью мутно-зеленоватого цвета, какой встречается на листьях ветлы или оливы. Двери из черного дерева, камин, обложенный порфиром различного цвета. Представьте, что все это служит только фоном или подставкой обширной коллекции художественных предметов. Столы, комоды и этажерки покрыты чашами, кубками и китайскими химерами, выточенными из горного хрусталя, нефрита и агата — древними китайскими вазами, редкими по форме или краскам миниатюрами, часами и табакерками всех возможных типов и стилей, флаконами, медальонами и стеклянными сосудами рубинового цвета, обделанными в золото, серебро и бронзу, чеканенную с ювелирной точностью, множеством предметов из кости, дерева, японского лака и т. д. и т. д.». Эти строки были написаны в 1875 году известным писателем, знатоком искусств и коллекционером Дмитрием Васильевичем Григоровичем (1822–1900), который,  обладал также талантом рисовальщика.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Не унаследовав дом прадеда и получив только имя его сына, граф Павел Сергеевич попытался создать нечто достойное невскому дому рода, дать начало новой меценатской ветви Строгановых. Трудно заподозрить его в прямом копировании (лишь салон Гюбера Робера смотрится цитатой), получился новый, соответствующий духу времени, вариант.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Собрание графа Павла Сергеевича были вписаны в исключительные по красоте интерьеры. В настоящее время они подобны потрепанным декорациям долго гастролировавшего театра. Столетием ранее, когда предметы и люди находились на своих местах, все было гармонично, давало наслаждение глазу и пищу для ума. Как все устроилось (и как все можно было бы восстановить при известных условиях), мы можем понять только благодаря заботе владельца о фиксации видов фасадов и самых значительных залов замечательного памятника.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Можно предположить, что феномен здания на Сергиевской стал результатом уникального сотрудничества давным-давно знакомых друг другу просвещенного заказчика-коллекционера, архитектора и писателя. На долю Д.В. Григоровича выпало сочинение некоего «мифа дома». Ведь именно он сообщил читателям «Пчелы», что «по мере того как собрание росло и предметы умножались, приходила мысль об устройстве дома для их помещения, дом устроился в виду расположения в нем купленных вещей… каждой вещи предназначался заранее уютный угол, каждая стена и окно выводились с целью выгодной установки и освещения. И вещи и дом вяжутся, следовательно, в одно неразрывное целое, представляют одну живописную гармоническую картину».

                        </p>
                    </div>
                    {/* ФУТЕР */}
                    <SrcLine>
                        <li><a href='https://www.citywalls.ru/house5894.html'>Дом Строгановых | Техникум морского приборостроения -
                            Университет Информационных технологий, механики и оптики. Гуманитарный</a></li>
                        <li><a href='https://ru.wikipedia.org/wiki/Меншиков,_Александр_Александрович'>Меншиков, Александр Александрович | Википедия</a></li>
                        <li><a href='https://towiki.ru/view/Пётр_Иванович_Стеллих'>Пётр Иванович Стеллих | Товики</a></li>
                        <li><a href='https://ru.wikipedia.org/wiki/Княжнины'>Княжнины | Википедия</a></li>
                        <li><a href='https://ru.wikipedia.org/wiki/Княжнин,_Яков_Борисович'>Княжнин, Яков Борисович | Википедия</a></li>
                    </SrcLine>

                    
                    {/* https://ru.wikipedia.org/wiki/Княжнин,_Яков_Борисович */}
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Сергей Григорьевич Строганов — один из ярчайших российских вельмож</p>
                        <p className="next-h2">Либерал? Ретроград? Почвенник? Западник? Великий гуманист? Безжалостный рубака? Все эти социальные ниши вроде бы подходили ему. Но ведь так не бывает!</p>
                        <a href="/sgs"><button type="button" className="block">Читать</button></a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export {HouseApp};