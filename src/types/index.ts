import type { CSSProperties } from "react";

export interface NavLink {
	id: string;
	title: string;
}

export interface Service {
	title: string;
	icon: string;
}

export interface Technology {
	name: string;
	icon: string;
}

export interface ExperienceItem {
	title: string;
	company_name: string;
	icon: string;
	iconBg: CSSProperties["background"];
	date: string;
	points: string[];
}

export interface ProjectTag {
	name: string;
	color: string;
}

export interface Project {
	name: string;
	description: string;
	tags: ProjectTag[];
	image: string;
	source_code_link: string;
	live_link: string;
}

export interface ProjectCardProps extends Project {
	index: number;
}

export interface ServiceCardProps extends Service {
	index: number;
}

export interface BallCanvasProps {
	icon: string;
}

export interface WindowSize {
	innerWidth: number;
	innerHeight: number;
}

export type MotionDirection = "left" | "right" | "up" | "down" | "";

export type MotionTransitionType = "spring" | "tween" | "keyframes" | "";
