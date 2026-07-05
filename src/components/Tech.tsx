import { BallCanvas } from "./canvas";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { technologies } from "../constants/mocked-data";
import { styles } from "../styles";


const Tech = () => {
  return (
    <section>
      <p className={styles.sectionSubText}>What i know...</p>
      <h2 className={styles.sectionHeadText}>Stack.</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28 flex flex-col items-center justify-evenly">
            <BallCanvas icon={technology.icon}/>
            <small>{technology.name}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

export {Tech}
export default LayoutWrapper(Tech, '');
// export default <LayoutWrapper idName=''><Tech /></LayoutWrapper>