import styles from "./helpers/styleTailwind.js";
import {AboutMe, Experience, Footer, Hero, NavBar, Projects, Services, Values} from "./components/";

function App() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={` ${styles.boxWidth}`}>
                    <NavBar/>
                </div>
            </div>

            {/*Hero Section*/}
            <section className={`bg-primary ${styles.flexStart}`}>
                <div className={` ${styles.boxWidth}`}>
                    <Hero/>
                </div>
            </section>

            {/* Contents section*/}
            <section className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={` ${styles.boxWidth}`}>
                    <Values/>
                    <Services/>
                    <AboutMe/>
                    <Experience/>
                    <Projects/>
                    <Footer/>
                </div>
            </section>

        </div>
    )
}

export default App
