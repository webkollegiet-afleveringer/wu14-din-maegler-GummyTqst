import { Link } from "react-router";

const PageHeaderComponent = ({ title, imageSrc, breadcrumbs }) => {
    return (
      <section className="relative w-full overflow-hidden mb-8">
          <img 
            src={imageSrc} 
            alt={title}
            className="h-full w-full object-cover"
          />
        
        <div className="absolute inset-0 bg-slate-900/80"></div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <h1 className="text-head-1 md:text-main-4 font-bold text-white text-center">
            {title}
          </h1>

          {breadcrumbs && (
            <nav className="flex items-center">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  {crumb.active ? (
                    <span>
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className="text-white hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  )}

                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-white/40">|</span>
                  )}
                </div>
              ))}
            </nav>
          )}

        </div>
      </section>
    );
  };
  
  export default PageHeaderComponent;