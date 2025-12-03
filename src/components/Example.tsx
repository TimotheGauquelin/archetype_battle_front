import React from 'react';

interface ExampleProps {
  title?: string;
  children?: React.ReactNode;
}

const Example: React.FC<ExampleProps> = ({
  title = "Composant d'exemple",
  children,
}) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Example;
