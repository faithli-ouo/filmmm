interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => {
  return (
    <div className={`min-h-screen ${className}`}> 
      {children}
    </div>
  );
};

export default PageContainer;
