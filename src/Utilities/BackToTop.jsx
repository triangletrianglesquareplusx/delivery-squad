export default function BackToTop() {    
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      return (        
        <div className="mt-4 mb-12 text-center md:text-right">
            <a href="/#" onClick={scrollToTop} className="md:mr-custom font-medium text-coral before:inline-block before:mr-2 before:bg-indigo-600 before:rounded-full before:w-8 before:h-8 before:text-white before:font-medium before:text-2xl before:leading-7 before:font-mono before:text-center before:-rotate-90 before:content-['>'] hover:text-neutral-700 transition-all">Back to Top</a>
        </div>
      )
}
