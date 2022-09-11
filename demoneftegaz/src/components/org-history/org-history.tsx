import { Container, Typography, Grid } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import history1 from "../../img/history1.png"
import history2 from "../../img/history2.jpg"
import history3 from "../../img/history3.jpg"
import history4 from "../../img/history4.jpg"
import history5 from "../../img/history5.jpg"
import history6 from "../../img/history6.jpg"
import history7 from "../../img/history7.jpg"
import history8 from "../../img/history8.jpg"

const OrgHistory: React.FC = () => {
  return (
    <Container sx={{ mt: "2rem", mb: "2rem" }}>
      <Typography align="center" variant="h5" sx={{m: 4}}>
        История АО "Демонефтегаз"
      </Typography>

        <Grid container justifyContent="center" columnSpacing={4} gridTemplateColumns="2, 1fr">
            <Grid item>
            <img src={history1} width="200" alt="demoneftegaz"></img>
            </Grid>
            <Grid item width="50%">
                <Typography variant="body1">
                АО «Демонефтегаз» — одно из ключевых добывающих предприятий в Поволжье. Ведет разработку Демоволжского месторождения. Учреждено в марте 1997 года в результате реорганизации АО «Тестнефтегаз».                
                </Typography>
                <Typography variant="body1" sx={{mt: 2}}>                
                Демоволжское месторождение  расположено в Демоволжском районе Самарской области в 15-60 км севернее и северо-восточнее г. Самара. Является одним из крупнейших нефтяных месторождений в России и мире.                
                </Typography>
                <Typography variant="body1" sx={{mt: 2}}>                                
                Основными видами деятельности АО «Демонефтегаз», владеющим 11-ю лицензионными участками,  являются разведка и разработка нефтяных и газовых месторождений, бурение параметрических, поисковых, разведочных, эксплуатационных скважин, добыча, подготовка, переработка, транспортировка и реализация углеводородного сырья, обустройство нефтяных и газовых месторождений.                
                </Typography>
                <Typography variant="body1" sx={{mt: 2}}>                
                Площадь лицензионного участка, разработку которого ведет «Демонефтегаз», — 2112,3 кв. м. На месторождении 8120 эксплуатационный добывающий  и 3 240 эксплуатационный нагнетательный фонд скважин, оснащенных новейшим высокотехнологичным оборудованием. Протяженность нефтепроводов — 4 212 км. Разветвленная сеть автомобильных дорог с твердым покрытием общей протяженностью 1211 км проложена по всему месторождению.                
                </Typography>
                <Typography variant="body1" sx={{mt: 2}}>                
                Демоволжское месторождение открыто в 1967 году, введено в промышленную разработку в 1971 году. Промышленная нефтегазоносность выявлена в 17 продуктивных пластах, приуроченных к юрской и меловой системам, залегающих на глубинах от 1500 до 2400 метров. Начальный дебит скважин 52-990 т/сут.                
                </Typography>
                <Typography variant="body1" sx={{mt: 2}}>                
                В 1983 году на месторождении была добыта миллиардная тонна нефти. В 1988 г. была добыта 2-х миллиардная тонна нефти. Пик добычи нефти (около 140 млн тонн. в год) пришёлся на начало 90-х годов XX века; вследствие интенсивной добычи в эти годы нефтеносные пласты стали обводняться и добыча нефти резко снизилась. В 1997 году было добыто 24,12 млн тонн нефти. В XXI веке в связи с применением современных способов интенсификации нефтедобычи выработка нефти увеличилась вдвое. Всего за годы эксплуатации месторождения на нём было пробурено более 17952 скважин, добыто более 2,3 млрд тонн нефти, отбор от НИЗ составляет более 73%, кратность запасов по отношению к текущей добыче составляет 49 лет.                
                </Typography>
                <Typography variant="body1" sx={{mt: 2}}>                                
                Общество сертифицировано по четырем международным стандартам: ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2004, ISO 50001:2011.
                </Typography>
            </Grid>
        </Grid>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">            
                <Typography variant="h6" sx={{mb: 1}}>
                1965-2019 годы
                </Typography>          
                <img src={history2} width="300" alt="demoneftegaz"></img>            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          В начале 2019 года Демоволжское месторождение стало площадкой для опытно-промышленных испытаний (ОПИ) полимерного проппанта, разработанного учёными Корпоративного исследовательского центра (входит в корпоративный научно-проектный комплекс). Инновационный материал предназначен для повышения эффективности отдачи скважин при применении технологии гидроразрыва пласта (ГРП). 
          В 2018 году началось тиражирование проекта по бурению сложных скважин с большим отходом от вертикали с общим забоем более 5 километров. Новые технологии открыли доступ к неосвоенным нефтяным запасам в краевых зонах месторождения.  В 2018 году в краевых зонах месторождения пробурено 50 скважин.
          В 2018 году впервые в истории АО «Демонефтегаза»  достигнут рекордный  показатель по объёмам проходки. По итогам года он составил 1 млн 144 тысяч метров.
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" sx={{mb: 1}}>
                2012-2017 годы
                </Typography>          
                <img src={history3} width="300" alt="demoneftegaz"></img>
          
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          В 2017 году Государственная Дума приняла закон о поправках в Налоговый кодекс, согласно которому для Демоволжского месторождения вводятся инвестиционные стимулы в форме ежегодного снижения НДПИ с сроком на 10 лет. Введенные стимулы разработки Демоволжского месторождения позволили придать новый импульс развитию одного из крупнейших нефтяных месторождений страны. 
          В 2017 году  АО «Демонефтегаз» приступило к опытно-промышленной эксплуатации  полигона по переработке отходов бурения методом закачки в пласт. Производительная мощность комплекса -  более 120 000 м3 бурового шлама в год. 
          В 2016 году АО «Демонефтегаз» установило отраслевой рекорд - выполнено  бурение скважины с проведением 18-стадийного гидравлического разрыва пласта. Позднее положительные результаты операции позволили выйти на новую высоту – пробурили скважину с проведением  27-стадий гидравлического разрыва пласта. 
          2015 год. Общество сертифицировано по четырем международным стандартам: ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2004, ISO 50001:2011.                     
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" sx={{mb: 1}}>
                2005-2011 годы
                </Typography>          
                <img src={history4} width="300" alt="demoneftegaz"></img>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          С 2006 года ОАО "Демонефтегаз" имеет сертификат соответствия работ по охране труда (ССОТ), а в 2012 году проведена сертификация на соответствие требованиям международных стандартов OHSAS 18001:2007, ISO 14001:2004, ISO 9001:2008. 
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" sx={{mb: 1}}>
                1996-1999 годы
                </Typography>          
                <img src={history5} width="300" alt="demoneftegaz"></img>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          В 1998 году на Демоволжском месторождении было добыто 19,53 млн. тонн нефти. В XXI веке в связи с применением современных способов интенсификации нефтедобычи выработка нефти увеличилась вдвое. АО «Демонефтегаз» учреждено в марте 1998 года в результате реорганизации АО «Тестнефтегаз».
          </TimelineContent>
        </TimelineItem>      
      
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" sx={{mb: 1}}>
                1996-1999 годы
                </Typography>          
                <img src={history6} width="300" alt="demoneftegaz"></img>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          В 1998 году на Демоволжском месторождении было добыто 19,53 млн. тонн нефти. В XXI веке в связи с применением современных способов интенсификации нефтедобычи выработка нефти увеличилась вдвое. АО «Демонефтегаз» учреждено в марте 1998 года в результате реорганизации АО «Тестнефтегаз».
          Всего за годы эксплуатации месторождения на нём было пробурено более 18965 скважин, добыто более 2,323 млрд. тонн нефти.
          </TimelineContent>
        </TimelineItem>  

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" sx={{mb: 1}}>
                1983 год
                </Typography>          
                <img src={history7} width="300" alt="demoneftegaz"></img>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          В 1983 году на месторождении была добыта миллиардная тонна нефти. Пик добычи нефти (около 140 млн. тонн. в год) пришёлся на начало 90-х годов XX века; вследствие интенсивной добычи в эти годы нефтеносные пласты стали обводняться и добыча нефти резко снизилась.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6" sx={{mb: 1}}>
                1965-1969 годы
                </Typography>          
                <img src={history8} width="300" alt="demoneftegaz"></img>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>          
          Демоволжское месторождение открыто в 1967 году, введено в промышленную разработку в 1971 году. Промышленная нефтегазоносность выявлена в 17 продуктивных пластах, приуроченных к юрской и меловой системам, залегающих на глубинах от 1500 до 2400 метров. Начальный дебит скважин 52-990 т/сут.                          
          </TimelineContent>
        </TimelineItem>


      </Timeline>

    </Container>
    )
}
  
export default OrgHistory