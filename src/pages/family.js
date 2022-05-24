import '../styles/family.css';
import '../styles/scroll.css';
import '../styles/allObjects.css'
import '../fonts.css';
import { Anchor } from 'antd';
import '../styles/anchor.css';
import telephone from '../assets/tp.png'
import gps from '../assets/gps.png'
import email from '../assets/email.png'
import vk from '../assets/posts/vk.png';
import gmail from '../assets/posts/gmail.png';
import tg from '../assets/posts/tg.png'
import yt from '../assets/posts/yt.png'
import sitmo from '../assets/logo-full.png';
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';

import kochubej from '../assets/img-pages/kochubej.jpg'
import sgd_father from '../assets/img-pages/SGD.jpg'
import ssg_son from '../assets/img-pages/SSG.jpg'
import granovski from '../assets/img-pages/granovskii.jpg'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Footer } from './components/footer'
import { FooterWidget } from './components/footerwidget';


const { Link } = Anchor;
function FamilyApp() {
    document.title = 'Род Строгановых';
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
                        <img src={picture2} alt="#" className="nextsvg" onClick={() => history(-1)}/>
                        <a className='backButton-my' onClick={() => history(-1)}>Назад</a>
                    </div>
                    {/* <button onClick={() => history(-1)}></button>  */}
                    <div className="titles">
                        <h1 className="title_main">Род Строгановых</h1>
                        <h3 className="title_help">Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и государственные деятели XVI—XX веков.</h3>
                        <div className="line"></div>
                        <FooterWidget>
                            <li className='footer-data'>📅 04.04.2022</li>
                            <li className='footer-write'>🖋 Университет ИТМО</li>
                            <li className='footer-write'>📄 Статья</li>
                            <li className='footer-write'>🕓  7 минут</li>
                        </FooterWidget>
                    </div>
                </div>
                
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="Служение России: Строгановы" /> 
                                <Link href="#ssg" title="Александр Григорьевич Строганов">
                                    <Link href="#part2" title="Государственный деятель и меценат" />
                                    <Link href="#war" title="Служебная карьера" />
                                    <Link href="#hislife" title="Личная жизнь" />
                                    <Link href="#nextson" title="Наследники Строганова" />
                                </Link>
                            
                        </Anchor>
                    </section>

                    
            </div>
            
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part1">                     
                        Служение России. Великие предприниматели и меценаты прошлого: Строгановы
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>История знаменитого рода Строгановых тесно связана с судьбами России на протяжении длительного, многовекового периода. Изменения, которые претерпевало их предпринимательское дело, формы и методы накопления капитала и хозяйствования во многом были характерны для всего Московского государства, а позднее и обширной Российской империи.
                    </p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={sgd_father} className="strog-img"></img>
                        <p className='podimg'>Портрет Григория Дмитриевича Строганова, не позднее 1715 г.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Строгановы во многих отношениях исключительная, единственная в своем роде династия. Еще в допетровскую эпоху, благодаря своему неслыханному богатству, не будучи боярской по своему происхождению, она занимала почетное место среди самых влиятельных семей, приближенных к трону. По своему положению владетелей громадных вотчин, военных форпостов на самой окраине Русского государства, Строгановы сравнимы с самыми могущественными феодалами средневековой Европы.
Даже среди дворянских родов династия Строгановых значительно выделялась своими заслугами, которые многократно отмечались в жалованных грамотах и «милостивых рескриптах».
</p>
                    </div>
                    <div className="textarea-normal">
                        <p>У Григория Дмитриевича Строганова от двух браков родилось пять сыновей. Второй по старшинству сын, <a href="#ssg" className='hyperurl'>Александр</a> (1795–1891), – граф, генерал-адъютант, член Государственного совета, пользовался немалой известностью. Воспитание он получил в корпусе инженеров путей сообщения, по окончании курса которого поступил в лейб-гвардии артиллерийскую бригаду. А. Г. Строганов находился в рядах войск, преследовавших отступавшего из России Наполеона, участвовал в сражениях под Дрезденом, Кульмом, Лейпцигом. В 1831 году Строганов участвовал в подавлении польского восстания, в 1834 году был назначен товарищем министра внутренних дел, каковым пробыл до 1836 года, когда получил пост генерал-губернатора черниговского, полтавского и харьковского. В 1839–1841 годах он вновь в Министерстве внутренних дел, теперь уже в качестве управляющего министерством. С 1849 года А. Г. Строганов являлся членом Государственного совета. Пробыв год (1854) военным губернатором Петербурга, он около девяти лет состоял новороссийским и бессарабским генерал-губернатором. Таков внушительный послужной список этого государственного деятеля.</p>
                    </div>
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id='ssg'>                     
                        Александр Григорьевич Строганов
                        </h>
                    </div>
                    <div className="textarea-normal" id='ssg'>
                        <p>Александр Григорьевич Строганов, как и многие другие Строгановы, начиная со второй половины 1850-х годов, принимал активное участие в крупных коммерческих предприятиях. Длительное время он являлся председателем образованного в 1856 году Главного общества российских железных дорог – первого акционерного железнодорожного общества в России, на которое была возложена грандиозная задача постройки трех тысяч верст железнодорожного полотна, по существу, создания сети железных дорог в стране.</p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={ssg_son} className="strog-img"></img>
                        <p className='podimg'>Портрет Александр Григорьевича Строганова</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Известен он был и как меценат. В бытность свою в Одессе Строганов состоял президентом тамошнего «Общества истории и древностей российских», сделал много ценных пожертвований в его музей. В 1857 году он представил государю свой проект преобразования Ришельевского лицея в Новороссийский университет с юридическим и агрономическим факультетами, но по финансовым соображениям осуществление проекта было тогда отложено. После отставки от должности новороссийского генерал-губернатора Строганов был избран почетным гражданином Одессы, в которой провел последние годы жизни. Скончался он в возрасте 96 лет. Его громадная библиотека, согласно завещанию, досталась Томскому университету.</p>
                    </div>
        
                    {/* НОВЫЙ ТАЙТЛ */}

                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part2">
                            Государственный деятель и меценат
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Наибольшей известностью из нового поколения Строгановых пользовался старший сын «строптивого» дипломата <a href="/sgs" className='hyperurl'>Сергей Григорьевич</a> (1794–1882) – выдающийся государственный деятель и меценат, с именем которого связан новый этап в истории старинной русской династии, ее возрождение и продолжение. Когда грянула Отечественная война 1812 года, Сергей Григорьевич заканчивал курс в Институте инженеров путей сообщения, куда поступил в 15 лет. Зачисленный на военную службу, он участвовал в войне с Наполеоном, отличился в Бородинском сражении. С. Г. Строганов прошел всю войну, находился в рядах русских войск, триумфально вступивших в 1814 году в Париж.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>После возвращения войск в Россию С. Г. Строганов с января 1816 года служит штаб-ротмистром в лейб-гвардии гусарском полку, расквартированном в Царском Селе, где в то же время заканчивал учебу молодой лицеист Александр Пушкин. В лицейские годы Пушкин был влюблен в Наталью Кочубей, жившую с родителями в летние месяцы на царскосельской даче. Среди знакомых юной красавицы, несомненно, был и молодой гвардейский ротмистр. В сентябре 1820 года она стала женой барона Александра Григорьевича Строганова, родного брата Сергея Григорьевича.</p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={kochubej} className="strog-img"></img>
                        <p className='podimg'>Портрет Н. В. Кочубей. 1813 г.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Продолжая военную службу С. Г. Строганов (с сентября 1828 года – генерал-майор) участвует в русско-турецкой войне 1828–1829 годов. В это же время он привлекается к работе различных государственных комитетов. Еще в чине полковника граф стал членом Комитета устройства учебных заведений (1826–1835). Первым опытом работы комитета стал новый устав гимназий, изданный 8 декабря 1828 года. Строганов принимал участие и в подготовке нового университетского устава, вступившего в силу в 1835 году.</p>
                    </div>
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="war">                     
                        Служебная карьера
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Служебная карьера С. Г. Строганова складывалась удачно. В 1831 году, будучи губернатором в Риге, граф заслужил доверие жителей благоразумными мерами во время холеры. В 1832–1834 годах Строганов – военный губернатор в Минской губернии, где также оставил по себе добрую память. Он имел звания генерала от кавалерии, генерал-адъютанта, участвовал в Крымской войне 1853–1856 годов, был сенатором, кавалером ордена Св. Александра Невского.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Сергей Григорьевич не забывал о своих научных и художественных увлечениях. Он – основатель и председатель (пожизненно) Императорской Археологической комиссии, располагавшейся в его петербургском дворце в течение 23 лет. Строганов состоял членом высочайше утвержденной комиссии для построения храма Христа Спасителя в Москве.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Москве он отдал лучшие годы. Высочайшим указом от 1 июля 1835 года Строганов был назначен попечителем Московского учебного округа и Московского университета. Его 12-летнее управление связано с блестящей эпохой процветания различных учебных заведений Москвы, и прежде всего Московского университета. Это было «самое счастливое время для университета по отсутствию всяких стеснений и формализма». «При нем, – вспоминал о Строганове профессор Б. Н. Чичерин, – университет весь обновился свежими силами. Все старое, запоздалое, рутинное устранялось. Главное внимание просвещенного попечителя было устремлено на то, чтобы кафедры были замещены людьми со знанием и талантом. Он отыскивал их всюду…» В эти годы С. Г. Строганов оказал поддержку плеяде молодых профессоров университета во главе с Т. Н. Грановским. Он многое сделал и для нужд студентов, для улучшения положения гимназий, расширил возможности образования для мещан и ремесленников.</p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={granovski} className="strog-img"></img>
                        <p className='podimg'>Портрет Т.Н.Грановского. 1903 г.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Являясь известным государственным и общественным деятелем, граф Сергей Григорьевич Строганов был вместе с тем крупным меценатом и коллекционером, продолжая давние традиции Строгановых в этой области. В 1847 году конфликт Строганова с министром народного просвещения графом С. С. Уваровым побудил его подать в отставку с поста попечителя Московского учебного округа. Оставив временно государственную службу, он занялся коллекционированием предметов археологии, нумизматики и пополнением своей картинной галереи. Надо сказать, что у Сергея Григорьевича была своя эстетическая программа, во многом отличавшаяся от художественных привязанностей Строгановых Екатерининской эпохи. Он почитал древнее русское искусство, отрицательно относился к тому новому, что появилось в России с эпохой Петра Великого. Также отрицательно граф относился и к самому Петербургу, его архитектуре и потому, видимо, предпочитал жить в Москве. В доме на Мясницкой он разместил коллекцию икон строгановской школы XVI–XVII веков, о которой мечтал после первого знакомства с иконами старого письма, вывезенными из фамильных усадеб Сольвычегодской земли. Равнодушен Сергей Григорьевич был и к строительству, делая исключение лишь для возведения храмов.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Как бессменный (в течение почти 30 лет) председатель «Общества истории и древностей российских», Строганов много сделал для издания трудов общества. Ему удалось добиться постоянной государственной субсидии для этих целей. По высочайшему поручению он руководил многотомным изданием «Древностей Российского государства», выходившим в свет в 1837–1874 годах под его непосредственным наблюдением и часто на его средства. Граф сам писал статьи по археологии. С его именем связаны археологические раскопки в Крыму и на юге России, создание скифской коллекции Эрмитажа. Он составил и издал в 1849 году книгу «Дмитриевский собор во Владимире на Клязьме, строенный с 1194 по 1197 год». Сам храм реставрировался также на его средства. Им написаны книги: «Русское искусство и Е. Виолле-де-Дюк» и «Архитектура в России от X до XVIII столетия» (1878). Строганов – автор статьи «О серебряных вещах, найденных во Владимире и Ярославской губернии в 1837 году». Как вспоминает Б. Н. Чичерин, «уже восьмидесятилетним стариком он вдруг с любовью занялся собиранием мексиканских древностей».</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Собирал С. Г. Строганов и старинные монеты. Вместе с коллекционером А. Д. Чертковым он значительно поднял научный интерес к русской нумизматике. Собрание графа (свыше 44 тыс. монет) по своей ценности считалось третьим в мире. Интересовался он, хотя и не в той мере, как Строгановы XVIII столетия, голландской и итальянской живописью. Сергей Григорьевич, продолжая старую семейную традицию, имел и домашнего художника, А. Колюччи.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Большую роль Строганов сыграл и в деле поддержки русской национальной школы живописи. Вместе с секретарем Общества поощрения художников писателем Д. В. Григоровичем он всячески помогал начинающим талантливым художникам. Многие из знаменитых художников «обязаны ему как своим воспитанием, так равно и первыми шагами на поприще самостоятельной деятельности».</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Меценату обязана своим появлением и знаменитая «Строгановка», существующая и поныне. В 1825 году он основал на свои средства в Москве на Мясницкой «бесплатную рисовальную школу, приспособленную к искусствам и ремеслам», которую содержал на своем иждивении почти 20 лет. В ней могли учиться и крепостные. В 1860 году школу преобразовали вначале в Строгановское училище технического рисования, а затем – в Императорское Строгановское художественно-промышленное училище. Семья Строгановых продолжала финансировать его до 1917 года.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Сергей Григорьевич, как крупный промышленник, владелец замосковных и уральских горных заводов, занимал одно время должность председателя Московского отделения Мануфактурного совета, способствуя на этом посту развитию промышленности московского заводского района. А. И. Герцен в своем «Дневнике» неоднократно отмечал «личное благородство» С. Г. Строганова. «Я уважаю и люблю его, – писал он. – Доселе из всех аристократов, известных мне, я в нем одном встретил много человеческого». Однако не стоит чрезмерно идеализировать личность графа С. Г. Строганова. По своим взглядам, сформировавшимся в Николаевскую эпоху, это был весьма консервативный деятель, убежденный сторонник самодержавия. В 1848 году под влиянием революционных событий в Европе он подал Николаю I записку с предложением чрезвычайных мер по усилению цензуры и вошел в состав секретного комитета Д. П. Бутурлина, созданного для рассмотрения этого вопроса. Строганов выступал против крестьянской реформы и особенно противился, как крупный землевладелец, освобождению крестьян с землей. Во время знаменитого обсуждения в Государственном совете законопроекта об освобождении крестьян, происходившего в присутствии императора Александра II в начале 1861 года, С. Г. Строганов был одним из самых резких критиков законопроекта, выступая против «нарушения прав собственности дворянства». И впоследствии, уже при Александре III, в начале 1880-х годов, С. Ю. Витте называл его главой консервативной партии в «петербургских сферах».</p>
                    </div>
                    <div className="textarea-normal">
                        <p>В его противоречивой натуре легко уживались любовь к культуре и великодушие с самодурством николаевского крепостника. Современник вспоминал о нем: «Если кто ему не нравился или если что-нибудь не по нем, он обрывал с резкостью старого вельможи, иногда даже совершенно незаслуженно и некстати, ибо он в чужие обстоятельства никогда не входил и вообще мало что делал для людей, имея всегда в виду только пользу дела. Вследствие этого многие, имевшие с ним сношения, его не любили. В особенности не жаловали его славянофилы, которых он со своей стороны весьма недолюбливал, видя в них только праздных болтунов. Погодин и Шевырев жаловались иногда на притеснения».</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Служебная карьера С. Г. Строганова тем временем развивалась по нарастающей линии. 8 сентября 1859 года граф по высочайшему повелению назначается «Попечителем Государя Наследника Цесаревича Николая Александровича». В 1860-е годы он – главный воспитатель великих князей, с 1859 года – член Государственного совета, в 1859–1860 годах – московский генерал-губернатор, в 1863–1865 годах – председатель Комитета железных дорог. С. Г. Строганов имел звание генерал-адъютанта. Генерал-адъютантский мундир у него был с вензелем Александра I, в память о том, что Строганов сопровождал тело императора из Таганрога.</p>
                    </div>
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="hislife">                     
                        Личная жизнь
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Личная жизнь С. Г. Строганова была также счастливой. От брака со старшей дочерью Павла Александровича Строганова, Натальей, он имел четырех сыновей – Александра, Павла, Григория и Николая и двух дочерей – Софью и Елизавету. Наталья Павловна, обремененная большой семьей и хозяйством, давно забросила увлечения юности – рисование и гравирование, хотя когда-то подавала большие надежды.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>После женитьбы к Сергею Григорьевичу впоследствии перешел и майорат семьи Строгановых. В 1845 году жена его исходатайствовала у Николая I право перехода майората, находившегося после смерти матери в ее собственности, в пожизненное владение мужа. Указ об этом от 3 апреля 1847 года присоединял к майорату имения, доставшиеся ей от отца и брата Александра с 13 тыс. душ.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>В этот период Сергей Григорьевич неоднократно приезжал в пермские имения для проверки состояния дел и решения вопросов управления огромным хозяйством. В 1846 году он пробыл там весну и лето, «обозревая все части управления». С 25 июля по 2 октября 1850 года граф подробно осматривал Очерский, Добрянский, Билимбаевский заводы, побывал в Инвенских селениях, в Ильинском, в Перми, в Усолье, после чего отправился в Москву. Во время этой поездки Строганов не только принимал меры в связи с различными нарушениями, но и оказывал милости с целью поощрения подчиненных ему людей. Так, крестьянам и мастеровым были прощены недоимки и долги на сумму более 280 тыс. рублей серебром, служители получили прибавки к жалованью и в качестве подарка до 20 серебряных часов. На разного рода поощрения было истрачено более миллиона рублей. Такого рода отеческий патронаж и благотворительность были характерны для управления Строгановых в крепостное время. Они делали налоговые послабления для крестьян, открывали школы и училища, строили церкви.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>В первые пореформенные десятилетия С. Г. Строганов значительно укрепил майорат. После освобождения крестьян в нераздельном имении насчитывалось вместе с собственной частью Сергея Григорьевича 94 тыс. душ. После наделения крестьян землей у Строгановых осталось 1,3 млн десятин. Выкупных денег им полагалось 7,57 млн рублей. Из них Сергей Григорьевич уступил крестьянам 2,3 млн рублей. Тем не менее даже за вычетом этой суммы в распоряжении Строганова оставался внушительный капитал.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Вынужденный отдать часть земли крестьянам, С. Г. Строганов, используя возможности майората, обеспечил закрепление за ним оставшейся части земель и крупной суммы денег. В балансе хозяйства появилась статья «неприкосновенный капитал». Он был образован из выкупных сумм, обращен в облигации и хранился в качестве нераздельного капитала пермского имения (3 736 000 рублей серебром) в Государственном банке. Неприкосновенный капитал придавал определенную прочность хозяйству и мог быть использован в критический момент для проведения любой крупной операции, связанной с его развитием.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Разумно управляя громадными вотчинами, С. Г. Строганов сумел погасить все долги, оставшиеся от прошлых владельцев, и завещал своему наследнику, внуку графу Сергею Александровичу, имение в прекрасном состоянии. Скончался Сергей Григорьевич в пасхальную ночь в Петербурге 28 марта 1882 года и похоронен, как и другие Строгановы, в Александро-Невской лавре.</p>
                    </div>
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="nextson">                     
                        Наследники Строганова
                        </h>
                    </div>
                    <div className="textarea-normal" id="nextson">
                        <p>Наследником С. Г. Строганова по владению майоратом должен был стать его старший сын – граф Александр Сергеевич. Он родился 7 декабря 1818 года, учился в Дрездене, закончил курс Московского университета. Был назначен флигель-адъютантом императора Николая I, служил также егермейстером двора. А. С. Строганов был женат на дочери обер-егермейстера двора князя В. Васильчикова. Граф много путешествовал, а затем поступил на военную службу. Был полковником лейб-гвардии Преображенского полка и первым командиром вновь учрежденного 1-го гвардейского стрелкового батальона. Александр Строганов участвовал в венгерском походе российской армии 1848 года, а затем в Крымской войне 1853–1856 годов. С воцарением Александра II он уволился со службы и посвятил себя воспитанию детей – сына Сергея и четырех дочерей и коллекционированию медалей и монет. Граф, в отличие от других Строгановых, не интересовался живописью, предпочтя ей нумизматику, и собирал преимущественно римские монеты. Он являлся одним из основателей в 1846 году Петербургского археологического общества истории и древностей российских и действительным членом Одесского исторического общества. Был известен в ученом мире также как собиратель средневековых и новоевропейских монет и часто ездил за границу, где пополнял свою коллекцию. Александр Сергеевич предпочитал жить в доставшемся от жены имении Волышово, расположенном в 40 км от города Порхова Псковской губернии. Умер он в 1864 году, так и не вступив в права наследства, перешедшие к его сыну.</p>
                    </div>
                    <div className="textarea-normal" id="mainson">
                        <p>Второй сын С. Г. Строганова, <a href="/deals/#familyToDeals" className='hyperurl'>Павел Сергеевич</a> (1823–1912), окончил юридический факультет Московского университета, после чего поступил в Министерство иностранных дел и был послан в Рим третьим секретарем посольства. С 1847 по 1862 год он находился в вечном городе, где увлекся коллекционированием картин, для приобретения которых часто посещал Париж и Голландию. Получив в наследство от деда дом в Петербурге, расположенный недалеко от Летнего сада, на Сергиевской улице, П. С. Строганов в 1857 году начал его перестройку по проекту архитектора Ипполита Монигетти, «повторив жизненный путь своего предка, президента Академии художеств». Продолжая традицию екатерининского мецената, превратившего свой дворец в музей, Павел Сергеевич придал внешнему виду своего дома-дворца «подобие Академии художеств». В Петербурге появился еще один строгановский дворец, соперничавший красотой залов со старым дворцом на Невском проспекте. Великолепные внутренние интерьеры дворца «были немыслимы без наполняющих их произведений искусства самого высокого достоинства». Меценат перевез в Россию из Рима 83 картины крупнейших европейских мастеров, в основном XVII столетия. Эти художественные полотна и составили основу коллекции нового дворца, насчитывавшую до 100 картин лучших мастеров итальянской, испанской, фламандской и голландской школ. Позднее они были перенесены в старый строгановский дворец на Невском проспекте (у Павла Сергеевича не было детей). Восемь из них (Ф. Липпи, Корреджо и др.) по его завещанию поступили в Эрмитаж. Во дворце на Сергиевской улице находилось большое количество старинной мебели, скульптур, изделий из китайского фарфора. Как считают исследователи, «атмосфера поклонения Версалю», царившая в этом строгановском дворце, «подготовила почву» для создания художественного объединения «Мир искусства» на рубеже XIX и XX веков.</p>
                    </div>
                    <div className="textarea-normal" id="thirdson">
                        <p>Третий сын Сергея Григорьевича Строганова, Григорий (1829–1912), уже не жил в России, постоянно пребывая за границей. Он в еще большей степени развил усиленно проводившуюся в жизнь его братом Павлом идею «приобретения западноевропейских картин в качестве элемента светской жизни». Его собрание, насчитывавшее не менее 150 картин, было самым крупным и последним собранием семьи Строгановых. Картины находились в его палаццо в Риме. Он так же, как и Павел, не имел детей. По его завещанию в Эрмитаж были переданы картины Фра Анжелико, С. Мартини и др.</p>
                    </div>


                    {/* ФУТЕР */}
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Современная жизнь дома Строгановых</p>
                        <p className="next-h2">Дом Строгановых в наше время. Центр социальных и гуманитарных наук (ЦСигн)</p>
                        <a href="/futurehouse"><button type="button" className="block">Читать</button></a>
                    </div>

                </div>
            </div>
            <div className="container-fluid3">
                {/* <div className="footer-pooper">
                    <ul className='footer-ul'>
                        <li className='footer-li'>
                            <img src={sitmo} width="200px" alt="" className="logo_img_footer" />
                            <p className="excep">Нашли ошибку в тексте? Выделите ее и нажмите Ctrl + Enter</p>
                            <div className="line-footer"></div>
                            <p className="rules">© 2022 ITMO Unversity</p>
                            <div className='footer-pravo'>Информация о политике конфиденциальной информации.. 
        № ФС00‑00000 выдано Роскомнадзором 0 никогда 0000 г.</div>
                        </li>
                        <li className='footer-li' style={{marginLeft: 400}}>
                            <img src={sitmo} width="200px" alt="" className="logo_img_footer" />
                        </li>
                    </ul>
                </div> */}
            {/* <div className="footer-pooper">
                <footer class="footer-distributed">
                    <div class="footer-left">
                        <img src={sitmo} width="200px" alt="" className="logo_img_footer" style={{marginTop: -70, marginLeft: 40}}/>
                        <p class="footer-links" style={{marginTop: -20}}>
                            <a href="/" class="link-1" style={{marginLeft: 20}}>Главная</a>
                            <a href="/" style={{marginLeft: 20}}>Обратная связь</a>
                            <a href="/" style={{marginLeft: 20}}>Контакты</a>
                            
                        </p>
                        
                        
                    </div>
                    
                    <div class="footer-center">
                        <div>
                        <i><img src={gps} width="22px" className='footer-i'/></i> 
                            <p><span>Кронверский проспект, д. 49</span>г. Санкт-Петербург, Российская Федерация</p>
                        </div>
                        <div>
                        <i><img src={telephone} width="20px" className='footer-i'/></i> 
                            <p>+7 (812) 480-04-80</p>
                        </div>
                        <div>
                        <i><img src={email} width="20px" className='footer-i'/></i> 
                            <p><a href="#">abit@itmo.ru</a></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                            <span>О сайте</span>
                            Сайт представляет собой набор исторических и информационных фактов для ознакомления.
                        </p>
                        <div class="footer-icons">
                            <a href="#"><img src={vk} width="40px"/></a>
                            <a href="#"><img src={gmail} width="40px" style={{marginLeft: 20}}/></a>
                            <a href="#"><img src={tg} width="40px" style={{marginLeft: 20}}/></a>
                            <a href="#"><img src={yt} width="40px" style={{marginLeft: 20}}/></a>
                        </div>
                    </div>
                    <div className="line-footer"></div>
                    <p class="footer-company-name" style={{marginTop: 20}}>Университет ИТМО ©</p>
                    
                </footer>
            </div> */}
            <Footer />
        </div> 

    </div> //App
    );

    
}

export {FamilyApp};