import styles from './about.module.css'
import Image from 'next/image'
import icon from '../../../../public/icon-z.svg'
import trc from '../../../../public/Trc.jpeg'

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.back}></div>
      <div className={styles.continer}>
        <div className={styles.sec}>
          <Image
            src={trc}
            width={350}
            height={200}
          />
          <h4>نبذة عن زاجل إكسبريس</h4>
          <p>تعرف على زاجل أول شركة خاصة لخدمات البريد في السعودية، وتهدف لربط الشركات بالأسواق العالمية</p>
        </div>
        <div className={styles.sec1}>
          <Image
            src={icon}
          />
          <h3>شحن البضائع لأي مكان في العالم بسرعة وسهولة وأسعار تنافسية</h3>
          <p>خلال فترة قصيرة، تحولت زاجل من شركة شحن صغيرة تنقل البضائع بين موقعين فقط داخل المملكة إلى شركة عالمية رائدة لحلول الشحن والخدمات اللوجستية. ففي عام 1990، تأسست زاجل كأول شركة سعودية خاصة لخدمات البريد. وكانت تدير حينها فرعين فقط داخل المملكة. أما اليوم، فتفخر الشركة بامتلاك أكثر من 100 فرع في 4 قارات على مستوى العالم، بينما توظف أكثر من 1000 شخص وتنقل أكثر من 20000 شحنة يوميًا.</p>
          
        </div>
        <div className={styles.parent}>
          <div>
            <p>365k+</p>
            <h5>   والمتاجر الإلكترونية</h5>
          </div>
          <div>
            <p>720k+</p>
            <h5>عملية توصيل يوميًا</h5>
          </div>
          <div>
            <p>40k+</p>
            <h5>عميل نشط</h5>
          </div>
        </div>
        <div className={styles.sec2}>
          <div>
               <h3>رؤيتنا</h3>
               <p>
تهدف زاجل لتصبح أحد المحركات الأساسية للنظام الاقتصادي بالمملكة، ولمساعدة المواطنين السعوديين على تحسين الدخل من خلال توفير خدمات شحن عالية الجودة من وإلى المملكة تتيح لهم تنمية مشروعاتهم الخاصة.
</p>
          </div>
          <div>
            <h3>رسالتنا</h3>
            <p>تطمح زاجل لتحقيق الريادة في قطاع الخدمات اللوجستية على المستوى المحلي والإقليمي والعالمي من خلال مساعدة الشركات الناشئة والشركات الصغيرة والمتوسطة على إدارة عملياتها التجارية بشكل أكثر سهولة وكفاءة، وذلك عن طريق تطبيق أحدث الحلول التكنولوجية والممارسات العالمية في المجال والتركيز على رضا العملاء.
</p>

          </div>
          <div className={styles.endbac}>
            <Image
              src={icon}
              width={25}
            />
            <h3>ابرز المحطات في تاريخ الشركة</h3>
            <p>

منذ تأسيسها في عام 1999، نجحت زاجل في تحقيق نجاح هائل بفضل الادارة الاحترافية، والاستثمارات المكثفة، وعمليات الاستحواذ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About