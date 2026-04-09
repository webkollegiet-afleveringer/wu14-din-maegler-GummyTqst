const PageHeaderComponent = ({ title, imageSrc }) => {
    return (
      <section className="relative w-full overflow-hidden mb-8">
          <img 
            src={imageSrc} 
            alt={title}
            className="h-full w-full object-cover"
          />
        
        <div className="absolute inset-0 bg-slate-900/80"></div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <h1 className="text-head-1 md:text-main-4 font-bold text-white text-center">
            {title}
          </h1>
        </div>
      </section>
    );
  };
  
  export default PageHeaderComponent;