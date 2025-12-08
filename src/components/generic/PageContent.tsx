const PageContent = ({ children }: { children: React.ReactNode }) => {
    return (
      <div id="cardsBlock" className="h-full">
        <div className="flex flex-col justify-center max-w-containerSize mx-auto my-10 tablet:my-20 px-2">
          {children}
        </div>
      </div>
    );
  };
  
  export default PageContent;
  