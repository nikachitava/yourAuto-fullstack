import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const toggleMenu = () => {
		if (isMenuOpen) {
			// Start the slide-up animation, then delay hiding the menu
			setIsAnimating(true);
			setTimeout(() => {
				setIsAnimating(false);
				setIsMenuOpen(false);
			}, 500); // Timeout should match the animation duration (0.5s)
		} else {
			setIsMenuOpen(true);
		}
	};

	return (
		<div className="container max-w-full bg-blue-400 flex justify-between items-center py-2 relative">
			<div
				className={`absolute h-screen w-full top-0 left-0 bg-slate-700 transition-all duration-500 ${
					isMenuOpen ? "block" : "hidden"
				} ${isAnimating ? "animate-slideUp" : "animate-slideDown"}`}
			>
				<ul className="flex flex-col justify-center h-screen m-auto items-center gap-6 text-white">
					<li>Add Car</li>
					<li>Sign In</li>
				</ul>
				<IoMdClose
					size={24}
					color="white"
					className="absolute top-5 right-10 cursor-pointer"
					onClick={toggleMenu}
				/>
			</div>

			<h1 className="font-bold text-2xl">
				your<span className="text-orange-500">A</span>uto
			</h1>
			<div className="block md:hidden">
				<MdMenuOpen
					size={24}
					className="cursor-pointer"
					onClick={toggleMenu}
				/>
			</div>
			<div className="hidden md:block">
				<ul className="flex justify-center items-center gap-6 text-white">
					<li>Add Car</li>
					<li>Sign In</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
