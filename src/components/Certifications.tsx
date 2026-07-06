import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { certifications } from "../constants/mocked-data";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { PiCertificateLight, PiImagesLight } from "react-icons/pi";
import {
	HiOutlineDownload,
	HiOutlineX,
	HiOutlineChevronLeft,
	HiOutlineChevronRight,
} from "react-icons/hi";
import { CgArrowsExpandRight } from "react-icons/cg";
import type { Certification } from "../types";

const SliderArrows = ({
	onPrev,
	onNext,
}: {
	onPrev: () => void;
	onNext: () => void;
}) => (
	<>
		<button
			type="button"
			aria-label="Previous certificate"
			onClick={(event) => {
				event.stopPropagation();
				onPrev();
			}}
			className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black-100/80 border border-[#2a2550] text-secondary hover:text-white flex justify-center items-center transition-colors"
		>
			<HiOutlineChevronLeft size={20} />
		</button>
		<button
			type="button"
			aria-label="Next certificate"
			onClick={(event) => {
				event.stopPropagation();
				onNext();
			}}
			className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black-100/80 border border-[#2a2550] text-secondary hover:text-white flex justify-center items-center transition-colors"
		>
			<HiOutlineChevronRight size={20} />
		</button>
	</>
);

const CertificatePreviewModal = ({
	images,
	title,
	startIndex,
	onClose,
}: {
	images: string[];
	title: string;
	startIndex: number;
	onClose: () => void;
}) => {
	const [index, setIndex] = useState(startIndex);
	const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
	const next = () => setIndex((i) => (i + 1) % images.length);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
			if (event.key === "ArrowLeft")
				setIndex((i) => (i - 1 + images.length) % images.length);
			if (event.key === "ArrowRight")
				setIndex((i) => (i + 1) % images.length);
		};
		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [onClose, images.length]);

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			role="dialog"
			aria-modal="true"
			aria-label={`${title} certificate preview`}
			className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
			onClick={onClose}
		>
			<div
				className="relative bg-primary border border-[#2a2550] rounded-2xl p-4 w-[92vw] h-[92vh] flex flex-col"
				onClick={(event) => event.stopPropagation()}
			>
				<div className="flex items-center justify-between gap-4 pb-3">
					<h3 className="text-white text-[18px] font-bold truncate">
						{title}
						{images.length > 1 && (
							<span className="text-secondary text-[14px] font-normal ml-3">
								{index + 1} / {images.length}
							</span>
						)}
					</h3>
					<button
						type="button"
						aria-label="Close preview"
						onClick={onClose}
						className="shrink-0 w-10 h-10 rounded-full bg-tertiary text-secondary hover:text-white flex justify-center items-center transition-colors"
					>
						<HiOutlineX size={22} />
					</button>
				</div>
				<div className="relative flex-1 min-h-0 flex justify-center items-center overflow-auto">
					<img
						src={images[index]}
						alt={`${title} certificate ${index + 1} of ${
							images.length
						}`}
						className="max-w-full max-h-full object-contain rounded-lg"
					/>
					{images.length > 1 && (
						<SliderArrows onPrev={prev} onNext={next} />
					)}
				</div>
			</div>
		</motion.div>,
		document.body
	);
};

const CredentialRow = ({
	certification,
	index,
}: {
	certification: Certification;
	index: number;
}) => {
	const [expanded, setExpanded] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const [previewOpen, setPreviewOpen] = useState(false);
	const images = certification.images ?? [];
	const expandable = images.length > 0;
	const prev = () =>
		setImageIndex((i) => (i - 1 + images.length) % images.length);
	const next = () => setImageIndex((i) => (i + 1) % images.length);

	return (
		<motion.div
			variants={fadeIn("up", "spring", 0.2 * index, 0.75)}
			className={`w-full rounded-lg border border-[#2a2550] bg-black-100 border-l-4 ${
				expanded ? "border-l-[#915eff]" : "border-l-[#2a2550]"
			} hover:border-l-[#915eff] transition-colors`}
		>
			<div
				className={`flex items-center gap-4 p-4 ${
					expandable ? "cursor-pointer" : ""
				}`}
				onClick={() => {
					if (expandable) setExpanded((prevState) => !prevState);
				}}
			>
				<div className="w-12 h-12 shrink-0 rounded-md bg-tertiary flex justify-center items-center">
					<PiCertificateLight size={26} className="text-secondary" />
				</div>

				<div className="flex-1 min-w-0">
					<h3 className="text-white text-[17px] font-bold leading-snug">
						{certification.title}
					</h3>
					<p className="text-[#915eff] text-[13px] tracking-wide m-0">
						{certification.issuer}
						{certification.note ? ` · ${certification.note}` : ""}
					</p>
					{expandable && (
						<p className="text-secondary text-[11px] uppercase tracking-widest mt-1 m-0">
							{expanded
								? "▴ click to collapse"
								: "▾ click to view certificates"}
						</p>
					)}
				</div>

				{expandable && (
					<span className="shrink-0 inline-flex items-center gap-1 text-[11px] text-secondary border border-[#2a2550] px-2 py-1 rounded">
						<PiImagesLight size={14} />
						{images.length}
					</span>
				)}

				<span
					className={`shrink-0 text-[11px] uppercase tracking-widest px-3 py-1 rounded border ${
						certification.status === "Certified"
							? "text-[#00cea8] border-[#00cea8]"
							: "text-secondary border-secondary"
					}`}
				>
					{certification.status}
				</span>
			</div>

			<AnimatePresence initial={false}>
				{expandable && expanded && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="px-4 pb-4 flex flex-col gap-3">
							<div className="relative border border-[#2a2550] rounded-md p-3 bg-primary">
								<img
									src={images[imageIndex]}
									alt={`${certification.title} certificate ${
										imageIndex + 1
									} of ${images.length}`}
									className="w-full max-w-2xl mx-auto rounded"
								/>
								{images.length > 1 && (
									<>
										<SliderArrows
											onPrev={prev}
											onNext={next}
										/>
										<span className="absolute bottom-5 right-5 text-[11px] text-white bg-black-100/80 border border-[#2a2550] px-2 py-1 rounded">
											{imageIndex + 1} / {images.length}
										</span>
									</>
								)}
							</div>

							<div className="flex flex-wrap gap-3">
								<a
									href={images[imageIndex]}
									download={`${certification.title.replace(
										/\s+/g,
										"-"
									)}-certificate-${imageIndex + 1}`}
									className="inline-flex items-center gap-2 bg-tertiary text-white text-[13px] font-bold py-2 px-5 rounded-lg hover:bg-[#2a2550] transition-colors"
								>
									<HiOutlineDownload size={17} />
									Download
								</a>
								<button
									type="button"
									onClick={() => setPreviewOpen(true)}
									className="hidden md:inline-flex items-center gap-2 bg-tertiary text-white text-[13px] font-bold py-2 px-5 rounded-lg hover:bg-[#2a2550] transition-colors"
								>
									<CgArrowsExpandRight size={16} />
									Full screen
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{previewOpen && expandable && (
				<CertificatePreviewModal
					images={images}
					title={certification.title}
					startIndex={imageIndex}
					onClose={() => setPreviewOpen(false)}
				/>
			)}
		</motion.div>
	);
};

const Certifications = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					&gt; Learning &amp; Contributions...
				</p>
				<h2 className={styles.sectionHeadText}>Certifications.</h2>
			</motion.div>

			<div className="mt-10 flex flex-col gap-4">
				{certifications.map((certification, index) => (
					<CredentialRow
						key={certification.title}
						certification={certification}
						index={index}
					/>
				))}
			</div>
		</>
	);
};

export { Certifications };
export default LayoutWrapper(Certifications, "certifications");
