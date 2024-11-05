import { Link } from "react-router-dom";
import { styles } from "../styles";

const Hero = () => {

  return (
		<section className="w-full mx-auto">
			<div
				className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-60 h-30 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I&#39;m <span className="text-[#915eff]">Hyonam</span>
					</h1>
					<p className="mb-5">
						I develop user centric web apps, <br className="sm:block hidden" />{" "}
						and web sites
					</p>
					<Link
						to="https://drive.google.com/file/d/1UI8xjD2QgTP61V7LDBFWvZHYzVZnmgoc/view?usp=sharing"
						target="_blank"
						className="bg-[#1d1836] py-2 px-6 mt-1 mx-auto w-3/5
              text-white font-bold rounded-lg text-center"
					>
						Download resume
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
