/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
			<section
				className="bg-tertiary p-5 rounded-2xl sm:w-full md:w-[346px] min-h-[482px]"
				// options={{ max: 45, scale: 1, speed: 450 }}
			>
				<div className="relative w-full h-[240px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl object-center"
					/>
					<div className="absolute inset-0 flex flex-col justify-start items-end mt-3 mr-3 card-img_hover gap-1">
						<a
							href={source_code_link}
							target="_blank"
							rel="noopener noreferrer"
							className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
						>
							<AiOutlineGithub size={24} />
						</a>
						<a
							href={live_link}
							target="_blank"
							rel="noopener noreferrer"
							className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
						>
							<AiOutlineLink size={24} />
						</a>
					</div>
				</div>

				<div className="mt-4">
					<a
						href={live_link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white font-bold text-[22px] underline"
					>
						{name}
					</a>
					<p className="text-secondary text-[14px] mt-2">
						{description}
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							{tag.name}
						</p>
					))}
				</div>
			</section>
		</motion.div>
	);
};

export default ProjectCard;
