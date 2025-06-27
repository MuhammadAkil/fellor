const Footer = () => {
	return (
		<footer className="w-full border-t border-gray-200 bg-white px-4 py-4 text-sm text-gray-600">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
				<p className="text-center md:text-left">
					Powered by <span className="font-medium">Fellor</span> — Recruiting with Bull&apos;s Eye Precision © 2025
				</p>
				<div className="flex space-x-4 text-center md:text-right">
					<a href="/terms" className="hover:underline">
						Terms of Service
					</a>
					<a href="/privacy" className="hover:underline">
						Privacy Policy
					</a>
					<a href="/cookies" className="hover:underline">
						Cookie Policy
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
